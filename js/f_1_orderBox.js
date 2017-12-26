(function($){

function ImportFile(makeFile, file,backgroundIf){

  var myDiv=wrap.append('<div class="'+ makeFile +'Wrap">');
var select=$('.'+makeFile+'Wrap');
select.load(file, function(){
  var childrenBox=select.children();

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
  f_1_1_orderBox :  baseUrl+'f_mypage/f_1_orderBox/f_1_1_orderBox.html',
  f_1_2_processBox :  baseUrl+'f_mypage/f_1_orderBox/f_1_2_processBox.html',
  f_1_3_periodBox :  baseUrl+'f_mypage/f_1_orderBox/f_1_3_periodBox.html',
  f_1_4_tableBox :  baseUrl+'f_mypage/f_1_orderBox/f_1_4_tableBox.html',
  sideBox : baseUrl+'all/sideBox.html',
  footBox : baseUrl+'all/footBox.html'};

ImportFile('headBox',loadFile.headBox, true);
ImportFile('gnbBox' , loadFile.gnbBox, true);
ImportFile('f_1_1_orderBox' , loadFile.f_1_1_orderBox, true);
ImportFile('f_1_2_processBox' , loadFile.f_1_2_processBox, true);
ImportFile('f_1_3_periodBox' , loadFile.f_1_3_periodBox, true);
ImportFile('f_1_4_tableBox' , loadFile.f_1_4_tableBox, true);
ImportFile('sideBox', loadFile.sideBox, true);
ImportFile('footBox',loadFile.footBox, true);

})(this.jQuery);