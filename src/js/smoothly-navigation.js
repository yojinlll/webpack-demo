!function (){
    var view = document.querySelector('nav.menu')

    // var controller = {
    //     view:null,
    //     init:function(view){
    //         this.view = view
    //         this.aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
    //     },
    //     animate:function(time){
    //         requestAnimationFrame(this.animate.bind(this));
    //         TWEEN.update(time);
    //     },
    // }



    //动画：滚动到指定元素内容
    //方法一：缓动效果
    let aTags = view.querySelectorAll('nav.menu > ul > li > a')
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);

    for(let i=0; i<aTags.length; i++){
        aTags[i].onclick = function(x){
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute('href') //'#siteAbout'
        let element = document.querySelector(href)
        let top = element.offsetTop

        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop // 路程
        var coords = { y: currentTop}; // 起始位置
        var t = Math.abs((s/100)*300) // 时间
        if(t>500){ t = 500 }
        var tween = new TWEEN.Tween(coords) // 起始位置
            .to({ y: targetTop}, t) // 结束位置 和 时间
            .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
            .onUpdate(function() {
            // coords.y 已经变了
            window.scrollTo(0,coords.y) // 如何更新界面
        })
            .start(); // 开始缓动
        }
    }
}.call()


/*

// 方法二：		
let aTags = document.querySelectorAll('nav.menu > ul > li > a')
// console.log(aTags)
for(let i=0; i<aTags.length; i++){         //遍历（访问）
	aTags[i].onclick = function(x){
		x.preventDefault()              //阻止<a href='#'>的默认操作
		let a = x.currentTarget
		let	href = a.getAttribute('href')     // 不用console.log(a.href)，会获取http协议
		let element = document.querySelector(href)
		let top = element.offsetTop           //算出该元素于视口的距离
		//以上四句代码其实是套娃模式，可以缩成一句代码，以下：
		//let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTop 

		let n = 25		//一共动多少次（25帧）
		let duration = 500 / n 		//多少时间动一次
		let currentTop = window.scrollY                  //为什么一定要声明这个变量
		let targetTop = top - 80
		let distance = ( targetTop - currentTop ) / n
		let i = 0
		let id = setInterval( () => {
			if( i === n ){
				window.clearInterval(id)
				return
			}
			i = i + 1
			window.scrollTo( 0, currentTop + distance * i )
		}, duration)

	}
}

*/