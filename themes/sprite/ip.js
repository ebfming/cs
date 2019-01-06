/**
获取IP数据
*/
function queryIP(){
	//获取查询数据
	var query_val=$('#query_ip_search').find('input').val();
	query_val=$.trim(query_val);
	$('#query_ip_res').removeClass('echo_error');
	//按钮
	var query_sub=$('#query_ip_sub');
	//检测数据是否合法
	if(query_val.length<1){
		$('#query_ip_res').addClass('echo_error');
		$('#query_ip_res').html('查询的IP格式不合法');
		return false;
	}
	//禁用按钮
	query_sub.find('input').prop('disabled',true);	
	$('#query_ip_res').html('正在查询');
	//ajax请求
	$.post(
		'/mojing/ajax.php?'+dlz_utils.getRandom(1000),
		{
			ga:'ip',
			queryIP:query_val
		},
		function(onComplete){
			if(onComplete=='-1'){
				$('#query_ip_res').addClass('echo_error');
				$('#query_ip_res').html('查询的IP格式不合法');
			}else{
				var get_info=onComplete.split(';');
				$('#query_ip_res').html('您要查询的IP为<span>'+get_info[0]+'</span> 来自于<span>'+get_info[1]+get_info[2]+'</span>');
			}
			//启用按钮
			query_sub.find('input').prop('disabled',false);
		}		
	)
}