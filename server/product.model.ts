import * as faker from 'faker';

export class Product {
  id: string;
  color: string;
  department: string;
  productName: string;
  price: number;
  productAdjective: string;
  productMaterial: string;
  name: string;
  productDescription: string;
  image: string;

  constructor() {
    this.id = faker.random.uuid();
    this.color = faker.commerce.color();
    this.department = faker.commerce.department();
    this.price = faker.commerce.price();
    this.productAdjective = faker.commerce.productAdjective();
    this.productMaterial = faker.commerce.productMaterial();
    this.name = faker.commerce.product();
    this.productDescription = faker.lorem.words();
    this.image = faker.image.image();
  }
}
