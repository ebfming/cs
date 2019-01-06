/**************************************************** MP3 *******************************************************/
//测试仁道播放器试听代码
function mp3_try_play(){	
	//获取源
	var MP3_player_=MP3_player('obj');
	if(MP3_player_ !==false){
		//生成测试容器
		$('#player_test').attr('class','player_mp3_test');
		$('#player_test').html(MP3_player_);
	}
}
//复制代码粘贴即可播放 
function mp3_copy_ercode(type,call_id){
	//生成代码
	mp3_call_code(type,call_id);
	//粘贴
	copyToClipBoard(call_id);
}
//生成代码
function mp3_call_code(type,call_id){
	if(MP3_player_ !==false){
		//获取源
		var MP3_player_=MP3_player(type);
		$("#"+call_id).val(MP3_player_);
	}
}
//揣测是URL类型还是OBJ类型
function MP3_player(type){
	//MP3地址
	var play_source=$('#play_source').val();
	if(play_source.indexOf('.mp3')=="-1"){
		alert('您所提供的音乐源不是一个MP3文件！');
		return false;
	}
	play_source=play_source.replace('.mp3','');
	//歌曲名称
	var play_author=$('#play_author').val();
	//歌曲版权
	var play_copyright=$('#play_copyright').val();
	
	//URL方法
	if(type=='url'){
		var res='http://ebf.cc/v4.0/EBF_mp3_player.swf?ebf='+play_source+'&splay='+play_author+'&rplay='+play_copyright;
	}
	//OBJ方法
	else{
		var res=dlz_utils.disFlash('http://ebf.cc/v4.0/EBF_mp3_player.swf?ebf='+play_source+'&splay='+play_author+'&rplay='+play_copyright,360,50,'','','',false);	
	}	
	return res;
}
/**************************************************** FLV *******************************************************/
//黑鸭子播放器试听代码
function flv_try_play(){
	//获取源
	var FLV_player_=FLV_player('obj');
	if(FLV_player_ !==false){
		//生成测试容器
		$('#player_test').attr('class','player_flv_test');
		$('#player_test').html(FLV_player_);
	}
}

//复制代码粘贴即可播放 
function flv_copy_ercode(type,call_id){
	//生成代码
	flv_call_code(type,call_id);
	//粘贴
	copyToClipBoard(call_id);
}
//生成代码
function flv_call_code(type,call_id){
		//获取源
		var FLV_player_=FLV_player(type);
		//生成代码
		$("#"+call_id).val(FLV_player_);
}

//揣测是URL类型还是OBJ类型
function FLV_player(type){
	//FLV地址
	var play_source=$('#play_source').val();
	if(play_source.indexOf('.flv')=="-1"){
		alert('您所提供的视频源不是一个FLV文件！');
		return false;
	}
	play_source=play_source.replace('.flv','');
	//歌曲名称
	var play_author=$('#play_author').val();
	//歌曲版权
	var play_copyright=$('#play_copyright').val();
	
	//URL方法
	if(type=='url'){
		var res='http://ebf.cc/v4.0/EBF_video_player.swf?ebf='+play_source+'&splay='+play_author+'&rplay='+play_copyright;
	}
	//OBJ方法
	else{
		var res=dlz_utils.disFlash('http://ebf.cc/v4.0/EBF_video_player.swf?ebf='+play_source+'&splay='+play_author+'&rplay='+play_copyright,480,350,'','','',false);	
	}	
	return res;
}