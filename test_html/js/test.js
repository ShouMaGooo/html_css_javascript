//Toggle chevrons


$(function () {
　// <span>タブにマウスが"hover"したら、以下の関数を実行
  $('span').hover(function() {

　　// hoverした<span>タブの次にある、<p>タブを表示
    $(this).next('p').show();
  }, function(){

　　// hoverをやめると、<span>タブの次にある<p>タブを隠す
    $(this).next('p').hide();

  });
// .hover(・・・)の終わり

});


