var menuItem = document.querySelectorAll('.item-menu');

function selectLink(){
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    );
    this.classList.add('ativo');
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
);

// Expandir menu
var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function() {
    menuSide.classList.toggle('expandir');
    
    // Alterna o ícone do botão
    if (menuSide.classList.contains('expandir')) {
        btnExp.classList.remove('fa-chevron-right');
        btnExp.classList.add('fa-chevron-left');
    } else {
        btnExp.classList.remove('fa-chevron-left');
        btnExp.classList.add('fa-chevron-right');
    }
});
