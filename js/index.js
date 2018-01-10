/**
 * Created by dell on 2017/12/2.
 */
$(function () {
    /*水平导航*/
    $(".header .header_top .top_right .nav>li").hover(function () {
        $(this).children(".nav_list").show()
        if($(".nav_list").find("div")){

            $(".header_lay").css("border-bottom","1px solid #ccc")
        }else {
            $(".header_lay").css("border-bottom","none")
        }

    },function () {
        $(this).children(".nav_list").hide()
        $(".header_lay").css("border-bottom","none")
    });

   /*垂直导航*/

    $(".ad1_nav").children().hover(function () {
        $(this).children(".v_list").show();
    },function () {
        $(this).children(".v_list").hide();
    });

    /*轮播图*/
    var imgNum=$(".header_ad1 .myCarousel .banner>ul li img").length;
    $imgWidth=parseInt($(".header_ad1 .myCarousel .banner>ul li img").css("width"));
    /*圆形按钮显示当前图片状态*/
    $(".header_ad1 .myCarousel .circle ul li").eq(0).css({"background":"#fff","border":"1px solid #666"});
    function showIndex(idx){
        for(j=0;j<imgNum;j++){
            if(idx==j){
                $(".header_ad1 .myCarousel .circle ul li").eq(idx).css({"background":"#fff","border":"1px solid #666"});
            }else{
                $(".header_ad1 .myCarousel .circle ul li").eq(j).css("background","#666");
            }
        }
    }
    /*左按钮*/
    $(".header_ad1 .myCarousel .btn .left").click(function () {
        var lx=parseInt($(".header_ad1 .myCarousel .banner>ul").css("left"));
        if(lx==-6135){
            lx=1227;
        }
        $(".header_ad1 .myCarousel .banner>ul").animate({"left":lx-1227+"px"});
        showIndex((lx-1227)/(-1227));
    });
    /*右按钮*/
    $(".header_ad1 .myCarousel .btn .right").click(function () {
        var lx=parseInt($(".header_ad1 .myCarousel .banner>ul").css("left"));
        if(lx==0){
            lx=-7362;
        }
        $(".header_ad1 .myCarousel .banner>ul").animate({"left":lx+1227+"px"});
        showIndex((lx+1227)/(-1227));
    });
    /*圆形按钮控制轮播*/
    $(".header_ad1 .myCarousel .circle ul li").click(function () {
        $index=$(this).index();
        showIndex($index);
        $(".header_ad1 .myCarousel .banner>ul").animate({"left":$index*(-1227)+"px"});

    });
    /*广告3的动画效果(未作出效果)*/
    $(".ad3_more").children(".lt").click(function(){
        $(".header_ad3 .ad3_content").children("ul").animate({
            left:"-1227px"
        },1000)
    })
    $(".ad3_more").children(".gt").click(function(){
        $(".header_ad3 .ad3_content").children("ul").animate({
            left:"0px"
        },1000)
    });
    /*家电页面选项卡*/
    $(".content .content_jd .jd_title .title_right>ul>.active").css({"color":"#ff7600","border-bottom":"2px solid #ff6700"})
    $(".content .content_jd .jd_title .title_right>ul>li").click(function () {

        var index=$(this).index(".content .content_jd .jd_title .title_right>ul>li")
        $(".content .content_jd .jd_box .jd_box_list .jd_box_right").eq(index).show().siblings().hide();
        $(".content .content_jd .jd_title .title_right>ul>li").eq(index).css({"color":"#ff7600","border-bottom":"2px solid #ff6700"}).siblings().css({"color":"#474747","border-bottom":"none"});
    })
    /*为你推荐*/
    /*$(".content_Carousel .Carousel_title .title_more .gt").click(function () {
        $(".content_Carousel .Carousel_content ul").animate({"left":"1227px"})
    })*/
    var page = 1;
    var i = 5;//每版五个图片
    //向右滚动
    $(".content_Carousel .Carousel_title .title_more .next").click(function () {
        $(this).css("color", "#ff6700").siblings().css("color", "#757575")
        var show=$(".content_Carousel .Carousel_content ul");
        var width=$(".content_Carousel .Carousel_content").width();
        var len=show.find("li").length;
        var pageCount=Math.ceil(len/i);
        if (!show.is(":animated")) {
            if (page == pageCount) {
                show.animate({left: '0px'}, "slow");
                page = 1;
            } else {
                show.animate({left: '-=' + width}, "slow");
                page++;
            }
        }
        if(page != pageCount){
            $(this).css("color", "#ff6700").siblings().css("color", "#757575")

        }else{
            $(this).css("color", "#e0e0e0").siblings().css("color", "#757575")
        }
        /*向左滚动*/
        $(".content_Carousel .Carousel_title .title_more .prev").click(function () {
            var show=$(".content_Carousel .Carousel_content ul");
            var width=$(".content_Carousel .Carousel_content").width();
            var len=show.find("li").length;
            var pageCount=Math.ceil(len/i);
            if (!show.is(":animated")) {
                if (page == 1) {
                    show.animate({left:'-='+ width*(pageCount-1)}, "slow");
                    page =pageCount;
                } else {
                    show.animate({left: '+=' + width}, "slow");
                    page--;
                }
            }
            if(page != 1){
                $(this).css("color", "#ff6700").siblings().css("color", "#757575")

            }else{
                $(this).css("color", "#e0e0e0").siblings().css("color", "#757575")
            }
        })
    })
    /*内容轮播*/
    /*图书轮播*/
    $(".content .content_sub .sub_content>ul>.sub_book>.btn").find(".right").click(function () {
        var le=$(".box_list1>li").length;
        for(i=0;i<le;i++){
            var lx=parseInt($(".sub_book .box .box_list1").css("left"));
            if(lx==-592){
                lx=-296;
            }
            $(".sub_book .box .box_list1").animate({"left":  lx-296+"px"},"fast");
        }
    });
    $(".content .content_sub .sub_content>ul>.sub_book>.btn").find(".left").click(function () {
        var le=$(".box_list1>li").length-1;
        for(i=1;i<le;i++){
            var lx=parseInt($(".sub_book .box .box_list1").css("left"));
            if(lx==0){
                lx=-296;
            }
            $(".sub_book .box .box_list1").animate({"left": lx+296+"px"},"fast");

        }
    });
    /*MIUI 主题*/
    $(".content .content_sub .sub_content>ul>.sub_item>.btn").find(".right").click(function () {
        var le=$(".box_list2>li").length;
        for(i=0;i<le;i++){
            var lx=parseInt($(".sub_item .box .box_list2").css("left"));
            if(lx==-888){
                lx=-592;
            }
            $(".sub_item .box .box_list2").animate({"left":  lx-296+"px"},"fast");
        }

    });
    $(".content .content_sub .sub_content>ul>.sub_item>.btn").find(".left").click(function () {
        var le=$(".box_list2>li").length-1;
        for(i=1;i<le;i++){
            var lx=parseInt($(".sub_item .box .box_list2").css("left"));
            if(lx==0){
                lx=-296;
            }
            $(".sub_item .box .box_list2").animate({"left": lx+296+"px"},"fast");

        }
    });

    /*游戏*/
    $(".content .content_sub .sub_content>ul>.sub_game>.btn").find(".right").click(function () {
        var le=$(".box_list3>li").length;
        for(i=0;i<le;i++){
            var lx=parseInt($(".sub_game .box .box_list3").css("left"));
            if(lx==-888){
                lx=-592;
            }
            $(".sub_game .box .box_list3").animate({"left":  lx-296+"px"},"fast");
        }

    });
    $(".content .content_sub .sub_content>ul>.sub_game>.btn").find(".left").click(function () {
        var le=$(".box_list3>li").length-1;
        for(i=1;i<le;i++){
            var lx=parseInt($(".sub_game .box .box_list3").css("left"));
            if(lx==0){
                lx=-296;
            }
            $(".sub_game .box .box_list3").animate({"left": lx+296+"px"},"fast");

        }
    });
    /*应用*/
    $(".content .content_sub .sub_content>ul>.sub_apply>.btn").find(".right").click(function () {
        var le=$(".box_list4>li").length;
        for(i=0;i<le;i++){
            var lx=parseInt($(".sub_apply .box .box_list4").css("left"));
            if(lx==-888){
                lx=-592;
            }
            $(".sub_apply .box .box_list4").animate({"left":  lx-296+"px"},"fast");
        }

    });
    $(".content .content_sub .sub_content>ul>.sub_apply>.btn").find(".left").click(function () {
        var le=$(".box_list4>li").length-1;
        for(i=1;i<le;i++){
            var lx=parseInt($(".sub_apply .box .box_list4").css("left"));
            if(lx==0){
                lx=-296;
            }
            $(".sub_apply .box .box_list4").animate({"left": lx+296+"px"},"fast");

        }
    });

    /*雷军与斯塔克视频弹出笼罩层*/
    $(".content .content_video .video_box ul .one").find("a").click(function () {
        $("#mask1").show()
    });
    /*视频笼罩层关闭*/
    $("#mask1 .video .mask_title .mask_title_right a").click(function () {
        $("#mask1").hide()
    });
    /*视频播放点击事件*/
    $("#mask1 .video .mask_content a .icon-bofang").click(function () {
        $(this).hide();
        $("#mask1 .video .mask_content video").show();
        $("#mask1 .video .mask_content img").hide()
        $("#mask1 .video .mask_content").css("background","#000");
        $('video').trigger('play');
        $('video').click(function() {
        if ($('video').trigger('pause')==true) {
            $('video').trigger('play');

        } else {
            $('video').trigger('pause');
            $("#mask1 .video .mask_content .icon-bofang").show()
        }
        })
    });
    /*小米Note 3 与吴亦凡视频弹出笼罩层*/
    $(".content .content_video .video_box ul .two").find("a").click(function () {
        $("#mask2").show()
    });
    /*视频笼罩层关闭*/
    $("#mask2 .video .mask_title .mask_title_right a").click(function () {
        $("#mask2").hide()
    })
    /*视频播放点击事件*/
    $("#mask2 .video .mask_content .icon-bofang").click(function () {
        $(this).hide();
        $("#mask2 .video .mask_content video").show();
        $("#mask2 .video .mask_content img").hide()
        $("#mask2 .video .mask_content").css("background","#000");
        $('video').trigger('play');
        $('video').click(function() {
            if ($('video').trigger('pause')==true) {
                $('video').trigger('play');

            } else {
                $('video').trigger('pause');
                $("#mask2 .video .mask_content .icon-bofang").show()
            }
        })
    });
    /*MIUI 9 理念视频视频弹出笼罩层*/
    $(".content .content_video .video_box ul .three").find("a").click(function () {
        $("#mask3").show()
    });
    /*视频笼罩层关闭*/
    $("#mask3 .video .mask_title .mask_title_right a").click(function () {
        $("#mask3").hide()
    });
    /*视频播放点击事件*/
    $("#mask3 .video .mask_content .icon-bofang").click(function () {
        $(this).hide();
        $("#mask3 .video .mask_content video").show();
        $("#mask3 .video .mask_content img").hide()
        $("#mask3 .video .mask_content").css("background","#000");
        $('video').trigger('play');
        $('video').click(function() {
            if ($('video').trigger('pause')==true) {
                $('video').trigger('play');

            } else {
                $('video').trigger('pause');
                $("#mask3 .video .mask_content .icon-bofang").show()
            }
        })
    });
    /*拍人更美的背后故事*/
    $(".content .content_video .video_box ul .four").find("a").click(function () {
        $("#mask4").show()
    });
    /*视频笼罩层关闭*/
    $("#mask4 .video .mask_title .mask_title_right a").click(function () {
        $("#mask4").hide()
    });
    /*视频播放点击事件*/
    $("#mask4 .video .mask_content .icon-bofang").click(function () {
        $(this).hide();
        $("#mask4 .video .mask_content video").show();
        $("#mask4 .video .mask_content img").hide()
        $("#mask4 .video .mask_content").css("background","#000");
        $('video').trigger('play');
        $('video').click(function() {
            if ($('video').trigger('pause')==true) {
                $('video').trigger('play');
                $("#mask4 .video .mask_content .icon-bofang").hide()
            } else {
                $('video').trigger('pause');
                $("#mask4 .video .mask_content .icon-bofang").show()
            }
        })
    });





});