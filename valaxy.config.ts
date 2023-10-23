/*
 * @Author: xbshuai 277889640@qq.com
 * @Date: 2023-10-22 17:36:18
 * @LastEditors: xbshuai 277889640@qq.com
 * @LastEditTime: 2023-10-23 10:33:16
 * @FilePath: \Blog\valaxy.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts
  url: 'xbshuai.github.io',
  lang: 'zh-CN',
  title: '小胖PACT的博客 | PACT\'s blog',
  subtitle: '',
  author: {
    name: '小胖PACT',
    avatar: 'public/pact.jpg',
    status:
    {
      emoji: '😐',
      message: '不想上班喵'
  }},
  mode: 'auto',
  lastUpdated: true,
  favicon: '',
  description: 'Life is struggle and like a loop',

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '云游君的小站',
      cloud: {
        enable: true,
      },
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2023,
      beian: {
        enable: true,
        icp: '苏ICP备17038157号',
      },
    },
  },

  unocss: { safelist },
})
