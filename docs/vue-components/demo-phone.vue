<template>
    <div class="demo-phone">
        <img class="demo-phone-image" src="/assets/images/iphone.png" />
        <div class="demo-phone-contain">
            <iframe class="demo-phone-iframe" :src="srcC" width="100%" height="100%" frameborder="0" name="demoPhone"
                scrolling="yes"></iframe>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick, onMounted } from 'vue';
import { useData } from 'vitepress';

const data = ref(useData())

const props = defineProps({
    type: {
        type: String,
        default: 'component'
    },
    name: {
        type: String,
        default: ''
    }
})

const typeC = computed((): string => {
    const types = ['component', 'lib', 'custom']
    return types.includes(props.type) ? props.type : 'component'
})

const srcC = computed((): string => {
    let folder = ''
    if (typeC.value == 'component') folder = 'components'
    if (typeC.value == 'lib') folder = 'libs'
    if (typeC.value == 'custom') {
        return `/demo/#/pages/${props.name}`
    } else {
        return `/demo/#/pages/${folder}/${props.name}`
    }
})

onMounted(() => {
    watch((): boolean => data.value.isDark, (v: boolean) => {
        nextTick(() => {
            if (typeof window !== 'undefined') {
                let frame = window.frames['demoPhone']
                let $snui = frame.$snui
                if (typeof $snui !== 'undefined') $snui.configs.app.theme = v ? 'dark' : 'light'
            }
        })
    }, { immediate: true })
})
</script>

<style scoped>
@media (min-width: 1600px) {
    .demo-phone {
        position: fixed;
        top: calc(var(--vp-nav-height) + 20px);
        right: 20px;
    }
}

.demo-phone {
    height: 780px;
    width: 390px;
    z-index: 10;
    user-select: none;
}

.demo-phone-contain {
    width: 362px;
    height: 752px;
    padding-top: 21px;
    padding-left: 23px;
    overflow: hidden;
}

.demo-phone-image {
    position: absolute;
    height: 780px;
    width: 390px;
    min-height: 780px;
    min-width: 390px;
    pointer-events: none;
    user-select: none;
}

.demo-phone-iframe {
    margin: 0 auto;
}
</style>