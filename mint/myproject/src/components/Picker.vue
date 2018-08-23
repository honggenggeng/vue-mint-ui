<template>
  <div>
     <zy-header :fixed="true" :headtitle='$route.meta.title' :rightbtn="rightbtn" :back="back" :three="three" @rightBtn="rightBtn" >
        <span slot="fanhui">返回</span>
        <span slot="fenxiang">Picker</span>
     </zy-header>
     <mt-popup  v-model="popupVisible" position='bottom' style=" width: 100%;display: none;">
        <slot>
            <div style="margin-top:0.2rem">
                <span class="qu tan" @click="yes">确定</span>
                <span class="que tan" @click="no">取消</span>
            </div>
            <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
        </slot>
    </mt-popup>
     <button class="btn" @click="btn">点击</button>
     {{vale[0]}}{{vale[1]}}{{vale[2]}}
  
  </div>
</template>

<script>
import { Picker , Popup } from 'mint-ui'
var province={
    "北京市":{
        "朝阳区":["朝1街","朝2街","朝3街","朝4街","朝5街","朝6街"],
        "海淀区":["海1街","海2街","海3街","海4街","海5街","海6街"],
        "通州区":["通1街","通2街","通3街","通4街","通5街","通6街"], 
        "房山区":["房1街","房2街","房3街","房4街","房5街","房6街"]
        },

    "上海市":['松江区　', '宝山区　', '金山区　', '嘉定区　', '南汇区　' ,'青浦区　', '浦东新区　', '奉贤区　', '闵行区　', '徐汇区　', '静安区　', '黄浦区　', '普陀区　', '杨浦区　' ,'虹口区　' ,'闸北区　', '长宁区　', '崇明县　', '卢湾区　'],
    "广东省":['东莞市　', '广州市　', '中山市　', '深圳市　', '惠州市　' ,'江门市　', '珠海市　' ,'汕头市　' ,'佛山市　', '湛江市　' ,'河源市　' ,'肇庆市　', '潮州市　', '清远市　', '韶关市　' ,'揭阳市　', '阳江市　', '云浮市　' ,'茂名市　' ,'梅州市　', '汕尾市'],
    "河南省":['郑州市　', '南阳市　' ,'新乡市　', '安阳市　' ,'洛阳市　' ,'信阳市　' ,'平顶山市　' ,'周口市　' ,'商丘市　', '开封市　', '焦作市　', '驻马店市　' ,'濮阳市　' ,'三门峡市　', '漯河市　', '许昌市　' ,'鹤壁市　' ,'济源市　']

}
var city=[]
export default {
  data () {
    return {
        rightbtn:true,
        back:'',
        three:'',
        slots: [
            {
                flex: 1,
                defaultIndex:1,
                values: Object.keys(province),
                className: 'slot1',
                textAlign: 'right'
            },
            {
                divider: true,
                content: '-',
                className: 'slot2'
            },
            {
                flex: 1,
                values: [],
                className: 'slot3',
                textAlign: 'center'
            },
            {
                divider: true,
                content: '-',
                className: 'slot4'
            },
            {
                flex: 1,
                values: [],
                className: 'slot5',
                textAlign: 'left'
            },
      ],
      val:['永城','商丘','南阳'],
      popupVisible:false,
      vale:''
    }
  },
  components:{
    mtPicker : Picker,
     mtPopup :Popup 
  },
  methods:{
    rightBtn(){
        let self=this
        console.log(this.$route.meta.title)
    },
    onValuesChange(picker, values) {
      console.log(values,[values[1]])
      picker.setSlotValues(1,Object.keys(province[values[0]]))//设置选择相应的省会对应相应的城市数组
      picker.setSlotValues(2,province[values[0]][values[1]])//设置选择相应的省会对应相应的城市数组
    //   picker.setSlotValue(1,'通州区')//给选中的省会指定相应的城市  但是不可以修改
    //   picker.setSlotValue(2,'通3街')//给选中的省会指定相应的城市  但是不可以修改
    //   console.log(picker.getSlotValues(1))
        this.vale=values
    },
     btn(){
          this.popupVisible=true
      },
      yes(){
        let self=this
        console.log(this.vale)
        alert(this.vale[0]+this.vale[1]+this.vale[2])
        this.popupVisible=false
      },
      no(){
          let self=this
          this.popupVisible=false
      }
  },
  mounted() {
     this.popupVisible=false
  },
  activated() {
    this.$nextTick(() => { //vue里面全部加载好了再执行的函数 （类似于setTimeout）
        this.slots[0].defaultIndex = 0 //初始化刚开始打开picke时的城市 （slots[0]中values的第几个下标） 
    // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
    //因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
    });
    this.vale=''
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tan{
        display:inline-block;
    }
    .qu{
        margin-right:2.5rem;
    }
</style>
<style>
    .mt-range-thumb{
        left:0 ;
    }
    
</style>
