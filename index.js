// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  const catsCopy = [...cats, name];
  return catsCopy;
}

function prependCat(name) {
  const catsCopy = [name, ...cats];
  return catsCopy;
}
function removeLastCat() {
  const newArray = [...cats];
  newArray.pop();
  return newArray;
}


function removeFirstCat() {
  const updatedCats = cats.slice(1); 
  return updatedCats;
}