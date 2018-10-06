!function (){
    //添加 offset 类
    let specialTags = document.querySelectorAll('[data-x]')               //遍历所有特殊标签，为其增加一个offset class						
    for(let i=0; i<specialTags.length; i++){
        specialTags[i].classList.add('offset')
    }


    //在进入页面时移除最近元素的offset，体现页面上拉的效果
    // setTimeout(function(){
    //     findCloestAndRemoveOffset()
    // }, 1000)

    findCloestAndRemoveOffset()
    window.addEventListener('scroll', function(x){
        findCloestAndRemoveOffset()
    })


    /* helper */
    function findCloestAndRemoveOffset(){
        let specialTags = document.querySelectorAll('[data-x]')               //遍历所有特殊标签						
        let minIndex = 0
        for(let i=0; i<specialTags.length; i++){
            if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
                minIndex = i
            }
        }
        
        specialTags[minIndex].classList.remove('offset')		//移除offset
        let id = specialTags[minIndex].id
        // console.log(id)                      //遇事不决console.log
        let	a = document.querySelector('a[href="#'+ id +'"]')
        let li = a.parentNode
        let brothersAndMe = li.parentNode.children
        for(let i=0; i<brothersAndMe.length; i++){
            brothersAndMe[i].classList.remove('highlight')							//先移除所有的active状态，再为li添加active，否则会全部都添加active
        }
        li.classList.add('highlight')

    }
}.call()