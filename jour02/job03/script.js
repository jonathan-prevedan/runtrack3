
    var button = document.getElementById('button');
    button.onclick = addone;
    var compteur = document.getElementById('compteur');
    var x = 0;
    compteur.innerHTML = x;
    
        function addone()
    {
    x++;
    compteur.innerHTML = x;
    }