
num1 = parseInt(prompt('enter a number'))
num2 = parseInt(prompt('enter a number'))

 function divideTwo (num1, num2) {
  answer = num1 % num2
  return answer;
}
  
  console.log(`The remainder of your two numbers is ${divideTwo (num1, num2)}`)
