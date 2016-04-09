
var EventUtil = {
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false); //DOM2事件处理，false代表冒泡阶段调用事件。
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);  //IE事件处理程序。
		}else{
			element["on"+type] = handler; //DOM0事件处理。
		}
	} //添加事件
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);//DOM2事件处理，false代表冒泡阶段调用事件。
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler); //IE事件处理程序。
		}else{
			element["on"+type] = null; //DOM0事件处理。
		}
	} //移除事件。
}