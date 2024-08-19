---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: SinleUI
  text: 一个简洁、轻巧的现代移动应用UI框架
  tagline: 专为跨平台框架 uni-app x 开发
  actions:
    - theme: brand
      text: 开始
      link: /get-started/introduction
    - theme: alt
      text: 下载
      link: https://ext.dcloud.net.cn/plugin?name=sinle-ui
  image:
    src: /logo.png
    alt: SinleUI

features:
  - title: 简洁
    icon: 🎉
    details: 简洁是 SinleUI 框架的基本设计理念。本框架致力于将组件的样式和使用方式尽可能最大简化。
  - title: 轻量
    icon: 🪶
    details: SinleUI 秉承“轻·简·快”的原则，在组件、API设计方面做到保留必要，去除繁杂。非必要功能，不会被包含在框架内。插件内置字体较大，如不需要可自行删除（remixicon 勿删）
  - title: 跨平台
    icon: 🖥️
    details: 基于 uni-app x 开发，在Android编译为 Kotlin、在Web编译为 JavaScript。可实现一套代码、多端发布（暂无计划支持 iOS）。
  - title: 高性能
    icon: ⚡
    details: 在原生平台编译为原生语言，性能与原生无异，完全达到了原生应用的功能、性能。
---

<script setup>
  import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers
  } from 'vitepress/theme'

  const exts = [
    {
      avatar: 'https://xui.tmui.design/logo.png',
      name: 'TMUI4.0|XUI',
      title: '2023年UTS插件官方赛事一等奖第一名。UTS原生开发，稳定、效率、性能，精致美观！为 tmui3.0 的下一代组件库',
      links: [
        { icon: 'web', link: 'https://xui.tmui.design/' },
        { icon: 'dcloud-ext', link: 'https://ext.dcloud.net.cn/plugin?id=16369' }
      ]
    },
    {
      avatar: 'https://www.uxframe.cn/logo/logo.png',
      name: 'UxFrame',
      title: '荣获2023年插件大赛一等奖，是一款基于 uni-app x 跨平台应用开发引擎的低代码高性能原生UI框架',
      links: [
        { icon: 'web', link: 'https://www.uxframe.cn/' },
        { icon: 'dcloud-ext', link: 'https://ext.dcloud.net.cn/plugin?id=16148' }
      ]
    },
    {
      avatar: 'https://flowerui.com/logo.png',
      name: 'Flower Library',
      title: '一个快速开发 uni 的生态链图书馆。uni-app / uni-app x 多平台多版本兼容的轻量、简洁、高效、全面的移动端组件库',
      links: [
        { icon: 'web', link: 'https://flowerui.com/' },
        { icon: 'dcloud-ext', link: 'https://ext.dcloud.net.cn/publisher?id=68708' }
      ]
    },
    {
      avatar: '/assets/images/kux.request.webp',
      name: 'Kux Request',
      title: '一个简洁高效的 UTS 请求库，支持请求同步/异步拦截、请求重试、请求过滤等丰富功能，提供人性化的请求配置，旨在帮助 uni-app x 开发者专注业务开发，提升业务开发效率。',
      links: [
        { icon: 'dcloud-ext', link: 'https://ext.dcloud.net.cn/plugin?id=16177' }
      ]
    },
    {
      avatar: '/assets/images/kux.png',
      name: 'Kux Autocss',
      title: '即时原子化CSS框架，让你省去手写样式的烦恼~ 插件基于 vite HMR 根据页面class实时生成行内样式。',
      links: [
        { icon: 'dcloud-ext', link: 'https://ext.dcloud.net.cn/plugin?id=19242' }
      ]
    },
    {
      avatar: '/assets/images/kux.png',
      name: 'Kux Router',
      title: 'uts生态最好用最灵活最具特色的路由库。参考 vue-router 的api设计实现的 uts 路由库，支持 vue-router 的绝大数功能特色。',
      links: [
        { icon: 'web', link: 'https://router.uvuejs.cn/' },
        { icon: 'dcloud-ext', link: 'https://ext.dcloud.net.cn/plugin?id=15998' },
        { icon: 'github', link: 'https://gitcode.com/kviewui/kux-router' }
      ]
    },
  ]
</script>

<VPTeamPage style="margin-top: 0 !important;">
  <VPTeamPageTitle>
    <template #title>
      <span style="font-weight: bold;">友情链接</span>
    </template>
    <template #lead>
      推荐一些实用插件
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="exts"
  />
</VPTeamPage>
