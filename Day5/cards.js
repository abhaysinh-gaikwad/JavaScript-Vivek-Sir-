const cards = [
    { title: "Card 1", content: "Content for card 1" },
    { title: "Card 2", content: "Content for card 2" },
    { title: "Card 3", content: "Content for card 3" },
    { title: "Card 4", content: "Content for card 4" },
    { title: "Card 5", content: "Content for card 5" },
    { title: "Card 6", content: "Content for card 6" },
    { title: "Card 7", content: "Content for card 7" },
  ];
  

  let container = document.getElementById("card-container");

//   let card = document.createElement('div');
//   card.classList.add('card');

//   let cardTitle = document.createElement('h3');
//   cardTitle.textContent = 'Card Title';
//   console.log(card)
 
//   let cardContent = document.createElement('p');
//   cardContent.textContent = 'This is the content of the card.'

//   container.append(card);
//   card.append(cardTitle, cardContent );

///////////////////////  Creating Card /////////////////////////////////

// let card1 = createCard("Card 1", "Content for card 1");
// let card2 = createCard("Card 2", "Content for card 2");
// let card3 = createCard("Card 3", "Content for card 3");

// container.append(card1);
// container.append(card2);
// container.append(card3);
cards.forEach((cardData)=>{
    let card = createCard(cardData.title, cardData.content);
    container.append(card);
})

function createCard (cardTitle, cardDescription){
    let card = document.createElement('div');
    card.classList.add('card');

    let title = document.createElement('h3');
    title.textContent = cardTitle;

    let content = document.createElement('p');
    content.textContent = cardDescription;

    card.append(title);
    card.append(content);

    return card;
}

// --------------------------------------------

//   cards.forEach((cardData)=>{

//     let card = document.createElement('div');
//     card.classList.add('card');

//     let cardTitle = document.createElement('h3');
//     cardTitle.textContent = cardData.title;

//     let cardContent = document.createElement('p');
//     cardContent.textContent =cardData.content;


//     container.append(card);
//     card.append(cardTitle, cardContent );
//   })
  


// https://codepen.io/Abhaysinh-Gaikwad/pen/MWxaJQG

// https://codepen.io/Abhaysinh-Gaikwad/pen/bGZVgMW




  








































//   let container = document.getElementById("card-container");
  
//   cards.forEach((cardData) => {
//     let card = createCard(cardData.title, cardData.content);
//     container.append(card);
//   });
  
//   function createCard(cardTitle, cardDescription) {
//     let card = document.createElement("div");
//     card.classList.add("card");
  
//     let title = document.createElement("h3");
//     title.textContent = cardTitle;
  
//     let content = document.createElement("p");
//     content.textContent = cardDescription;
  
//     card.append(title);
//     card.append(content);
  
//     return card;
//   }