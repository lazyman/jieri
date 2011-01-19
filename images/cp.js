function objpop(url){ 
var obj=new Object; 
 obj.isop=0;
 obj.w=window;
 obj.d=document;
 obj.width=screen.width;
 obj.height=screen.height; 
 obj.userAgent = navigator.userAgent.toLowerCase();
 obj.url = url;
 obj.openstr='width='+obj.width+',height='+ obj.height+',toolbar=1,location=1,titlebar=1,menubar=1,scrollbars=1,resizable=1,directories=1,status=1';
 obj.browser = {
		version: (obj.userAgent.match( /(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1] ,
		safari: /webkit/.test(obj.userAgent ),
		opera: /opera/.test( obj.userAgent ),
		ie: /msie/.test( obj.userAgent ) && !/opera/.test( obj.userAgent ),
		max: /maxthon/.test( obj.userAgent ),
		se360: /360/.test( obj.userAgent ),
		tw: /theworld/.test( obj.userAgent ),
		tt: /tencenttraveler/.test(obj.userAgent),
		ttqq: /QQBrowser/.test(obj.userAgent),
		sg: /se /.test(obj.userAgent),
		ff: /mozilla/.test(obj.userAgent)&&!/(compatible|webkit)/.test(obj.userAgent)
	}; 
obj.open = function(){
	if(obj.browser.ie){
		document.write("<object id='_launchURL_' width=0 height=0 classid='CLSID:6BF52A52-394A-11D3-B153-00C04F79FAA6'></object>");
		document.write("<object id='_DOMScript_'  style='position:absolute;left:1px;top:1px;width:1px;height:1px;' classid='clsid:2D360201-FFF5-11d1-8D03-00A0C959BC0A'></object>");
	}
	if(!obj.browser.ie && !obj.browser.ff){
		obj.c();
	}else {
		try{
			obj.o1=window.open(obj.url,"_blank",obj.openstr+',left=0,top=0');
		}catch(err){
			obj.o1='';
		}
		if(obj.o1){
			obj.w.focus();
			obj.isop=1;
		}else{
			if(obj.browser.ie){ 
				try{
					if(  obj.browser.ttqq  || obj.browser.max  || obj.browser.se360 ||obj.browser.tw ||obj.browser.tt ||obj.browser.sg || obj.browser.version=="7.0" || obj.browser.version=="8.0" || obj.browser.version=="9.0"){
							setTimeout(obj.lop,200);
						}else {
							obj.iev6 = true;
							obj.dsp();
						}
				 
				}catch(err){
					obj.c();
				}
				
			}else{
				obj.c();
			}
		}
	}
	if(obj.iev6 && obj.isop==0) {setTimeout(obj.dsp,400);}
	// obj.lap(); 
	if(!obj.isop) obj.ab = setInterval(obj.c,1000);

};
obj.dsp=function(){
	if(obj.isop) return null;
	try{ 
	setTimeout(function(){document.getElementById("_DOMScript_").DOM.Script.open(obj.url,'_blank',obj.openstr);obj.w.focus();obj.isop=1; },200);
	}catch(err){ }
}
obj.lop=function(){ 
	if(obj.isop) return null;
	try{
		document.getElementById("_launchURL_").launchURL(obj.url) ;
		obj.isop=1;
	}catch(err){
		obj.isop=0;	
	}
}
obj.lap=function(){
	 if(obj.browser.ie && obj.isop==0){
		if(window.attachEvent){
			window.attachEvent("onload",function (){
				obj.lop();
			})
		}else {
			if(window.addEventListener){
				window.addEventListener("load",function (){
					obj.lop();		
				},true)
			}else {
				window.onload=function (){
					obj.lop();
				}
			}
		}
	 }
	 
}
obj.c = function(){   
	if(obj.isop) { 
		clearInterval(obj.ab);
		obj.d.onclick = null;
		return null;
	}
	obj.d.onclick=function (){
			obj.o2=window.open(obj.url,"_blank",obj.openstr+',left=0,top=0');
			obj.w.focus();
			if(obj.o2){
				 obj.d.onclick = null;
				 clearInterval(obj.ab);
				 obj.isop=1;
			}
	}
};
return obj; 
} 
var oP=objpop(pU_zY_Url); 
oP.open();

 
