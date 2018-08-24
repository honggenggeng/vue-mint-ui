import Vue from 'vue'
import $ from '../../static/js/jquery.min.js'
function Ajaxtwo(opts){
    console.log('执行Ajaxtwo实例')
    this.type         = opts.type || "get";
    this.url          = opts.url;
    this.param        = opts.param || {};
    this.isShowLoader = opts.isShowLoader || false;
    this.dataType     = opts.dataType || "json";
    this.callBack     = opts.callBack;
    this.init();  
    
}
Ajaxtwo.prototype={
    init: function(){
        this.sendRequest();
    },
    showLoader:function(){
        console.log('弹出缓冲')
        if(this.isShowLoader){
            var loader = '<div class="ajaxLoader"><div class="loader">加载中...</div></div>';
            $("body").append(loader);
        }
    },
    hideLoader:function(){
        console.log('取消缓冲')
        if(this.isShowLoader){
            $(".ajaxLoader").remove();
        }
    },
    sendRequest:function(){
        let self = this
        console.log('执行sendRequest',)
        $.ajax({
            type: this.type,
            url: this.url,
            data: this.param,
            dataType: this.dataType,
            beforeSend: this.showLoader(),
            success: function(res){//后续与后台对接，返回哪些内容 （注意)
                self.hideLoader()
                if (res != null && res != "") {
                    if(self.callBack){
                        if (Object.prototype.toString.call(self.callBack) === "[object Function]") {  
                            //Object.prototype.toString.call方法--精确判断对象的类型
                           self.callBack(res)
                        }else{
                            console.log("callBack is not a function")
                        }
                    }
                }
            },
            error:function(res){
                self.hideLoader()
                self.errBack(res)
            }
        })
    },
}
// var ajaxtwo = new Ajaxtwo()
Vue.prototype.ajaxtwo=Ajaxtwo
export default{
    Ajaxtwo
}