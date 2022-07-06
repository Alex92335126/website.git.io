const text = document.querySelector(".my-email");
let emailText = document.getElementById('email-address')
let github = document.getElementById('github-add')
// console.log('email', emailText)
text.addEventListener("mouseover", function () {
  console.log('clicked me')
  console.log('email func', emailText)
  emailText.innerHTML = "alex92335126@gmail.com"
  github.innerHTML = "https://github.com/Alex92335126"
  // document.getElementsByClassName('email-address')[0] = "alex92335126@gmail.com"
  // text.style.color = "blue";
  // text.innerHTML = "alex92335126@gmail.com";
});

text.addEventListener("mouseout", function () {
    console.log('leave me')
  // text.style.color = "black";
  // text.innerHTML = "Email";
});

let snorlaxApi = $.get("https://pokeapi.co/api/v2/pokemon/snorlax");
let dragoniteApi = $.get("https://pokeapi.co/api/v2/pokemon/dragonite");
$.when(snorlaxApi, dragoniteApi).done((snorlaxData, dragoniteData) => {
  $('.snorlax').attr('src', snorlaxData[0].sprites.front_default)
  $('.dragonite').attr('src', dragoniteData[0].sprites.front_default)
  // console.log(snorlaxData);
  // console.log(dragoniteData);
});

const pokebtn = document.getElementById("get-random");
pokebtn.addEventListener("click", function (event) {
  let randomPoke = Math.floor(Math.random() * 152)
  // console.log('random poke', randomPoke)
  event.preventDefault();
    let randomPokeApi = $.get(`https://pokeapi.co/api/v2/pokemon/${randomPoke}`);
    $.when(randomPokeApi).done((randomPokeData) => {
      $('.random-pokemon').attr('src', randomPokeData.sprites.front_default)
      $('.random-poke-name').html(randomPokeData.name)
      $('.random-poke-number').html(randomPokeData.id)
      // console.log(randomPokeData);
    });

});

