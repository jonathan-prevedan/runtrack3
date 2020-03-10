function showhide()
{
    var button = document.getElementById("button");
    
        if(button.textContent=="Apparition")
        {
            button.innerHTML="Disparition";
            var b = document.body;
            var element = document.createElement("article");
            var text = document.createTextNode("L'important n'est pas la chute, mais l'atterissage.");
            b.prepend(element);
            element.append(text);
        }
        else
        {
            button.innerHTML="Apparition";
            var element = document.getElementsByTagName("article")[0];
            element.parentNode.removeChild(element);
        }
}