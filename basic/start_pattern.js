/*
Print below pattern: 
* * * *
* * * *
* * * *
* * * *
*/

function squreStar1(n) {
  let printStar = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      printStar += "*";
    }
    printStar += "\n";
  }
  return printStar;
}

console.log(squreStar1(4));

function squreStart2(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

console.log(squreStar2(4));

/*
Print below pattern: 
* 
* * 
* * * 
* * * *
*/

function tringlePattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

console.log(tringlePattern1(4));

function tringlePattern2(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += j + 1 + " ";
    }
    console.log(row);
  }
}

console.log(tringlePattern2(5));

function reverseTringle(n) {
  for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += j + 1 + " ";
    }
    console.log(row);
  }
}

console.log(reverseTringle(5));

/*
Print below pattern: 
     *  
    **
   ***
 *****
*/

function tringlePattern3(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
      row += " ";
    }
    for (let k = 0; k < i + 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}

console.log(tringlePattern3(5));
