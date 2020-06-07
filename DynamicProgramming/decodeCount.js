let msg =  {
  0: "a",
1: "b",
2: "c",
3: "d",
4: "e",
5: "f",
6: "g",
7: "h",
8: "i",
9: "j",
10: "k",
11: "l",
12: "m",
13: "n",
14: "o",
15: "p",
16: "q",
17: "r",
18: "s",
19: "t",
20: "u",
21: "v",
22: "w",
23: "x",
24: "y",
25: "z"
}


function helper_dp(data,len,memo){
    debugger
  let dataToStr = data.toString()
  if(len===0) return 1
  let s = dataToStr.length-len;
  if(dataToStr[s]==='0') return 0

  if(memo[len]!==undefined) return memo[len];
  let result = helper_dp(data,len-1,memo)
  console.log("decodeURI()",result)
  console.log("data()",data)

  let num = +dataToStr.substr(0,2)
  console.log("num()",num)
  if(len>=2 && num<=26){
      result +=  helper_dp(data,len-2,memo)
//      console.log("healper-2",msg)
  }
  memo[len] = result;
  console.log("memo()",memo)
  return result

}


function num_ways(message){
  let memo ={};
  let f = helper_dp(data=message,message.toString().length,memo);
  console.log("FInal()",f)
}

num_ways(12)
