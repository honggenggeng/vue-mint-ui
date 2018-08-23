<template>
  <div>
    <zy-header :headtitle='$route.meta.title' >
        <span slot="fanhui" icon="back">上一页</span>
        <span slot="fenxiang" icon="more">Spinner</span><!---->
    </zy-header>


    <!--<mt-search 
        v-model="value" 
        :autofocus='true'
        placeholder="请输入关键字"  
        cancel-text="重输"  
        :result.sync="filterResult">
    </mt-search>-->


    <mt-search v-model="value">
        <mt-cell
            v-for="(item,index) in resultci"
            :key="index"
            :title="item.title"
            :value="item.value">
        </mt-cell>
    </mt-search>
  </div>
</template>

<script>
import { Search , Cell} from 'mint-ui'
export default {
  data () {
    return {
        result:[{title:'hong',value:'geng'},{title:'gao',value:'rong'}],
        value:'',
        defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ]
    }
  },
  components:{
      mtSearch : Search ,
      mtCell : Cell
  },
  computed:{
      filterResult() {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      },
      resultci(){
          return this.result.filter(value => new RegExp(this.value,'i').test(value.title))
      }
  },
  
  methods:{
      
  },
  created() {
      
    },
  mounted() {
     
  },
  activated() {
      this.result=[
          {title:'hong',value:'geng'},
          {title:'gao',value:'rong'},
          {title:'er',value:'fan'},
          {title:'cui',value:'shaungjin'},
          ],//搜索的结果列表
      this.value=''//搜索框双向绑定的数据
      var searchlist=document.querySelector('.mint-search-list')
      var searchbar=document.querySelector('.mint-searchbar')
      searchlist.style.marginTop=(searchbar.offsetHeight)/100+0.16+'rem'



    //   console.log(this.defaultResult.filter(function(value){
    //         // console.log('55555',value)
    //         return new RegExp('lo', 'i').test(value) //正则表达式筛选出this.defaultResult数组中每个数据含有'lo'字符串的数据通过test()方法筛选出来 然后return出去
    //       })
    //   )
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
<style>
.mint-searchbar-cancel{
    display:inline-block !important;
}
.mint-search{
    height:100%;
}
</style>