

  //Function declaration

  function calculate1(number1, number2){
      const square1=number1*number1;
      const square2=number2*number2;
      const addSquares=square1+square2;
      const squareTotal=addSquares*addSquares;
      return squareTotal;}

console.log(calculate1(3,4))

//function expression

const calculate2=function(number1, number2){
    const square1=number1*number1;
      const square2=number2*number2;
      const addSquares=square1+square2;
      const squareTotal=addSquares*addSquares;
      return squareTotal;};

      console.log(calculate2(3,4))

      //arrow function

      const calculate3=(number1, number2)=>{
        const square1=number1*number1;
        const square2=number2*number2;
        const addSquares=square1+square2;
        const squareTotal=addSquares*addSquares;
        return squareTotal;
      };

      console.log(calculate3(3,4))

