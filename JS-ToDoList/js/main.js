$(function(){
    $("#btn").click(function(){
        var li = $('<li></li>');

        $(li).addClass('list-group-item');
        let val = $('#input').val();
        $(li).text(val);
       $(".list-group").append($(li))
    })
})