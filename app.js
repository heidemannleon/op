
let sisu = document.querySelector('#title');
// // id järgi
 sisu = document.querySelector('.card-title');

 sisu = document.querySelector('h5'); // elemendi järgi 

//stiili muutmine
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(2)').style.color = 'orange';
console.log(sisu);


 //multiply elements selectors
 
 sisu = document.getElementsByClassName('collection-item');
 console.log(sisu[0]) //[0] on index, laseb valida esimese elemendi Sisu seest.
 sisu[0].style.color = 'orange'; //teen esimese elemendi orange värvi 
 sisu[2].textContent = 'Õpi Arvutivõrgud'; // 
 let nimekirjaElemendid = document.querySelector('ul').getElementsByClassName('collection-item');

 // querySelector klassi nime järgi
nimekirjaElemendid = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(nimekirjaElemendid);
//elemendid nimejärgi
nimekirjaElemendid = document.getElementsByTagName('li')

// teisendame htmlCollection massiiviks (Array)
 nimekirjaElemendid = Array.from(nimekirjaElemendid);
 console.log(nimekirjaElemendid);
 // massiivi meetodite kasutamine
 nimekirjaElemendid.reverse();
 //massiivi läbimine tsükliga
 //for
 for(let i = 0; i < nimekirjaElemendid.length; i++){
     nimekirjaElemendid[i].style.background = '#ccc';
     nimekirjaElemendid[1].style.background = '#f4f4f4';

     console.log(nimekirjaElemendid[i]);
 }
 /* forEach
 nimekirjaElemendid.forEach(function(Element){
     console.log(element);
     element.style.background = '#ddd';
 });
 */

 let nimekiriPaaritu = document.querySelectorAll('li:nth-child(odd)');
 console.log(nimekiriPaaritu);
 let nimekiriPaaris = document.querySelectorAll('li:nth-child(even)');
 console.log(nimekiriPaaritu);