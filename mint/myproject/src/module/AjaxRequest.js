import Vue from 'vue'
exports.install = function (Vue, options) {
    Vue.prototype.AjaxRequest = function (opts){
        console.log(opts)
        this.type         = opts.type || "get";
        this.url          = opts.url;
        this.param        = opts.param || {};
        this.isShowLoader = opts.isShowLoader || false;
        this.dataType     = opts.dataType || "json";
        this.callBack     = opts.callBack;
        this.init();  
    }
    //初始化
    Vue.prototype.init=function(){
        this.sendRequest();
    },
    //渲染loader
    Vue.prototype.showLoader= function(){
        if(this.isShowLoader){
            var loader = '<div class="ajaxLoader"><div class="loader">加载中...</div></div>';
            $("body").append(loader);
        }
    },
    //隐藏loader
    Vue.prototype.hideLoader= function(){
        if(this.isShowLoader){
            $(".ajaxLoader").remove();
        }
    },
    //发送请求
    Vue.prototype.sendRequest= function(){
        var self = this;
        $.ajax({
            type: this.type,
            url: this.url,
            data: this.param,
            dataType: this.dataType,
            beforeSend: this.showLoader(),
            success: function(res){//后续与后台对接，返回哪些内容 （注意)
                self.hideLoader();
                if (res != null && res != "") {
                    if(self.callBack){
                        if (Object.prototype.toString.call(self.callBack) === "[object Function]") {  
                            //Object.prototype.toString.call方法--精确判断对象的类型
                            self.callBack(res);
                        }else{
                            console.log("callBack is not a function");
                        }
                    }
                }
            },
            error:function(res){
                self.hideLoader();
                self.callBack(res);
            }
        })
    }
}