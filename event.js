function on(ele, type, f) {
    if (/^my/.test(type)) {
        ele[type] = ele[type] || []
        //添加f事件之前 先查看事件池中是否已经存在该事件
        if (ele[type].indexOf(f) === -1) {
            ele[type].push(f)
        }
    } else {
        //保证type没有on
        type = type.replace(/^on/, '')
        ele.addEventListener(type, f, false)
    }
}

function fire(ele, type,options) {
    ele[type] = ele[type] || []
    for (let i = 0; i < ele[type].length; i++) {
        ele[type][i] && ele[type][i].call(ele,options)
    }
    ele[type].filter(item => {
        return item
    })
}
function off(ele, type, f){
    if(/^my/.test(type)){
        ele[type]=ele[type].map(item=>item===f?null:item)
    }else{
        type=type.replace(/^on/,'');
        ele.removeEventListener(type,f,false)
    }
}