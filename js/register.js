/**
 * Created by dell on 2017/12/16.
 */
$(function () {
    //国家选择
    $(".wrap .layout .content .main .reg_box .reg_phone .country_choice .country_list .list >ul>li").find("em").hide();
    $(".wrap .layout .content .main .reg_box .reg_phone .country .country_info").on("click",function () {
        if($(".wrap .layout .content .main .reg_box .reg_phone .country_choice").css("display")=="none"){
            $(".wrap .layout .content .main .reg_box .reg_phone .country_choice").show();
        }else{
            $(".wrap .layout .content .main .reg_box .reg_phone .country_choice").hide();
        }

    });
    $(".wrap .layout .content .main .reg_box .reg_phone .country_choice .country_list .list >ul>li").click(function () {
        $(".wrap .layout .content .main .reg_box .reg_phone .country .country_info").find("p").html($(this).find("span").html());
        $(".wrap .layout .content .main .reg_box .reg_phone .reg_phone_tel .tel_box .con").find("span").html($(this).find("em").html());
        $(".wrap .layout .content .main .reg_box .reg_phone .country_choice").hide();
    });
    //验证手机号码
    $(".wrap .layout .content .main .reg_box .reg_phone .reg_phone_tel .reg_vel").hide()
    $(".wrap .layout .content .main .reg_box .reg_phone .reg_phone_tel .tel_box .inp>input").blur(function () {
        var val=$(this).val();
        if(val==""){
            $(".wrap .layout .content .main .reg_box .reg_phone .reg_phone_tel .reg_vel").show();
            $(".wrap .layout .content .main .reg_box .reg_phone .reg_phone_tel .reg_vel").find("span").html("请输入手机号!")
        }else if(!val.match(/^1[34578]\d{9}$/)){
            $(".wrap .layout .content .main .reg_box .reg_phone .reg_phone_tel .reg_vel").find("span").html("手机号码格式不正确!")
        }else{
            $(".wrap .layout .content .main .reg_box .reg_phone .reg_phone_tel .reg_vel").hide()
        }

    });

    /*提交按钮*/
    $(".wrap .layout .content .main .reg_box .reg_phone .reg_btn #btn").click(function () {
        var val=$(".wrap .layout .content .main .reg_box .reg_phone .reg_phone_tel .tel_box .inp #phone").val();
        if(val==""){
            $(".wrap .layout .content .main .reg_box .reg_phone .reg_phone_tel .reg_vel").show();
            $(".wrap .layout .content .main .reg_box .reg_phone .reg_phone_tel .reg_vel span").html("请输入手机号!");
            return false;
        }else if(!val.match(/^1[34578]\d{9}$/)){
            $(".wrap .layout .content .main .reg_box .reg_phone .reg_phone_tel .reg_vel").show();
            $(".wrap .layout .content .main .reg_box .reg_phone .reg_phone_tel .reg_vel span").html("手机号码格式不正确!");
            return false;
        }else{
            $(".wrap .layout .content .main .reg_box .reg_phone .reg_phone_tel .reg_vel").hide();
            val="";
            return true;
        }
    });

});

