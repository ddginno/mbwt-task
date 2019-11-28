/*var buttons = document.getElementsByClassName(
  "m-001-button-container__sign-in"
);

Array.from(buttons).forEach(function () {
  button.addEventListener("click", function() {
    TweenMax.to(".m-001-login-box", 1.2, {
      yPercent: -200,
      ease: Power0.easeNone
    });
    TweenMax.to(".m-001-output-block", 1.2, {
      opacity: 1,
      scale: 1,
      delay: 1,
      ease: Elastic.easeOut.config(0.8, 0.3)
    });
    TweenMax.to(".m-001-output-block__headline", 1.2, {
      opacity: 1,
      delay: 1.5,
      ease: Power0.easeNone
    });
  });
});
*/
//$("button");

function init2() {
  var $signIn = $(".m-001-button-container__sign-in");
  var $loginBox = $(".m-001-login-box");
  var $outputBlock = $(".m-001-output-block");
  var $outputBlockHeadline = $(".m-001-output-block__headline");

  function animateLoginBox(ev) {
    TweenMax.to($loginBox, 1.2, {
      yPercent: -200,
      ease: Power0.easeNone
    });

    TweenMax.to($outputBlock, 1.2, {
      opacity: 1,
      scale: 1,
      delay: 1,
      ease: Elastic.easeOut.config(0.8, 0.3)
    });

    TweenMax.to($outputBlockHeadline, 1.2, {
      opacity: 1,
      delay: 1.5,
      ease: Power0.easeNone
    });
  }

  $signIn.on("click", animateLoginBox);
}

$(document).ready(function() {
  init();
});

/*
class Init() {

  constructor(){
  var $signIn = $(".m-001-button-container__sign-in");
  var $loginBox = $(".m-001-login-box");
  var $outputBlock = $(".m-001-output-block");
  var $outputBlockHeadline = $(".m-001-output-block__headline");

  $signIn.on("click", animateLoginBox);
  }

  
  function animateLoginBox(ev) : void {
    TweenMax.to($loginBox, 1.2, {
      yPercent: -200,
      ease: Power0.easeNone
    });

    TweenMax.to($outputBlock, 1.2, {
      opacity: 1,
      scale: 1,
      delay: 1,
      ease: Elastic.easeOut.config(0.8, 0.3)
    });

    TweenMax.to($outputBlockHeadline, 1.2, {
      opacity: 1,
      delay: 1.5,
      ease: Power0.easeNone
    });
  }

  
}

$(document).ready(function () {
  new Init();
});*/
