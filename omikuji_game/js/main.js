(function() {
  'use strict';


  var btn = document.getElementById('btn');

  btn.addEventListener('click', function(){
    var results = ['大吉','中吉','凶','末吉'];
    var n = Math.floor(Math.random() * results.length);
    this.textContent = results[n];
    //if (n == 0) {
      //this.textContent = "大吉";
    //} else if (n == 1) {
      //this.textContent = "中吉";
    //} else {
      //this.textContent = "凶";
    //}
    //this.textContent = n;
  });

  btn.addEventListener('mousedown', function(){
    this.className = 'pushed';
  });

  btn.addEventListener('mouseup', function(){
    this.className = '';
  });
})();
