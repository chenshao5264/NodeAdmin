$(function () {

    $("#btn_submit").click(function() { 
        var opts = {
            url: 'http://localhost:3000/login/submit',
            type: 'post',
            success: function(result) {
                if (result === "error:1" ) {
                    alert("帐号或者密码错误！")
                } else {
                    alert(result)
                }
                
            }
        }

        $("form").ajaxSubmit(opts);
        return false; 
    });

});