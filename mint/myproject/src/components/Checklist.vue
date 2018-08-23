<template>
  <div>
    <zy-header :headtitle='$route.meta.title' ></zy-header>
    <mt-checklist title="复选框列表" v-model="value"  :max="1" :options='options' align="right" @change="checkon">
    </mt-checklist>
    <div v-for="item in value" class="value">{{item}}</div>
    <zy-opinion></zy-opinion>

    <div>{{valueone}}</div>
    <mt-radio
        title="单选框列表"
        v-model="valueone"
        :options="optionone">
    </mt-radio>
    <div>{{valueone}}</div>
  </div>
</template>

<script>
import {Checklist , Radio } from 'mint-ui'
export default {
  data () {
    return {
        value:[],
        valueone:'',
        options : [
            {
                label: '被禁用',
                value: '值F',
                disabled: true
            },
            {
                label: '选中禁用',
                value: '选中禁用的值',
                disabled: true
            },
            {
                label: '选项A',
                value: '值A'
            },
            {
                label: '选项B',
                value: '值B'
            }
        ],
        optionone : [
            {
                label: '被禁用',
                value: '值F',
                disabled: true
            },
            {
                label: '选项A',
                value: '值A'
            },
            {
                label: '选项B',
                value: '值B'
            }
        ]
    }
  },
  components:{
      mtChecklist : Checklist,
      mtRadio : Radio 
  },
  methods:{
      checkon(){
          let self=this
          console.log(this.value)
      },
  },
  mounted() {
      this.options = [
        {
            label: '被禁用',
            value: '值F',
            // disabled: true
        },
        {
            label: '选中禁用',
            value: '选中禁用的值',
            // disabled: true
        },
        {
            label: '选项A',
            value: '值A'
        },
        {
            label: '选项B',
            value: '值B'
        }
    ]
    this.optionone = [
            {
                label: '被禁用',
                value: '值F',
                disabled: true
            },
            {
                label: '选项A',
                value: '值A'
            },
            {
                label: '选项B',
                value: '值B'
            }
        ]
    this.value=[]
    this.valueone=''
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .value{
        float:left;
        margin:0.2rem 0.3rem;
    }
</style>
<style>
    .mint-checkbox-input:checked + .mint-checkbox-core{
        background-color: #26a2ff !important;
        border-color: #26a2ff !important; 
    }
    .mint-checkbox-core{
        background-color: #fff !important;
    }
</style>
