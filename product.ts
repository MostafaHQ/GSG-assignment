// interface Product {
//     name :string;
//     price : number;
// }

// function totalPrice (products :Product[]){
//     let total :number = 0;
//     for(let product of products){
//         total += product.price;
//     }
//     return total;
// }

// const products: Product[] = [
//     { name: "Laptop", price: 1200 },
//     { name: "Mouse", price: 25 },
//     { name: "Keyboard", price: 75 },
//   ];
  
//   console.log(totalPrice(products));


  function isValid(email : string) : void{
    const emailRegex = /^[a-zA-Z0-9._+%-]+@[a-zA-Z0-9.+]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)){
        console.log("The email is valid")
    }else{
        console.log("The email is not valid");
    }
  }

isValid("mostafa.hajqasem@gmail.com");
