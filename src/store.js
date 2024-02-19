import { makeObservable, observable, action, computed } from "mobx";

class ProductStore {
  products = JSON.parse(localStorage.getItem('productos')) || [];

  constructor() {
    makeObservable(this, {
      products: observable,
      addProduct: action,
      deleteProduct: action,
      numberOfProducts: computed,
    });
  }

  addProduct(product) {
    this.products.push(product);
    localStorage.setItem('productos', JSON.stringify(this.products))
  }
  // addProduct(product) {
  //   this.products.push(product);
  // }

  deleteProduct(index){
    this.products.splice(index, 1)
    localStorage.setItem('productos', JSON.stringify(this.products))
  }

  get getProducts(){
    return JSON.parse(localStorage.getItem('productos')) || this.products
  }

  get numberOfProducts() {
    return this.products.length;
  }

  get price(){
    return this.numberOfProducts * 22
  }

}


const store = new ProductStore();
export default store;