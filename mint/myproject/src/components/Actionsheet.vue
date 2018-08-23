<template>
  <div>
    <zy-header :headtitle='$route.meta.title' ></zy-header>
    <button class="btn" @click="sheetVisible=true">上拉菜单</button>
    <mt-actionsheet :actions="actions" v-model="sheetVisible" cancelText="算了" closeOnClickModal=true >

    </mt-actionsheet>
  </div>
</template>

<script>
import {Actionsheet} from 'mint-ui'
export default {
  data () {
    return {
        sheetVisible:false,
        actions:[{
        name: '拍照',
        method : this.hong	// 调用methods中的函数
      }, ]
    }
  },
  components:{
      mtActionsheet:Actionsheet
  },
  methods:{
    hong(){
        console.log('拍照')
    }
  },
  mounted() {
      this.sheetVisible=false
      this.actions=[{
        name: '拍照',
        method : this.hong	// 调用methods中的函数
      }, ]
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .btn{
        width:1rem;
        height:0.5rem;
        font-size:0.2rem;
        margin:0.2rem auto;
    }
</style>
