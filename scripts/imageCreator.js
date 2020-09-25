/* Function that executes on page load - it uses template literals rather than 
traditional quotations to concatenate the table and image strings required */
function InsertImageSlices() {
  let dispImg = "";
  let dirName = "../../images/slicedimages/"
  let fileName= "bcpot002_r"
  let row, col;
  
  /* The following nested for loop builds up the value of the variable dispImg through
  concatenation which finally injects the value as HTML into the members_order page. The
  result is a table holding a differnet image in each cells dipicting the pieced together
  image of the requested ordered item */
  for(let row = 0; row < 4; row++){
    dispImg += "<tr>" /*Start of concatenation */
    for(let col = 0; col <  5; col++){
      dispImg += "<td>"
      dispImg += `<img src="${dirName}${fileName}${row+1}_c${col+1}.jpg"</td>`
    }
    dispImg += "</tr>" /* Final concatenation*/
  document.getElementById('imageSlices').innerHTML = dispImg; /* Inserts the HTML code */
  }
  return;
}

