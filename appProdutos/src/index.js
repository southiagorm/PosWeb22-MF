import {faker} from '@faker-js/faker';

let produtos = '<ul>';

for(let i = 0; i < 8; i++){
    produtos += `<li>${faker.commerce.productName()}</li>`;
}

produtos += '<ul>';

document.getElementById('div-produtos').innerHTML = produtos;