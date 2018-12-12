const createTestCafe = require('testcafe');
let tc           = null;


createTestCafe('localhost', 1337, 1338)
    .then(testcafe => {
        tc = testcafe;
        const runner   = testcafe.createRunner();

        runner.src('./test-login.1.ts').browsers(['chrome:emulation:device=iphone 6']).run()
        .then(failedCount => {
            console.log(failedCount);
            tc.close();
        })
        .catch(error => {  
            console.log(error);
            tc.close();
        });
    })
        