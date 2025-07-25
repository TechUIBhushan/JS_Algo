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

console.log(squreStart2(4));

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

/*
1 
1 0 
1 0 1 
1 0 1 0 
1 0 1 0 1 
*/

function numberPatter(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      if (j % 2 === 0) {
        row += "1";
      } else {
        row += "0";
      }
    }
    console.log(row);
  }
}

console.log(numberPatter(5));

function numberPatter1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = 0;
    for (let j = 0; j < i + 1; j++) {
      if (toggle === 0) {
        toggle = 1;
      } else {
        toggle = 0;
      }
      row += toggle;
    }
    console.log(row);
  }
}

console.log(numberPatter1(6));

function numberPatter2(n) {
  let toggle = 0;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      if (toggle === 0) {
        toggle = 1;
      } else {
        toggle = 0;
      }
      row += toggle;
    }
    console.log(row);
  }
}

console.log(numberPatter2(5));
