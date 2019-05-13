function setTooltip(btn, message) {
  btn.tooltip('hide')
    .attr('data-original-title', message)
    .tooltip('show');
}

function hideTooltip(btn) {
  setTimeout(function() {
    btn.tooltip('hide');
  }, 1000);
}

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
      var clipboard = new ClipboardJS('.btn-copy', {
          target: function(trigger) {
              return trigger.nextElementSibling;
          }
      });

      // 复制成功触发的事件
      clipboard.on('success', function(e) {
          console.info('Action:', e.action);
          console.info('Text:', e.text);
          console.info('Trigger:', e.trigger);
          setTooltip(btn, 'Copied');
          hideTooltip(btn);
          e.clearSelection();
      });

      $('.btn-copy').tooltip({
        trigger: 'click',
        placement: 'bottom'
      });
    }
    initCopyCode();
  }(window, document);
});