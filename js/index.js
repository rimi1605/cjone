// header, footer
$(function(){
    $("dd.cs").click(function(){

        /*hasClass('클래스이름) 클래스가 있으면 true, 없으면 false가 나온다. 
         가상클래스로 인식이 되어 있기 때문에 false 가 나온다, if문에 참, 거짓을 만들기 위해 ! 가 조건에 설정이 된다.
        */ 
        if(!$(this).hasClass("on")){
            $(this).addClass("on");
            $(this).children("a").addClass("on");
            $(".cscenter").addClass("on");
            $("dd.search").removeClass("on");
            $("#search").stop().slideUp();
        }else{
            $(this).removeClass("on");
            $(this).children("a").removeClass("on");
            $(".cscenter").removeClass("on");
        }
    });

    $(".mainmenu li, #subbg").hover(function(){
        $(".submenu").show();
        $("#subbg").show();
        $("#search").stop().slideUp();
        $("dd.cs").removeClass("on");
        $(".cscenter").removeClass("on");
    },function(){
        $(".submenu").hide();
        $("#subbg").hide();

    });
    // 검색
    $("dd.search").click(function(){
        if(!$(this).hasClass("on")){
            $(this).addClass("on");
            $("#search").stop().slideDown();
        }else{
            $(this).removeClass("on");
            $("#search").stop().slideUp();
        }
    });
    // footer
    $(".familysite>a").click(function(e){
        e.preventDefault();
        $(this).stop().toggleClass("on");
        // $(this).next().stop().toggleClass("on");
        $(this).siblings().stop().toggleClass("on");
    });
});