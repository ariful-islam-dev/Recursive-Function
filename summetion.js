function printNumbers(n) {

  if (n === 0) {
    return ;
  }
  console.log(n);

  printNumbers(n - 1);
  
}

 printNumbers(5);


 function sum(n){
     if(n === 0){
         return 0;
     }

     return n+ sum(n-1)
 }

 console.log(sum(9));