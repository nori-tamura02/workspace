/* jshint curly:true, debug:true */
/* globals $, firebase, location */

var num=0;

var currentUID=null;

$(document).ready(function() {

firebase.auth().onAuthStateChanged(function(user){
  if(user){
    console.log("状態：ログイン中");
    currentUID=user.uid;
    $(".visible-on-login").removeClass("hidden-block");
    $(".visible-on-login").addClass("visible-block");
    $(".visible-on-logout").removeClass("visible-block");
    $(".visible-on-logout").addClass("hidden-block");
    
    firebase.database().ref("mykey").on("value", function(snapshot){
      
      if(snapshot.val() != null && !isNaN(snapshot.val())){
        num=snapshot.val();
      }
      console.log("got value" + num);
    });
  }else{
    console.log("状態：ログアウト");
    currentUID=null;
    
    $(".visible-on-login").removeClass("visible-block");
    $(".visible-on-login").addClass("hidden-block");
    $(".visible-on-logout").removeClass("hidden-block");
    $(".visible-on-logout").addClass("visible-block");
    // firebase.auth().signInAnonymously()
    // .catch(function(error){
    //   console.error("ログインエラー", error);
    // });
  }
});
//イベントハンドラの登録
//Jqueryの操作が必要な処理をここに入れる
// $(document).ready(function(){
  //id="my-button"をクリックしたらmykeyの値を+1
  $("#my-button").click(function(){
    num++;
    console.log("set:"+num);
    firebase.database().ref("mykey").set(num);
  });
  
  //ログイン処理
  $("#login-button").click(function(){
    var mail=$("#user-mail").val();
    var pass=$("#user-pass").val();
    
    firebase.auth().signInWithEmailAndPassword(mail, pass)
    .then(function(user){
      console.log("ログインしました", user);
    })
    .catch(function(error){
      console.error("ログインエラー", error);
    });
  });
  
  //ログアウト処理
　$("#logout-button").click(function(){
　  firebase.auth().signOut() //ログアウト実行
　  .then(function(){         //ログアウトに成功した時の処理
　   console.log("ログアウトしました"); 
　  })
　  .catch(function(error){   //ログアウトに失敗した時の処理
　    console.log("ログインエラー", error);
　  });
　});
  
});
