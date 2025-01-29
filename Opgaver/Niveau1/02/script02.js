const result = document.querySelector("#result");

console.log(result)

function beregnForhold(a, b) {
  let dividere = a / b;
  return dividere;
}

function beregnForhold2(a, b) {
  let dividere = a / b;
  if ( b == 0) {
    return dividere = "null";
  } 
  return dividere;
}

// let resultatet = beregnForhold(4, 3);
// result.innerHTML = resultatet;
// console.log(resultatet);

let resultatet = beregnForhold2(4, 0);
result.innerHTML = resultatet;
console.log(resultatet);

