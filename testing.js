// test are code that you use to test other code.


function add(a, b){
  // 200 lines
  return a + b + a;
}


////////// Testing:


// testing add function
function addFunctionTester(functionToTest){

  if(functionToTest(2,2) === 4){
    console.log('PASS!!!!! the fuction is working correctly');
    
  } else {
    console.log("DID NOT PASS - because we passed in 2 and 2 and it didnt return")
  }
  
};

addFunctionTester(add);
