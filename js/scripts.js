

window.onload = function() {
 
    
    $('#op_11').addClass("initial");
    $('#op_31').addClass("initial");

    
 




     // SWITCH content1 content2

     $('.alt_cont2').addClass( "not_visible" );
     $('.alt_cont4').addClass( "not_visible" );

     $('.lv_op').click(function(){

        $('#op_11').removeClass("initial");
        $('#op_31').removeClass("initial");
        
        var mId = $(this).attr('id');      
        
        if(mId == "op_12"){           
            $( "#op_12" ).removeClass( "op_active" );
            $( "#op_11" ).addClass( "op_active" )
            $( ".alt_cont1" ).removeClass( "visible" ).addClass( "not_visible" );
            $( ".alt_cont2" ).removeClass( "not_visible" ).addClass( "visible" );        
            
            
        } else if(mId == "op_11"){
            $( "#op_11" ).removeClass( "op_active" );
            $( "#op_12" ).addClass( "op_active" )
            $( ".alt_cont2" ).removeClass( "visible" ).addClass( "not_visible" );
            $( ".alt_cont1" ).removeClass( "not_visible" ).addClass( "visible" );

        } else if(mId == "op_32"){
            $( "#op_32" ).removeClass( "op_active" );
            $( "#op_31" ).addClass( "op_active" )
            $( ".alt_cont3" ).removeClass( "visible" ).addClass( "not_visible" );
            $( ".alt_cont4" ).removeClass( "not_visible" ).addClass( "visible" );  

        } else if(mId == "op_31"){
            $( "#op_31" ).removeClass( "op_active" );
            $( "#op_32" ).addClass( "op_active" )
            $( ".alt_cont4" ).removeClass( "visible" ).addClass( "not_visible" );
            $( ".alt_cont3" ).removeClass( "not_visible" ).addClass( "visible" ); 
        }

    });
};
