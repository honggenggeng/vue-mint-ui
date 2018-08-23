<template>
  <div>
    <zy-header :headtitle='$route.meta.title' >
        <span slot="fanhui">上一页</span>
        <span slot="fenxiang">Index List</span>
    </zy-header>

    <!-- 索引列表 -->
    <mt-index-list>
        <mt-index-section index="A">
            <!--<mt-cell title="Aaron">AAA</mt-cell>
            <mt-cell title="Alden">AAA</mt-cell>
            <mt-cell title="Austin">AAA</mt-cell>-->
            <ul class="ul">
                <li>Add</li>
                <li>Add</li>
                <li>Add</li>
                <li>Add</li>
                <li>Add</li>
                <li>Add</li>
                <li>Add</li>
                <li>Add</li>
                <li>Add</li>
                <li>Add</li>
                <li>Add</li>
                <li>Add</li>
                <li>Add</li>
            </ul>
        </mt-index-section>
        
        <mt-index-section index="B">
            <mt-cell title="Baldwin"></mt-cell>
            <mt-cell title="Braden"></mt-cell>
            <ul class="ul">
                <li>Bwklk</li>
                <li>Bwklk</li>
                <li>Bwklk</li>
                <li>Bwklk</li>
                <li>Bwklk</li>
                <li>Bwklk</li>
                <li>Bwklk</li>
                <li>Bwklk</li>
                <li>Bwklk</li>
                <li>Bwklk</li>
                <li>Bwklk</li>
                <li>Bwklk</li>
            </ul>
        </mt-index-section>
        <mt-index-section index="Z">
            <mt-cell title="Zack"></mt-cell>
            <mt-cell title="Zane"></mt-cell>
            <ul class="ul">
                <li>Zack</li>
                <li>Zack</li>
                <li>Zack</li>
                <li>Zack</li>
                <li>Zack</li>
                <li>Zack</li>
                <li>Zack</li>
                <li>Zack</li>
                <li>Zack</li>
                <li>Zack</li>
                <li>Zack</li>
                <li>Zack</li>
                <li>Zack</li>
                <li>Zack</li>
                <li>Zack</li>
                <li>Zack</li>
            </ul>
        </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import { IndexList, IndexSection } from 'mint-ui'
export default {
  data () {
    return {
       
    }
  },
  components:{
     mtIndexList : IndexList,
     mtIndexSection : IndexSection
  },
  computed:{
      
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
    .ul{
        -margin-top: 0.2rem;
    }
    .ul li{
        height: 0.3rem;
        line-height:0.3rem;
        text-align:left;
        padding-left:0.2rem;
    }
</style>
<style>
.mint-popup-bottom{
    width:100%;
    -height:1rem;
}
</style>