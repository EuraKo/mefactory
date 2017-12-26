(function($){

function ImportFile(makeFile, file,backgroundIf){

  var myDiv=wrap.append('<div class="'+ makeFile +'Wrap">');
var select=$('.'+makeFile+'Wrap');
select.load(file, function(){
   select.addClass('clearfix');
  var childrenBox=select.children();
// childrenBox.css({margin:'0 auto'});

  if(backgroundIf == true){
    var bgColor = childrenBox.css('backgroundColor');
    select.css({'backgroundColor':bgColor});
  }
});
}
  var wrap=$('#wrap');
  var baseUrl='../../html/src/';
  var loadFile={headBox : baseUrl+'all/headBox.html',
  gnbBox : baseUrl+'all/gnbBox.html',
  f_5_myPostBox :  baseUrl+'f_mypage/f_5_myPostBox/f_5_myPostBox.html',
  sideBox : baseUrl+'all/sideBox.html',
  footBox : baseUrl+'all/footBox.html'};

ImportFile('headBox',loadFile.headBox, true);
ImportFile('gnbBox' , loadFile.gnbBox, true);
ImportFile('f_5_myPostBox' , loadFile.f_5_myPostBox, true);
ImportFile('sideBox', loadFile.sideBox, true);
ImportFile('footBox',loadFile.footBox, true);

})(this.jQuery);