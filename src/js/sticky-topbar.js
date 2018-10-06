!function (){
    var view = document.querySelector('#topNavBar')
    // view.style.border = '1px solid red'

    var controller = {
        view:null,
        init:function(view){
            this.view = view
            this.bindEvents()
            // this.bindEvents.call(this)
        },
        bindEvents:function(){
            var view = this.view
            //动画：导航栏滚动效果
            window.addEventListener('scroll', (x)=>{
                if(window.scrollY > 0){                      //只要大于零，便增加sticky，否则移除
                    this.active()
                }else{
                    this.deactive()
                }
            })
        },
        active:function(){
            this.view.classList.add('sticky')
        },
        deactive:function(){
            this.view.classList.remove('sticky')
        }
    }

    controller.init(view)
    // controller.init.call(controller,view)
}.call()
