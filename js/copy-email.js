const emailLink = document.querySelector('.contacts .email a'),
      emailAddress = emailLink.getAttribute('data-email'),
      label = emailLink.querySelector('span');

function copyEmail() {
  const el = document.createElement('textarea');
  el.value = emailAddress;
  el.setAttribute('readonly', '');
  el.style = {position: 'absolute', left: '-99999px'};
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

emailLink.addEventListener('click', (e) => {
  e.preventDefault();

  copyEmail();

  let labelText = label.innerText;
  label.classList.add('active');
  label.innerText = 'Copied!';

  setTimeout(() => {
    label.innerText = labelText;
    label.classList.remove('active');
  }, 3000);
});