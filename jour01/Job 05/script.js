function afficherjourssemaines()
{
 var jourssemaine = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];

 for(i = 0; i<7; i++)
 {
     document.write(jourssemaine[i],"<br/>");
 }
}
afficherjourssemaines();