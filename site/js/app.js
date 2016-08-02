$(document).ready(function(){
    
    $('#button').click(function(){
      var add = $("input[name=things]").val();
      $('.list').append('<div class="item">' + add +"</div>");
    });
    $(document).on('click','.item',function(){
      $(this).toggleClass("cancel");
    });
    $(document).on('dblclick','.item',function(){
      $(this).remove();
    });
});