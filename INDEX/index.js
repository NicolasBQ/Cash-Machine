const btnAdmin = document.getElementById('buttonA');
const btnCaj = document.getElementById('buttonC');

btnAdmin.addEventListener('click', function(){
    document.location.href = '../ADMINISTRADOR/admin.html';
})

btnCaj.addEventListener('click', function() {
    document.location.href = '../CAJERO/cajero.html';
})