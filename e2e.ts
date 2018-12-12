import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `https://www.facebook.com/`;  // specify the start page


//then create a test and place your code there
test('Facebook test', async t => {
    await t
        .typeText('#email', 'mikechen94@hotmail.com')
        .typeText('#pass', 'Mccc311813514')
        //.pressKey('enter')
        .click('#loginbutton')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('JunMing!');
});