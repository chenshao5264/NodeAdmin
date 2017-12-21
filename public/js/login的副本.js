$(function () {

    $("#form").attr('action', 'http://localhost:3000/login/submit');

    $("#btn_submit").click(function() {
        let strAccount = $("#account").val();
        let strPwd     = $("#password").val();

        if (strAccount != "" && strPwd != "") {
            $("#form").submit();
        }
        
    });

});