import { defineValaxyConfig } from 'valaxy';
import type { UserThemeConfig } from 'valaxy-theme-yun';
import { addonWaline } from "valaxy-addon-waline";
import { addonLightGallery } from 'valaxy-addon-lightgallery';
import { addonComponents } from 'valaxy-addon-components';

// add icons what you will need
const safelist = [
  'ph:house-line-light',
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
      primary: "#D69B54",
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
        name: '留言板',
        url: '/comment/',
        icon: 'i-ri-clipboard-line',
        color: '#737de5',
      },
      {
        name: '相册',
        url: '/albums/',
        icon: 'i-ri-gallery-line',
        color: '#43abee',
      },
    ],

    footer: {
      since: 2023.10,
    },
  },

  addons: [
    addonComponents(),
    addonWaline({
      serverURL: 'https://www.pangpact.space/',
      locale: {
        placeholder: "填写qq邮箱或点击登录，可以展示个人头像~详情请见【留言板】板块",
      },
      comment: true,
      pageview: true,
      emoji: [
        "https://jsd.onmicrosoft.cn/gh/walinejs/emojis@latest/bmoji/",
        "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/weibo/",
        "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/qq/",
        "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/tieba/",
      ],
      // recaptchaV3Key: "",
    }),
    addonLightGallery(),
  ],
  
  features: {
      katex: true
  },

  unocss: { safelist },
})
