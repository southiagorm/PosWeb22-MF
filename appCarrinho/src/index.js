import {faker} from '@faker-js/faker';

let carrinho = `Seu carrinho possui ${faker.datatype.number({min: 5, max: 10})}`;

document.getElementById('div-carrinho').innerHTML = carrinho;

