var buttons = document.getElementsByClassName(
  "m-001-button-container__sign-in"
);

Array.from(buttons).forEach(button => {
  button.addEventListener("click", function slideOut() {
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

//$("button");
