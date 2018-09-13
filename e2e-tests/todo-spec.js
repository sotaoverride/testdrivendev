'use strict'
describe('Should be able to successfully login', function(){
  it('should login user', function () {
    browser.get('http://10.134.121.165');
    element(by.name('password')).sendKeys('7386');
    var buttonSim=element(by.className('md-button'));
    var EC=protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(buttonSim).call(),8000,'Button not visible');
    buttonSim.click();
    expect(browser.getCurrentUrl()).toEqual('http://10.134.121.1655555/');
  });
});
describe('cs700 testing start', function() {
  it('should reset cam settings', function() {
    browser.get('http://10.134.121.165/settings/camera');
    var EC=protractor.ExpectedConditions;
    var buttonSim=element(by.buttonText('Return to default image settings'));

    browser.wait(EC.visibilityOf(buttonSim).call(),8000,'Button not visible');
    buttonSim.click();
    var foo = element(by.name('cam.camera-pan'));
    expect(foo.getAttribute('value')).toEqual('0');
});
});
describe('cs700 testing for wireless dialier status ', function() {
  it('should be showing for SIP (this is sip) ', function() {
    browser.get('http://10.134.121.165');
    var EC=protractor.ExpectedConditions;
    var statusHolder=element(by.css('btUpgrade'));
    expect(element(by.tagName('h4')).getText()).toBe('SYSTEM STATUS');  
});
});
describe('cs700 testing for wireless dialier status ', function() {
  it('should be showing for SIP (this is sip) ', function() {
    browser.get('http://10.134.121.165');
    var EC=protractor.ExpectedConditions;
    var statusHolder=element(by.css('btUpgrade'));
    expect(element(by.tagName('h4')).getText()).toBe('SYSTEM STATUS');
});
});
