$('#subscribe').click(function(){
	var x = $('#emailField');
	if (this.checked){
		x.css('display', 'block');
		console.log('checked')
	}
	else{
		x.css('display', 'none');
		console.log('not checked')
	}
});