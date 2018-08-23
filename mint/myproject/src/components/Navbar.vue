<template>
  <div>
    <zy-header :headtitle='$route.meta.title' >
        <span slot="fanhui">上一页</span>
        <span slot="fenxiang">Tabbar</span>
    </zy-header>

    
    
    <div class="page-wrap" style="margin-top:0.6rem">
      <div class="page-title" style="height:0.3rem;line-height:0.3rem">Tabbar</div>
      <div>
        <p class="page-part" style="height:0.3rem;line-height:0.3rem">当前选中的是{{selected}}</p>
      </div>
      <mt-tab-container class="page-tabbar-container" v-model="selected" :swipeable='true'>
        <mt-tab-container-item id="1">
           <p v-for="(value,index) in arr" :key="index">外卖{{value}}</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
           <p v-for="n in 10" :key='n'>订单{{n}}</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
           <p v-for="n in 10" :key='n'>发现{{n}}</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
           <p v-for="n in 10" :key='n'>我的{{n}}</p>
        </mt-tab-container-item>
      </mt-tab-container>
    </div><!---->
    <mt-navbar v-model="selected" fixed style="top:0.6rem">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
        <mt-tab-item id="4">选项四</mt-tab-item>
    </mt-navbar>
    

  </div>
</template>

<script>
import { Navbar, TabItem ,TabContainer, TabContainerItem } from 'mint-ui'
export default {
  data () {
    return {
       selected: '1',
       arr:[1,2,3,4,5,6,7,8,9]
    }
  },
  components:{
     mtNavbar:Navbar,
     mtTabItem:TabItem,
     mtTabContainer : TabContainer, 
     mtTabContainerItem : TabContainerItem
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
.page-tabbar-container{
    height:2rem;
    overflow: scroll;
}
.page-tabbar-container p{
    height:0.3rem;
    line-height:0.3rem
}
</style>