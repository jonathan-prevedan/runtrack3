var ID = $('#id').val();
var lang=navigator.language.substr(0,2).toUpperCase();
var name = $('#nom').val();
 
$.ajax({
    url : 'pokemon.json',
method : 'POST',
dataType : 'json',
success: function(data) {

var tab=[];

        for(i=0; i< data.length; i++)
        {
            var nbr =0;

            for(j=0; j < data[i]["type"].length; j++)
          {
              if(tab.length == 0)
                {
                    tab.push(data[i]["type"][j]);
                }
                for(k=0; k < tab.length; k++)
                {
                    if(tab[k] == data[i]["type"][j])
                    {
                        nbr++;
                    }
                }
                
                if(nbr == 0)
                {
                    tab.push(data[i]["type"][j]);
                }		
          }  
        }

        for(p=0; p< tab.length; p++)
        {
            $("#type").append("<option>"+tab[p]+"</option>");
        }

        
        $('#filter').click(function()
{
         var ID = $('#id').val();
        var name = $('#nom').val();
            $.each(data, function(index,element)
            {
                console.log(ID);
                console.log(name);
                console.log(element["type"]);
                console.log($("#type"));
                if(element["type"])
                {
                        $("body").append("<br> Type :");
                            document.write(element["type"]);
                        $("body").append("<br> HP :");
                            document.write(element["base"]["HP"]);
                        $("body").append("<br> Attack :");
                            document.write(element["base"]["Attack"]);
                        $("body").append("<br> Defense :");
                            document.write(element["base"]["Defense"]);
                        $("body").append("<br> Sp. Attack :");
                            document.write(element["base"]["Sp. Attack"]);
                        $("body").append("<br> Sp. Defense :");
                            document.write(element["base"]["Sp. Defense"]);
                        $("body").append("<br> Speed :");
                            document.write(element["base"]["Speed"]);  
                }
                        if(ID == element["id"] || name == element["name"]["french"] || name == element["name"]["english"] || name == element["name"]["japanese"] || name == element["name"]["chinese"])
                        {
//                           DETECTION LANGUAGE                      //
                            if(lang == 'FR')
                            {
                                document.write(element["name"]["french"]);
                                $("body").append("<br> Type :");
                                    document.write(element["type"]);
                                $("body").append("<br> HP :");
                                    document.write(element["base"]["HP"]);
                                $("body").append("<br> Attack :");
                                    document.write(element["base"]["Attack"]);
                                $("body").append("<br> Defense :");
                                    document.write(element["base"]["Defense"]);
                                $("body").append("<br> Sp. Attack :");
                                    document.write(element["base"]["Sp. Attack"]);
                                $("body").append("<br> Sp. Defense :");
                                    document.write(element["base"]["Sp. Defense"]);
                                $("body").append("<br> Speed :");
                                    document.write(element["base"]["Speed"]);
                            }
                            
                            else if(lang == 'EN')
                            {

                                    document.write(element["name"]["english"]);
                                $("body").append("<br> Type :");
                                    document.write(element["type"]);
                                $("body").append("<br> HP :");
                                    document.write(element["base"]["HP"]);
                                $("body").append("<br> Attack :");
                                    document.write(element["base"]["Attack"]);
                                $("body").append("<br> Defense :");
                                    document.write(element["base"]["Defense"]);
                                $("body").append("<br> Sp. Attack :");
                                    document.write(element["base"]["Sp. Attack"]);
                                $("body").append("<br> Sp. Defense :");
                                    document.write(element["base"]["Sp. Defense"]);
                                $("body").append("<br> Speed :");
                                    document.write(element["base"]["Speed"]);
                            }
                            else if(lang == 'JA')
                            {
                                document.write(element["name"]["japan"]);
                                $("body").append("<br> Type :");
                                    document.write(element["type"]);
                                $("body").append("<br> HP :");
                                    document.write(element["base"]["HP"]);
                                $("body").append("<br> Attack :");
                                    document.write(element["base"]["Attack"]);
                                $("body").append("<br> Defense :");
                                    document.write(element["base"]["Defense"]);
                                $("body").append("<br> Sp. Attack :");
                                    document.write(element["base"]["Sp. Attack"]);
                                $("body").append("<br> Sp. Defense :");
                                    document.write(element["base"]["Sp. Defense"]);
                                $("body").append("<br> Speed :");
                                    document.write(element["base"]["Speed"]);
                            }
                            else if(lang == 'ZH')
                            {
                                document.write(element["name"]["japan"]);
                                $("body").append("<br> Type :");
                                    document.write(element["type"]);
                                $("body").append("<br> HP :");
                                    document.write(element["base"]["HP"]);
                                $("body").append("<br> Attack :");
                                    document.write(element["base"]["Attack"]);
                                $("body").append("<br> Defense :");
                                    document.write(element["base"]["Defense"]);
                                $("body").append("<br> Sp. Attack :");
                                    document.write(element["base"]["Sp. Attack"]);
                                $("body").append("<br> Sp. Defense :");
                                    document.write(element["base"]["Sp. Defense"]);
                                $("body").append("<br> Speed :");
                                    document.write(element["base"]["Speed"]);
                            }
                            else
                            {
                                document.write(element["name"]["english"]);
                                $("body").append("<br> Type :");
                                    document.write(element["type"]);
                                $("body").append("<br> HP :");
                                    document.write(element["base"]["HP"]);
                                $("body").append("<br> Attack :");
                                    document.write(element["base"]["Attack"]);
                                $("body").append("<br> Defense :");
                                    document.write(element["base"]["Defense"]);
                                $("body").append("<br> Sp. Attack :");
                                    document.write(element["base"]["Sp. Attack"]);
                                $("body").append("<br> Sp. Defense :");
                                    document.write(element["base"]["Sp. Defense"]);
                                $("body").append("<br> Speed :");
                                    document.write(element["base"]["Speed"]);
                            }
                            //      FIN DE DETECTION                    //


                        }
                    
        });
        });


}
})