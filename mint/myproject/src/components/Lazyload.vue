<template>
  <div>
    <zy-header :headtitle='$route.meta.title' >
    <!-- 如果要在title处抒写一个搜索框或者其他的内容 可以都装到slot='right'中定位-->
        <!--<div style="position: absolute; left: 20%;top:0.2rem">
            <input type="number" style="heigt:0.4rem;outline:none;font-size:0.2rem;border:1px solid #eee"/>
        </div>-->
        <span slot="fanhui">返回</span>
        <span slot="fenxiang">分享</span>
    </zy-header>
    <ul>
        <li v-for="item in list">
            <img v-lazy="item" class='page-lazyload-image' data-src='../img/dengdai.jpg' />
        </li>
    </ul>
  </div>
</template>

<script>
import {} from 'mint-ui'
export default {
  data () {
    return {
        list:['http://img1.imgtn.bdimg.com/it/u=3985589221,974935504&fm=27&gp=0.jpg',
            'http://img3.imgtn.bdimg.com/it/u=92219773,1860976058&fm=27&gp=0.jpg',
            'http://pic31.photophoto.cn/20140412/0006019677904673_b.jpg',
            'http://img2.imgtn.bdimg.com/it/u=2459175408,2961613284&fm=11&gp=0.jpg',
            'http://s2.sinaimg.cn/mw690/001mBYE7zy6TgzyTRexe1&690',
            'http://img2.imgtn.bdimg.com/it/u=2451449817,862515011&fm=27&gp=0.jpg' 
        ],
        back:'上一页'
    }
  },
  components:{
      
  },
  methods:{
    
  },
  mounted() {
     this.list=['http://img1.imgtn.bdimg.com/it/u=3985589221,974935504&fm=27&gp=0.jpg',
            'http://img3.imgtn.bdimg.com/it/u=92219773,1860976058&fm=27&gp=0.jpg',
            'http://pic31.photophoto.cn/20140412/0006019677904673_b.jpg',
            'http://img2.imgtn.bdimg.com/it/u=2459175408,2961613284&fm=11&gp=0.jpg',
            'http://img0.imgtn.bdimg.com/it/u=3422029769,571561675&fm=200&gp=0.jpg',
            'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg' 
        ]
  },
  activated() {
      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page-lazyload-image[lazy=loading]{
        width:100%;
        height:2.5rem;
        background: url("../img/dengdai.jpg") no-repeat center;
        background-color:'#eee';
        background-size:100%;
    }
    .page-lazyload-image{
        width:100%;
    }
</style>
<style>

</style>