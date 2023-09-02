
$(function(){
    
    var col = false;
    var scrH  = $("#popup"),
    keyPopup=$("#KeyPopup").innerHeight(),
    offset=0;
    

        $(window).on("scroll", function(){
           
            offset = $(this).scrollTop();
           
        console.log(col);
        
        if(col == false){


            if(offset > 8800){
                
                scrH.addClass("active");
                
            }
        }


        if(offset < 8000){
                
            col = false;
            
        }
        
        });
    


    $("#closet").on("click", function(event){
        event.preventDefault();
        scrH.removeClass("active");
        col = true;
        
    
    });


    $("#GoForm").on("click", function(event){
        event.preventDefault();

        scrH.removeClass("active");
        col = true;
    });



});