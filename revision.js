"use strict"; //treat aal js code as newer version

// ------------------------------operations-----------------------------------------

// let value=4;
// let negativeValue=-value;
// console.log(negativeValue);




// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");



// console.log(+true)
// console.log(+"");
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

//--------------------------- difine Symbol----------------------------

// const id=Symbol('123');
// const otherid=Symbol('123');
// console.log(id);
// console.log(id===otherid)


// stack (primitive), Heap (Non-primitive)

// let myName='ankit';
// let anotherName=myName;
// anotherName='pandey '
// console.log(anotherName);

    // let userOne={
    //     email:'ankit@gmail.com',
    //     upi:'user@ybl'
    // }
    // let userTwo=userOne

    // userTwo.email='pandey@gmail.com'
    // console.log(userOne.email);
    // console.log(userTwo.email);


    // use replace 
    const url="https://ankit.com/ankit%20pandey"
    console.log(url.replace("%20","-"));