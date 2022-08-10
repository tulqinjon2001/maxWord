// First Work
let elMaxWordForm = document.querySelector('.max-word-form');
let elMaxWordText = elMaxWordForm.querySelector('.max-word-textarea');

let elMaxWordOut = document.querySelector('.max-word-out');



elMaxWordForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  let maxWordText = elMaxWordText.value;

  var array = maxWordText.split(" ");

  var maxWord = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i].length >= maxWord.length) {
      maxWord = array[i];
    }
  }


  elMaxWordOut.textContent = maxWord;

  elMaxWordText.value = "";

  return maxWord;
})

// Second Work

let elMaxNumForm = document.querySelector('.max-num-form');
let elMaxNumText = elMaxNumForm.querySelector('.max-num-textarea');

let elMaxNumOut = document.querySelector('.max-num-out');



elMaxNumForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  let maxNumText = elMaxNumText.value;

  var arrayNum = [];

  

  
  
  for (let i = 0; i < arrayNum.length; i++) {
    var elItemNum = document.createElement("li");

    elItemNum.textContent = arrayNum[i];

    elMaxNumOut.appendChild(elItemNum);
  }

  

  elMaxNumText.value = " ";
})


// // Third work Market list optimization
