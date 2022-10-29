var OriginTitle = document.title;
var titleTime;
// 动态title
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    document.title = ' Σ(っ °Д °;)っ不要走~';
    clearTimeout(titleTime);
  }
  else {
    document.title = '╰(*°▽°*)╯嘿嘿嘿～';
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 2000);
  }
});

// 创建复制提醒
function c_notify(title, message = '', type = 'success') {
  new Vue({
    data: function () {
      this.$notify({
        title,
        message,
        position: 'top-right',
        offset: 50,
        showClose: false,
        type
      });
      return { visible: false }
    }
  })
}
// 复制提醒
document.addEventListener("copy", function (e) {
  c_notify("嘿嘿嘿！复制成功", "若要转载请务必保留原文链接！~\(≥▽≤)/~  ")
})

// 自定义事件：分享事件，shareEvent在window中
var shareEvent = new CustomEvent('share', {
  detail: {},
});
window.addEventListener('share', function (event) {
  c_notify("嘿嘿嘿！复制本页链接地址成功")
});

// 自定义copy事件
var copyEvent = new CustomEvent('copy2', {
  detail: {},
});
window.addEventListener('copy2', function (event) {
  c_notify("嘿嘿嘿！复制成功", "若要转载请务必保留原文链接！~\(≥▽≤)/~  ")
});

// 侧边栏qq按钮
if (document.querySelector('.fa-qq')) {
  document.querySelector('.fa-qq').onclick = (e) => {
    e.stopPropagation()
    e.preventDefault()
    navigator.clipboard.writeText('1604069972')
    c_notify("复制QQ成功! ", '博主的QQ: 1604069972')
  }
}

// 禁止F12
document.onkeydown = function (event) {
  if (window.event && window.event.keyCode == 123) {
    event.preventDefault();
    c_notify('你干嘛~哎哟~', '不能打开哦', 'error')
    return false;
    // event.keyCode = 0;
    // event.returnValue = false;
  }
}