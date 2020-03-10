var string = "";
var b = document.body;
window.addEventListener('keydown', function(event)
{
    var key = event.key;
    string += key;
    if(string == "ArrowRightArrowLeftArrowDownArrowUp")
    {
        console.log('Bien joué!');
        var footer = document.createElement('footer');
        b.prepend(footer);
        var main = document.createElement('main');
        b.prepend(main);
        var header = document.createElement('header');
        var title = document.createTextNode('La Plateforme.io');
        var titlemain = document.createTextNode('Main');
        var titlefooter = document.createTextNode('Footer');
        b.prepend(header);
        header.append(title);
        main.append(titlemain);
        footer.append(titlefooter);
    }
})