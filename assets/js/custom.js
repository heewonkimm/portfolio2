$(function(){
    
    ScrollTrigger.matchMedia({
    // large
    "(min-width: 1024px)": function() {

        //로드//img timeline
        const loadAni = gsap.timeline();
        loadAni
        .to(".load_page .text_wrap", {duration:0.7, opacity:1, delay:0.5})
        .addLabel('a')
        .to(".load_page img.t1", {duration:0.3, opacity:1},'a')
        .to(".load_page img.t4", {duration:0.3, opacity:1},'a+0.06')
        .to(".load_page img.t1", {opacity:0},'a+1')
        .to(".load_page img.t7", {duration:0.3, opacity:1},'a+0.07')
        .to(".load_page img.t5", {duration:0.1, opacity:1},'a+15')
        .to(".load_page img.t2", {duration:0.3, opacity:1},'a+2')
        .to(".load_page img.t8", {duration:0.1, opacity:1},'a+15')
        .to(".load_page img.t3", {duration:0.1, opacity:1},'a+18')
        .to(".load_page img.t10", {duration:0.3, opacity:1},'a+0.08')
        .to(".load_page img.t11", {duration:0.1, opacity:1},'a+19')
        .to(".load_page img.t13", {duration:0.3, opacity:1},'a+0.09')
        .to(".load_page img.t9", {duration:0.1, opacity:1},'a+5')
        .to(".load_page img.t16", {duration:0.3, opacity:1},'a+0.10')
        .to(".load_page img.t6", {duration:0.1, opacity:1},'a+3')
        .to(".load_page img.t19", {duration:0.3, opacity:1},'a+0.12')
        .to(".load_page img.t15", {duration:0.1, opacity:1},'a+1')
        .to(".load_page img.t20", {duration:0.1, opacity:1},'a+18')
        .addLabel('b')
        .to(".load_page", {duration:0.5, display:"none"},'b')
        .to(".wrapper", {height:"initial", overflow:"visible"},'b+0.3')
        .addLabel('c')
        .to(".wrapper", {duration:1, opacity:1},'c')
        .to(".group_intro", {duration:0.6, scale:1},'c')

        //로드//thumb_wrap scroll
        gsap.to(".load_page .thumb_wrap", {duration:5, yPercent:-25});

        
        //헤더//updates_list slide down
        $('#updates_list').click(function() {
            $('.list_item').css('max-height','102px');
            $('.bg_area').addClass('on');
            $('.button_area .close_btn').css({"opacity":"1","z-index":"30"});
            $('.memoji_link').addClass('on');
        });
        $('#updates_close').click(function() {
            $('.list_item').css('max-height','8px');
            $('.bg_area').removeClass('on');
            $('.button_area .close_btn').css({"opacity":"0","z-index":"25"});
            $('.memoji_link').removeClass('on');
        });



        // navMotion.play()
        // navMotion.reverse() 이 두개를 활용해서 슬라이드 레프트 제어

        //헤더//nav slide left
        navMotion = gsap.timeline({
            paused:true,//실행이 안된 상태
            onComplete:function(){
                $('.group_nav').addClass('on');
            }
        })
        navMotion
        .addLabel('a')
        .to(".group_nav .second", 1, {x:-80, width:80, height:37, ease: Back.easeInOut},'a')
        .to(".group_nav .third", 1, {x:-161, width:80, height:37, ease: Back.easeInOut},'a')
        .to(".group_nav .second span, .group_nav .third span",{opacity:0},'a-=0.2');

        $('.nav_link.first').mouseover(function(){//호버시 navMotion.reverse()
            if($('.group_nav').hasClass('on')) {
                navMotion.reverse()
            }
        });

        //200px 이상 스크롤 시 navMotion.play();
        $(window).scroll(function(){
            curr = $(this).scrollTop();

            if(curr > 80){
                navMotion.play();
            }else{
                navMotion.reverse()
            }
        });


        //헤더//navUpdates sldie up
        updatesMotion = gsap.timeline({
            paused:true,
            onComplete:function(){
                $('.group_updates').addClass('on');
            }
        })
        updatesMotion
        .addLabel('a')
        .to(".group_updates .list_area", 1, {y: -145, ease: Back.easeInOut},'a')
        .to(".group_updates .more_btn", 0.3, {y: -30, opacity:1},'-=0.35');

        $('.group_updates .more_btn').click(function(e){
            if($('.group_updates').hasClass('on')){
                e.preventDefault();
                updatesMotion.reverse()
                $('.group_updates').removeClass('on')
            }
        });

        $(window).scroll(function(){
            curr = $(this).scrollTop();

            if(curr > 80){
                updatesMotion.play();
            }else{
                updatesMotion.reverse()
            }
        });


        //포트폴리오//scale
        thumbEl = document.querySelectorAll('.container .area_inner');
        thumbEl.forEach(l => {

            gsap.set(l,{scale:1.23})

            const pfAni = gsap.timeline({scrollTrigger: {
                trigger: l,
                start:"0 60%",
                end:"30% 60%",
                scrub: true,
                // markers: true,
                }});

            pfAni
            .to(l, {scale:1})
        });

    },
    // medium
    "(max-width: 1023px)": function() {

        //로드//img timeline
        const loadAni = gsap.timeline();
        loadAni
        .to(".load_page .text_wrap", {duration:1, opacity:1, delay:0.5})
        .to(".load_page .text_wrap", {duration:0.8, opacity:0, delay:0.6})
        .addLabel('b')
        .to(".load_page", {duration:0.5, display:"none"},'b')
        .to(".wrapper", {height:"initial", overflow:"visible"},'b+0.3')
        .addLabel('c')
        .to(".wrapper", {duration:1, opacity:1},'c')
        .to(".group_intro", {duration:0.6, scale:1},'c');


        //헤더 마우스 호버
        navMotion = gsap.timeline({
            paused:false,
            onComplete:function(){
                $('.group_nav').addClass('on');
            }
        })
        navMotion
        .addLabel('a')
        .to(".group_nav .second", 1, {x:-80, width:80, height:37, ease: Back.easeInOut},'a')
        .to(".group_nav .third", 1, {x:-161, width:80, height:37, ease: Back.easeInOut},'a')
        .to(".group_nav .second span, .group_nav .third span",{opacity:0},'a-=0.2');

        $('.nav_link').mouseover(function(){
            navMotion.reverse()
        });
        $('.nav_link').mouseout(function(){
            navMotion.play()
        });


        //헤더//updates_list slide down
        $('.group_updates .more_btn').click(function(e) {
            e.preventDefault();
            $('.group_updates .bg_area').addClass('on');
            $('.group_updates').addClass('on');
            $('.group_updates .button_area').addClass('on');
            $('.group_updates .close_btn').addClass('on');
            $('.group_updates .more_btn').addClass('on2');
            $('.group_updates .bg_area').addClass('on2');
        });
        $('.group_updates .close_btn').click(function(e) {
            e.preventDefault();
            $('.group_updates .bg_area').removeClass('on');
            $('.group_updates').removeClass('on');
            $('.group_updates .button_area').removeClass('on');
            $('.group_updates .close_btn').removeClass('on');
            $('.group_updates .more_btn').removeClass('on2');
            setTimeout(function(){
                $('.group_updates .bg_area').removeClass('on2');
            },600);
                
        });

    },
    // all
    "all": function() {
      
        gsap.registerPlugin(ScrollTrigger);
        
        
        //메인//intro Hover ani
        $(document).ready(function(){
            $('.spread').mouseover(function(){
                $(this).addClass('on');
                $(this).siblings().css('opacity','.1');
            });
            $('.spread').mouseout(function(){
                $(this).removeClass('on');
                $(this).siblings().css('opacity','1');
            });
        });
        
        
        //메인//intro ani
        gsap.to(".intro_wrap", {
            scale:0.85,
            scrollTrigger: {
            trigger:".sc_main",
            start:"0 top",
            end:"100% top",
            scrub:1,
            // markers: true,
        }});
        
        
        //포트폴리오//opacity
        imgEl = document.querySelectorAll('.thumb_area img');
        imgEl.forEach(l => {
        
            gsap.set(l,{opacity:0})
        
            const imgAni = gsap.timeline({scrollTrigger: {
                trigger: l,
                start:"0 60%",
                end:"35% 90%",
                scrub: true,
                // markers: true,
                }});
        
            imgAni
            .to(l, {opacity:1})
        });
        
        
        //전체//hover ani
        $(".container .area_inner").mouseover(function(){
            $(this).siblings(".pf_bg").css("opacity","1");
            $(".container").css("color","#000");
            $(".header").css("color","#000");
            $(".scroll_bg").addClass('on')
        });
        $(".container .area_inner").mouseout(function(){
            $(this).siblings(".pf_bg").css("opacity","0");
            $(".container").css("color","#f5f4ee");
            $(".header").css("color","#fff");
            $(".scroll_bg").removeClass('on')
        });

        lastWidth = window.innerWidth;
        $(window).resize(function(){
        if(window.innerWidth != lastWidth){
                location.reload();
                scrollTrigger.refresh();
        }
        lastWidth = window.innerWidth;
        });

        $(window).scroll(function(){
            ScrollTrigger.refresh(true)
        })

    }
  });


});