/**
 查询天气预报
*/
function queryWeather(type){
	if(type==1){
		var query_val=$('#query_weather_search_v').find('input').val();
		query_val=$.trim(query_val);
		$('#query_weather_res_case').removeClass('echo_error');
		//检测数据是否合法
		if(query_val.length<1){	
			$('#query_weather_res_case').html('<div class="echo_error">请输入一个合法的城市名称</div>');
			return false;
		}
	}
	//按钮
	var query_sub=$('#query_weather_sub');
	//禁用按钮
	query_sub.find('input').prop('disabled',true);	
	$('#query_weather_res_case').html('<p class="query_weather_res_load">正在查询</p>');
	//ajax提交数据
	$.post(
		'/mojing/ajax.php?'+dlz_utils.getRandom(1000),
		{
			ga:'weather',
			type:type,
			queryWeather:query_val
		},
		function(onComplete){
			if(onComplete=='-1'){			
				$('#query_weather_res_case').html('<div class="echo_error">您输入的城市不存在</div>');
			}			
			else{
				$('#query_weather_res_case').html(onComplete);
			}
			//启用按钮
			query_sub.find('input').prop('disabled',false);
		}
	)
}
/**
分享天气预报
*/
function shareWeather(type){
	var get_weather=$.trim($('#query_weather_share_info').val());
	var get_img=$.trim($('#query_weather_share_img').val());
	var get_about=$.trim($('#query_weather_share_about').val());
	var docu=get_weather+' [ 更多城市天气查询: '+get_about+' ]';		
	share(docu,get_img,type);
}