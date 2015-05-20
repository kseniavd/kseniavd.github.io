$(document).ready(function(){

	// подарить инвайт
	$('.post .infopanel input[name="send_invite"]').live('click', function(){
		var id = $(this).data('id');
		$.post('/json/users/give_invite_bypost/', { post_id: id }, function(json){
			if(json.messages=='ok'){
				$('#infopanel_post_'+id+' .send_invite_wrapper').html('<span style="color:green;">Инвайт отправлен</span>');
			}else{
				show_system_error(json);
			}
		},'json');
		return false;
	});

    // подарить инвайт
    $('.post .infopanel input[name="send_invite_plus"]').live('click', function(){
        var id = $(this).data('id');
        $.post('/json/users/give_invite_bypost_plus/', { post_id: id }, function(json){
            if(json.messages=='ok'){
                $('#infopanel_post_'+id+' .send_invite_wrapper').html('<span style="color:green;">Инвайт отправлен</span>');
            }else{
                show_system_error(json);
            }
        },'json');
        return false;
    });
	
	
	// удалить
	$('.post .infopanel input[name="delete"]').live('click', function(){
		var id = $(this).data('id');
		$.post('/json/sandbox/delete/', { post_id: id }, function(json){
			if(json.messages=='ok'){
				$('#post_'+id).fadeOut(500,function(){
					$(this).remove();
				});
			}else{
				show_system_error(json);
			}
		},'json');
		return false;
	});
	
	// опубликовать
	$('.post .infopanel input[name="publish"]').live('click', function(){
		var id = $(this).data('id');
		$.post('/json/sandbox/publish/', { post_id: id }, function(json){
			if(json.messages=='ok'){
				$('#post_'+id).fadeOut(500,function(){
					$(this).remove();
				});
			}else{
				show_system_error(json);
			}
		},'json');
		return false;
	});




})