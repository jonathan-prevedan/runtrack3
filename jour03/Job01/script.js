    $("#button").click(function(){  
        if($('#supr').length)
        {
            return;
        }
        else
        {
            $("body").append('<p id ="text">le $ est un bon élément monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la classe pour cacher cet élément.</p>');
            $("body").append('<button id="supr">Disparaitre</button>');

            $("#supr").click(function(){
                $("#text").remove();
                $("#supr").remove();
            })
        }
    })
