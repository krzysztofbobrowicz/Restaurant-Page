import './style.css';
import HomeImage from './imgs/pizza_time.jpg';

function component() {
  const content = document.querySelector('#content');
  const navbar = document.createElement('div');
  navbar.setAttribute('id', 'navbar');
  content.appendChild(navbar);

  const restaurantTitle = document.createElement('h2');
  restaurantTitle.setAttribute('id', 'restaurant-title');
  restaurantTitle.innerHTML = 'PanPizza';
  navbar.appendChild(restaurantTitle);

  const links = document.createElement('div');
  links.setAttribute('id', 'link');

  const homeLink = document.createElement('a');
  homeLink.innerText = 'Home';
  links.appendChild(homeLink);
  homeLink.href = './index.html';

  const menuLink = document.createElement('a');
  menuLink.innerText = 'Menu';
  links.appendChild(menuLink);
  menuLink.href = './menu';

  const contactLink = document.createElement('a');
  contactLink.innerText = 'Contact';
  links.appendChild(contactLink);
  contactLink.href = './contact';

  links.childNodes.forEach(child => child.classList.add('link'));
  navbar.appendChild(links);

  const homeSection = document.createElement('div');
  homeSection.setAttribute('id', 'home');
  content.appendChild(homeSection);

  const introduction = document.createElement('div');
  introduction.setAttribute('id', 'introduction');
  homeSection.appendChild(introduction);
  const introductionDiv = document.createElement('div');
  const introductionH1 = document.createElement('h1');
  introductionH1.innerText = 'Hungry?';
  const introductionH2 = document.createElement('h2');
  introductionH2.innerText = `We're here to feed you.`;
  introductionDiv.appendChild(introductionH1);
  introductionDiv.appendChild(introductionH2);

  introduction.appendChild(introductionDiv);
  const myImage = new Image();
  myImage.src = HomeImage;
  myImage.setAttribute('id', 'image-dough');

  introduction.appendChild(myImage);
  return content;
}

document.body.appendChild(component());
