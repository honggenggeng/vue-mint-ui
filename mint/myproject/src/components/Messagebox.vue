<template>
  <div>
    <zy-header :headtitle="$route.meta.title" :rightbtn="false"></zy-header>
    <button class="btn" @click="btn1">打开alert提出框</button>
    <button class="btn" @click="btn2">打开confirm提示框</button>
    <button class="btn" @click="btn3">打开prompt提示框</button>
    <button class="btn" @click="btn4">自定义弹出框单按钮</button>
    <button class="btn" @click="btn5">自定义弹出框双按钮</button>
    <pop-up :isshow='isshow' @affirms="affirms" :matter="matter" :jud.sync="jud"></pop-up>
    <!---->
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
  data () {
    return {
      isshow:false,
      matter:'自定义组件',
      jud:true
    }
  },
  components:{
    MessageBox
  },
  methods:{
    btn1(){
      // MessageBox({
      //   title: '提示',
      //   message: '确定执行此操作?',
      //   showCancelButton: true,
      //   closeOnClickModal:true,
      //   confirmButtonText:'Yes',
      //   cancelButtonText:"No",
      //   showInput:true
      // });
      MessageBox.alert('确定执行此操作吗',{
        title: '提示',
        showCancelButton: true,//是否显示取消按钮
        showConfirmButton:true,//是否显示确认按钮
        closeOnClickModal:true,//点击model（遮罩层）取消弹出框
        confirmButtonText:'Yes',//确认按钮的文本
        cancelButtonText:"No",//取消按钮的文本
        cancelButtonClass:'cancelButton',//取消按钮添加的类名
        confirmButtonClass:'confirmButton',//确认按钮添加的类名
      }).then(action => {
        // 点击“确定”之后执行的操作
        console.log("确定")
      });
    },
    btn2(){
      let self = this
      MessageBox.confirm('确定执行此操作?',{
        title: '提示',
        confirmButtonText:'Yes',
        cancelButtonText:"No",
      }).then(action => {
        // 点击确认按钮执行的操作
        console.log("confirm")
      },rejected=>{
        //点击取消按钮执行的操作
        console.log("no confirm")
      });
    },
    btn3(){
      let self = this 
      MessageBox.prompt('请输入姓名',{
        title:'提示',//提示与顶部的“提示语”
        showInput:true,//是否显示一个输入框
        inputType:'number',//弹出框的类型
        inputValue:'默认的输入值',//默认输入框的值
        inputPlaceholder:'请输入您需要输入的内容',
        cancelButtonClass:'cancelButton',//确认按钮添加的类名
        confirmButtonClass:'confirmButton',//失败按钮添加的类名
      }).then(({ value, action }) => {
          //点击确认的按钮后
          if(value){
            MessageBox.alert(value,{
              title:"您输入的是",
              cancelButtonClass:'cancelButton',//确认按钮添加的类名
              confirmButtonClass:'confirmButton',//失败按钮添加的类名
            }).then(action => {
              // 点击“确定”之后执行的操作
              console.log("确定")
            });
          }
      },rejected=>{
        //点击取消按钮执行的操作
        console.log("no prompt")
      });
    },
    btn4(){//单按钮弹出框
      this.isshow=true
      // this.jud=true 
      //也可以改变子组件挂载的数据（也可以更改弹出框按钮的个数只是在父组件中更改，但是不如让子组件更改子组件的数据安全）
    },
    btn5(){//双按钮弹出框
      this.isshow=true
      this.jud=false
    },
    affirms(){
      let self=this
      this.isshow=false
      
    },
  },
  mounted() {
    this.isshow=false
    this.matter='自定义组件'
    this.jud=true
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
  width:60%;
  height:0.6rem;
  font-size: 0.2rem;
  margin: 0.2rem;
}

</style>
<style>
.cancelButton{
    background: #959595 !important;
    width: 1.6rem !important;
    height: .6rem;
    color: #fff !important;
    border-radius: .05rem;
    border: none;
    margin: .2rem !important;
  }
  .confirmButton{
    background: #d9534f !important;
    width: 1.6rem !important;
    height: .6rem;
    color: #fff !important;
    border-radius: .05rem;
    border: none;
    margin: .2rem !important;
  }
  .mint-msgbox-btns{
    height:1rem;
  }
</style>
