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
  f_2_interestBox :  baseUrl+'f_mypage/f_2_interestBox/f_2_interestBox.html',
  listBtnBox :  baseUrl+'all/listBtnBox.html',
  sideBox : baseUrl+'all/sideBox.html',
  footBox : baseUrl+'all/footBox.html'};

ImportFile('headBox',loadFile.headBox, true);
ImportFile('gnbBox' , loadFile.gnbBox, true);
ImportFile('f_2_interestBox' , loadFile.f_2_interestBox, true);
ImportFile('listBtnBox' , loadFile.listBtnBox, true);
ImportFile('sideBox', loadFile.sideBox, true);
ImportFile('footBox',loadFile.footBox, true);

})(this.jQuery);