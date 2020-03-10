var keylogger = document.getElementById('keylogger');
document.addEventListener('keydown', function (touche)
{
    var key = event.key;
    keylogger.value += key;

})
