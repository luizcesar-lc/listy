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


    //Modal-settings
    const settingIcon = document.querySelector('.setting-icon');

    // Selecione o modal de adição de produtos
    const modalSettings = document.querySelector('.modal-settings');

    // Adicione um evento de clique ao ícone de adicionar
    settingIcon.addEventListener('click', () => {
        // Abra o modal de adição de produtos
        modalSettings.style.display = 'block';
    });
})