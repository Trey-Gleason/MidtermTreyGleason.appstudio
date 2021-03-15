
myAnimals = ['dog', 'cat', 'horse', 'meerkat']

for (i=0; i<3; i++) {
  animal = prompt('enter an animal')
  myAnimals.push(animal)
}
  
  lastAnimal = myAnimals[myAnimals.length - 1]
  
  console.log(`The last animal is a/an ${lastAnimal}.`)