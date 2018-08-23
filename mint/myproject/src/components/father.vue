<template>
  <div>
     <zy-header :fixed="true" :headtitle='$route.meta.title' :rightbtn="rightbtn" :back="back" :three="three" @rightBtn="rightBtn" ></zy-header>
     <Son>
        <p>你现在的努力在你以后看来都是值得的！！</p>
        <span slot="header">hello world1</span>
        <span slot="main">hello world2</span>
        <!--<span slot="footer">hello world3</span>
        <span slot="other">four</span>
        <p slot="one">slot:one</p>-->
     </Son>
  
  </div>
</template>

<script>
import {} from 'mint-ui'
export default {
  data () {
    return {
        
    }
  },
  components:{
    //   son:{
    //       template:'<h2>标题1:welcome vue</h2><p>段落</p>'
    //   }
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

</style>