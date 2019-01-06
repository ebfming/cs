/**
广告配置
*/
var sponsors={
	/**
	背景广告方案
	imgURL 图片路径
	imgColor 作为背景图片时 用于填充的背景颜色 
	linkURL 广告的跳转地址
	obj.bgAD=function(imgURL,imgColor,linkURL);
	*/
	bgAD:function(imgURL,is_repeat,imgColor,linkURL){
		//是否扩展
		var imgRepeat='repeat';
		if(is_repeat==false){
			imgRepeat='no-repeat';
		}
		//背景色
		if(imgColor==false){
			imgColor='none';
		}
		$(document.body).css({'background-image': 'url(' + imgURL + ')','background-color':imgColor,'background-repeat': imgRepeat,'background-position':'top'});
		//web页尺寸
		var web_width=$(document).width();
		var web_height=$(document).height();
		//AD尺寸
		var ad_width=parseInt((web_width-960)/2);	
		var ad_height=parseInt(web_height-30);
		//画布广告位
		var bl='<a href="'+linkURL+'" target="_blank" style="position:absolute; top:30px; left:0px;z-index:2;width:'+ad_width+'px;height:'+web_height+'px; display:block;"></a>';
		var b2='<a href="'+linkURL+'" target="_blank" style="position:absolute; top:30px; right:0px;z-index:2;width:'+ad_width+'px;height:'+web_height+'px; display:block;"></a>';
		//置入到舞台
		$(document.body).append(bl,b2);
	},
	/**
		头部背景广告
		imgURL 图片路径
		linkURL 广告的跳转地址
		图片大小为 960X125
	*/
	headerAD:function(imgURL,linkURL){
		//广告容器
		var AD_case=$('#header_case');
		//赋值广告内容
		$('#header_case').css({'background-image': 'url(' + imgURL + ')','cursor':'pointer'});
		//跳转广告地址
		$('#header_case').click(function(){
			window.open(linkURL);
		});
		//阻止LOGO点击冒泡弹出
		$('#logo').click(function(){
			window.location='/';
			return false;
		})		
	},
	/**
		右侧广告
		imgURL 图片路径
		linkURL 广告的跳转地址
		图片大小为 195X80
	*/
	quickAD:function(imgURL,linkURL){
		var AD_case=$('#quick_ads');
		AD_case.fadeIn(500,function(){
			$(this).html('<a href="'+linkURL+'" target="_blank"><img src="'+imgURL+'" /></a>');
		})
	}
	
}
$(function(){
	//背景广告方案
	//sponsors.bgAD('http://mojing.org/upload/bg.jpg?ga=1',true,false,'http://cl.ebf.cc/cgi-bin/cl.cgi?n=4&m=http://item.taobao.com/item.htm?id=18252031237');
	//头部背景广告
	sponsors.headerAD('http://mojing.org/upload/960x125.jpg?ga=2','http://cl.ebf.cc/cgi-bin/cl.cgi?n=6&m=http://item.taobao.com/item.htm?id=18252031237');
	//右侧广告
//sponsors.quickAD('http://mojing.org/upload/195x195.png','http://wuyingqu.com/?ping=mojing.org');
})