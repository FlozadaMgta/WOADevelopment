$('#More').on('click',function(){
    $('.collection__description').toggleClass('Active');
  	$('.collection__description').animate({scrollTop:0}, 'slow');
    var Txt = $('#More').text();
    if(Txt == 'More'){
        $('#More').text('Less');
    }else{
        $('#More').text('More');
    }
});