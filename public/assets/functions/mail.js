// Protege el mail contra bots ensamblando el correo con JS
function setMailLink() {
    const user = 'francorigante01';
    const domain = 'gmail.com';
    const mail = user + '@' + domain;
    const link = document.getElementById('mail-link');
    if (link) {
        link.textContent = mail;
        link.href = 'mailto:' + mail;
    }
}

document.addEventListener('astro:page-load', setMailLink);
