// sündmused

const kustutaKoik = document.querySelector('.clear-tasks');
kustutaKoik.addEventListener('click', vajutaNupp);

function vajutaNupp(e){
  let sisu = e;
  // target
  sisu = e.target;
  sisu = e.target.id;
  sisu = e.target.className;
  sisu = e.target.classList;

  // tüüp
  sisu = e.type;

  // sündmuse kordinaadid browseri akna suhtes
  sisu = e.clientY;
  sisu = e.clientX;

  // sündmuse kordinaadid elemendi enda suhtes
  sisu = e.offsetY;
  sisu = e.offsetX;
  console.log(sisu);
const text = document.querySelector('h5');
const kaart = document.querySelector('.card');
// click
// kustutaKoik.addEventListener('click', syndmus);
// double click
// kustutaKoik.addEventListener('dblclick', syndmus);
// mouse down
// kustutaKoik.addEventListener('mousedown', syndmus);
// mouse up
// kustutaKoik.addEventListener('mouseup', syndmus);
// mouse enter
// kaart.addEventListener('mouseenter', syndmus);
// mouse leave
// kaart.addEventListener('mouseleave', syndmus);
// mouse over
// kaart.addEventListener('mouseover', syndmus);
// mouse out
// kaart.addEventListener('mouseout', syndmus);
// mouse move
kaart.addEventListener('mousemove', syndmus);
function syndmus(e){
  // logi sündmuse tüüp
  console.log(`Sündmuse tüüp: ${e.type}`);
  // muuda text sisu: HiirX: x koord HiirY: y koord
  text.textContent =  `HiirX: ${e.offsetX} HiirY: ${e.offsetY}`;
  // koosta body värv rgb(Xkoord, Ykoord, 40);
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
} 