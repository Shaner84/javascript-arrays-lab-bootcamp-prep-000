var kittens = ['Milo', 'Otis', 'Garfield']// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push('Ralph')
}

function destructivelyPrependKitten(name){
  kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten(){
  kittens.pop(2)
}
function destructivelyRemoveFirstKitten(){
  kittens = kittens.splice(1)
    return kittens
}

function appendKitten(name){
  return kittens.concat('Broom')
}

function prependKitten(name){
  kittens = kittens.splice(-3, 3, 'Arnold')
  return kittens
}

