
$(document).ready(function(){
  console.log('getting height')
  var height;
  if($('.iframe-page').outerHeight()*1 != 0){
    height = ($('.iframe-page').outerHeight()*1 + 50).toFixed(0) + 'px';
    console.log('获得高度' + height)
    localStorage.setItem('height',height);
    console.log('设置高度localstorage')
    parent.$('.index_include').css('height',height);
    console.log('设置高度' + height)
  }else{
    height = localStorage.getItem('height');
    console.log('获取高度localstorage 设置高度' + height)
    localStorage.removeItem('height');
    console.log('删除高度localstorage')
    parent.$('.index_include').css('height',height);
    console.log('设置高度' + height)
  }
  $(window).resize(function(){
    if($('.iframe-page').outerHeight()*1 != 0){
      height = ($('.iframe-page').outerHeight()*1 + 50).toFixed(0) + 'px';
      parent.$('.index_include').css('height',height);
    }
    console.log('fa-fa-fa');
  })
})