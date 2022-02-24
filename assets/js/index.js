$("del-btn").click(function(){
  console.log('inside 1');
  var favorite = [];
  $.each($("input[name='optionn']:checked"), function(){
    console.log('inside 2');
      favorite.push($(this).val());
  });
  for(let i of val)
{
  console.log('inside 3');
  var xhrRequest= new XMLHttpRequest();
  xhrRequest.open('post','/del-contact/?cValue=val[i]');
  xhrRequest.send();
}
});

console.log('inside');



