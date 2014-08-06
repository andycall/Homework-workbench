$(function(){
        $(".banner").unslider({
            speed: 500,               //  The speed to animate each slide (in milliseconds)
            delay: 2000,              //  The delay between slide animations (in milliseconds)
            complete: function() {},  //  A function that gets called after every slide animation
            keys: true,               //  Enable keyboard (left, right) arrow shortcuts
            dots: true,               //  Display dot navigation
            fluid: false              //  Support responsive design. May break non-responsive designs
        });


        $.fn.formCheck = function(){
            var form = $(this),
                self = this,
                username = form.find("input[name='username']"),
                password = form.find("input[name='password']"),
                flag;
                //checkusername = /(\d{10})|(\w+@\w+\.com)/;

            form.on('submit', function(e){

                flag = true;

                //if(!checkusername.test(username.val())){
                //    username.css({
                //        "border" : "1px solid red"
                //    });

//                    flag = false;
//                }
                if(password.val() === ""){
                    password.css({
                        "border" : "1px solid red"
                    });

                    flag = false;
                }

                if(!flag){
                    return false;
                }

                username.val(username.val().substring(0, 50));
                password.val(password.val().substring(0, 50));

                $.post(
                    "index.php/Home/Index/login",
                    {
                      "username" :username.val(),
                      "password" :password.val()
                    },
                    function(data){
                        var res = data;
                        alert(res.Message);
                        if(res.Code == 200) window.location.href="index.php";
                    }
                );
                return false;
            });

        };

        var login = $("#login"),
            register = $("#register"),
            login_form = $('#login_form'),
            close = $("#close");

        login.on('click', function(){
            login_form.css({
                "top" : "65px"
            });
        });

        close.on('click', function(){
            login_form.css({
                "top" : "-600px"
            });
        });

        login_form.formCheck();

});