import './style.css';
import HomeImage from '../dist/imgs/pizza_time.jpg';

function main() {
  const content = document.querySelector('#content');
  content.innerHTML = '';

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

export default main;
