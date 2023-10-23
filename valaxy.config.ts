/*
 * @Author: xbshuai 277889640@qq.com
 * @Date: 2023-10-22 17:36:18
 * @LastEditors: xbshuai 277889640@qq.com
 * @LastEditTime: 2023-10-23 13:07:02
 * @FilePath: \Blog\valaxy.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from "valaxy-addon-waline";

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '小胖的文字电台',
      cloud: {
        enable: true,
      },
    },
    colors: {
      primary: "#B22222", 
    },

    fireworks: {
      enable: true,
      colors: ['#FFE57D', '#FFCD88', '#E6F4AD']
    },

    say: {
      enable: true,
      api: "https://el-bot-api.vercel.app/api/words/young",
      hitokoto: {
        enable: true,
        api: "https://v1.hitokoto.cn/?c=k&c=d&c=i",
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
      since: 2023.10,
      beian: {
        enable: true,
        icp: '',
      },
    },
  },

  unocss: { safelist },

  addons: [
    addonWaline({
      serverURL: "https://waline-comment-alpha.vercel.app/",		// Waline服务链接
      locale: {
        placeholder: "填写qq邮箱或点击登录，可以展示个人头像",
      },
      comment: true,
      pageview: true,
      emoji: [
        "https://jsd.onmicrosoft.cn/gh/walinejs/emojis@latest/bmoji/",
        "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/weibo/",
        "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/qq/",
        "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/tieba/",
      ],
  ],
})
