<template>
  <div>
    <zy-header :headtitle='$route.meta.title' ></zy-header>
    <!-- pop-transition='popup-fade' 淡入淡出-->
    <mt-popup  v-model="popupVisible" position='right' style=" width: 100%; height: 1rem; display: none;">
        <slot >nihao</slot>
    </mt-popup>
    <button class="btn" @click="btn">点击</button>
  </div>
</template>

<script>
import {Popup } from 'mint-ui'
export default {
  data () {
    return {
       popupVisible:false
    }
  },
  components:{
      mtPopup :Popup 
  },
  methods:{
      btn(){
          this.popupVisible=true
      },
  },
  mounted() {
      this.popupVisible=false
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .btn{
        margin:0.2rem;
        width:0.4rem;
        height:0.3rem;
        text-align:center;
        line-height:0.3rem;
    }
</style>
<style>
.mint-popup-bottom{
    width:100%;
    height:1rem;
}
</style>