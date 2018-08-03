<template>
    <div>
    <zy-header :headtitle='$route.meta.title' ></zy-header>
        <p @click="Toast" class="Toast">Toast</p>
        <!-- <img src="../img/timg.jpg" class="tu" style="width:100px;"> -->
        <p @click="Indicator" class="Indicator" >Indicator 加载</p>
        <div  class="bg" :style="backgrounddiv"></div>
        <!-- <div class="bg" style="background:url('../img/lq.jpg')"></div> -->
        <!-- <mt-loadmore class="load" :top-method="loadTop"  :bottom-method="loadBottom"  ref="loadmore">
            <ul>
                <li class="load_li" v-for="(item,index) in list" :key="index"> {{item}} </li>
            </ul>
            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
                <span v-show="topStatus === 'loading'">Loading...</span>
            </div>
        </mt-loadmore> -->
    </div>
</template>

<script>
import { Toast , Indicator , Loadmore } from 'mint-ui'
export default {
  name: 'one',
  data () {
    return {
    //   msg: 'Welcome to Your Vue.js App'
    //  src:'./static/img/cy.f83b51d.jpg',//背景图片的地址
        backgrounddiv:{
            backgroundImage: 'url(' + require('../img/cy.jpg') + ')',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center center',
            backgroundSize: '100%'
        },
        list:[1,2,3,4,5,6,7,8,9],
        topStatus: '',
    }
  },
  components:{
      Toast ,
      Indicator ,
      mtLoadmore :  Loadmore 
  },
  methods:{
      Toast(){
        Toast({
            // message: '提示',
            position: 'bottom',//提示框的位置
            duration: 3000,//提示框显示的时间
            message: '操作成功',//提示语
            iconClass: 'tu',//未探索到
        });
        // let instance = Toast('提示信息');
        // 每个实例都有 close 方法，用于手动关闭 Toast
        setTimeout(() => {
            // instance.close();//取消提示框的
        }, 1000);
      },
      Indicator(){
          let self = this
          Indicator.open({
            text: '加载中...',//加载的文字
            spinnerType: 'triple-bounce'//加载的样式
            });
          setTimeout(() => {
            Indicator.close();//取消提示框的
          }, 1000);
          setTimeout(() => {
              this.backgrounddiv={
                backgroundImage: 'url(' + require('../img/lq.jpg') + ')',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center center',
                backgroundSize: '100%'
            }
          },1000)
      },
    //   loadTop() {//下拉
    //     // 加载更多数据
    //     this.list.unshift(1)
    //     this.$refs.loadmore.onTopLoaded();
    //   },
    //   handleTopChange(status) {
    //     this.topStatus = status;
    //   },
    //   loadBottom() {//上拉
    //     // 加载更多数据
    //     this.list.push(1)
    //     // this.allLoaded = true;// 若数据已全部获取完毕(关闭上拉的功能)
    //     this.$refs.loadmore.onBottomLoaded();
    //   }
  },
  mounted () {
      let self = this
    //   this.src="../img/cy.jpg"
      this.list=[1,2,3,4,5,6,7,8,9]
    //   var bg=document.querySelector(".bg")
    //   bg.style.backgroundImage='url(' + require('../img/cy.jpg') + ')'
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Toast,.Indicator{
        width: 50%;
        height: 40px;
        background: #eee;
        margin: 0 auto;
        line-height: 40px;
        margin-top: 10px;
    }
    .bg{
        width: 100%;
        height: 200px;
        margin-top: 10px;
    }
    .load{
        margin-top: 0.2rem;
    }
    .load_li{
        width: 100%;
        border-top: 1px solid #eee;
    }
</style>
