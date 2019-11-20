// sündmused

const form = document.querySelector('form');
const lisaUusYlesanne = document.getElementById('task');
const text = document.querySelector('h5');

// kustutame lisUusYlesanne väärtus
lisaUusYlesanne.value = '';

// klaviatuur
// keydown
// lisaUusYlesanne.addEventListener('keydown', syndmus);
// keyup
// lisaUusYlesanne.addEventListener('keyup', syndmus);
// keypress
// lisaUusYlesanne.addEventListener('keypress', syndmus);
// focus
// lisaUusYlesanne.addEventListener('focus', syndmus);
// blur
// lisaUusYlesanne.addEventListener('blur', syndmus);
// paste
// lisaUusYlesanne.addEventListener('paste', syndmus);
// cut
// lisaUusYlesanne.addEventListener('cut', syndmus);
// input
// lisaUusYlesanne.addEventListener('input', syndmus);


function syndmus(e){
  // logi sündmuse tüüp
  console.log(`Sündmuse tüüp: ${e.type}`);
  // kontrollime vormi kaudu saadetud väärtus
  console.log(lisaUusYlesanne.value);
  // väljastame ülesanne HTML-is
  text.innerText = lisaUusYlesanne.value;
} 
// bubbling

// lehe kaardi pealkiri
// document.querySelector('.card-title').addEventListener('click', function(e){
//   console.log('card-title');
// });

// lehe kaardi sisu
document.querySelector('.card-content').addEventListener('click', function(e){
  console.log('card-content');
});

// delegeerimine

const kustutaYlesanne = document.querySelector('.delete-item');
kustutaYlesanne.addEventListener('click', kustuta);

// console.log(kustutaYlesanne);

function kustuta(e){
   if(e.target.parentElement.classList.contains('delete-item')){
    console.log('hakkame kustutama');
    e.target.parentElement.parentElement.remove();
  } 
}

