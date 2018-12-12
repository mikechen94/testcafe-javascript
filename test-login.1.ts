import SignupPage from './page-model.1';

const url =  `https://www.facebook.com/`;

var a=1;

while(a<3){
fixture('reg test').page(url);

/*test('Login test', async t => {
    await t.expect(LoginPage.username.exists).ok();
        //.typeText(page.nameInput, 'P.Parker')
        //click(page.macOSRadioButton)
        
});*/

test('reg test' + a, async t => {
    await SignupPage.userreg(t);
    await t.expect(SignupPage.firstname.exists).ok();

})
a++;
}
