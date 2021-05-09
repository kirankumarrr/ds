/**
  ??TODO \
  1) Create Grid Structure
  2) create Method for find_animals and loop
  3) call DFT Method
  4) Check if it can move canMoveForward ?
      a) makesure row>0
      b) column >0
      c) row<=grid.length
      d) column<=grid.length
      e) set Current grid[row,column] from 1 to 0 or make it as visited
      f) grid[row,column] !==0
      g) if above all satify then loop DSF with latest records

  Storing Count's how to differentiate which animal Community has what length
  Here in the matrix we just have 1's and o's
*/

let {log} =console
let visited= new Map();
let max=0
// let grid = [
//   ['T','T','T','W','W'],
//   ['T','W','W','T','T'],
//   ['T','W','W','T','T'],
//   ['T','W','T','T','T'],
//   ['W','W','T','T','T']
// ]
let grid = [
  ['W','T','W','T','W'],
  ['T','T','T','T','T'],
  ['T','W','T','W','T'],
  ['T','T','T','T','T'],
  ['T','W','T','W','T']
]
let found=[]

/**
    (Row,Column)
    Column----->
    (-1,-1)     (-1,0)  (-1,1)  ---->
    (0,-1)   1->(0,0)   (0,1)   |
    (1,-1)   1->(1,0)   (1,1)  ---
*/

function createKey(rowVal,colVal){
  return {row:rowVal,col:colVal}
}

function find_animals(grid){
  for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid.length;j++){
      if(!visited.has(createKey(i,j)) && grid[i][j]!=='v' && grid[i][j]!=='W'){
        let count=0;
        let animal = grid[i][j]
        let getCount = dfs(i,j,grid,count,animal);
        if(getCount>0){
          found.push(getCount)
        }
      }
    }
  }
}

  function dfs(row,column,grid,count,animal){
  count=count+1
  grid[row][column]='v'
    let rowVector=[0,1,0,-1]
    let columnVector=[1,0,-1,0]
    for(let i=0;i<rowVector.length;i++){
      /*Adding row and columns here so it will walk forward Vectors*/
      if(canMoveForward(row+rowVector[i],column+columnVector[i],grid)){
        let obj =createKey(row+rowVector[i],column+columnVector[i])
        visited.set(obj,obj)
       count = dfs(row+rowVector[i],column+columnVector[i],grid,count,animal)
      }
    }
    return count
  }

function canMoveForward(row,column,grid){

  if(row>=0
    && row<grid.length
    && column>=0
    && column<grid[0].length
    && grid[row][column]!=='W'
    && grid[row][column]!=='v'
    && grid[row][column]==='T'
    ){
      log("Yes Can Move✅",row,column)
    // log("Yes Can Move✅",row,column)
    return true
  }else{
    // log("No Can't Move❌❓",row,column)
    return false
  }
}

find_animals(grid)
log("Finak Grid=>",grid)
log("visited=>",visited)
log("found=>",found)
