$(function() {
  /*页面载入完成后，创建复制按钮*/
  !function (e, t, a) { 
    /* code */
    var initCopyCode = function(){
      var copyHtml = '';
      copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
      //fa fa-globe可以去字体库替换自己想要的图标
copyHtml += '  <i class="fa fa-clipboard"></i><span>copy</span>';
      copyHtml += '</button>';
      $(".highlight .code pre").before(copyHtml);
      /*var clipboard = new ClipboardJS('.btn-copy', {
          target: function(trigger) {
              return trigger.nextElementSibling;
          }
      });*/
      var clipboard = new ClipboardJS('.btn', {
          text: function(trigger) {
              return trigger.getAttribute('aria-label');
          }
      });
      // 复制成功触发的事件
      clipboard.on('success', function(e) {
          console.info('Action:', e.action);
          console.info('Text:', e.text);
          console.info('Trigger:', e.trigger);
          e.clearSelection();
      });
    }
    initCopyCode();
  }(window, document);
});