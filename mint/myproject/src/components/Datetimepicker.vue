<template>
  <div>
    <zy-header :headtitle='$route.meta.title' >
        <span slot="fanhui">上一页</span>
        <span slot="fenxiang">DatetimePicker</span>
    </zy-header>
    <mt-datetime-picker
        ref="picker"
        type="date"
        v-model="pickerValue"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        @confirm="handleConfirm"
        :startDate="date"
        :endDate="time">
    </mt-datetime-picker>
    <button class='btn' @click="btn">弹出时间框</button>
    <p>
        选择的时间：<span>{{pickerValue}}</span>
    </p>
    <div id="myDiv">
        <input type="text" v-model="firstName" class="int">
        <input type="text" v-model="lastName" class="int">
        <input type="text" v-model="fullName" class="int">
    </div>
  </div>
</template>

<script>
import { Popup , DatetimePicker } from 'mint-ui'
export default {
  data () {
    return {
       popupVisible:false,
       pickerValue:'',
       date:new Date(),
       time:new Date(1597978565436),
       firstName:'',
       lastName:'',
    //    fullName:''
    }
  },
  components:{
      mtPopup :Popup,
      mtDatetimePicker:DatetimePicker
  },
  computed:{
   fullName:{
    //这里用了es6书写方法
        set(){//当修改fullName值的时候触发 set方法
             alert("set");
        },
        get(){//当修改get函数中的有 vue的数据的时候（firstName和lastName） 发生变化的话 会触发get方法  把return出去的值赋值给监听的数据（fullName）
           alert("get");
           return  this.firstName  + " " +this.lastName;
        },
   }
 },
  methods:{
      btn(){
          let self=this
          this.$refs.picker.open()
      },
      handleConfirm(value){
          let self = this
          alert(value)
      },
  },
  mounted() {
      this.popupVisible=false
      this.pickerValue=''
      this.date=new Date()
      this.time=new Date(new Date().setFullYear(2022))
      this.firstName=''
      this.lastName=''
    //   this.fullName=''
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .btn{
        margin: 0.2rem auto;
        width: 30%;
        height: 0.3rem;
        font-size: 0.15rem;
    }
    .int{
        display: block;
        border: 1px solid #000;
        margin-top:0.1rem
    }
</style>
<style>
.mint-popup-bottom{
    width:100%;
    -height:1rem;
}
</style>