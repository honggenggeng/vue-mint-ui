<template>
  <div>
    <zy-header :headtitle='$route.meta.title' >
        <span slot="fanhui" icon="back">上一页</span>
        <span slot="fenxiang" icon="more">CellSwipe</span><!---->
    </zy-header>

    <!--:right="rightButtons"-->
    <mt-cell-swipe
        :right="[
            { content:'同意', style:{ backgroundColor: '#fa5400'  ,fontSize:'16px', color: '#fff'} , handler: ()=>pass( key )  },
            {content: '删除',style: { backgroundColor: 'red', color: '#fff' ,fontSize:'16px'},handler: () => messagebox(item)}
        ]"
        icon='back'
        v-for="(item , key ,index) in obj"
        :key=index
        :label="item"
        :title="key"
        to="cell">
        {{item}}
    </mt-cell-swipe>
   
  </div>
</template>

<script>
import { CellSwipe } from 'mint-ui'
export default {
  data () {
    return {
      val:'探索',
      obj:{
          name:'洪耿耿',
          old:'24',
          addres:"永城",
          aa:"AA",
          bb:'BBB',
          CC:'CC'
      },
      arr:[1,2,3,4,5,6,7,8,9]
    }
  },
  components:{
    mtCellSwipe : CellSwipe  
  },
  computed:{
      
  },
  
  methods:{
      messagebox(val){
          console.log(val)
      },
      pass(key,e){
          let self = this
          var e=e||window.event
          console.log(key,e.target.parentNode)
      },
      call(){
          console.log(2222) 
      }
  },
  created() {
      let self=this
      self.rightButtons = [
            { content:'同意', style:{ backgroundColor: '#fa5400'  ,fontSize:'16px', color: '#fff'} , handler: ()=>self.pass(  )  },
            // { content:'拒绝', style:{ backgroundColor: '#191919' ,fontSize:'16px', color: '#fff'} ,  handler: ()=>self.messagebox()  }
            {
                content: '删除',
                style: { backgroundColor: 'red', color: '#fff' ,fontSize:'16px'},
                handler: () => self.messagebox(item)
            }
        ];
    },
  mounted() {
      let self=this
    //   this.$nextTick(function(){
    //  })
  },
  activated() {
      var mintcell=document.querySelectorAll(".mint-cell")
      mintcell.forEach(function(value,index){
            value.onclick=function(e){
                var e=e||window.event
            } 
        });
    //   mintcellright.style.transform="translate3d(190.063px, 0px, 0px)"
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
<style>
 .mint-cell-title{
    text-align: left;
 }

</style>