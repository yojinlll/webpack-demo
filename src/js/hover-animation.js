!function (){
    //动画：hover滑动效果 && hover二级元素菜单
    let liTags = document.querySelectorAll('nav.menu > ul > li')
    for(let i=0; i<liTags.length; i++){
        liTags[i].onmouseenter = function(x){
            x.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function(x){
            x.currentTarget.classList.remove('active')
        }
    }
}.call()