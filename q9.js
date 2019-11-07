$('#create').on('click', function(){

	if(($('#check1').prop('checked')) && ($('#check2').prop('checked')) && ($('#check3').prop('checked')){
		$('#ol1').append('<li>black</li>');
	}
});


$('#delete').on('click', function(){


});