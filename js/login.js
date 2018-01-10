/**
 * Created by dell on 2017/12/14.
 */
$(function () {
    /*帐号登录与扫码登录切换*/
    $(".content .login_box .login_head .scan").click(function () {
        $(".content .login_box .box_acc").hide();
        $(".content .login_box .box_scan").show();
        $(".content .login_box .login_head .account").css("color","#757575");
        $(".content .login_box .login_head .scan").css("color","#ff6700")
    });
    $(".content .login_box .login_head .account").click(function () {
        $(".content .login_box .box_acc").show();
        $(".content .login_box .box_scan").hide();
        $(".content .login_box .login_head .account").css("color","#ff6700");
        $(".content .login_box .login_head .scan").css("color","#757575")
    });
    /*手机验证登录与帐号登录切换*/
    $(".content .login_box .box_acc .login_body .body_box .form_other .left a").click(function () {
        $(".content .login_box .box_acc .login_body .body_box").hide();
        $(".content .login_box .box_acc .login_body .box_tel").show();
    });
    $(".content .login_box .box_acc .login_body .box_tel .form_other .left a").click(function () {
        $(".content .login_box .box_acc .login_body .body_box").show();
        $(".content .login_box .box_acc .login_body .box_tel").hide();
    });



    /*账号登录界面提交按钮验证*/
    $("#sub").click(function () {
        var val=$(".content .login_box .box_acc .login_body .body_box #user").val();
        var vl=$(".content .login_box .box_acc .login_body .body_box #pwd").val();
        if(val==""){
            $(".content .login_box .box_acc .login_body .body_box #reg").show();
            $(".content .login_box .box_acc .login_body .body_box #reg").find("span").html("请输入帐号");
            return false;
        }else if((!val.match(/^1[34578]\d{9}$/||/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/))){
            $(".content .login_box .box_acc .login_body .body_box #reg").show();
            $(".content .login_box .box_acc .login_body .body_box #reg").find("span").html("用户名不正确");
            return false;

        } else if(val!=""&&vl==""){
            $(".content .login_box .box_acc .login_body .body_box #reg").show();
            $(".content .login_box .box_acc .login_body .body_box #user").val();
            $(".content .login_box .box_acc .login_body .body_box #reg").find("span").html("请输入密码");
            return false;
        }else if(!vl.match(/^[a-zA-Z0-9]{6,10}$/)){
            $(".content .login_box .box_acc .login_body .body_box #reg").show();
            $(".content .login_box .box_acc .login_body .body_box #reg").find("span").html("密码不正确");
            return false;
        }else{
            $(".content .login_box .box_acc .login_body .body_box #reg").hide();
            return true;
        }
    });
    /*手机登录界面提交按钮验证*/
    $(".content .login_box .box_acc .login_body .box_tel #sign").click(function () {
        var val = $(".content .login_box .box_acc .login_body .box_tel #tel").val();
        var vl = $(".content .login_box .box_acc .login_body .box_tel #num").val();
        if (val == "") {
            $(".content .login_box .box_acc .login_body .box_tel #re").show();
            $(".content .login_box .box_acc .login_body .box_tel #re").find("span").html("请输入手机号");
            return false;
        } else if (!val.match(/^1[34578]\d{9}$/)) {
            $(".content .login_box .box_acc .login_body .box_tel #re").show();
            $(".content .login_box .box_acc .login_body .box_tel #re").find("span").html("手机号格式不正确");
            return false;
        } else if (val != "" && vl == "") {
            $(".content .login_box .box_acc .login_body .box_tel #re").show();
            $(".content .login_box .box_acc .login_body .box_tel #tel").val();
            $(".content .login_box .box_acc .login_body .box_tel #re").find("span").html("请输入短信验证码");
            return false;
        } else {
            $(".content .login_box .box_acc .login_body .box_tel #re").hide();
            return true;
        }
    });

    /*倒计时发送短信*/
    $(".content .login_box .box_acc .login_body .box_tel .box_tel_ver span").hide()
        $(".content .login_box .box_acc .login_body .box_tel .box_tel_ver a").click(function () {
            var setTime;
            $(".content .login_box .box_acc .login_body .box_tel .box_tel_ver a").hide();
            $(".content .login_box .box_acc .login_body .box_tel .box_tel_ver span").show();
            var time=parseInt($(".content .login_box .box_acc .login_body .box_tel .box_tel_ver span").text());
            setTime=setInterval(function(){
            if(time<=0){
                clearInterval(setTime);
                $(".content .login_box .box_acc .login_body .box_tel .box_tel_ver span").css("color","#003ab5").html("重新发送");
                return;
            }
            time--;
            $(".content .login_box .box_acc .login_body .box_tel .box_tel_ver span").css("color","#999").text("重新发送("+time+"s)");
        },1000);
            $(".content .login_box .box_acc .login_body .box_tel .box_tel_ver span").css("color","#999").text("重新发送(60s)");

    });
});
