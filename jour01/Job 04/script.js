year = prompt("Année à tester ?");
resultat = bissextile(year);
document.write(resultat);

function bissextile(année)
{

 var jour = new Date(année,2,0).getDate();

    if(jour == 29)
    {
        return (true);
    }
    else
    {
        return (false);
    }

}

