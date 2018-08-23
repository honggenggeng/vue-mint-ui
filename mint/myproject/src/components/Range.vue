<template>
  <div>
     <zy-header :fixed="true" :headtitle='$route.meta.title' :rightbtn="rightbtn" :back="back" :three="three" @rightBtn="rightBtn" >
        <span slot="fanhui">返回</span>
        <span slot="fenxiang">Range</span>
     </zy-header>
     <!--
     <mt-range v-model="rangeValue" ref='range' :min="15" :max="90" :disabled='false' :step="1" :bar-height="5" style="width:80%;margin:0.2rem auto">
            <div slot="start">15</div>
            <div slot="end">90</div>
     </mt-range>
     {{rangeValue}}-->
     <!--<input type="range" class="range" v-model.number="rangeValue" max="90" min="10" step="10">-->
    <mt-progress :value="vl" :bar-height="5">
        <div slot="start">0%</div>
        <div slot="end">100%</div>
    </mt-progress>
  
  </div>
</template>

<script>
import { Range , Progress  } from 'mint-ui'
export default {
  data () {
    return {
        rightbtn:true,
        back:'',
        three:'',
        rangeValue:'15',
        vl:0,
        timer:''
    }
  },
  components:{
    mtRange : Range,
    mtProgress : Progress  
  },
  methods:{
    rightBtn(){
        let self=this
        console.log(this.$route.meta.title)
    },
    increase(){
      let self=this
      this.timer=setInterval(function(){
        self.vl++
        console.log(self.vl)
        if(self.vl>=100){
          // alert(111)
          clearInterval(self.timer)
          console.log('ddd')
        }
      },10)
    },
  },
  mounted() {
     
  },
  activated() {
      // var mtrangethumb=document.querySelector('.mt-range-thumb')
      // mtrangethumb.style.left=0
      // this.rangeValue=this.$refs.range.value
      this.increase()
      this.vl=0
      // this.timer=''
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
<style>
    .mt-range-thumb{
        left:0 ;
    }
</style>