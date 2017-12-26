(function($){
var sideBox=$('#sideBox');
var sideBtn=sideBox.children('button');

sideBtn.on('click',function(e){
  e.preventDefault();
  // sideBox.css({right:'0'},function(){
  //   sideBox.removeAttr('style');
  // });
     var style = parseInt(sideBox.css('right'));
   console.log(style);

  //if ( parseInt(sideBox.css('right')) == 0) { //'0px'로 안쓸거면 정수로 치환시켜야지만됨parseInt(sideBox.css('right') == '0px')
    if (style == 0){
    // sideBox.removeClass('style');
     sideBox.removeAttr('style');
    
  }else{
    // sideBox.addClass('style');
     sideBox.css({right:'0'});
  }
});

})(this.jQuery);