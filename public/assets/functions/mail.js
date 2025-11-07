// Protege el mail contra bots ensamblando el correo con JS
document.addEventListener('DOMContentLoaded', function() {
    const user = 'francorigante01';
    const domain = 'gmail.com';
    const mail = user + '@' + domain;
    const link = document.getElementById('mail-link');
    if (link) {
        link.textContent = mail;
        link.href = 'mailto:' + mail;
    }
});
