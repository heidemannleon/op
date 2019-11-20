// sündmused

const form = document.querySelector('form');
const lisaUusYlesanne = document.getElementById('task');
const text = document.querySelector('h5');

//
lisaUusYlesanne.value = '';

//
// form.addEventListener('submit', syndmus);
// lisaUusYlesanne.addEventListener('focus',syndmus);
// lisaUusYlesanne.addEventListener('blur',syndmus);

// lisaUusYlesanne.addEventListener('paste',syndmus);
// lisaUusYlesanne.addEventListener('cut',syndmus);

// lisaUusYlesanne.addEventListener('input',syndmus);
//














function syndmus(e){
    // 
    console.log(`Sündmuse tüüp: ${e.type}`);
    //
    console.log(lisaUusYlesanne.value);
    //
    text.innerText = lisaUusYlesanne.value;
    
    
}
