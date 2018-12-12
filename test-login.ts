import LoginPage from './page-model';

const url =  `https://www.facebook.com/`;

fixture('wal test').page(url);

/*test('Login test', async t => {
    await t.expect(LoginPage.username.exists).ok();
        //.typeText(page.nameInput, 'P.Parker')
        //click(page.macOSRadioButton)
        
});*/

test('wal test', async t => {
    await LoginPage.userlogin(t);
    await t.expect(LoginPage.name.exists).ok();

})