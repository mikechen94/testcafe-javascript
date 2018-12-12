import { Selector } from 'testcafe';

class test {
    
      
       signup: Selector = Selector('#signup-button');  
       firstname: Selector = Selector('input[name="firstname"]');
       surname: Selector = Selector('input[name="lastname"]');

       async userreg(t: TestController){
        await t.click(this.signup)
        .typeText(this.firstname, 'Mike',{replace: true, paste: true})
        .typeText(this.surname, 'Chen',{replace: true, paste: true})
        .pressKey('enter')
    }
}

export default new test();
