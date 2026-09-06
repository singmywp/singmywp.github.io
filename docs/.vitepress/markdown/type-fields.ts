import type MarkdownIt from 'markdown-it'
import type StateBlock from 'markdown-it/lib/rules_block/state_block.mjs'
import type StateInline from 'markdown-it/lib/rules_inline/state_inline.mjs'

const openRe = /^type-fields\s+([A-Za-z0-9_-]+)\s*$/
const refRe = /^[A-Za-z0-9_-]+(?:@api|@component|@error)?$/

function scanBlock(state: StateBlock, startLine: number, endLine: number, silent: boolean): boolean {
	const pos = state.bMarks[startLine] + state.tShift[startLine]
	const max = state.eMarks[startLine]
	if (pos + 3 > max) return false
	if (state.src.slice(pos, pos + 3) !== ':::') return false
	const params = state.src.slice(pos + 3, max).trim()

	if (params === '') {
		if (silent) return true
		state.line = startLine + 1
		state.push('type_fields_close', 'div', -1)
		return true
	}

	const matched = openRe.exec(params)
	if (matched == null) return false
	if (silent) return true

	state.line = startLine + 1
	const token = state.push('type_fields_open', 'div', 1)
	token.block = true
	token.markup = ':::'
	token.meta = { name: matched[1] }
	return true
}

function refHref(name: string): string {
	const [typeName, target] = name.split('@')
	const pages: Record<string, string> = {
		api: '/api/types/api',
		component: '/api/types/component',
		error: '/api/error/error'
	}
	const page = pages[target] ?? pages.component
	return `${page}#${typeName.toLowerCase()}`
}

export function typeFieldsPlugin(md: MarkdownIt): void {
	md.block.ruler.before('fence', 'type_fields', scanBlock, {
		alt: ['paragraph', 'reference', 'blockquote', 'list']
	})

	md.renderer.rules.type_fields_open = (tokens, idx): string => {
		const name = tokens[idx].meta.name as string
		return `<div class="vp-type-fields" data-type="${name}">`
	}
	md.renderer.rules.type_fields_close = (): string => '</div>'

	md.inline.ruler.before('link', 'type_ref', (state: StateInline, silent: boolean): boolean => {
		const src = state.src
		const pos = state.pos
		if (src.charCodeAt(pos) !== 0x5b || src.charCodeAt(pos + 1) !== 0x5b) return false
		const end = src.indexOf(']]', pos + 2)
		if (end < 0) return false
		const raw = src.slice(pos + 2, end)
		if (!refRe.test(raw)) return false
		if (!silent) {
			const token = state.push('type_ref', '', 0)
			token.meta = { name: raw }
		}
		state.pos = end + 2
		return true
	})

	md.renderer.rules.type_ref = (tokens, idx): string => {
		const raw = tokens[idx].meta.name as string
		const name = raw.split('@')[0]
		return `<span class="vp-type-ref" data-type="${name}"><span class="vp-type-caret" aria-hidden="true"></span>${name}</span>`
	}
}
