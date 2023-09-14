$(document).ready(function () {
    $('.tab').eq(0).addClass('active');
    $('.tab-pane').eq(0).addClass('active');

    $('.tab').click(function(){
        $('.tab').removeClass('active');
        $(this).addClass('active');
        
        var index = $(this).index();
        $('.tab-pane').removeClass('active');
        $('.tab-pane').eq(index).addClass('active');

    });
});
