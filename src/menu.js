export default function menu() {
  const content = document.querySelector('#content');
  content.innerHTML = '';
  const homeSection = document.createElement('div');
  homeSection.setAttribute('id', 'home');
  content.appendChild(homeSection);

  homeSection.innerHTML = 'MENU';
}
