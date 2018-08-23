<template>
  <div>
    
     <!--<zy-header :fixed="true" :headtitle='$route.meta.title' :rightbtn="rightbtn" :back="back" :three="three" @rightBtn="rightBtn" ></zy-header>-->
     <h3>子组件</h3>
     <slot  name='header'>这是拥有命名的slot的默认内容</slot><br/>
     <slot  name="main">这是拥有命名的slot的默认内容</slot><br/>
     <slot  name="footer">这是拥有命名的slot的默认内容</slot><br/>
     <slot  name='other'>这是拥有命名的slot的默认内容</slot><br/>
     <h4>再见青春</h4>
     <slot >默认是one(但是会被父组件的内容覆盖)</slot><!---->
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