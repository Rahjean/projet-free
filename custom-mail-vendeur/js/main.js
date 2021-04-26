$(document).ready(function() {

    localStorage.removeItem("email_custom"); 

    $('#wcfm_order_status option:nth-child(1)').on('click', function(){
        $('#getForm').remove() ;
    });

    $('#wcfm_order_status option:nth-child(2)').on('click', function(){
        $('#getForm').remove() ;
    });

    $('#wcfm_order_status option:nth-child(3)').on('click', function(){
        $('#getForm').remove() ;
    });

    $('#wcfm_order_status option:nth-child(4)').on('click', function(){

        $('#wcfm_order_status_update_wrapper').after('<div id="getForm" ></div>') ;

        $.get( "/wp-content/plugins/custom-mail-vendeur/mail/mail-form.php", function( data ) {
            $( "#getForm" ).html( data );
        });

    });

    $('#wcfm_order_status option:nth-child(5)').on('click', function(){
        $('#getForm').remove() ;
    });


    // Get data from textarea
    var selectTerminer = $('#wcfm_order_status')[0].value ;

    $('#wcfm_modify_order_status').on('click', function() {

        if(selectTerminer == "wc-completed") {

           var email =  $('#custom-form-email')[0].value ;

           var send = "email=" + email ;

           console.log('email : ' , send ) ;


           $.ajax({

                type: "POST",
                url: "/wp-content/plugins/woocommerce/templates/emails/customer-completed-order.php",
                data: send,
                
                success: function(data) {
                   console.log('data: ' , data ) ;
                },
                error: function() {
                    console.log('non envoyer') ;
                 },

            });

         }

    })



})
