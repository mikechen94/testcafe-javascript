import { Selector } from 'testcafe';

class Login {
    
       username: Selector = Selector('#email');
       //username: Selector = Selector('#m_login_email');
       
       password: Selector = Selector('#pass');
       //password: Selector = Selector('#m_login_password');
       loginbutton: Selector = Selector('#loginbutton');
       //loginbutton: Selector = Selector('button').withText('Log In');
       name: Selector = Selector('div').withText('JunMing Mike Chen');
       

       async userlogin(t: TestController){
        await t.typeText(this.username, 'mikechen94@hotmail.com',{replace: true, paste: true})
        .typeText(this.password, 'Mccc311813514',{replace: true, paste: true})
        .click(this.loginbutton)
    }
}

export default new Login();

