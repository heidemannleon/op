// document meetodid
// elementide loomine


// Loo li element
const liElement = document.createElement('li');
// lisa klass
liElement.className = 'collection-item'
// lisa id
liElement.id = 'new-item';
// lisa atribuut
liElement.setAttribute('title', 'Uus element');
// lisa teksti väljund
// liElement.innerHTML = 'Uus element';
liElement.textContent = 'Uus element'



// loome lingi element 
const link = document.createElement('a');
//  anna klassid
link.className = 'delete-item secondary-content';
// kustutamis ikoon (textContent ei tööta)
link.innerHTML = '<i class="fa fa-remove"></i>';

// MIDA SEE TEEB
liElement.appendChild(link);

// leiame ul element DOM-ist
ulElement = document.querySelector('ul.collection');

// lisa liElement ul elemendile
ulElement.appendChild(liElement)


console.log(ulElement);






// MIS ON DOM
// MIDA SEE TEEB appendChild