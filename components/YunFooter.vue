<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>

<template>
  <YunFooter>
    <!-- 自定义页脚内容 -->
    <div>(｢･ω･)｢ 已有:<span id="busuanzi_value_site_pv" /> 次访问了喵！！</div>
    <!-- <div>有<span id="busuanzi_value_site_uv" />人来看过我哦！</div> -->

    <VCLiveTime mt="2" start-time="2023-10-23">
      <template #live-time-before>
        <span>啊~，已经存在</span>
      </template>
      <template #live-time-after>
        <span>了喵！</span>
      </template>
    </VCLiveTime>
    <div>现在看我表演喵！ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ</div>
  
   
  </YunFooter>
</template>