class LoginBox {
  $signIn: JQuery;
  $loginBox: JQuery;
  $outputBlock: JQuery;
  $outputBlockHeadline: JQuery;

  constructor() {
    this.$signIn = $(".m-001-button-container__sign-in");
    this.$loginBox = $(".m-001-login-box");
    this.$outputBlock = $(".m-001-output-block");
    this.$outputBlockHeadline = $(".m-001-output-block__headline");

    this.$signIn.on("click", this.animateLoginBox);
  }

  animateLoginBox(ev): void {
    TweenMax.to(this.$loginBox, 1.2, {
      yPercent: -200,
      ease: Power0.easeNone
    });

    TweenMax.to(this.$outputBlock, 1.2, {
      opacity: 1,
      scale: 1,
      delay: 1,
      ease: Elastic.easeOut.config(0.8, 0.3)
    });

    TweenMax.to(this.$outputBlockHeadline, 1.2, {
      opacity: 1,
      delay: 1.5,
      ease: Power0.easeNone
    });
  }
}
$(document).ready(function() {
  new LoginBox();
});
