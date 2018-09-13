var LoginPage = function() {
  this.username = element(by.model('username'));
  this.password = element(by.model('password'));
  this.loginButton = element(by.id('btn-login'));
  this.passwordRequiredError = element(by.css('error-password-required'));
  this.visit = function () {
    browser.get('http://');
  };

 this.setUsername = function(username) {
   this.username.clear();
   this.username.sendKeys(username);
 };

 this.setPassword = function(password) {
   this.password.clear();
   this.password.sendkeys(password);
 };

 this.login = function() {
   this.loginButton.click();
 }
};
module.exports = LoginPage;





 
