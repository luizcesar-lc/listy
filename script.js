const arrayLista = [

]
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var main = document.getElementById('main');
    if (window.scrollY > main.offsetTop) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
});
document.addEventListener('DOMContentLoaded', function(){
    // Modal 

    //Modal-add
    
    const addIcon = document.querySelector('.add-icon');

    // Selecione o modal de adição de produtos
    const modalAdd = document.querySelector('.modal-add');
    
    // Adicione um evento de clique ao ícone de adicionar
    addIcon.addEventListener('click', () => {
        // Abra o modal de adição de produtos
        modalAdd.style.display = 'block';
    });

    // Fechar Modal-add

    window.addEventListener('click', (event) => {
        if (event.target === modalAdd) {
            modalAdd.style.display = 'none';
        }
    });

     // Evento para fechar o modal ao pressionar a tecla Esc
     window.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            modalAdd.style.display = 'none';
        }
    });

    // Botões de aumentar e diminuir quantidade
    const buttonMore = document.querySelector('.button-more svg');
    const buttonLess = document.querySelector('.button-less svg');
    const inputQuantidade = document.getElementById('quantidade');

    // Event listener para aumentar quantidade
    buttonMore.addEventListener('click', () => {
        // Verifica se o valor do input é menor que 100 antes de incrementar
        if (parseFloat(inputQuantidade.value) < 100) {
            inputQuantidade.value = (parseFloat(inputQuantidade.value) + 0.1).toFixed(1);
        }
    });

    // Event listener para diminuir quantidade
    buttonLess.addEventListener('click', () => {
        // Verifica se o valor do input é maior que 0 antes de decrementar
        if (parseFloat(inputQuantidade.value) > 0) {
            inputQuantidade.value = (parseFloat(inputQuantidade.value) - 0.1).toFixed(1);
        }
    });

    // Adicionar itens a lista

    function addItem(event) {
        event.preventDefault(); // Para evitar o comportamento padrão do formulário
    }

    
    //----------------------------------------------------------------

    //Modal-settings


    const settingIcon = document.querySelector('.setting-icon');

    // Selecione o modal de adição de produtos
    const modalSettings = document.querySelector('.modal-settings');

    // Adicione um evento de clique ao ícone de adicionar
    settingIcon.addEventListener('click', () => {
        // Abra o modal de adição de produtos
        modalSettings.style.display = 'block';
    });

    // Fechar Modal-settings

    window.addEventListener('click', (event) => {
        if (event.target === modalSettings) {
            modalSettings.style.display = 'none';
        }
    });

    // Evento para fechar o modal ao pressionar a tecla Esc
    window.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            modalSettings.style.display = 'none';
        }
    });


})