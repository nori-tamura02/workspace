(function(){
  'use strict';

var comment = document.getElementById('comment');
var label   = document.getElementById('label');

var LIMIT = 20;
var WARING = 10;

label.innerHTML = LIMIT;

comment.addEventListener('keyup',function(){
  var remaining = LIMIT - this.value.length;
  label.innerHTML = remaining;
  if (remaining < WARING){
    label.className = 'waring';
  }else{
    label.className = '';
  }
});
})();
