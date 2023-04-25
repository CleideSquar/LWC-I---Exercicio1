import { LightningElement } from 'lwc';

export default class App extends LightningElement {
   empresa = 'Mamaco Corp';
   cnpj = '00.111.222/0001-33';
   endereço = 'Rua dos Macacos, 123';
   produto = 'Banana Prata';
   descrição = 'Bananada';
   preço = 'R$ 5,99';
   oferta1 = 'Banana Prata 4,99';
   oferta2 = 'Banana Nanica 4,99';

visible = true;

ocultar(){
this.visible = !this.visible;
}
}
