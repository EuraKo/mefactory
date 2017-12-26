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
  g_1_searchBox :  baseUrl+'g_search/g_1_searchBox.html',
  g_2_contentBox :  baseUrl+'g_search/g_2_contentBox.html',
  listBtnBox :  baseUrl+'all/listBtnBox.html',
  sideBox : baseUrl+'all/sideBox.html',
  footBox : baseUrl+'all/footBox.html'};

ImportFile('headBox',loadFile.headBox, true);
ImportFile('gnbBox' , loadFile.gnbBox, true);
ImportFile('g_1_searchBox' , loadFile.g_1_searchBox, true);
ImportFile('g_2_contentBox' , loadFile.g_2_contentBox, true);
ImportFile('listBtnBox' , loadFile.listBtnBox, true);
ImportFile('sideBox', loadFile.sideBox, true);
ImportFile('footBox',loadFile.footBox, true);

})(this.jQuery);