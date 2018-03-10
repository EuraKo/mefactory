(function($){

var gnbBox=$('#gnbBox');
var gnbDt=gnbBox.find('dt');
var gnbDd=gnbBox.find('dd');
var gnbH = parseInt(gnbBox.innerHeight());
console.log(gnbH);
var gnbDdH = parseInt(gnbDd.innerHeight());
console.log(gnbDdH);

$('head').append('<style>');
var titleTag = $('style');
titleTag.append('#gnbBox{position:relative;}\n#gnbBox:after{content:" "; display:block; width:100vw; height:0;position:absolute; left:50%;margin-left:-50vw; top:'+gnbH/1.5+'px; background-color:#fff; z-index:100;transition:all 400ms ease 200ms;}\n#gnbBox.view:after{ height:'+gnbDdH+'px; transition-delay:60ms}');



   var a = 0;

gnbDt.find('a').on('click',function(e){
  e.preventDefault();
  var _this = $(this);
   gnbDd.slideToggle();
   gnbBox.toggleClass('view');

 });
})(this.jQuery);