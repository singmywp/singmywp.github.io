---
layout: page
---

<script setup>
  import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers
  } from 'vitepress/theme'
  const author = [
    {
      avatar: '/assets/images/aaronlan.jpg',
      name: 'Aaron Lan',
      links: [
        { icon: 'github', link: 'https://github.com/singmywp' },
        { icon: 'dcloud-ext', link: 'https://ext.dcloud.net.cn/publisher?id=703665' }
      ]
    }
  ]

  const members = [
    {
      avatar: '/assets/images/dcloud.png',
      name: 'Dcloud',
      title: '感谢 Dcloud 为诸多开发者提供便捷的开发工具以及庞大的开发平台',
      links: [
        { icon: 'web', link: 'https://dcloud.net.cn/' }
      ]
    },
    {
      avatar: '/assets/images/dengqichang.jpg',
      name: '邓琪昌',
      title: 'sn-empty 组件基于开源组件 flower-empty 开发',
      links: [
        { icon: 'gitee', link: 'https://gitee.com/dengqichang/flower-library' },
        { icon: 'github', link: 'https://github.com/dengqichang' },
        { icon: 'dcloud-ext', link: 'https://ext.dcloud.net.cn/publisher?id=68708' },
        { icon: 'web', link: 'https://flowerui.com/documents/flower-empty/guide/sketch.html'}
      ]
    },
    {
      avatar: '/assets/images/lime.jpg',
      name: '陌上华年',
      title: 'Color、Date、Utils.share 分别基于开源插件 lime-color、lime-dayuts、lime-share 开发',
      links: [
        { icon: 'gitee', link: 'https://gitee.com/liangei' },
        { icon: 'dcloud-ext', link: 'https://ext.dcloud.net.cn/publisher?id=242774' }
      ]
    },
    {
      avatar: '/assets/images/uxframe.jpg',
      name: 'UXFrame',
      title: '框架部分设计理念借鉴大佬的高性能框架 UXFrame',
      links: [
        { icon: 'dcloud-ext', link: 'https://ext.dcloud.net.cn/publisher?id=1625128' },
        { icon: 'web', link: 'https://www.uxframe.cn/'}
      ]
    },
    {
      avatar: '/assets/images/kux.png',
      name: 'kux',
      title: '框架开发过程中给予诸多技术指导帮助',
      links: [
        { icon: 'gitee', link: 'https://gitcode.com/kviewui' },
        { icon: 'github', link: 'https://github.com/kviewui' },
        { icon: 'dcloud-ext', link: 'https://ext.dcloud.net.cn/publisher?id=81149' },
        { icon: 'dcloud-ext', link: 'https://ext.dcloud.net.cn/publisher?id=1132788' }
      ]
    },
    {
      avatar: '/assets/images/easings.net.png',
      name: 'Easings.net',
      title: 'Utils 核心库 Easing 模块基于 Easings.net API 设计',
      links: [
        { icon: 'web', link: 'https://easings.net' },
        { icon: 'github', link: 'https://github.com/ai/easings.net' }
      ]
    },
  ]
</script>

<VPTeamPage style="margin-top: 0 !important;">
  <VPTeamPageTitle>
    <template #title>
      <span style="font-weight: bold;">作者</span>
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="author"
  />
  <VPTeamPageTitle>
    <template #title>
      <span style="font-weight: bold;">特别鸣谢</span>
    </template>
    <template #lead>
      SinleUI 框架部分代码基于大神们的插件二次开发。
      <br />
      感谢各位插件作者对于 SinleUI 的贡献！
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
