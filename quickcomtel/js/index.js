$(function(){
  // let dArr = [1,2,3];
  // let as = dArr.map((value)=>{
  //   return `<a href="#">${value}</a>`
  // })
  // let html = as.join('') + $('body').html();
  // $('body').html(html);
  $('.go-home').click(function(){
    $(".index_include").attr("src", 'html/index_include.html');
  })
  $('.mobile-sidebar-main-top-right1').hide();
  $('.while-mobile-sidebar-open').hide();
  $('.menu-botton').click(function(){
    $('.while-mobile-sidebar-open').show();
    $('.mobile-sidebar-main-top-right').show();
    $('.mobile-sidebar-main-top-right1').hide();
    $('.mobile-sidebar-main-bottom').show();
    $('.mobile-sidebar-main-top-left').find('.mobile-sidebar-main-top-left-item').eq(0).find('i').addClass('fa-university').removeClass('fa-angle-left');
    $('.mobile-sidebar-main-top-left').find('.mobile-sidebar-main-top-left-item').eq(0).css({'border-bottom':'none','background-color':'#fff'});
    return false;
  })
  $('.login-botton').click(function(){
    return false;
  })
  $('.screen-wraper').click(function(){
    $('.while-mobile-sidebar-open').hide();
  })
  $(window).resize(function(){
    $('.while-mobile-sidebar-open').hide();
  })
  $('.mobile-sidebar-main-top-left-item').click(function(){
    $('.mobile-sidebar-main-top-right').hide();
    $('.mobile-sidebar-main-top-right1').show();
    $('.mobile-sidebar-main-bottom').hide();
    $('.mobile-sidebar-main-top-left').find('.mobile-sidebar-main-top-left-item').eq(0).find('i').addClass('fa-angle-left').removeClass('fa-university');
    $('.mobile-sidebar-main-top-left-item').css({'background-color':'#fff'});
    $('.mobile-sidebar-main-top-left').find('.mobile-sidebar-main-top-left-item').eq(0).css({'border-bottom':'1px solid #999'});
    $(this).css({'background-color':'#ededed'});
    var target = $(this).data('tgt');
    var targetJson = [];
    if(target == '1'){
      targetJson = [
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
      ]
    }else if(target == '2'){
      targetJson = [
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
      ]
    }else if(target == '3'){
      targetJson = [
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
      ]
    }else if(target == '4'){
      targetJson = [
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
      ]
    }else if(target == '5'){
      targetJson = [
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
      ]
    }
    var content = '';
    for(var i=0;i<targetJson.length;i++){
      var title = ''
      var list = '';
      title ="<div class='mobile-sidebar-main-top-right1-item-title'>" + targetJson[i].value + "</div>";
      for(var j=0;j<targetJson[i].list.length;j++){
        list +="<div class='able-click-link'>" + targetJson[i].list[j] + "</div>"
      }
      content += "<div class='mobile-sidebar-main-top-right1-item'>" + title + list + "</div>";
    }
    $('.mobile-sidebar-main-top-right1').html(content);

    $('.able-click-link').click(function () {
      $('.while-mobile-sidebar-open').hide();
      $(".index_include").attr("src", $(this).data('src'));
    })
  })
  $('.mobile-sidebar-main-top-right-item').click(function(){
    $('.mobile-sidebar-main-top-right').hide();
    $('.mobile-sidebar-main-top-right1').show();
    $('.mobile-sidebar-main-top-right1').html('');
    $('.mobile-sidebar-main-bottom').hide();
    $('.mobile-sidebar-main-top-left').find('.mobile-sidebar-main-top-left-item').eq(0).find('i').addClass('fa-angle-left').removeClass('fa-university');
    $('.mobile-sidebar-main-top-left-item').css({'background-color':'#fff'});
    $('.mobile-sidebar-main-top-left').find('.mobile-sidebar-main-top-left-item').eq(0).css({'border-bottom':'1px solid #999'});
    var target = $(this).data('tgt');
    $('.mobile-sidebar-main-top-left-item').eq(target*1 -1).css({'background-color':'#ededed'});
    var targetJson = [];
    if(target == '1'){
      targetJson = [
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
      ]
    }else if(target == '2'){
      targetJson = [
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
      ]
    }else if(target == '3'){
      targetJson = [
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
      ]
    }else if(target == '4'){
      targetJson = [
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
      ]
    }else if(target == '5'){
      targetJson = [
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
        {
          value:'All-in-One Accounts',
          list:[
            {
              value:'HSBC A',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC B',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC C',
              src:'html/creditCards.html'
            },
            {
              value:'HSBC D',
              src:'html/creditCards.html'
            },
          ]
        },
      ]
    }
    var content = '';
    for(var i=0;i<targetJson.length;i++){
      var title = ''
      var list = '';
      title ="<div class='mobile-sidebar-main-top-right1-item-title'>" + targetJson[i].value + "</div>";
      for(var j=0;j<targetJson[i].list.length;j++){
        list +="<div class='able-click-link' data-src='" + targetJson[i].list[j].src + "'>" + targetJson[i].list[j].value + "</div>"
      }
      content += "<div class='mobile-sidebar-main-top-right1-item'>" + title + list + "</div>";
    }
    $('.mobile-sidebar-main-top-right1').html(content);

    $('.able-click-link').click(function () {
      $('.while-mobile-sidebar-open').hide();
      $(".index_include").attr("src", $(this).data('src'));
    })
  })
  $('.mobile-sidebar-main-top-left').find('.mobile-sidebar-main-top-left-item').eq(0).click(function(){
    $('.mobile-sidebar-main-top-right').show();
    $('.mobile-sidebar-main-top-right1').hide();
    $('.mobile-sidebar-main-bottom').show();
    $('.mobile-sidebar-main-top-left').find('.mobile-sidebar-main-top-left-item').eq(0).find('i').addClass('fa-university').removeClass('fa-angle-left');
    $('.mobile-sidebar-main-top-left').find('.mobile-sidebar-main-top-left-item').eq(0).css({'border-bottom':'none'});
    $('.mobile-sidebar-main-top-left-item').css({'background-color':'#fff'});
  })
});