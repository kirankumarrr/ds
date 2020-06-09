let {log} = console;
let arr= [ 1,4,6,8,9]
let n =-1
let ceil=null; // 4
let floor=null; // 1
let backFire=null
// for(let i=0;i<arr.length;i++){
//   if(arr[i]===n || arr[i]>n){
//     ceil = arr[i]
//     backFire=i-1;
//     break;
//   }
// }
// if(arr[backFire]!==undefined){
//   floor=arr[backFire];
// }
// log("Floor=>",floor)
// log("ceil=>",ceil)

function mergeSort(arr,low,high,num){
  //check for number exist in range of array -ve Side
  if(arr[low]>=num){
    return low
  }

  //check for number exist in range of array +ve Side
  if(arr[high]<num){
    return -1
  }

  let midLen = low+high/2;

  if(arr[midLen]===num){
    return midLen;
  }else if(arr[midLen]<num){

    if(midLen+1<=high && arr[midLen+1]>=num){
      return midLen+1
    }else{
      return mergeSort(arr,midLen,high,num)
    }

  }else{
    if(midLen-1>=low && arr[midLen-1]<num){
      return midLen
    }else{
        return mergeSort(arr,low,midLen,num)
    }
  }
}
let idx = mergeSort(arr,0,arr.length-1,n)
if(idx===0 || idx===-1 || arr[idx]===n){
  console.log("found=>",arr[idx])
}
else{
  console.log("found=>",arr[idx],",==",arr[idx+1])
}
console.log("found=>",mergeSort(arr,0,arr.length-1,n))
console.log("found=>",arr)
console.log("found=>",arr[mergeSort(arr,0,arr.length-1,n)])


function mergeFindIndex(arr,low,high,n){
  if(arr[low]>n || arr[high]<n){
    return -1
  }
  if(arr[low]===n){
    return low
  }
  if(arr[high]===n){
    return high
  }

  let mid = Math.floor(low+high/2);
  // if n > then mid value
  if(arr[mid] < n){
      if(mid+1<=high && arr[mid+1]===n){
        return mid+1;
      }else{
        return mergeFindIndex(arr,mid+1,high,n)
      }
  }else{
    // when n is less then mid values
    if(mid-1<=low && arr[mid-1]===n){
      return mid-1;
    }else{
      return mergeFindIndex(arr,low,mid,n)
    }
  }
}
console.log("n index using merge sort=>",mergeFindIndex(arr,0,arr.length-1,n))
