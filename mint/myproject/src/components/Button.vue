<template>
  <div>
    <zy-header :headtitle='$route.meta.title' >
        <span slot="fanhui" icon="back">上一页</span>
        <span slot="fenxiang" icon="more">Button</span><!---->
    </zy-header>

    <!--button-->
    <mt-button type="default" class="btn">default</mt-button><br/>
    <mt-button type="primary" class="btn">primary</mt-button><br/>
    <mt-button type="danger" class="btn">danger</mt-button><br/>


    <mt-button size="small">small</mt-button>
    <mt-button size="large">large</mt-button>
    <mt-button size="normal">normal</mt-button><br/>

    <mt-button disabled>禁用图标</mt-button><br/>
    <mt-button plain>幽灵按键</mt-button>

    <mt-button icon="back">back</mt-button>
    <mt-button icon="more">更多</mt-button>

    <mt-button>
        <img src="../img/lq.jpg" height="20" width="20" slot="icon">
        带自定义图标
    </mt-button><br/>
    <mt-button @click.native="handleClick">点击触发 handleClick</mt-button>
  </div>
</template>

<script>
import { Button } from 'mint-ui'
export default {
  data () {
    return {
      
    }
  },
  components:{
    mtButton:Button
  },
  computed:{
      
  },
  methods:{
      handleClick(){
          let self = this
          console.log(333333)
      }
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
 
</style>