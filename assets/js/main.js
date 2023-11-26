function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/open-menu-white.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/closed-menu-white.svg";
    }
}

function renderImg(obras) {

    const carouselInner = document.getElementById('carouselInner');
    carouselInner.innerHTML = '';
    obras.forEach((obra, index) => {
        const divItem = document.createElement('div');
        divItem.classList.add('carousel-item');

        if (index === 0) {
            divItem.classList.add('active');
        }

        const img = document.createElement('img');
        img.src = obra.img;
        img.classList.add('d-block', 'w-100');
        img.alt = '...';
        img.style.objectFit = 'contain';

        divItem.appendChild(img);
        carouselInner.appendChild(divItem);

    });
}

function renderCards(obras) {
    const cardContainer = document.getElementById('card-container');

    const templateCard = document.getElementById('template-card');

    obras.forEach((obra, index) => {
        const clone = templateCard.cloneNode(true);

        clone.removeAttribute('id');
        const img = clone.querySelector('.card-img-top');
        img.src = obra.img;

        const cardText = clone.querySelector('.card-text');
        cardText.textContent = obra.nome;

        const detalhesLink = clone.querySelector('.card-body a');
        detalhesLink.href = obra.link;

        const verNoMapaButton = clone.querySelector('.verNoMapa');
        verNoMapaButton.onclick = () => handleClick(obra.id);
        cardContainer.appendChild(clone);
        clone.style.display = 'block';
    });
}