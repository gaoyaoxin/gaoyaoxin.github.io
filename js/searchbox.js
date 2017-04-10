$(document).ready(function(){
 
 $(".search").focus(function(){
  $(this).stop(true,false).animate({width:"168px"},"slow");
  var navwidth = 720;
  var liwidth = navwidth/8;
  $("ul.nav li").animate({width:liwidth+"px"},"slow");
 })
 .blur(function(){
  $(this).animate({width:"88px"},"slow");
  var navwidth = 820;
  var liwidth = navwidth/8;
  $("ul.nav li").animate({width:liwidth+"px"},"slow");
 });
 
 //动态生成导航栏目的宽度
  
});