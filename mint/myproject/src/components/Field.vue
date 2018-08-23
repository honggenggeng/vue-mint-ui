<template>
  <div>
    <zy-header :headtitle='$route.meta.title' >
        <span slot="fanhui">GO!GO!</span>
        <span slot='fenxiang'>菜单</span>
    </zy-header>
    

    
    <mt-field label="用户名" state="success" readonly :attr="{ maxlength: 4 }" placeholder="请输入用户名" v-model="username" ref='username'></mt-field>
    <mt-field label="邮箱" state="error" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
    <mt-field label="密码" state="warning"  placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
    <mt-field label="数字" placeholder="请输入数字" type="number" :disabled='true' v-model="number"></mt-field>
    <mt-field label="生日" placeholder="请输入生日"  type="date" disableClear v-model="birthday"></mt-field>
    <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-model="introduction"></mt-field><!---->
    <mt-field label="验证码" placeholder='请输入验证码' v-model="captcha">
        <img src="../img/lq.jpg" height="45px" width="100px">
    </mt-field>
  </div>
</template>

<script>
import { Field } from 'mint-ui'
export default {
  data () {
    return {
        username:'',
        email:'',
        password:'',
        phone:'',
        website:'',
        number:'',
        birthday:'',
        introduction:'',
        captcha:''
    }
  },
  components:{
      mtField : Field 
  },
  methods:{
      
  },
  mounted() {
      this.username=''
      this.email=''
      this.password=''
        this.phone=''
        this.website=''
        this.number=''
        this.birthday=''
        this.introduction=''
        this.captcha=''
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
<style>
    
</style>
