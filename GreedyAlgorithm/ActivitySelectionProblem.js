function ActivitySelection(start,finish){
      let combination=[];
      //Sorting using Merge sort
      //splice ?? mutatue original
      // slice ?? dont mutate original

      function divide(a,b){
        if(b.length<2){
          return b
        }else{
          let midIdx = Math.floor(b.length/2);
          let left = b.slice(0,midIdx)
          let right = b.slice(midIdx,b.length)
          let leftStart= a.slice(0,midIdx)
          let rightStart=a.slice(midIdx,b.length)
          let leftArray=  divide(leftStart,left)
          let rigthArray=  divide(rightStart,right)
          return merge(leftArray,rigthArray,leftStart,rightStart)
        }

      }

      function merge(left,right,leftStart,rightStart){
          if(left.length>0 && Array.isArray(left) && typeof left[0]==='number' ){
              left =[{
                  start:leftStart[0],
                  finish:left[0]
              }]
          }
          if(right.length>0 &&  Array.isArray(right) && typeof right[0]==='number'){
              right =[{
                  start:rightStart[0],
                  finish:right[0]
              }]
            }

        let sortedArray=[];
        while (left.length>0 && right.length>0) {
          if(left[0].finish<right[0].finish){
              let data={}

              data.start= left[0].start;
              data.finish= left[0].finish;
               left.splice(0,1)
            sortedArray.push(data)
          }else{
              let data={}

           data.start=right[0].start
          data.finish= right[0].finish
           right.splice(0,1)
            sortedArray.push(data)
          }
        }
        return sortedArray.concat(left).concat(right);
      }

      let sortedFinish = divide(start,finish);
      console.log(sortedFinish)
      let totalActivities=0;
      let totalPaths=[]
      let prevStart=null,prevEnd=null;
      for(let i=0;i<sortedFinish.length;i++){
        if(prevEnd!==null && sortedFinish[i].start>=prevEnd){
          prevStart = sortedFinish[i].start
          prevEnd =sortedFinish[i].finish
          totalActivities++;
          totalPaths.push(i)
        }
        if(prevStart===null){
          prevStart = sortedFinish[i].start
          totalActivities++;
          totalPaths.push(i)
        }
        if(prevEnd===null ){
          prevEnd =sortedFinish[i].finish
        }
      }
      console.log("totalActivities=>",totalActivities)
      console.log("totalPaths=>",totalPaths)
}

ActivitySelection([0,3,1,5,5,8],[6,4,2,9,7,9])
// ActivitySelection([4,2,3,1],[4,2,3,1])
