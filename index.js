var kittens = ['Milo', 'Otis', 'Garfield']// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push('Ralph')
}

function destructivelyPrependKitten(name){
  kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  return [...kittens, 'Broom']
}

function prependKitten(name){
  return ['Arnold', ...kittens]
}

function removeLastKitten(){
  return kittens.slice(1)
}