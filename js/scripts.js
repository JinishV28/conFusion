$(document).ready(function ()
        {
            $("#mycarousel").carousel({interval:2500});
            $("#carouselButton").click(function(){
                if($("#carouselButton").children('span').hasClass('fa-pause'))
                {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children('span').removeClass('fa-pause');
                    $("#carouselButton").children('span').addClass('fa-play');
                }
               else if($("#carouselButton").children('span').hasClass('fa-play'))
               {
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children('span').removeClass('fa-play');
                    $("#carouselButton").children('span').addClass('fa-pause');
               }
            });

            $("#reserveButton").click(function(){
                $("#reserveModal").modal('toggle');
            });

            $("#cancelButton1, #crossButton1").click(function(){
                $("#reserveModal").modal('hide');
            });

            $("#loginButton").click(function(){
                $("#loginModal").modal('toggle');
            });

            $("#cancelButton2, #crossButton2").click(function(){
                $("#loginModal").modal('hide');
            });
        });