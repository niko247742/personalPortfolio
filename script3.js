////////////Nav Bar Color Transition/////////


    let nav = document.getElementById("navbar");

    window.onscroll = function() {
        if(window.pageYOffset > 200) {
            nav.style.background = "rgba(41, 44, 51, 0.5)";
        } else {
            nav.style.background = "transparent";
        }
    }


//////////////Photography Slide/////////////

let bannerStatus = 1;
let bannerTimer = 4000;   //4 sec in javascript

 window.onload = function () {
     bannerLoop();
}
let startBannerLoop = setInterval(function() {
    bannerLoop();
}, bannerTimer);

        //stops loop when mouse enters field
document.getElementById("main-banner").onmouseenter = function () {
    clearInterval(startBannerLoop);
}
        //restarts the loop when mouse leaves
document.getElementById("main-banner").onmouseleave = function () {
    startBannerLoop = setInterval(function() {
        bannerLoop();
    }, bannerTimer);
    }


function bannerLoop() {
    if (bannerStatus === 1) {
        document.getElementById("imgban2").style.opacity = "0";
        setTimeout(function(){
            document.getElementById("imgban1").style.right = "0px";
            document.getElementById("imgban1").style.zIndex = "1000";
            document.getElementById("imgban2").style.right = "-1200px";
            document.getElementById("imgban2").style.zIndex = "1100";
            document.getElementById("imgban10").style.right = "1200px";
            document.getElementById("imgban10").style.zIndex = "500";
        }, 1000);

        setTimeout(function(){
            document.getElementById("imgban2").style.opacity = "1";
        }, 1500);
        bannerStatus = 2;
    }
    else if (bannerStatus === 2) {

        document.getElementById("imgban3").style.opacity = "0";

        setTimeout(function(){

            document.getElementById("imgban2").style.right = "0px";
            document.getElementById("imgban2").style.zIndex = "1000";

            document.getElementById("imgban3").style.right = "-1200px";
            document.getElementById("imgban3").style.zIndex = "1100";

            document.getElementById("imgban1").style.right = "1200px";
            document.getElementById("imgban1").style.zIndex = "500";
    
        }, 1000);
        setTimeout(function(){
            document.getElementById("imgban3").style.opacity = "1";
        }, 1500);
        bannerStatus = 3;
    }
    else if (bannerStatus === 3) {

        document.getElementById("imgban4").style.opacity = "0";

        setTimeout(function(){

            document.getElementById("imgban3").style.right = "0px";
            document.getElementById("imgban3").style.zIndex = "1000";

            document.getElementById("imgban4").style.right = "-1200px";
            document.getElementById("imgban4").style.zIndex = "1100";

            document.getElementById("imgban2").style.right = "1200px";
            document.getElementById("imgban2").style.zIndex = "500";
    
        }, 1000);
        setTimeout(function(){
            document.getElementById("imgban4").style.opacity = "1";
        }, 1500);
        bannerStatus = 4;
    }
    else if (bannerStatus === 4) {

        document.getElementById("imgban5").style.opacity = "0";

        setTimeout(function(){

            document.getElementById("imgban4").style.right = "0px";
            document.getElementById("imgban4").style.zIndex = "1000";

            document.getElementById("imgban5").style.right = "-1200px";
            document.getElementById("imgban5").style.zIndex = "1100";

            document.getElementById("imgban3").style.right = "1200px";
            document.getElementById("imgban3").style.zIndex = "500";
    
        }, 1000);
        setTimeout(function(){
            document.getElementById("imgban5").style.opacity = "1";
        }, 1500);
        bannerStatus = 5;
    }
    else if (bannerStatus === 5) {

        document.getElementById("imgban6").style.opacity = "0";

        setTimeout(function(){

            document.getElementById("imgban5").style.right = "0px";
            document.getElementById("imgban5").style.zIndex = "1000";

            document.getElementById("imgban6").style.right = "-1200px";
            document.getElementById("imgban6").style.zIndex = "1100";

            document.getElementById("imgban4").style.right = "1200px";
            document.getElementById("imgban4").style.zIndex = "500";
    
        }, 1000);
        setTimeout(function(){
            document.getElementById("imgban6").style.opacity = "1";
        }, 1500);
        bannerStatus = 6;
    }
    else if (bannerStatus === 6) {

        document.getElementById("imgban7").style.opacity = "0";

        setTimeout(function(){

            document.getElementById("imgban6").style.right = "0px";
            document.getElementById("imgban6").style.zIndex = "1000";

            document.getElementById("imgban7").style.right = "-1200px";
            document.getElementById("imgban7").style.zIndex = "1100";

            document.getElementById("imgban5").style.right = "1200px";
            document.getElementById("imgban5").style.zIndex = "500";
    
        }, 1000);
        setTimeout(function(){
            document.getElementById("imgban7").style.opacity = "1";
        }, 1500);
        bannerStatus = 7;
    }
    else if (bannerStatus === 7) {

        document.getElementById("imgban8").style.opacity = "0";

        setTimeout(function(){

            document.getElementById("imgban7").style.right = "0px";
            document.getElementById("imgban7").style.zIndex = "1000";

            document.getElementById("imgban8").style.right = "-1200px";
            document.getElementById("imgban8").style.zIndex = "1100";

            document.getElementById("imgban6").style.right = "1200px";
            document.getElementById("imgban6").style.zIndex = "500";
    
        }, 1000);
        setTimeout(function(){
            document.getElementById("imgban8").style.opacity = "1";
        }, 1500);
        bannerStatus = 8;
    }
    else if (bannerStatus === 8) {

        document.getElementById("imgban9").style.opacity = "0";

        setTimeout(function(){

            document.getElementById("imgban8").style.right = "0px";
            document.getElementById("imgban8").style.zIndex = "1000";

            document.getElementById("imgban9").style.right = "-1200px";
            document.getElementById("imgban9").style.zIndex = "1100";

            document.getElementById("imgban7").style.right = "1200px";
            document.getElementById("imgban7").style.zIndex = "500";
    
        }, 1000);
        setTimeout(function(){
            document.getElementById("imgban9").style.opacity = "1";
        }, 1500);
        bannerStatus = 9;
    }
    else if (bannerStatus === 9) {

        document.getElementById("imgban10").style.opacity = "0";

        setTimeout(function(){

            document.getElementById("imgban9").style.right = "0px";
            document.getElementById("imgban9").style.zIndex = "1000";

            document.getElementById("imgban10").style.right = "-1200px";
            document.getElementById("imgban10").style.zIndex = "1100";

            document.getElementById("imgban8").style.right = "1200px";
            document.getElementById("imgban8").style.zIndex = "500";
    
        }, 1000);
        setTimeout(function(){
            document.getElementById("imgban10").style.opacity = "1";
        }, 1500);
        bannerStatus = 10;
    }
    else if (bannerStatus === 10) {

        document.getElementById("imgban1").style.opacity = "0";

        setTimeout(function(){

            document.getElementById("imgban10").style.right = "0px";
            document.getElementById("imgban10").style.zIndex = "1000";

            document.getElementById("imgban1").style.right = "-1200px";
            document.getElementById("imgban1").style.zIndex = "1100";

            document.getElementById("imgban9").style.right = "1200px";
            document.getElementById("imgban9").style.zIndex = "500";
    
        }, 1000);
        setTimeout(function(){
            document.getElementById("imgban1").style.opacity = "1";
        }, 1500);
        bannerStatus = 1;
    }
}


