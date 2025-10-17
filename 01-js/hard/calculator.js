/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

const mathjs = require('mathjs')

class Calculator 
{
    constructor()
    {
      this.result = 0;
    }
    add(x)
    {
      this.result += x;
    }
    subtract(x)
    {
      this.result -= x;
    }
    multiply(x)
    {
      this.result *= x;
    }
    divide(x)
    { 
      if(x === 0 || x === -Infinity || x === Infinity)
        throw new Error("Can not divisble by Zero")
      this.result /= x;
    }
    clear()
    {
      this.result = 0;
    }
    getResult()
    {
      return this.result;
    }
    calculate(str)
    {
       let strnew = str.split("").filter(function(ele){
        if("0123456789+-*/()eE .".includes(ele))
          {
            return true;
          }
        else{
          throw new Error("Error");
        }
       }).join("");

    if (strnew.includes(" / 0")) { 
      throw new Error("Cannot divide by zero");
    }

      try{
        this.result = mathjs.evaluate(strnew);
      }catch(error){
        throw new Error("error evaluating");
        
      }

      if(isNaN(this.result))
      {
        throw new Error("result is Nan");
      }
     return this.result;
    }
}

module.exports = Calculator;
