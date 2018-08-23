<template>
  <div>
    <zy-header :headtitle='$route.meta.title' >
        <span slot="fanhui" icon="back">上一页</span>
        <span slot="fenxiang" icon="more">Cell</span><!---->
    </zy-header>

    <mt-cell title="标题文字"></mt-cell>
    <mt-cell title="标题文字" value="说明文字"></mt-cell>

    <mt-cell
        title="标题文字"
        to="//github.com"
        is-link
        value="带链接">
    </mt-cell>

    <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>

    <mt-cell title="标题文字" >
        <span>icon 是图片</span>
        <img slot="icon" src="../img/lq.jpg" width="24" height="24">
    </mt-cell>

    <mt-cell title="标题文字" is-link >
        <span style="color: green">这里是元素</span>
    </mt-cell>

    <mt-cell title="标题" label="描述信息" is-link></mt-cell>
  </div>
</template>

<script>
import { Cell  } from 'mint-ui'
export default {
  data () {
    return {
      
    }
  },
  components:{
    mtCell :Cell 
  },
  computed:{
      
  },
  methods:{
      
  },
  mounted() {
     
  },
  activated() {
      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
<style>
 .mint-cell-title{
    text-align: left;
 }
</style>