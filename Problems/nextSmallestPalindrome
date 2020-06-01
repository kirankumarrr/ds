
// function parllindrome(num){
//     let n = num+1;
//     let numberFound;
//     let found=1
//         while(found){
//           let getVal = n+'';
//           if(getVal.length%2===0){
//                 let index = Math.floor(getVal.length/2);
//                 let string1 = getVal.substr(0,index)
//                 let string2 = getVal.substr(index)
//                 if(string1===string2.split("").reverse().join("")){
//                     found=null;
//                     numberFound=n
//                     }else{
//                        n++;
//                     }

//             }
//         else{
//                 let index = Math.floor(getVal.length/2);
//                 let string1 = getVal.substr(0,index)
//                 let string2 = getVal.substr(index+1)
//                 if(string1===string2.split("").reverse().join("")){
//                     found=null;
//                     numberFound=n
//                     }else{
//                        n++;
//                     }
//             }
//         }
//         return numberFound

// }
// console.log(parllindrome(72900329))


function allAreNines(input) {
  for (let i = 0; i < input; i++) {
    if (input[i] !== "9") {
      return 0;
    } else {
      return 1;
    }
  }
}

function reverseString(input) {
  return input.split("").reverse().join("");
}

function nextPalindrome(input) {
  let strInput = input.toString();
  let ipLen = strInput.length;
  //expections
  if (allAreNines(strInput)) {
    return +strInput + 2;
  } else if (ipLen === 1) {
    return input;
  } else {
    //Even
    let index = Math.floor(ipLen / 2);
    let string1 = strInput.substr(0, index);
    if (ipLen % 2 === 0) {
      let string2 = strInput.substr(index);
      let s1L = string1.length;
      let s2L = string2.length;
      // case1  when LM < RM
      // copy RM 1st character to LM last character
      // then concat LM + reverse LM
      if (string1[s1L - 1] <= string2[0]) {
        // case when number is 72900329
        // A = 7290 , B=0329 but B<!A
        let a1 = reverseString(string1);
        if (input < +(string1 + a1)) {
          return string1 + a1;
        } else {
          string1 = +string1 + 1;
          let newPal = reverseString(string1.toString());
          let finalValue = string1 + newPal;
          return finalValue;
        }
      } else if (string1[s1L - 1] > string2[0]) {
        // case2  when LM > RM
        // copy LM last character to RM 1st character
        // then concat LM + reverse LM
        let newPal = reverseString(string1.toString());
        let finalValue = string1 + newPal;
        return finalValue;
      }
    } else {
      //Odd

      let string2 = strInput.substr(index + 1);
      let middelStr = strInput.substr(index, 1);

      let s1L = string1.length;
      let s2L = string2.length;
      // case1  when LM > middle number
      // copy LM last character to middle number
      // then concat LM + reverse LM
      if (string1[s1L - 1] > +middelStr) {
        let finalValue =
          string1 + middelStr.toString() + reverseString(string1);
        return finalValue;
      }
      // case1  when LM < middle numer
      // when middle number is 9
      // increment by 1 to 9 but 9 becomes 10 then carry 1 to LM
      // copy (LM + middle number) + 1
      // then concat LM + reverse LM
      else if (string1[s1L - 1] <= +middelStr) {
        if (middelStr === "9" || middelStr === 9) {
          let num = +(string1 + middelStr.toString()) + 1;
          string1 = num.toString().substr(0, num.toString().length - 1);
          let finalValue = num.toString() + reverseString(string1.toString());
          return finalValue;
        } else {
          middelStr = +middelStr + 1;
          let finalValue =
            string1 + middelStr.toString() + reverseString(string1);
          return finalValue;
        }
      }
    }
  }
}

console.log("final=>", nextPalindrome(72900369));
