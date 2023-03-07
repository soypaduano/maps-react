/*
The objetive is as simple as writing a function that recives an integer `n` and returns an array from `1` to `n` where:

- Multiples of 3 have been replaced with `Fizz`
- Multiples of 5 have been replaced with `Buzz`
- Multiples of both have been replaced with `FizzBuzz`

fizzBuzzToN(0) // => []
fizzBuzzToN(5) // => [1,2,'Fizz', 4, 'Buzz']
fizzBuzzToN(15) // => [1,2,'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
*/

function multipleOf(i, multiple){
    return i % multiple === 0;
}

function getFizzBuzzValue(i){
    if(multipleOf(i, 3) && multipleOf(i, 5)){
        return 'FizzBuzz';
    } else if(multipleOf(i, 5)){
        return 'Buzz';
    } else if(multipleOf(i, 3)){
        return 'Fizz';
    } else {
        return i;
    }
}

function fizzBuzzToN(n){
    const result = [];
    for(let i = 1; i <= n; i++){ 
        result.push(getFizzBuzzValue(i));
    }
    return result;
}

console.log(fizzBuzzToN(106));