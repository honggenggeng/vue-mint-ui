<template>
  <div>
    <zy-header :fixed="true" :headtitle='$route.meta.title' :rightbtn="rightbtn" :back="back" :three="three" @rightBtn="rightBtn" ></zy-header>
    <button style="margin:0.2rem 0" @click="bbtn">点击</button>
    
    <div class="big" style="width:100%;height:100%;">
        <ul class="Infinite"  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <li v-for="item in list" class="Infinite_li">{{ item }}</li>
        </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
        list:[1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9],
        back:'上一步',
        three:'分享',
        rightbtn:true
    }
  },
  
  components:{

  },
  methods:{
    loadMore() {
        this.loading = true;
        setTimeout(() => {
            this.list.push("nihao")
            this.loading = false;
        }, 1000);
    },
    rightBtn(){
        alert("右键")
    },
    bbtn(){
        let self = this
        this.three='退出'
        this.rightbtn=false
    }
  },
  mounted() {
    this.list=[1,2,3,4,5,2,3,4,5,6,7,8,9]
    this.back='上一步'
    this.three='分享'
    this.rightbtn=true
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Infinite{
       width:100%; 
    }
    .Infinite_li{
        width:100%;
        height:0.5rem;
        border-top:1px solid #eee;
        line-height: 0.5rem;
    }
</style>
