<template>
    <div>
     <zy-header :headtitle='$route.meta.title' ></zy-header>
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" topPullText='继续' topDropText='撒手' topLoadingText='读取' ref="loadmore" @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange">
            <ul>
                <li v-for="item in list">{{ item }}</li>
            </ul>
            <!--<div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
                <span v-show="topStatus === 'loading'">Loading...</span>
            </div>-->
            <div slot="bottom" class="mint-loadmore-bottom">
                <span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">上拉</span>
                <span v-show="bottomStatus === 'loading'">Loading...</span>
            </div>
        </mt-loadmore>
    </div>
</template>

<script>
// import { Loadmore } from 'mint-ui'
export default {
  data () {
    return {
        list:[1,2,3,4,5,6,7,8,9,10],
        topStatus: '',
        bottomStatus:'',
        allLoaded:false,
    }
  },
//   components:{
//       mtLoadmore :  Loadmore 
//   },
  methods:{
    loadTop() {
        // 加载更多数据
        let self = this
        setTimeout(function(){
            self.list.unshift(1)
            self.$refs.loadmore.onTopLoaded()//对数组发生改变之后重新定位的操作
        },2000)
        // console.log(this)
    },
    handleTopChange(status){//每当组件的状态发生变化时，loadmore 都会触发 top-status-change 方法，
        // status 有以下三种状态
        // pull：组件已经被按下，但按下的距离未达到 topDistance，此时释放不会触发 top-method，列表会回到初始位置
        // drop：按下的距离不小于 topDistance，此时释放会触发 top-method
        // loading：组件已被释放，top-method 正在执行 每当组件的状态发生变化时，loadmore 都会触发 top-status-change 方法，参数为组件目前的状态。因此可以像本例一样，使用一个 handleTopChange 方法来处理组件状态的变化。
        let self = this
        console.log(self.$refs.loadmore.topPullText)
        this.topStatus=status
    },
    loadBottom() {
        // 加载更多数据
        let self = this
        setTimeout(()=>{
            self.list.push(1)
            self.allLoaded = true// 若数据已全部获取完毕
            self.$refs.loadmore.onBottomLoaded()//对数组发生改变之后重新定位的操作
        },2000)  
    },
    handleBottomChange(status){
       let self = this
       this.bottomStatus=status
    },
  },
  mounted () {
      let self = this
      this.list=[1,2,3,4,5,6,7,8,9,10]
      this.allLoaded=false
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .load{
        margin-top: 0.2rem;
    }
    .load_li{
        width: 100%;
        border-top: 1px solid #eee;
    }
</style>
