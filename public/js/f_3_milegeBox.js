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
  f_3_1_milegeBox :  baseUrl+'f_mypage/f_3_milegeBox/f_3_1_milegeBox.html',
  f_3_2_searchBox :  baseUrl+'f_mypage/f_3_milegeBox/f_3_2_searchBox.html',
  f_3_3_tableBox :  baseUrl+'f_mypage/f_3_milegeBox/f_3_3_tableBox.html',
  sideBox : baseUrl+'all/sideBox.html',
  footBox : baseUrl+'all/footBox.html'};

ImportFile('headBox',loadFile.headBox, true);
ImportFile('gnbBox' , loadFile.gnbBox, true);
ImportFile('f_3_1_milegeBox' , loadFile.f_3_1_milegeBox, true);
ImportFile('f_3_2_searchBox' , loadFile.f_3_2_searchBox, true);
ImportFile('f_3_3_tableBox' , loadFile.f_3_3_tableBox, true);
ImportFile('sideBox', loadFile.sideBox, true);
ImportFile('footBox',loadFile.footBox, true);

})(this.jQuery);