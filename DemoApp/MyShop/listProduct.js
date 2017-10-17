var faker = require('faker');

console.log("===============\n"
            + "WELLCOME TO MY SHOP!\n"
            + "===============\n");
            
for(var i = 0; i <= 10; i++){
        console.log (faker.commerce.productName()+" - $"+faker.commerce.price());
    }


