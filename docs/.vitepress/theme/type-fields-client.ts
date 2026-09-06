const DECL = 'vp-type-fields'

interface FieldsState {
	row: HTMLTableRowElement
	div: HTMLDivElement
}

const states = new Map<string, FieldsState>()

function insideOwnFields(el: Element, type: string): boolean {
	return el.closest(`.${DECL}[data-type="${type}"]`) != null
}

function freeRefOf(main: Element, type: string): Element | null {
	const all = main.querySelectorAll(`.vp-type-ref[data-type="${type}"]`)
	for (const el of Array.from(all)) {
		if (el.getAttribute('data-claimed') != null) continue
		if (insideOwnFields(el, type)) continue
		return el
	}
	return null
}

function claimRefOf(main: Element, div: HTMLDivElement): Element | null {
	const type = div.getAttribute('data-type')
	if (type == null || type === '') return null
	let node: Element | null = div.previousElementSibling
	while (node != null) {
		if (node.tagName === 'TABLE') {
			const cell = node.querySelector(`.vp-type-ref[data-type="${type}"]`)
			if (cell != null && cell.getAttribute('data-claimed') == null && !insideOwnFields(cell, type)) {
				return cell
			}
		}
		node = node.previousElementSibling
	}
	return freeRefOf(main, type)
}

function mountRow(main: Element, div: HTMLDivElement, cell: Element): FieldsState {
	const table = cell.closest('table')
	const row = cell.closest('tr')
	const state: FieldsState = { row: null as unknown as HTMLTableRowElement, div }
	if (table == null || row == null) return state
	const cols = table.rows[0] != null ? table.rows[0].cells.length : 0
	const tr = document.createElement('tr')
	tr.className = 'vp-type-fields-row vp-open'
	const td = document.createElement('td')
	if (cols > 0) td.colSpan = cols
	td.appendChild(div)
	tr.appendChild(td)
	row.after(tr)
	state.row = tr
	return state
}

function openAt(ref: Element, state: FieldsState): void {
	const cellRow = ref.closest('tr')
	if (cellRow == null) return
	if (state.row.previousElementSibling === cellRow) {
		state.row.classList.toggle('vp-open')
	} else {
		const prevRef = state.row.previousElementSibling?.querySelector('.vp-type-ref.vp-expanded')
		if (prevRef != null) prevRef.classList.remove('vp-expanded')
		cellRow.after(state.row)
		state.row.classList.add('vp-open')
	}
	ref.classList.toggle('vp-expanded', state.row.classList.contains('vp-open'))
}

function wireRefs(main: Element): void {
	const types = new Set<string>()
	main.querySelectorAll(`div.${DECL}[data-ready="1"][data-type]`).forEach((d) => {
		const t = d.getAttribute('data-type')
		if (t != null && t !== '') types.add(t)
	})
	main.querySelectorAll('.vp-type-ref[data-type]').forEach((el) => {
		if (el.hasAttribute('data-wired')) return
		const type = el.getAttribute('data-type')
		if (type == null || !types.has(type)) return
		if (insideOwnFields(el, type)) return
		el.setAttribute('data-wired', '1')
		el.addEventListener('click', (e) => {
			e.preventDefault()
			const state = states.get(type)
			if (state == null || state.row == null) return
			openAt(el, state)
		})
	})
}

function enhance(): void {
	const main = document.querySelector('.vp-doc')
	if (main == null) return
	const pending = main.querySelectorAll<HTMLDivElement>(`div.${DECL}:not([data-ready])`)
	pending.forEach((div) => {
		div.setAttribute('data-ready', '1')
		const type = div.getAttribute('data-type')
		if (type == null || type === '') return
		if (states.has(type)) {
			div.setAttribute('hidden', '')
			return
		}
		const cell = claimRefOf(main, div)
		if (cell == null) {
			div.removeAttribute('hidden')
			return
		}
		cell.setAttribute('data-claimed', '1')
		const state = mountRow(main, div, cell)
		if (state.row != null) {
			states.set(type, state)
			cell.classList.add('vp-expanded')
		}
	})
	wireRefs(main)
}

export function setupTypeFields(): void {
	if (typeof window === 'undefined') return
	const schedule = (): void => {
		if (document.querySelector(`div.${DECL}:not([data-ready])`) == null) return
		setTimeout(() => {
			enhance()
		}, 32)
	}
	document.addEventListener('DOMContentLoaded', schedule)
	window.addEventListener('load', schedule)
	if (document.readyState !== 'loading') schedule()
	const observer = new MutationObserver(() => {
		schedule()
	})
	observer.observe(document.documentElement, { childList: true, subtree: true })
}

export function onRouteChanged(): void {
	if (typeof window === 'undefined') return
	setTimeout(() => {
		enhance()
	}, 32)
}
