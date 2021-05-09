//Important: This is good only when items are in sorted order
//Complex=> O(n)<O(nlogn)
// index can be found O(N)
// but best-> lowerBound(nlogn)
// accutrate Bound ->(nlogn)
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
