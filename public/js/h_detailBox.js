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
  h_1_contentBox : baseUrl+'h_detail/h_1_contentBox.html',
  h_2_starBox : baseUrl+'h_detail/h_2_starBox.html',
  h_3_photoReBox : baseUrl+'h_detail/h_3_photoReBox.html',
  listBtnBox :  baseUrl+'all/listBtnBox.html',
  sideBox : baseUrl+'all/sideBox.html',
  footBox : baseUrl+'all/footBox.html'};

  ImportFile('headBox',loadFile.headBox, true);
  ImportFile('gnbBox' , loadFile.gnbBox, true);
  ImportFile('h_1_contentBox' , loadFile.h_1_contentBox, true);
  ImportFile('h_2_starBox' , loadFile.h_2_starBox, true);
  ImportFile('h_3_photoReBox' , loadFile.h_3_photoReBox, true);

  ImportFile('listBtnBox' , loadFile.listBtnBox, true);
  ImportFile('sideBox', loadFile.sideBox, true);
  ImportFile('footBox',loadFile.footBox, true);
})(this.jQuery);