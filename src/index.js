import main from './main.js';
import menu from './menu.js';
import contact from './contact.js';



const links = document.querySelector('#links');
links.childNodes.forEach(link => link.addEventListener('click', switchTab));

function switchTab(e) {
  if (e.target.classList.contains('home')) {
    main();
  } else if (e.target.classList.contains('menu')) {
    menu();
    console.log('clicking on menu');
  } else if (e.target.classList.contains('contact')) {
    contact();
  }
}

main();
