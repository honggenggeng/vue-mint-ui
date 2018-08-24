<template>
  <div>
    <zy-header :headtitle='$route.meta.title' ></zy-header>
    <!-- pop-transition='popup-fade' 淡入淡出-->
    <mt-popup  v-model="popupVisible" position='right' style=" width: 100%; height: 1rem; display: none;">
        <slot >nihao</slot>
    </mt-popup>
    <button class="btn" @click="btn">点击</button><br>
    <mt-button  type="default" @click="btnone">ajax</mt-button><br/>
    <mt-button  type="default" @click="btntwo">AjaxRequest</mt-button><br/>
    <mt-button  type="default" @click="btnthree">ajaxthree</mt-button>
  </div>
</template>

<script>
import {Popup , Button  } from 'mint-ui'
export default {
  data () {
    return {
       popupVisible:false,
       dd:'kkkk'
    }
  },
  components:{
      mtPopup :Popup ,
      mtButton : Button 
  },
  methods:{
      btn(){
          this.popupVisible=true
      },
      btnone(){
        let self = this
        this.AjaxRequest({
		        type: "get",
		        url:  "https://5ae979d7531a580014142797.mockapi.io/api/v1/records",
		        param: "",
		        isShowLoader: true,
		        dataType: "",
		        callBack: function(res){
		            console.log(res)
		        }    
		    })
      },
      btntwo(){
        this.Ajax({
		        type: "get",
		        url:  "https://5ae979d7531a580014142797.mockapi.io/api/v1/records",
		        param: "",
		        isShowLoader: true,
		        dataType: "",
		        callBack: function(res){
		            console.log(res)
		        }    
		    })
       },
       btnthree(){
           new this.ajaxtwo({
		        type: "get",
		        url:  "https://5ae979d7531a580014142797.mockapi.io/api/v1/records",
		        param: "",
		        isShowLoader: true,
		        dataType: "",
		        callBack: function(res){
		            console.log("成功回调",res)
		        },
                errBack: function(res){
                    console.log("失败回调",res)
                }  
		    })
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