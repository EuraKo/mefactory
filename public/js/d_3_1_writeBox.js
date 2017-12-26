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
  d_3_1_1_typeBox :  baseUrl+'d_community/d_3_1_write/d_3_1_1_typeBox.html',
  d_3_1_2_writeBox :  baseUrl+'d_community/d_3_1_write/d_3_1_2_writeBox.html',
  d_3_1_3_alarmBox :  baseUrl+'d_community/d_3_1_write/d_3_1_3_alarmBox.html',
  d_3_1_4_writeBtnBox :  baseUrl+'d_community/d_3_1_write/d_3_1_4_writeBtnBox.html',

  sideBox : baseUrl+'all/sideBox.html',
  footBox : baseUrl+'all/footBox.html'};

ImportFile('headBox',loadFile.headBox, true);
ImportFile('gnbBox' , loadFile.gnbBox, true);
ImportFile('d_3_1_1_typeBox' , loadFile.d_3_1_1_typeBox, true);
ImportFile('d_3_1_2_writeBox' , loadFile.d_3_1_2_writeBox, true);
ImportFile('d_3_1_3_alarmBox' , loadFile.d_3_1_3_alarmBox, true);
ImportFile('d_3_1_4_writeBtnBox' , loadFile.d_3_1_4_writeBtnBox, true);

ImportFile('sideBox', loadFile.sideBox, true);
ImportFile('footBox',loadFile.footBox, true);

})(this.jQuery);