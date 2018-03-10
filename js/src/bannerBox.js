(function($){

// slide banner
var bannerBox=$('#bannerBox');
var banner=bannerBox.children('.banner');
var banUl=banner.children('ul');
var banLi=banUl.children('li');

var banClone = banLi.eq(0).clone(true);
// console.log(banClone);
banUl.append(banClone);

banLi=banUl.children('li');


var sideBtn = bannerBox.find('button');
var lbtn = sideBtn.eq(0);
var rbtn = sideBtn.eq(1);
var myIndex = 0;
// bannerBox.css({overflow:'hidden'});
banLiLength = banLi.length;
banUl.css({width:banLiLength*100+'%'});
var banW = banUl.innerWidth();

banLi.css({width:banW/banLiLength});

var bannerSlideI = function(i) {
  if(i < 0){ 
    i = banLiLength-1;
    banUl.stop().css({marginLeft:-i*100+'%'});
    banUl.stop().animate({marginLeft:-(i-1)*100+'%'});
    i--;
    }else if(i >= banLi.length-1){
    i = 0;
    banUl.stop().animate({marginLeft:-(banLi.length-1)*100+'%'},function() {
      banUl.stop().css({marginLeft:-i*100+'%'});
    });
  }else{
    banUl.stop().animate({marginLeft:-i*100+'%'});
  }
  console.log(i);
  myIndex = i; 

};


// - 2. 좌,우 버튼을 클릭시 배너의 내용이 나타나게 만들기
  sideBtn.on('click',function(e) {
    e.stopPropagation();
    e.preventDefault();
    var _this = $(this);
    // console.log(_this);
    // (_this[0] == lbtn[0]) ? console.log('left') : console.log('right');
    (_this[0] == lbtn[0]) ? myIndex-- : myIndex++;
    bannerSlideI(myIndex);
  });
})(this.jQuery);













