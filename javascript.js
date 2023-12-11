window.addEventListener("mousemove",function(detail){
    var rect=document.querySelector(".rect");

    var movement=gsap.utils.mapRange(
    0,
    window.innerWidth,
    200+rect.getBoundingClientRect().width/2,
    window.innerWidth-(200+rect.getBoundingClientRect().width/2),
    detail.clientX
 );
    gsap.to(rect,{
        left:movement,
        ease:Power3,
    });
});