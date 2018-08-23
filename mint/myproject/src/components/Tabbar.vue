<template>
  <div>
    <zy-header :headtitle='$route.meta.title' >
        <span slot="fanhui">上一页</span>
        <span slot="fenxiang">Tabbar</span>
    </zy-header>

    
    
    <div class="page-wrap">
      <div class="page-title">Tabbar</div>
      <div>
        <p class="page-part" >当前选中的是{{selected}}</p>
      </div>
      <mt-tab-container class="page-tabbar-container" v-model="selected" :swipeable='true'>
        <mt-tab-container-item id="外卖">
           <p v-for="(value,index) in arr" :key="index">外卖{{value}}</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="订单">
           <p v-for="n in 10" :key='n'>订单{{n}}</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="发现">
           <p v-for="n in 10" :key='n'>发现{{n}}</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
           <p v-for="n in 10" :key='n'>我的{{n}}</p>
        </mt-tab-container-item>
      </mt-tab-container>
    </div><!---->
 
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="外卖">
        <img slot="icon" src="../img/lq.jpg">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单" >
        <img slot="icon" src="../img/lq.jpg">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../img/lq.jpg">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../img/lq.jpg">
        我的
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
import { Tabbar, TabItem ,TabContainer, TabContainerItem } from 'mint-ui'
export default {
  data () {
    return {
       selected: '外卖',
       arr:[1,2,3,4,5,6,7,8,9]
    }
  },
  components:{
     mtTabbar:Tabbar,
     mtTabItem:TabItem,
     mtTabContainer : TabContainer, 
     mtTabContainerItem : TabContainerItem
  },
  computed:{
      
  },
  methods:{
     dd(value){
       let self = this
       console.log(this.selected,value)
     }, 
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
 .mint-tab-container-item {
    overflow: scroll;
    height: 3rem;
  }
  .mint-tab-container-item p{
    height:0.3rem;
    line-height:0.3rem;
    border-bottom:1px solid #eee;
  }
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
</style>