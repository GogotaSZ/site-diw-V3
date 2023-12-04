function fillFotos(fotos){
    for (let index = 0; index < fotos.length; index++) {
        const element = fotos[index];
        var minhaImagem = document.getElementById('album-foto-' + index);
        minhaImagem.src = element;
    }
}

function filldescricao(descricao){
        var item = document.getElementById('album-descricao-0');
        item.textContent = descricao;
    }


function filllocale(local){
        var item = document.getElementById('album-locale-0');
        item.textContent = local;
}

function filldata(ano){
        var item = document.getElementById('album-data-0');
        item.textContent = ano;
}

function renderImg(obras) {

    const carouselInner = document.getElementById('carouselInner');
    carouselInner.innerHTML = '';
    obras.forEach((foto, index) => {
        const divItem = document.createElement('div');
        divItem.classList.add('carousel-item');

        if (index === 0) {
            divItem.classList.add('active');
        }

        const img = document.createElement('img');
        img.src = foto;
        img.classList.add('d-block', 'w-100');
        img.alt = '...';
        img.style.objectFit = 'contain';

        divItem.appendChild(img);
        carouselInner.appendChild(divItem);

    });
}