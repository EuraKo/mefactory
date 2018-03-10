(function($){
var sideBox = $('#sideBox');
var sideBtn = sideBox.children('button');
var topBtn = sideBox.find('.top_btn') ;
var topBtnI = topBtn.find('I') ;

sideBtn.on('click',function(e){
  e.preventDefault();
  // sideBox.css({right:'0'},function(){
  //   sideBox.removeAttr('style');
  // });
  var _this = $(this);
     var style = parseInt(sideBox.css('right'));
   console.log(style);

  //if ( parseInt(sideBox.css('right')) == 0) { //'0px'로 안쓸거면 정수로 치환시켜야지만됨parseInt(sideBox.css('right') == '0px')
    if (style == 0){
      // 들어간상태
    // sideBox.removeClass('style');
     sideBox.removeAttr('style');
     _this.css({'background-position':'left'});
     topBtnI.css({'text-indent':'0'});
  }else{
    // 나올떄
    // sideBox.addClass('style');
     sideBox.css({right:'0'});
    _this.css({'background-position':'center'});
    topBtnI.css({'text-indent':'45%'});
  }
});

})(this.jQuery);