/*
 * @Author: xbshuai 277889640@qq.com
 * @Date: 2023-10-22 17:36:18
 * @LastEditors: xbshuai 277889640@qq.com
 * @LastEditTime: 2023-10-26 16:47:13
 * @FilePath: \Blog\site.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  // site config see site.config.ts
  url: 'xbshuai.github.io',
  lang: 'zh-CN',
  title: '小胖PACT的博客 | PACT\'s blog',
  subtitle: '',
  author: {
    name: '小胖PACT',
    avatar: '/pact2.jpg',
    status:
    {
      emoji: '😐',
      message: '不想上班喵'
  }},
  mode: 'auto',
  lastUpdated: true,
  favicon: '',
  description: 'Life is struggle and like a loop',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/xbshuai',
      icon: 'i-ri-github-line',
      color: '#12B7F5',
    },
    {
      name: '微博',
      link: 'https://weibo.com/u/6579273851',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '网易云音乐',
      link: 'https://y.music.163.com/m/user?id=1569340634',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/2-5-53',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/361524594',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'zhoushuai181@mails.ucas.ac.cn',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: true,
  },

  mediumZoom: {
    enable: true,
  },


  sponsor: {
    enable: true,
    title: '谢谢(❤ ω ❤)喵！',
    description:"爱你哟(๑♡3♡๑)",
    
    /*methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      }
    ],*/

  },

  statistics: {
    enable: true,
    readTime: {
    /**
     * 阅读速度
     */
    speed: {
        cn: 300,
        en: 200,
    },
    },
},
})
