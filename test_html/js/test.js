//Toggle chevrons


$(function () {
�@// <span>�^�u�Ƀ}�E�X��"hover"������A�ȉ��̊֐������s
  $('span').hover(function() {

�@�@// hover����<span>�^�u�̎��ɂ���A<p>�^�u��\��
    $(this).next('p').show();
  }, function(){

�@�@// hover����߂�ƁA<span>�^�u�̎��ɂ���<p>�^�u���B��
    $(this).next('p').hide();

  });
// .hover(�E�E�E)�̏I���

});


