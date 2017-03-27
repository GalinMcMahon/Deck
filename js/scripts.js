$(function(){
  var cards = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  var suits = ["Clubs", "Hearts", "Spades", "Diamonds"];

  suits.forEach(function(suit){
    cards.forEach(function(card){
      $(`#${suit.toLowerCase()} ul`).append(`<li>${card} of ${suit}</li>`);
    });
  });

});
