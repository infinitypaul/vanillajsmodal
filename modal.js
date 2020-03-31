const cardButtons = document.querySelectorAll('.card button');
let modal = document.querySelector('.modal-outer');

const modalInner = document.querySelector('.modal-inner');


function bringOutModal(e){
    const button = e.currentTarget;
    const card = button.closest('.card');
    const title = card.querySelector('h2').textContent;
    const description = card.dataset.description;
    const imgSrc = card.querySelector('img').src;
    const newImg = imgSrc.replace('200', '600');
    console.log(newImg);


    //Populate The Inner Modal

    modalInner.innerHTML = `
    <img width="600"  src="${newImg}" alt="">
    <h2>${title}</h2>
    <p>${description}</p>
`;
    modal.classList.add('open');
}

function removeModal(){

    modal.classList.remove('open')
}

cardButtons.forEach(button => button.addEventListener('click', bringOutModal));
modal.addEventListener('click', function (e) {
    !e.target.closest('.modal-inner') ? removeModal() : null;
});

window.addEventListener('keydown', function (e) {
    if(e.key === 'Escape') {
        removeModal();
    }
});