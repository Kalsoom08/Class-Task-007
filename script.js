var pet = {
  name: ['Jenac', 'Tom', 'Ela'],
  type: ["cat", "cat", "cat"],
  age: [2, 6, 1],
  happiness: [90, 60, 50],
  hunger: [60, 30, 65],

  feed: function(index) { 
    var newHunger =  this.hunger[index];
    newHunger = newHunger - 20; 
    if (newHunger < 0) {
      alert("Hunger level can't be below 0.");
    }
    alert(this.name[index] + " is fed! Hunger level: " + newHunger);
  },



  play: function(index) {
    var newHappiness = this.happiness[index];
    newHappiness += 20;
    if (newHappiness > 100) {
      alert("Happiness Can't Exceed 100")
    }
    alert(this.name[index] + " had fun! Happiness level: " + newHappiness);
  },

  agePet: function(index) { 
    var newAge = this.age[index];
    newAge = newAge + 1
    newHappiness =newHappiness - 5;
    if (newHappiness < 0) {
      newHappiness = 0;
    }
    this.hunger[index] += 10;
    if (this.hunger[index] > 100) {
      this.hunger[index] = 100;
    }
    alert(this.name[index] + " is now " + newAge + " years old! Happiness: " + newHappiness + ", Hunger: " + newHunger);
  }
};

function userInteractive() {
  var index = parseInt(prompt(`Which pet would you like to interact with?
    (0 for Jenac)
    (1 for Tom)
    (2 for Ela)`));
    
    var action = prompt(`What do you want to do?
      Feed
      Play
      Age
      Quit`).toLowerCase();
      
      

  while (action !== "quit") {
    if (action === "feed") {
      pet.feed(index);
    } else if (action === "play") {
      pet.play(index);
    } else if (action === "age") {
      pet.agePet(index);
    } else {
      alert("Invalid!");
    }
    action = prompt(`What do you want to do?
      Feed
      Play
      Age
      Quit`).toLowerCase();
  }

  alert("Thanks for playing");
}

userInteractive();



















