/**
魔镜导航JS
*/
var hao={
	/**
		初始化魔镜导航
	*/
	site:function(hao_case,hao_site_style,hao_type){
		//初始化样式
		$('#'+hao_case).addClass(hao_site_style);
		//初始化网站内容和架构
		$('#'+hao_case).ready(function(e) {
            $.post('/mojing/ajax.php?'+dlz_utils.getRandom(1000),{ga:'hao_site',type:hao_type},function(onComplete){
				if(onComplete){
					//内容
					var hao_res='';
					//临时标记
					var hao_splite;
					//获取源
					var hao_site=$.parseJSON(onComplete);					
					for (var v in hao_site){
						//循环获取类						
						for(var k in hao_site[v]){
							hao_res+='<a href="http://'+hao_site[v][k]+'/?ping=mojing.org" target="_blank" title="'+k+'">'+k+'</a>';
						}
						//导航类型标记容器结尾						
						hao_splite='<div class="hao_item hao_item_'+v+'">'+hao_res+'</div>';
						//追加到页面
						//alert(hao_splite)
						$('#'+hao_case).append(hao_splite);
						//清空内容
						hao_res='';	
					}
					$('#'+hao_case).fadeIn(1000,function(){
						$(this).removeClass('common_hide');
					});
				}
			})
        });
	},
	/**
		力推资讯
	*/
	suggestNews:function(get_id,setIntervalTime){
		//获取力推资讯
		$.post('/mojing/ajax.php?'+dlz_utils.getRandom(1000),{ga:'hao_suggest'},function(onComplete){
			var get_source=$.parseJSON(onComplete);
			var res='';
			for(var i in get_source){
				for(var key in get_source[i]){
					res+='<p><a href="/eyes/ga/?ga='+get_source[i]['link']+'" target="_blank">'+get_source[i]['title']+'</a></p>';
				}
			}			
			$('#'+get_id).html(res);
		})
		//以滚动动画的方式显示出来
		var _plus=new dlz_plus();
		_plus.moveSlider({get_id:get_id,item_case:'p',setIntervalTime:setIntervalTime})
	}
}