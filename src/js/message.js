var APP_ID = 'EnBdg1ABbYgJYWhSYshpgDbj-gzGzoHsz';
var APP_KEY = 'TwFDR8ftj16TiJcPnWV1Kgfm';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find().then(function (messages) {
    let array = messages.map((item)=>item.attributes)
    array.forEach((item)=>{
        let li = document.createElement('li') 
        li.innerText = `${item.name}:${item.content}`
        let messageList = document.querySelector('#messageList')
        messageList.append(li)
    })
    console.log(1)
});

let myForm = document.querySelector('#postMessageForm')     // 可以回车键提交，所以不能仅监听click，要监听整个form表单

postMessageForm.addEventListener('submit',function(e){
    e.preventDefault()        // 阻止默认刷新
    let content = myForm.querySelector("input[name='content']").value
    let name =  myForm.querySelector("input[name='name']").value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        'name':name,
        'content': content
    }).then(function(object) {
        let li = document.createElement('li') 
        li.innerText = `${object.attributes.name}\ :\ ${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.append(li)
        console.log(object)
        myForm.querySelector("input[name='content']").value = ''
        myForm.querySelector("input[name='name']").value = ''
    })
})

















 /*
 // 创建 TestObject 表
var TestObject = AV.Object.extend('TestObject');
// 在表中创建一行数据
var testObject = new TestObject();
// 数据内容是 words:'Hello World' 保存
// 如果保存成功，则运行 alert('')
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
 */