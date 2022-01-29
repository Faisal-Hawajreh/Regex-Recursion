function capitalA(s){
    let validation = /[A-Z]\w+ \w+ (A)/
    // Add your logic.
    return validation.test(s);
}
// console.log(capitalA("Hello world A"))
// console.log(capitalA("Hello world"))
// console.log(capitalA("Hello world a"))

function ioEmail(email){
    let validation = /^\w+(@)\w+.(io)$/
    // Add your logic. 
    return validation.test(email);
}
// console.log(ioEmail("example@example.io"))
// console.log(ioEmail("ex@ample@example.io"))
// console.log(ioEmail("ex.ample@example.io"))
// console.log(ioEmail("example@example.gmail"))
function imagesSearcher(text){
    
    let arr = [];
    for(i=0;i<3;i++){
    let validation = /^\w+.jpg|\w+.png|\w+.jpeg$/gi
    // let nextImg = 
    arr[i] = text.match(validation)
    text.search(validation)
    }
    // Add your logic.
    return arr
}
console.log(imagesSearcher("Lorem ipsum dolor sit amet, consectetur adipiscing elit, cat.png sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dog.jpg Ut enim ad minim veniam, quis nostrud exercitation ullamco cow.jpeg laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))