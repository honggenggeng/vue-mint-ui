<template>
  <div>
    <zy-header :headtitle='$route.meta.title' ></zy-header>
    <!--
        :auto="0" //设置自动轮播的时间 若为零则是停止自动轮播
        :speed='500' //设置动画效果的时间
        :prevent='true' //阻止默认行为
        :stopPropagation='true' //是否在 touchstart 事件触发时阻止冒泡。
        :show-indicators="false" //是否显示 indicators(分页器)
        @change="handleChange"  //滑动时触发的时间
        :continuous='true' //是否循环
        :defaultIndex='1'  //初始显示的轮播图的索引
     -->
    <mt-swipe :auto="0" :continuous='false' :defaultIndex='1' :speed='500' :prevent='true' :stopPropagation='true' :show-indicators="false" @change="handleChange" style="height:1.5rem;margin:0.2rem;">
        <mt-swipe-item style="background:yellow;font-size:0.5rem">1</mt-swipe-item>
        <mt-swipe-item style="background:blue;font-size:0.5rem">2</mt-swipe-item>
        <mt-swipe-item style="background:red;font-size:0.5rem">3</mt-swipe-item>
    </mt-swipe>

  </div>
</template>

<script>
import {Swipe, SwipeItem } from 'mint-ui'
export default {
  data () {
    return {
    }
  },
  components:{
      mtSwipe :Swipe,
      mtSwipeItem:SwipeItem
  },
  methods:{
    handleChange(index){
        console.log(index)
    },
  },
  mounted() {
     
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
<style>

</style>