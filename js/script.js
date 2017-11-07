$(document).ready(function(){

  $("button#day").click(function(){
    $("body").removeClass();
    $("body").addClass("daytime");
  });

  $("button#night").click(function(){
    $("body").removeClass();
    $("body").addClass("nighttime");
  });
});
