$( document ).ready(function() {

$('.contact .email').hide();

// $('.contact').on('click', 'button', function(){
//   $(this).find('.email').slideDown();
// }
//
// $('.contact .email').on('click', function(){
//   $(this).closest('.email').find('p').show();
//












$('.faceText').on('mouseenter', 'li', function(){
  speedVideo(5);
});

//lag
//could i do event handler starting with var that isn't $

$('.faceText').on('mouseleave', 'li', function(){
  speedVideo(0.1);
});



var speedVideo = function(speed){
  // grab video wihtout jQuery:
 // document.getElementsByTagName("video")[0];
($('video')[0]).playbackRate = speed;
$(this).toggleClass('highlighted');

};

//
// why cant event handle this $('.faceText li').text()--just the text
//








});
