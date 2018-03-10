// detailBox.js
(function($) {

  var num = 1;
  var more = 0;
  var send = 0;
  //택배금액 설정
  var sendPay = 2500; 

  // 1. 기본금액 만들기

  var  basePrice = $('dd.price').children('.sale').text();
  var  bp = parseInt( basePrice.replace(',','') );
  // console.log( bp );


  // 결과 체크
  var result = $('.result').find('span');
  var resultFn = function(num,more,send) {
    var count = num || 1, more = more, pay = send * sendPay;
    var resultPrice = bp*count + more + pay;
    var totalR = resultPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    result.text(totalR + "원");
    // console.log(num,more);
  };
  resultFn(num,more,send);

   // 2. 수량 입력(+,-) 기능과 해당금액 가져오기
   var amountBtn = $('dd.select').find('button');
   var countInput = $('#num');
   //console.log(amountBtn);

// 값 버튼으로 클릭

  //방법2 html문서에 class값 입력하여 사용
  amountBtn.on('click',function(e) {
    e.preventDefault();
    var btnI = $(this)[0];
    // console.log(btnI);
    if(btnI == $('.minus')[0]){ (num <= 1) ? num = 1 : num--;  }else{  (num >= 10) ? num = 10 : num++;  }
    countInput.val(num);
    resultFn(num,more,send);
  });

// 수량 직접입력
  countInput.on('change',function() {
    num = parseInt($(this).val());
    resultFn(num,more,send);
  });

// 옵션 선택(select태그)
  var optionProduct = $('#optionProduct');
  optionProduct.on('change',function(e) {
    // more =parseInt( $(this).children('option:selected').attr('data-price') );
    more = $(this).children('option:selected').data('price');
    if( more==undefined ){ more=0;}
    resultFn(num,more,send);
    // console.log(more)
  });

//  택배배송 여부 
  var sendQue = $('dd.send').find('input');
  sendQue.eq(0).attr('checked',true);

  $.each(sendQue,function(i,v) {
    $(this).on('change',function() {
      // console.log( $(this).prop('checked') , i);
      sendQue.attr('checked',false);
      sendQue.eq(i).attr('checked',true);
      // $(this).attr('checked',true);
      send = i;
      resultFn(num,more,send);
    });
  });

  // ---------------------------------------------
})(this.jQuery);