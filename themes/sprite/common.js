/** 
迷你播放器 
*/
function return_player(mp3_path){
	var mp3_path=mp3_path.replace('.mp3','');
	var html='<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http:\/\/download.macromedia.com\/pub\/shockwave\/cabs\/flash\/swflash.cab#version=10,0,0,0\" name=\"mp3\" width=\"16\" height=\"16\" align=\"middle\" id=\"mp3\"><param name=\"allowScriptAccess\" value=\"sameDomain\" \/><param name=\"allowFullScreen\" value=\"false\" \/><param name=\"movie\" value=\"http:\/\/ebf.cc\/v4.0\/EBF_mp3_mini_player.swf?ebf='+mp3_path+'&amp;splay=no\" \/><param name=\"quality\" value=\"high\" \/><param name=\"bgcolor\" value=\"#ffffff\" \/><param name=\"wmode\" value=\"transparent\" \/><embed src=\"http:\/\/ebf.cc\/v4.0\/EBF_mp3_mini_player.swf?ebf='+mp3_path+'&amp;splay=no\" width=\"16\" height=\"16\" align=\"middle\" quality=\"high\" bgcolor=\"#ffffff\" name=\"mp3\" allowScriptAccess=\"sameDomain\" allowFullScreen=\"false\" type=\"application\/x-shockwave-flash\" pluginspage=\"http:\/\/www.adobe.com\/go\/getflashplayer_cn\" wmode=\"transparent\" \/><\/object>';
	return html;
}
/**
为指定的标签添加样式(仅用于CSS显示效果)
call_obj 来自于执行事件的ID
dis_style 执行事件ID将要执行的CSS
demo:
onclick="returnDisplay('echo_box','common_hide')";这个实例将指定的DIV点击后给隐藏了
*/
function returnDisplay(call_id,dis_style){
	$('#'+call_id).attr('class',dis_style);
}
/**
截取中文字符串
*/
function substr(str, len){
    if(!str || !len) { return ''; }
    //预期计数：中文2字节，英文1字节
    var a = 0;
    //循环计数
    var i = 0;
    //临时字串
    var temp = '';
    for (i=0;i<str.length;i++){
        if (str.charCodeAt(i)>255){
            //按照预期计数增加2
            a+=2;
        }else{
            a++;
        }
        //如果增加计数后长度大于限定长度，就直接返回临时字符串
        if(a > len) { return temp; }
        //将当前内容加到临时字符串
        temp += str.charAt(i);
    }
    //如果全部是单字节字符，就直接返回源字符串
    return str;
}
/**
分享到API
*/
function share(docu,pic,shareTo){	
	//分享内容
	var share_docu=encodeURIComponent(docu);
	//图片揣测
	var get_pic=$.trim(pic);
	var share_pic='';
	if(get_pic.length>1){
		//QZone 需要特殊处理图片变量
		if(shareTo=='qzone'){
			share_pic='&pics='+get_pic;
		}else{
			share_pic='&pic='+get_pic;
		}
	}
	//性浪微博
	if(shareTo=='sina'){
		var shareURL='http://v.t.sina.com.cn/share/share.php?title='+share_docu+share_pic;
	}
	//企鹅微博
	else if(shareTo=='tqq'){
		var shareURL='http://share.v.t.qq.com/index.php?c=share&a=index&title='+share_docu+share_pic;
	}
	//Qzone
	else if(shareTo=='qzone'){
		var shareURL='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://mojing.ebf.cc&title='+share_docu+'&desc='+share_docu+share_pic;
	}
	//弹窗发送
	dlz_utils.goURL('blank',shareURL);
}
/**
获取短链接
*/
function sub_link(tlink){
	//获取转换URL
	var sub_link=encodeURI(tlink);
	$.ajax({  
          async:false,  
          type: "POST",  
          url: '/mojing/ajax.php'+'?'+dlz_utils.getRandom(1000),  
          data: "ga=sub_link&tlink="+tlink,  
          success: function(onComplete){
					if($.trim(onComplete) !=='' && $.trim(onComplete)!==0){
						sub_link=onComplete;
					}
          }  
   });   
   return sub_link;
}
/**
检测一个URL是否合法
*/
function check_URL(url){
     var tomatch= /http:\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/
     if (tomatch.test(url)){         
         return true;
     }
    return false;
}