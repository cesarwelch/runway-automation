var assert = require('assert'),
    webdriver = require('selenium-webdriver'),
    conf_file = process.argv[3] || 'conf/single.conf.js';
var caps = require('../' + conf_file).capabilities;
var buildDriver = function(caps) {
    return new webdriver.Builder().
    usingServer('https://hub-cloud.browserstack.com/wd/hub').
    withCapabilities(caps).
    build();
};
describe('aqua project for ' + caps.browserName, function() {
    this.timeout(0);
    var driver, bsLocal;
    beforeEach(function(done) {
        driver = buildDriver(caps);
        done();
    });
    it('can log in account', function(done) {
        driver.get('http://aqua-gem-dev.acklenavenueclient.com/#/login').then(function() {
            driver.findElement(webdriver.By.id('signupInputEmail1')).sendKeys('oscar2@sharklasers.com').then(function() {
                driver.findElement(webdriver.By.id('signupInputPassword1')).sendKeys('Password123').then(function() {
                    driver.findElement(webdriver.By.className('btn btn-block btn-default btn-lg mt-lg')).click().then(function() {
                        driver.sleep(15000);
                        driver.findElement(webdriver.By.xpath("/html/body/div[1]/aside/div/nav/ul/li[1]/div/div/div[2]/span[1]")).then(function(element) {
                            element.getText().then(function(text) {
                                assert(text.match(/Oscar Carranza/i) != null, 'successfully');
                                done();
                            });
                        });
                    });
                });
            });
        });
    });
    it('can create notes', function(done) {
        driver.get('http://aqua-gem-dev.acklenavenueclient.com/#/login').then(function() {
            driver.findElement(webdriver.By.id('signupInputEmail1')).sendKeys('oscar2@sharklasers.com').then(function() {
                driver.findElement(webdriver.By.id('signupInputPassword1')).sendKeys('Password123').then(function() {
                    driver.findElement(webdriver.By.className('btn btn-block btn-default btn-lg mt-lg')).click().then(function() {
                        driver.sleep(15000);
                        driver.findElement(webdriver.By.xpath("/html/body/div[1]/section/div/div[2]/div/div/button")).click().then(function(element) {
                            driver.sleep(7000);
                            driver.findElement(webdriver.By.xpath("/html/body/div[1]/section/div/div[2]/div/div/div[2]/div/div[2]/form/div[1]/input")).sendKeys('200').then(function(element) {
                                driver.findElement(webdriver.By.xpath("/html/body/div[1]/section/div/div[2]/div/div/div[2]/div/div[2]/form/div[2]/select")).click().then(function(element) {
                                    driver.findElement(webdriver.By.xpath("/html/body/div[1]/section/div/div[2]/div/div/div[2]/div/div[2]/form/div[2]/select/option[1]")).click().then(function(element) {
                                        driver.findElement(webdriver.By.xpath("/html/body/div[1]/section/div/div[2]/div/div/div[2]/div/div[2]/form/div[3]/select")).click().then(function(element) {
                                            driver.findElement(webdriver.By.xpath("/html/body/div[1]/section/div/div[2]/div/div/div[2]/div/div[2]/form/div[3]/select/option[1]")).click().then(function(element) {
                                                driver.findElement(webdriver.By.xpath("/html/body/div[1]/section/div/div[2]/div/div/div[2]/div/div[2]/form/div[4]/label/span")).click().then(function(element) {
                                                    driver.findElement(webdriver.By.xpath("/html/body/div[1]/section/div/div[2]/div/div/div[2]/div/div[2]/button")).click().then(function(element) {
                                                        driver.findElement(webdriver.By.xpath("/html/body/div[1]/section/div/div[1]/div/div/div/div/button[2]")).click().then(function(element) {
                                                            driver.sleep(3000);
                                                            done();
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
    afterEach(function(done) {
        driver.quit().then(function() {
            done();
        });
    });
});