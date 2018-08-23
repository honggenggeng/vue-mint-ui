<template>
  <div class="head">
    <mt-header :fixed="fixed" :title="headtitle" class="zy">
        <span slot="left" icon="back" v-show="lefrbtn" @click="goback">
            {{back}}
            <slot name="fanhui"></slot>
        </span>
        <span slot="right" icon="more" v-show="rightbtn" @click="rightxx">
            <slot name="fenxiang">默认</slot>
        </span><!---->
    </mt-header>
  </div>
</template>

<script>
import {Header}  from 'mint-ui'
export default {
  data () {
    return {
      
    }
  },
  components : {
      MtHeader : Header ,
  },
  props:{
      lefrbtn:{type:Boolean,default:true},
      rightbtn:{type:Boolean,default:true},
      headtitle:{default:'嘀嘀嘀'},
      back:{default:"《"},
      three:{default:'...'},
      fixed:{type:Boolean, default:true}
  },
  methods:{
      goback(){
          this.$router.back()
      },
      rightxx(){
          this.$emit('rightBtn')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .head{
        width:100%;
        height:0.6rem
    }
    .zy{
        height:0.6rem
    }
</style>
