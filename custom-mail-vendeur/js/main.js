$(document).ready(function() {

    // Affuchage logo cocolis si different de mode de livraison cocolis
    setTimeout(() => {
        $('#wcfmmp_addon_inactive_notice_box').hide() ;

        console.log('loznding') ;
        $('#shipping_method li label:not(:contains("Livraison Cocolis"))').each(function () {
            $(this).children("svg").hide();
        });

        $(document).on('click','.shipping-calculator-form button',function(e){
            console.log('sendd') ;
            setTimeout(function () { 
                function1(); 
                function2(); 
            }, 5000, $(this));
            function function1() {
                $('#shipping_method li label:not(:contains("Livraison Cocolis"))').each(function () {
                     $(this).children("svg").hide();
                })
            }
    
            function function2() {
                $('#shipping_method li label:not(:contains("Livraison Cocolis"))').each(function () {
                    $(this).children("svg").hide();
                })
            }
        });

        setTimeout(() => {
            var request = new XMLHttpRequest();  
            request.open('POST', '/panier/', true);
            request.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200 || this.readyState == 4 && this.status == 403 ){
                    $('#shipping_method li label:not(:contains("Livraison Cocolis"))').each(function () {
                        $(this).children("svg").hide();
                    });
                }    
            };
            request.send();
        }, 2000);

        setTimeout(() => {
            var request = new XMLHttpRequest();  
            request.open('POST', '/?wc-ajax=update_order_review', true);
            request.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200 || this.readyState == 4 && this.status == 403 ){
                    $('#shipping_method li label:not(:contains("Livraison Cocolis"))').each(function () {
                        $(this).children("svg").hide();
                    });
                }    
            };
            request.send();
        }, 1000);

        $('#billing_postcode').on('change', function(){
            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200 || this.readyState == 4 && this.status == 500 || this.readyState == 4 && this.status == 403 ) {
                        $('#shipping_method li label:not(:contains("Livraison Cocolis"))').each(function () {
                            $(this).children("svg").hide();
                        });
                    }
                };
                xhttp.open("POST", "/?wc-ajax=update_order_review", true);
                xhttp.send();
            }, 3000);
        });

        $('#wcfmmp_user_location').on('change', function(){
            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200 || this.readyState == 4 && this.status == 500 || this.readyState == 4 && this.status == 403 ) {
                        $('#shipping_method li label:not(:contains("Livraison Cocolis"))').each(function () {
                            $(this).children("svg").hide();
                        });
                    }
                };
                xhttp.open("POST", "/?wc-ajax=update_order_review", true);
                xhttp.send();
            }, 3000);
        });

        $(document).on('click','.shipping_method',function(e){
            setTimeout(function () { 
                function1(); 
                function2(); 
            }, 4000, $(this));
            function function1() {
                $('#shipping_method li label:not(:contains("Livraison Cocolis"))').each(function () {
                     $(this).children("svg").hide();
                })
            }
    
            function function2() {
                $('#shipping_method li label:not(:contains("Livraison Cocolis"))').each(function () {
                    $(this).children("svg").hide();
                })
            }
        });

            
    }, 10);

    // custom mail vendeur
    $('#wcfm_modify_order_status').wrapInner('<span id="clicko" ></span>') ; 

    $('#wcfm_order_status_update_wrapper').on('change', 'select', function() {

        var index = $(this).find('option:selected').index();

        if (index == 3) {
            $('#wcfm_order_status_update_wrapper').after('<div id="getForm" ></div>') ;

            $.get( "/wp-content/plugins/custom-mail-vendeur/mail/mail-form.php", function( data ) {
                $( "#getForm" ).html( data );
            });

        } else {
            $('#getForm').hide() ;
        }

    });


    $('#clicko').on('click', function() {
        
        var email =  $('#custom-form-email')[0].value ;

        send = "email=" + email ;

        if( $('#wcfm_order_status')[0].value == "wc-completed" ) {

            var emailContenue =  $('#custom-form-email')[0].value ;

            var adresseEmail = $('.address').children('p').eq(1)[0].lastElementChild.innerHTML ;

            var detailsCommande = $('#orders_details_items_expander').html() ;

            send = "emailContenue=" + emailContenue + "&adresseEmail=" + adresseEmail + "&detailsCommande=" + detailsCommande ;

            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {

            };

            xhttp.open("POST", "/wp-content/plugins/custom-mail-vendeur/mail/controller-mail-vendeur.php", true);
            xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhttp.send(send);

            $('#custom-form-email')[0].value = '' ;
        
        }else{
            console.log('tsy completed') ;
        }

    })






})
