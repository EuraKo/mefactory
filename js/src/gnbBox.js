(function($){

var gnbBox=$('#gnbBox');
var gnbDt=gnbBox.find('dt');
var gnbDd=gnbBox.find('dd');


   var a = 0;
gnbDt.find('a').on('click',function(e){
  e.preventDefault();
   gnbDd.slideToggle();  

});
})(this.jQuery);