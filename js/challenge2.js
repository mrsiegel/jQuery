$('#useBilling').click(function() {
    var home = $('#home');
    console.log(home);
	if ($(this).is(':checked')){
		home.val($('#billing').val());
        home.prop('disabled', true);
    }
	else {
		home.val('');
        home.prop('disabled', false);
    }
	});