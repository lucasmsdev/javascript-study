function logica(number){
    if(number % 3 === 0 && number % 5 ===0) {
        return "FizzBuzz"
    }else if(number % 5 === 0) {
        return "Buzz"
    }else if(number % 3 === 0){
        return "Fizz"
    }else {
        return number
    }
    

}
for (let i = 0; i <= 100; i++){
    console.log(i, logica(i))
}
