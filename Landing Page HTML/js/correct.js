'use strict';

const g = document.querySelector('#g');
const go = document.querySelector('#go');
const good = document.querySelector('#goo');
const good1 = document.querySelector('#good');
const good2 = document.querySelector('#good-');
const good3 = document.querySelector('#good-c');
const good4 = document.querySelector('#good-co');
const good5 = document.querySelector('#good-cor');
const good6 = document.querySelector('#good-corr');
const good7 = document.querySelector('#good-corre');
const good8 = document.querySelector('#good-correc');
const good9 = document.querySelector('#good-correct');

const bob = () => {
    Swal.fire({
        title: 'Good',
        text: "You're incredible",
        imageUrl: '../img/yes-bob-esponja.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',

    });
};
g.addEventListener('click', bob);
go.addEventListener('click', bob);
good.addEventListener('click', bob);
good1.addEventListener('click', bob);
good2.addEventListener('click', bob);
good3.addEventListener('click', bob);
good4.addEventListener('click', bob);
good5.addEventListener('click', bob);
good6.addEventListener('click', bob);
good7.addEventListener('click', bob);
good8.addEventListener('click', bob);
good9.addEventListener('click', bob);