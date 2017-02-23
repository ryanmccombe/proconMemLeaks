
0 && $(function(){
  console.log($('a'));
  $('a').on('click', function(event){
    console.log(event);
    event.preventDefault();
    var iframe = $('iframe', window.top.document);
    console.log(iframe.attr('src'));
    // $('iframe', window.top.document).remove();
    //window.setTimeout(function(){
      $('iframe', window.top.document).replaceWith('<iframe src="' + $(this).attr('xhref') + '" />');
    //}, 2000)
  });
});
