
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
	getEvent:fucntion(event){
		return event?event:widow.event;  //获取event对象。widow.event定义IE事件对象.
	}
	getTarget:function(event){
		return event.Target||event.srcElement; //返回事件目标。
	}
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault(); //兼容DOM。
		}else{
			event.returnValue = false; //IE事件对象。
		}
	} //取消事件默认行为。

	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);//DOM2事件处理，false代表冒泡阶段调用事件。
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler); //IE事件处理程序。
		}else{
			element["on"+type] = null; //DOM0事件处理。
		}
	} //移除事件。
	stopPropagation:function(evnet){
		if(event.stopPropagation){
			event.stopPropagation(); //兼容DOM。
		}else{
			event.cancelBubble = true;//IE事件对象。
		}
	}//阻止事件流。
}