var LoginBox = /** @class */ (function () {
    function LoginBox() {
        this.$signIn = $(".m-001-button-container__sign-in");
        this.$loginBox = $(".m-001-login-box");
        this.$outputBlock = $(".m-001-output-block");
        this.$outputBlockHeadline = $(".m-001-output-block__headline");
        this.$signIn.on("click", this.animateLoginBox);
    }
    LoginBox.prototype.animateLoginBox = function (ev) {
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
    };
    return LoginBox;
}());
$(document).ready(function () {
    new LoginBox();
});
//# sourceMappingURL=application.js.map