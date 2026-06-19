const navBtn = document.querySelector('#btn-nav-mobile');
const navMobile = document.querySelector('.nav-mobile');

navMobile.classList.add('hidden');

navBtn.addEventListener('click', () => {
  navMobile.classList.toggle('hidden');
})

// FONCTION E-MAIL : OUTLOOK
const btnSubmit = document.querySelector('#btn-submit');

btnSubmit.addEventListener('click', () => {
  const nom = document.querySelector('#nom').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  if (!nom || !email || !message) {
    alert("Veuillez remplir tout les champs s'il vous plait !");
  }

  const dest = "anthonylockj@gmail.com";
  const sujet = encodeURIComponent("DEMANDE DE COLLABORATION OU AUTRES.");
  const corps = encodeURIComponent(
    `NOM : ${nom}\r\n` + `E-mail : ${email}\r\n\r\n` + `\r\n- ${message}`,
  );

  const mailtoLink = `mailto:${dest}?subject=${sujet}&body=${corps}`;
  const mailtoSend = window.open(mailtoLink);
})