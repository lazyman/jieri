
function HtmlSearch(searchType)
{
	if(searchType == 1)
	{
		window.location.href="/ps/sjob.aspx?key="+escape(document.getElementById("tbSearch").value);
	}
	else
	{
		window.location.href="/rsm/ResultRsm.aspx?key="+ escape(document.getElementById("tbSearch").value);
	}
}

function HtmlDecode(text) 
{ 
return text.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&lt;/g, '<').replace(/&gt;/g, '>'); 
}
function HtmlEncode(text) 
{ 
return text.replace(/&/g, '&amp').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); 
}

var currentpos,timer;
function initialize()
{
timer=setInterval ("scrollwindow ()",30);
}
function sc()
{
clearInterval(timer);
}
function scrollwindow()
{
currentpos=document.body.scrollTop;
window.scroll(0,++currentpos);
if (currentpos !=document.body.scrollTop)
sc();
}
document.onmousedown=sc
document.ondblclick=initialize
//获取参数
function getUrlParam1(name){
nk="嗨";
var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
var r=window.location.search.substr(1).match(reg);
if (r!=null) return HtmlEncode(unescape(r[2]));return nk;
}  
function getUrlParam2(name){
nk="才好招聘网";
var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
var r=window.location.search.substr(1).match(reg);
if (r!=null) return HtmlEncode(unescape(r[2]));return nk;
}
//获取表单元素
function ok(){
var a=document.form1.elements;
if(a[0].value==""){alert("您朋友的名字呢？");return false;}
if(a[1].value==""){alert("你自己的名字呢？");return false;}
var b=a[0].name+"="+escape(a[0].value)+"&"+a[1].name+"="+escape(a[1].value);
var c=window.location.href;
var d=c.split("?");
var e=d[0]+"?"+b;
//document.form2.text1.value=e; //传递给另外一个表单
window.clipboardData.setData('Text',e); //复制到剪贴板
alert("您朋友的名字是："+a[0].value+" \n\n您自己的名字是："+a[1].value+" \n\n网页地址已经复制成功！\n\n您可以使用 Ctrl+V 快捷键粘贴到QQ、论坛、博客里……\n\n快快把 祝福 送给你的亲朋好友吧！\n\n欢迎您的使用-www.caihao.com！");
window.location.href=e;
}
//复制input内容;

function copyToClipBoard()
{ 
	var clipBoardContent=""; 
	clipBoardContent+=document.title; 
	clipBoardContent+=" "; 
	clipBoardContent+=this.location.href; 
	window.clipboardData.setData("Text",clipBoardContent); 
	alert("该网址已经复制到您的剪贴板中，\n\n您可以使用Ctrl+V快捷键粘贴到QQ、论坛、博客等……\n\n欢迎您的使用-www.caihao.com！");
}


