export default function contact() {
  const content = document.querySelector('#content');
  content.innerHTML = '';
  const homeSection = document.createElement('div');
  homeSection.setAttribute('id', 'home');
  content.appendChild(homeSection);

  homeSection.innerHTML = 'CONTACT';
}
