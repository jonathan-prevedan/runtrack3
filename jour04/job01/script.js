$('#button').click(function()
{

$.ajax({
    url : 'expression.txt',
    method : 'POST',
    dataType : 'text',
    success: function(txt) {
         
        $("body").append('<p>' + txt + '</p>');
        console.log(txt);
        
    }
});
})