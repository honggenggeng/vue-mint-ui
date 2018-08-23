<template>
  <div>
    <zy-header :headtitle='$route.meta.title' >
        <span slot="fanhui" icon="back">上一页</span>
        <span slot="fenxiang" icon="more">Spinner</span><!---->
    </zy-header>


    <div class="snake">
       <mt-spinner type="snake" style="display:inline-block" color="#26a2ff"></mt-spinner>
       <mt-spinner :type="0" style="display:inline-block" :size="60"></mt-spinner>
    </div>
    <div class="snake">
       <mt-spinner type="double-bounce" style="display:inline-block" color="#26a2ff"></mt-spinner>
       <mt-spinner :type="1" style="display:inline-block" :size="50"></mt-spinner>
    </div>
    <div class="snake">
       <mt-spinner type="triple-bounce" style="display:inline-block" color="#26a2ff"></mt-spinner>
       <mt-spinner :type="2" style="display:inline-block" :size="40"></mt-spinner>
    </div>
    <div class="snake">
       <mt-spinner type="fading-circle" style="display:inline-block" color="#26a2ff"></mt-spinner>
       <mt-spinner :type="3" style="display:inline-block" :size="30"></mt-spinner>
    </div>
  </div>
</template>

<script>
import { Spinner  } from 'mint-ui'
export default {
  data () {
    return {
     
    }
  },
  components:{
      mtSpinner : Spinner 
  },
  computed:{
      
  },
  
  methods:{
      
  },
  created() {
      
    },
  mounted() {
     
  },
  activated() {
      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .snake{
      width: 84%;
      margin-top: 0.2rem;
      text-align: right;
      padding: 0 0.3rem;
    }
</style>
<style>

</style>