$("#button").click(function(){
    $("p").remove();

    var t1 = ["img1","img2","img3","img4","img5","img6"];

    var t2 = [];

    var count = 0;

        for(i=0;i<=7;i++)
        {
            var shuffle = Math.floor((Math.random() * 6) + 1);
            $("#img"+ shuffle).appendTo($("#range"));
        }

    $("img").click(function(){

    t2.push($(this).attr('id'));
    console.log(t2);
    $(this).appendTo("#melange");

    if(t2.length==6)
    {
        for(i=0;i< t2.length;i++)
        {
            if(t2[i] == t1[i])
            {
                count++;
            }
        }

            if(count==6)
            {
                $("p").remove();
                $("body").append('<p> GGWP </p>');
                $("p").css('text-align','center');
                $("p").css('color','green');
            }
            else
            {
                $("p").remove();
                $("body").append('<p> Loose</p>');
                $("p").css('text-align','center');
                $("p").css('color','red');
            }
        
    }
});
});