$(function(){
    // visual(slide)
    var n=0;//번호변수
    var dis=0;
    var setIn;
    var s=$(".slide li");
    var w=s.width();
    // console.log(w);1920
    dis=n*(-1)*w;
    // console.log(dis);
    // .arrow .next, .prev

    $(".next").click(function(e){
        e.preventDefault();
        if(n<4){
            n++;
        }
        else{
            n=0;
        }
        sMoving();
    });

    $(".prev").click(function(e){
        e.preventDefault();
        if(n>0){
            n--;
        }
        else{
            n=4;
        }
        sMoving();
    });
    $(".paging li").click(function(e){
        e.preventDefault();
        n=$(this).index();
        sMoving();
    });

    function sMoving(){
        dis=n*(-1)*w;
        $(".slide").css({marginLeft: dis});
        $(".paging li").removeClass("on");
        $(".paging li").eq(n).addClass("on");
    }
    // setInterval, 함수제작
    function timer(){
        setIn=setInterval(function(){
            /*
            1번 방식
            if(n<4){
                n++;
            }
            else{
                n=0;
            }
            sMoving();*/
            // 2번 방식
            n++;
            if(n==s.length){
                n=0;
            }
            $(".paging li").eq(n).trigger("click");
           
        },3000);
    }
    timer();
    $(".auto a").click(function(){
       
        if($(this).hasClass("pause")){//true
            $(".auto a.pause").css({'display':'none'});
            $(".auto a.play").css({'display':'block'});
            clearInterval(setIn);
        }
        else if($(this).hasClass("play")){//false
            $(".auto a.pause").css({'display':'block'});
            $(".auto a.play").css({'display':'none'});
            timer();
        }
    });


    // alliance_wrap
    var aL=$(".alliance_list>ul>li");
    var tot=aL.length;//53개
    // console.log(tot);
    var ary=new Array();

    /* 배열을 생성하는 법
    var ary1=[]
    var ary2={}
    var ary3=new Array()
    .pop() 마지막요소 제거
    .push() 마지막에 요소 추가
    .shift() 첫번째 요소 제거
    .unshift() 첫번째에 요소 추가
    .remove(); 선택한 요소를 html상에서 완전 제거
    .clone(); 복제
    */
   for(var i=0;i<tot;i++){
        ary.push(aL.eq(i).clone().wrapAll('<div></div>'))
   }
   $(".alliance_wrap>.tab>ul>li>a").click(function(e){
        e.preventDefault();
        $(".alliance_wrap>.tab>ul>li>a").parent().removeClass("on");
        $(this).parent().addClass("on");
        $(".alliance_list").find("li").remove();

        if($(this).parent().hasClass("all")){
            for(var i=0;i<tot;i++){
                $(".alliance_list").find("ul").append(ary[i]);
            }
            
        }
        else if($(this).parent().hasClass("ent")){
            for(var i=0;i<6;i++){
                $(".alliance_list").find("ul").append(ary[i]);
            }
            
        }
        else if($(this).parent().hasClass("shop")){
            for(var i=6;i<16;i++){
                $(".alliance_list").find("ul").append(ary[i]);
            }
            
        }
        else if($(this).parent().hasClass("eat")){
            for(var i=16;i<30;i++){
                $(".alliance_list").find("ul").append(ary[i]);
            }
            
        }
        else if($(this).parent().hasClass("travel")){
            for(var i=30;i<33;i++){
                $(".alliance_list").find("ul").append(ary[i]);
            }
            
        }
        else if($(this).parent().hasClass("life")){
            for(var i=33;i<53;i++){
                $(".alliance_list").find("ul").append(ary[i]);
            }
            
        }
        hov();//함수호출
   });
   
   hov();//함수호출

   function hov(){
        $(".alliance_list>ul>li").hover(function(){
            $(this).removeClass("pc");
            $(this).addClass("on");
            if($(this).is(":nth-child(6n)")){
                $(this).addClass("pc")
            }
        },function(){
            $(this).removeClass("on");
        });
    }
});