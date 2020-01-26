let userObject1 = {
    firstName:'Manish',
    lastName:'Balyan'
}

let userObject2 = {
    firstName:'Mayank',
    lastName:'Shukla'
}

let printFullName = function(email,phone){
    console.log(`Name: ${this.firstName} ${this.lastName} \nemail: ${email} \nphone: ${phone}`)
}

//call method     
printFullName.call(userObject1,'balyan05.manish@gmail.com','9999873524');
printFullName.call(userObject2,'msmayank2012@gmail.com','9999999999')

// apply method
printFullName.apply(userObject1,['balyan05.manish@gmail.com','9999873524']);
printFullName.apply(userObject2,['msmayank2012@gmail.com','9999999999'])

//bind method
let printMyFullName = printFullName.bind(userObject1,'balyan05.manish@gmail.com','9999873524')

printMyFullName()