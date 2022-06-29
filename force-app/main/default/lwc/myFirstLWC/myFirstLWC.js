import { LightningElement } from 'lwc';

export default class MyFirstLWC extends LightningElement {

    name = 'User';

     updateName(event){
        console.log(event.target.value);
        this.name = event.target.value;
     }
}