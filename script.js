//Array para armazenar os itens da lista de produtos
const arrayLista = [

]

//Evento que fixa o header sempre no top da janela
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

    //Aqui abaixo estão tudo referente ao modal-add
    //Modal-add
    const addIcon = document.querySelector('.add-icon');

    //Selecione o modal-add
    const modalAdd = document.querySelector('.modal-add');
    
    //Adicione um evento de clique ao ícone de adicionar
    addIcon.addEventListener('click', () => {
        modalAdd.style.display = 'block';
    });

    //Fechar Modal-add
    //Evento para fechar ao pressionar fora do modal
    window.addEventListener('click', (event) => {
        if (event.target === modalAdd) {
            modalAdd.style.display = 'none';
        }
    });

    //Evento para fechar o modal ao pressionar a tecla Esc
     window.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            modalAdd.style.display = 'none';
        }
    });

    //Botões de aumentar e diminuir quantidade no modal-add
    const buttonMore = document.querySelector('.button-more svg');
    const buttonLess = document.querySelector('.button-less svg');
    const inputQuantidade = document.getElementById('quantidade');    

    //Evento para aumentar quantidade
    buttonMore.addEventListener('click', () => {
        inputQuantidade.value = (parseFloat(inputQuantidade.value) + 0.1).toFixed(1);
    });

    //Evento para diminuir quantidade
    buttonLess.addEventListener('click', () => {
        //Verifica se o valor do input é maior que 0 antes de decrementar
        if (parseFloat(inputQuantidade.value) > 0) {
            inputQuantidade.value = (parseFloat(inputQuantidade.value) - 0.1).toFixed(1);
        }
    });

    //Botões de aumentar e diminuir valor no modal-add
    const buttonMorePrice = document.querySelector('.valor-adicionar .button-more-price svg');
    const buttonLessPrice = document.querySelector('.valor-adicionar .button-less-price svg');
    const inputValorUnd = document.getElementById('valorUnd');

    //Evento para aumentar valor
    buttonMorePrice.addEventListener('click', () => {
        //Verifica se o valor do input é menor que 100 antes de incrementar
        inputValorUnd.value = (parseFloat(inputValorUnd.value) + 0.01).toFixed(2);
    });

    //Evento para diminuir valor
    buttonLessPrice.addEventListener('click', () => {
        //Verifica se o valor do input é maior que 0 antes de decrementar
        if (parseFloat(inputValorUnd.value) > 0) {
            inputValorUnd.value = (parseFloat(inputValorUnd.value) - 0.01).toFixed(2);
        }
    });

    //----------------------------------------------------------------
    //Aqui abaixo estão tudo referente ao modal-settings
    //Modal-settings
    const settingIcon = document.querySelector('.setting-icon');

    //Selecione o modal de settings
    const modalSettings = document.querySelector('.modal-settings');

    //Adicione um evento de clique ao ícone de settings
    settingIcon.addEventListener('click', () => {
        modalSettings.style.display = 'block';
    });

    //Fechar Modal-settings
    window.addEventListener('click', (event) => {
        if (event.target === modalSettings) {
            modalSettings.style.display = 'none';
        }
    });

    //Evento para fechar o modal ao pressionar a tecla Esc
    window.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            modalSettings.style.display = 'none';
        }
    });
})

//Função para adicionar itens a lista

//Variavel para iniciar id da array
let nextId = 0;

function addItem(event) {
    event.preventDefault(); //Para evitar o comportamento padrão do formulário

    //Pegando os valores do formulário
    var productName = document.getElementById("product").value;
    var unit = document.getElementById("unit").value;
    var quantity = parseFloat(document.getElementById("quantidade").value);
    var pricePerUnit = parseFloat(document.getElementById("valorUnd").value);
    
    //Verifica se o nome do produto foi inserido
    if (productName === "") {
        alert("Por favor, insira o nome do produto.");
        return;
    }

    //Verifica se a unidade foi selecionada
    if (unit === "0") {
        alert("Por favor, selecione a unidade.");
        return;
    }

    //Verifica se a quantidade é um número válido
    if (isNaN(quantity) || quantity <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }

    //Criando um objeto com os valores
    const newProduct = {
        id: nextId++,
        svg: 0,
        produto: productName,
        unidade: unit,
        quantidade: quantity,
        valor: pricePerUnit
    };

    //Adicionando o novo objeto ao array de postagens
    arrayLista.push(newProduct);

    //Atualizando o DOM para exibir o novo post
    const main = document.querySelector('main');
    const article = document.createElement('article');

    //Article com o itens
    article.classList.add('itens');
    article.innerHTML = `
    <div class="check-icon" onclick="trocarSVG(this, ${newProduct.id})" data-svg-index="0">
        <svg id="check-svg-${newProduct.id}" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="19" fill="#F1E9EF"/>
            <path d="M25 5.75C14.3864 5.75 5.75 14.3842 5.75 25C5.75 35.6158 14.3864 44.25 25 44.25C35.6136 44.25 44.25 35.6158 44.25 25C44.25 14.3842 35.6136 5.75 25 5.75ZM25 41.1667C16.0866 41.1667 8.83333 33.9134 8.83333 25C8.83333 16.0866 16.0866 8.83333 25 8.83333C33.9134 8.83333 41.1667 16.0866 41.1667 25C41.1667 33.9134 33.9134 41.1667 25 41.1667Z" fill="#E20300" stroke="#E20300"/>
        </svg>

        <svg id="circle-svg-${newProduct.id}" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <circle cx="25" cy="25" r="19" fill="#F2FAE6"/>
            <path d="M25 5.75C14.3864 5.75 5.75 14.3842 5.75 25C5.75 35.6158 14.3864 44.25 25 44.25C35.6136 44.25 44.25 35.6158 44.25 25C44.25 14.3842 35.6136 5.75 25 5.75ZM25 41.1667C16.0866 41.1667 8.83333 33.9134 8.83333 25C8.83333 16.0866 16.0866 8.83333 25 8.83333C33.9134 8.83333 41.1667 16.0866 41.1667 25C41.1667 33.9134 33.9134 41.1667 25 41.1667Z" fill="#72A451" stroke="#72A451"/>
            <path d="M33.0244 18.3872L33.0235 18.3881L23.0708 28.3408L16.9744 22.2444C16.3729 21.6429 15.3959 21.6429 14.7944 22.2444C14.1929 22.8459 14.1929 23.8229 14.7944 24.4244L14.7944 24.4244L21.9819 31.6098C22.2849 31.9128 22.681 32.0604 23.0729 32.0604C23.4672 32.0604 23.8615 31.9092 24.1622 31.6116L24.164 31.6098L35.2056 20.5661C35.8071 19.9645 35.8071 18.9875 35.2056 18.386C34.6023 17.7827 33.626 17.7887 33.0244 18.3872L33.0244 18.3872Z" fill="#72A451" stroke="#72A451"/>
        </svg>
    </div>
    <div class="informationProduct" onclick="initChange(${newProduct.id})">
        <div class="principalInformation">
            <h2 class="product">${newProduct.produto}</h2>
            <h2 class="price">R$ ${parseFloat(newProduct.valor * newProduct.quantidade).toFixed(2)}</h2>
        </div>

        <div class="secondaryInformation">
            <p class="unidadeProduto">${newProduct.quantidade} ${newProduct.unidade}</p>
            <p class="valorUnitario">Valor und: R$ ${parseFloat(newProduct.valor).toFixed(2)}</p>            
        </div>              
    </div>
    `;

    //Modal para moficição de preço
    const div = document.createElement('div');
    div.classList.add('modal-change');
    div.innerHTML = `
    <form>
        <div class="modal-content">
            <h1 class="title-change-add"></h1>
            <div class="quantidade-produto">
                <h2>QUANTIDADE</h2>
                <p></p>
            </div>
            <div class="valor-unitario">
                <h2>VALOR UNITÁRIO</h2>
                <input type="text" placeholder="R$ ">
            </div>
            <div class="valor-total">
                <h2>VALOR TOTAL</h2>
                <p></p>
            </div>
            <button class="button" type="button" onclick="initChange(${newProduct.id})">ADICIONAR</button>
        </div>
    </form>
    `

    //Adicionando o article e a div na main
    main.appendChild(article);
    main.appendChild(div);

    //Adicionando uma linha abaixo de cada produto
    const linha = document.createElement('div');
    linha.classList.add('linha');
    main.appendChild(linha);

    //Chamar a função para calcular o total após adicionar um novo item
    calcularTotal();

    //Resetando o índice do SVG para o próximo item
    newProduct.svg = 0;

    //Limpar os campos do formulário após a submissão
    document.getElementById("product").value = "";
    document.getElementById("unit").value = "0";
    document.getElementById("quantidade").value = "0.0";
    document.getElementById("valorUnd").value = "0.0";
}

//Função para calcular o total
function calcularTotal() {
    try {
      let total = 0;
      arrayLista.forEach((postagem) => {
        if (!isNaN(postagem.quantidade) && postagem.quantidade > 0) {
          total += postagem.quantidade * postagem.valor;
        } else {
          throw new Error("Quantidade inválida");
        }
      });
  
      //Atualizando o texto da classe "amount-text" com o valor total calculado
      const amountText = document.querySelector('.amount-text');
      amountText.textContent = `R$ ${total.toFixed(2)}`;
    } catch (error) {
      alert(error.message);
    }
  }


//Função para atualizar os itens quando modificados
const main = document.querySelector('main');

function atualizar() {
    //Limpar conteúdo anterior
    main.innerHTML = "";

    arrayLista.forEach(function(item) {
        const article = document.createElement('article');
        article.classList.add('itens');
        article.innerHTML = `
        <div class="check-icon" onclick="trocarSVG(this, ${item.id})" data-svg-index="${item.svg}">
            <svg id="check-svg-${item.id}" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Conteúdo do SVG -->
                <circle cx="25" cy="25" r="19" fill="#F1E9EF"/>
                <path d="M25 5.75C14.3864 5.75 5.75 14.3842 5.75 25C5.75 35.6158 14.3864 44.25 25 44.25C35.6136 44.25 44.25 35.6158 44.25 25C44.25 14.3842 35.6136 5.75 25 5.75ZM25 41.1667C16.0866 41.1667 8.83333 33.9134 8.83333 25C8.83333 16.0866 16.0866 8.83333 25 8.83333C33.9134 8.83333 41.1667 16.0866 41.1667 25C41.1667 33.9134 33.9134 41.1667 25 41.1667Z" fill="#E20300" stroke="#E20300"/>
            </svg>

            <svg id="circle-svg-${item.id}" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none;">
                <!-- Conteúdo do SVG -->
                <circle cx="25" cy="25" r="19" fill="#F2FAE6"/>
                <path d="M25 5.75C14.3864 5.75 5.75 14.3842 5.75 25C5.75 35.6158 14.3864 44.25 25 44.25C35.6136 44.25 44.25 35.6158 44.25 25C44.25 14.3842 35.6136 5.75 25 5.75ZM25 41.1667C16.0866 41.1667 8.83333 33.9134 8.83333 25C8.83333 16.0866 16.0866 8.83333 25 8.83333C33.9134 8.83333 41.1667 16.0866 41.1667 25C41.1667 33.9134 33.9134 41.1667 25 41.1667Z" fill="#72A451" stroke="#72A451"/>
                <path d="M33.0244 18.3872L33.0235 18.3881L23.0708 28.3408L16.9744 22.2444C16.3729 21.6429 15.3959 21.6429 14.7944 22.2444C14.1929 22.8459 14.1929 23.8229 14.7944 24.4244L14.7944 24.4244L21.9819 31.6098C22.2849 31.9128 22.681 32.0604 23.0729 32.0604C23.4672 32.0604 23.8615 31.9092 24.1622 31.6116L24.164 31.6098L35.2056 20.5661C35.8071 19.9645 35.8071 18.9875 35.2056 18.386C34.6023 17.7827 33.626 17.7887 33.0244 18.3872L33.0244 18.3872Z" fill="#72A451" stroke="#72A451"/>
            </svg>
        </div>
        <div class="informationProduct" onclick="initChange(${item.id})">
            <div class="principalInformation">
                <h2 class="product-${item.id}">${item.produto}</h2>
                <h2 class="price-${item.id}">R$ ${parseFloat(item.valor * item.quantidade).toFixed(2)}</h2>
            </div>

            <div class="secondaryInformation">
                <p class="unidadeProduto-${item.id}">${item.quantidade} ${item.unidade}</p>
                <p class="valorUnitario-${item.id}">Valor und: R$ ${parseFloat(item.valor).toFixed(2)}</p>
            </div>
        </div>
        `;

        const div = document.createElement('div');
        div.classList.add('modal-change');
        div.innerHTML = `
        <form>
            <div class="modal-content">
                <h1 class="title-change-add">${item.produto.toUpperCase()}</h1>
                <div class="quantidade-produto">
                    <h2>QUANTIDADE</h2>
                    <p>${item.quantidade} ${item.unidade}</p>
                </div>
                <div class="valor-unitario">
                    <h2>VALOR UNITÁRIO</h2>
                    <input type="text" placeholder="R$ ${parseFloat(item.valor).toFixed(2)}">
                </div>
                <div class="valor-total">
                    <h2>VALOR TOTAL</h2>
                    <p>R$ ${parseFloat(item.valor * item.quantidade).toFixed(2)}</p>
                </div>
                <button class="button" type="button" onclick="initChange(${item.id})">ADICIONAR</button>
            </div>
        </form>
        `;

        main.appendChild(article);
        main.appendChild(div);

        const linha = document.createElement('div');
        linha.classList.add('linha');
        main.appendChild(linha);
    });

    //Função para recalcular o total
    calcularTotal();
}


//Função para abrir a modal-change
function initChange(index, event) {
    atualizar();

    //Selecione os elementos relevantes com base no índice
    const productName = document.querySelector(`.product-${index}`).innerText;
    const unitQuantity = document.querySelector(`.unidadeProduto-${index}`).innerText;
    const unitPriceElement = document.querySelector(`.valorUnitario-${index}`);
    const unitPrice = parseFloat(unitPriceElement.innerText.replace('Valor und: R$ ','')).toFixed(2);
    const totalPriceElement = document.querySelector(`.price-${index}`);

    //Os elementos para abrir o modal e usar as informações conforme necessário
    const modalChange = document.querySelector('.modal-change');
    modalChange.style.display = 'block';

    const produtoModal = document.querySelector('.modal-change .modal-content .title-change-add');
    const quantidadeModal = document.querySelector('.modal-change .modal-content .quantidade-produto p');
    const valorUnitarioModal = document.querySelector('.modal-change .modal-content .valor-unitario input');
    const valorTotalModal = document.querySelector('.modal-change .modal-content .valor-total p');

    //As variáveis para preencher o conteúdo do modal
    produtoModal.textContent = productName.toUpperCase();
    quantidadeModal.textContent = unitQuantity;
    valorUnitarioModal.value = unitPrice;
    valorTotalModal.textContent = (unitPrice * parseFloat(unitQuantity)).toFixed(2);

    //Evento para atualizar o valor total quando o usuário modificar o valor unitário no modal
    valorUnitarioModal.addEventListener('input', function() {
        const newUnitPrice = parseFloat(this.value).toFixed(2);
        const newTotalPrice = (newUnitPrice * parseFloat(unitQuantity)).toFixed(2);
        const unitPriceElement = document.querySelector(`.valorUnitario-${index}`);
        unitPriceElement.innerText = `Valor und: R$ ${newUnitPrice}`;
        totalPriceElement.textContent = `R$ ${newTotalPrice}`;
        arrayLista[index].valor = newUnitPrice;
        calcularTotal();      
    });

    //Fechar Modal-change
    //Evento para fechar o modal-change quando clicado fora da modal
    window.addEventListener('click', (event) => {
        if (event.target === modalChange) {
            modalChange.style.display = 'none';
        }
    });

    //Evento para fechar o modal-change com teclas
    window.addEventListener('keydown', (event) => {
        //Fecha o modal se a tecla "Esq" for pressionada
        if (event.key === "Escape") {
            modalChange.style.display = 'none';
        }
        //Fecha o modal se a tecla "Enter" for pressionada
        if (event.key === "Enter") {
            modalChange.style.display = 'none';
            event.preventDefault(); // Evitar comportamento padrão
        }
    });   
}


//Função para trocar os icones da classe check-icon
function trocarSVG(element, index) {
    //Obtendo o índice do SVG atual do elemento
    const svgIndex = parseInt(element.getAttribute('data-svg-index'));
    
    //Selecionando os SVGs específicos para este item
    const checkSVG = document.getElementById(`check-svg-${index}`);
    const circleSVG = document.getElementById(`circle-svg-${index}`);

    //Verificando o índice atual e alternando a visibilidade
    if (svgIndex === 0) {
        //Se o índice for 0, exiba o SVG "circle-svg" e oculte o SVG "check-svg"
        checkSVG.style.display = 'none';
        circleSVG.style.display = 'block';
        element.setAttribute('data-svg-index', '1');
    } else {
        //Se o índice não for 0, exiba o SVG "check-svg" e oculte o SVG "circle-svg"
        checkSVG.style.display = 'block';
        circleSVG.style.display = 'none';
        element.setAttribute('data-svg-index', '0');
    }
}

//------------------------------------------------------------
//Funções dos botões dentro da settings
//------------------------------------------------------------
//Função para o botão de zerar seleções
function zerarSelecoes() {
    //Percorra todos os itens da arrayLista
    arrayLista.forEach((item, index) => {
        //Selecione os elementos SVG de check e círculo com base no índice
        const checkSvg = document.querySelector(`#check-svg-${index}`);
        const circleSvg = document.querySelector(`#circle-svg-${index}`);

        //Alterne a exibição entre os SVGs para mostrar o SVG do círculo e ocultar o SVG do check
        circleSvg.style.display = "none";
        checkSvg.style.display = "block";
    });
}

//Evento de clique do botão "ZERAR SELEÇÕES"
// Selecione o botão "ZERAR SELEÇÕES"
const buttonZerarSelecoes = document.querySelector('.button-reset button:nth-of-type(1)');

//Adicione um evento de clique ao botão "ZERAR SELEÇÕES" para chamar a função zerarSelecoes
buttonZerarSelecoes.addEventListener('click', zerarSelecoes);

//------------------------------------------------------------
//Função zerarValoresUnitarios 
function zerarValoresUnitarios() {
    // Verificar se a arrayLista existe e tem elementos
    if (arrayLista && arrayLista.length > 0) {
        // Iterar sobre cada item da arrayLista
        arrayLista.forEach((item) => {
            item.valor = 0;
        });

        // Atualizar os itens na interface
        atualizar();
    }
}

//Selecione o botão "ZERAR VALORES"
const buttonZerarValores = document.getElementById('zerar-button');

//Evento de clique do botão "ZERAR VALORES"
buttonZerarValores.addEventListener('click', zerarValoresUnitarios);

//------------------------------------------------------------
//Função para apagar tudo do arrayLista
function apagarTudo() {
    //Limpar a arrayLista definindo-a como um array vazio
    while (arrayLista.length > 0) {
        arrayLista.pop();
    }

    //Zerando o id
    nextId = 0;

    //Limpar o conteúdo na interface do usuário
    const main = document.querySelector('main');
    main.innerHTML = '';

    //Recalcular o total
    calcularTotal();
}

//Selecione o botão "APAGAR TUDO"
const buttonApagarTudo = document.querySelector('#apagar-tudo-button');

//Adicione um evento de clique ao botão "APAGAR TUDO"
buttonApagarTudo.addEventListener('click', apagarTudo);