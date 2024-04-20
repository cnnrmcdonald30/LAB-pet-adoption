const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
      id: 2,
    name: "Trouble",
    color: "Black",
    specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl: "https://media.istockphoto.com/id/1390038554/photo/tyrannosaurus-from-the-cretaceous-era-3d-illustration.jpg?b=1&s=612x612&w=0&k=20&c=8HiFUFCT_yzjrm_j5uuL32EVx6lSmjlA4en2-uBxz3Y=",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
  },
  {
    id: 4,
    name: "Coco",
    color: "Brown",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl: "https://media.istockphoto.com/id/1345313768/photo/dinosaur-tyrannosaurus-rex-on-top-of-mountain-rock.jpg?b=1&s=612x612&w=0&k=20&c=sUmbkvvbehGdD6C41kiTtVfuk5yxWlOharMmvrhSIro="
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
  },
  {
    id: 10,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
  },
  {
    id: 11,
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl: "https://images.pexels.com/photos/3689634/pexels-photo-3689634.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl: "https://images.pexels.com/photos/10641095/pexels-photo-10641095.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl: "https://images.pexels.com/photos/410857/pexels-photo-410857.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
   id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl: "https://images.pexels.com/photos/5480700/pexels-photo-5480700.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl: "https://images.pexels.com/photos/236482/pexels-photo-236482.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
      id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
      id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
  },
  {
      id: 24,
    name: "George",
    color: "Brown",
    specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
      id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
  },
  {
      id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
  },
  {
      id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
  },
  {
      id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
  },
  {
      id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl: "https://images.pexels.com/photos/9660892/pexels-photo-9660892.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const targetingApp = document.querySelector('#pet')
let header = document.querySelector("head")
const catBtn = document.getElementById("cat");
const dogBtn = document.getElementById("dog");
const dinoBtn = document.getElementById("dino");
const allBtn = document.getElementById("all");

let domString = ""
pets.forEach(pet => {
  domString+= `
<div class="card" style="width: 18rem; display: flex; margin: 10px">
  <div class-header>
  <h3 class="card-title">${pet.name}</h3>
  </div>
  <img src="${pet.imageUrl}" class="card-img-top" alt="${pet.name}">
  <div class="card-body">
    <p class="card-text">${pet.color}</p>
    <p class="card-text">${pet.specialSkill}</p>
    <button class="btn btn-info">${pet.type}</button>
    <button class="btn btn-danger">Delete</button>
  </div>
</div>`;
});
targetingApp.innerHTML = domString;


header.innerHTML += `
<style>
.card {
  display: flex;
  flex-direct
}
</style>
`

// Render to DOM function


const showAllCats = () => {
domString = ''
pets.forEach((pet) => {
  if (pet.type === "cat") {
  domString += `<div class="card" style="width: 18rem; display: flex; margin: 10px">
  <div class-header>
  <h3 class="card-title">${pet.name}</h3>
  </div>
  <img src="${pet.imageUrl}" class="card-img-top" alt="${pet.name}">
  <div class="card-body">
    <p class="card-text">${pet.color}</p>
    <p class="card-text">${pet.specialSkill}</p>
    <button class="btn btn-primary">${pet.type}</button>
    <button class="btn btn-danger">Delete</button>
  </div>
</div>`;
  }
  targetingApp.innerHTML = domString;
});

}
const showAllDogs = () => {

domString = "";

pets.forEach((pet) => {
  if (pet.type === "dog") {
  domString += ` <div class="card" style="width: 18rem; display: flex; margin: 10px">
  <div class-header>
  <h3 class="card-title">${pet.name}</h3>
  </div>
  <img src="${pet.imageUrl}" class="card-img-top" alt="${pet.name}">
  <div class="card-body">
    <p class="card-text">${pet.color}</p>
    <p class="card-text">${pet.specialSkill}</p>
    <button class="btn btn-warning">${pet.type}</button>
    <button class="btn btn-danger">Delete</button>
  </div>
</div>`;
  }
  targetingApp.innerHTML = domString;
});

}
const showAllDino = () => {

domString = "";

pets.forEach((pet) => {
  if (pet.type === "dino") {
  domString += `<div class="card" style="width: 18rem; display: flex; margin: 10px">
  <div class-header>
  <h3 class="card-title">${pet.name}</h3>
  </div>
  <img src="${pet.imageUrl}" class="card-img-top" alt="${pet.name}">
  <div class="card-body">
    <p class="card-text">${pet.color}</p>
    <p class="card-text">${pet.specialSkill}</p>
    <button class="btn btn-secondary">${pet.type}</button>
    <button class="btn btn-danger">Delete</button>
  </div>
</div>`;
  }
  targetingApp.innerHTML = domString;
});

}
const showAll = () => {
  domString = "";
pets.forEach(pet => {
  domString+= `
<div class="card" style="width: 18rem; display: flex; margin: 10px">
  <div class-header>
  <h3 class="card-title">${pet.name}</h3>
  </div>
  <img src="${pet.imageUrl}" class="card-img-top" alt="${pet.name}">
  <div class="card-body">
    <p class="card-text">${pet.color}</p>
    <p class="card-text">${pet.specialSkill}</p>
  </div>
</div>`;
});
targetingApp.innerHTML = domString
}




catBtn.addEventListener("click", showAllCats)


dogBtn.addEventListener("click", showAllDogs)

dinoBtn.addEventListener("click", showAllDino)
allBtn.addEventListener("click", showAll)