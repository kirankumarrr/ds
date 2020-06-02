//Best Solution o(n) + o(1);
let hashMap = {};
let finalVal=null
arr.forEach((item, i) => {
    hashMap[item]=item
});
log('hashMap->',hashMap);
for (var i = 1; i < 200000; i++) {
  if(i>0 && !(i in hashMap)){
    finalVal=i
    break
  }
}
log('finalVal->',finalVal);
