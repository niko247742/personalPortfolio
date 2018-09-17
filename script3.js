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

function bannerLoop() {
    if (bannerStatus === 1) {
        document.getElementById("imgban2").style.opacity = "0";
        setTimeout(function(){
            document.getElementById("imgban1").style.right = "0px";
            document.getElementById("imgban1").style.zIndex = "1000";
            document.getElementById("imgban2").style.right = "-1200px";
            document.getElementById("imgban2").style.zIndex = "1100";
            document.getElementById("imgban3").style.right = "1200px";
            document.getElementById("imgban3").style.zIndex = "500";
        }, 500);

        setTimeout(function(){
            document.getElementById("imgban2").style.opacity = "1";
        }, 1000);
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
    
        }, 500);
        setTimeout(function(){
            document.getElementById("imgban3").style.opacity = "1";
        }, 1000);
        bannerStatus = 3;
    }
    else if (bannerStatus === 3) {

        document.getElementById("imgban1").style.opacity = "0";

        setTimeout(function(){

            document.getElementById("imgban3").style.right = "0px";
            document.getElementById("imgban3").style.zIndex = "1000";

            document.getElementById("imgban1").style.right = "-1200px";
            document.getElementById("imgban1").style.zIndex = "1100";

            document.getElementById("imgban2").style.right = "1200px";
            document.getElementById("imgban2").style.zIndex = "500";
    
        }, 500);
        setTimeout(function(){
            document.getElementById("imgban1").style.opacity = "1";
        }, 1000);
        bannerStatus = 1;
    }
}


     // document.getElementById("imgban3").style.right = "-1200px";
            // document.getElementById("imgban3").style.zIndex = "1200";

            // document.getElementById("imgban4").style.right = "-1200px";
            // document.getElementById("imgban4").style.zIndex = "1300";


            // document.getElementById("imgban5").style.right = "-1200px";
            // document.getElementById("imgban5").style.zIndex = "1400";

            // document.getElementById("imgban6").style.right = "-1200px";
            // document.getElementById("imgban6").style.zIndex = "1500";

            // document.getElementById("imgban7").style.right = "-1200px";
            // document.getElementById("imgban7").style.zIndex = "1600";

            // document.getElementById("imgban8").style.right = "-1200px";
            // document.getElementById("imgban8").style.zIndex = "1700";

            // document.getElementById("imgban9").style.right = "-1200px";
            // document.getElementById("imgban9").style.zIndex = "500";