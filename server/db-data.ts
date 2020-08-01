import * as faker from 'faker';

export const USERS = {
  1: {
    id: 1,
    email: 'jalcantara@mail.com',
    password: 'test',
    img: 'https://pbs.twimg.com/profile_images/872745468115156992/JGulyXUY_400x400.jpg',
    name: 'Jonathan'
  }

};

export const PRODUCTS = [
  {
    id: faker.random.uuid(),
    imgUrl:
      'https://image.shutterstock.com/z/stock-photo-pair-of-white-sneakers-isolated-on-white-background-sport-shoes-712448377.jpg',
    name: 'Sport Shoes',
    price: 110,
    isNew: false,
    isRecommended: true,
  },
  {
    id: faker.random.uuid(),
    imgUrl:
      'https://image.shutterstock.com/z/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg',
    name: 'Red SNEAKER',
    price: 91,
    isNew: false,
    isRecommended: true,
  },
  {
    id: faker.random.uuid(),
    imgUrl:
      'https://image.shutterstock.com/z/stock-photo-pink-and-black-sport-woman-shoes-isolated-on-white-background-709418083.jpg',
    name: 'Sport Shoes Women',
    price: 94,
    isNew: true,
    isRecommended: false,
  },
  {
    id: faker.random.uuid(),
    imgUrl:
      'https://image.shutterstock.com/z/stock-photo-children-s-autumn-or-winter-fashion-boots-isolated-on-white-background-708900334.jpg',
    name: 'Winter boots children',
    price: 143,
    isNew: false,
    isRecommended: false,
  },
  {
    id: faker.random.uuid(),
    imgUrl:
      'https://image.shutterstock.com/z/stock-photo-bangkok-thailand-january-onitsuka-tiger-asics-gel-lyte-iii-on-january-in-bangkok-292088969.jpg',
    name: 'Sports shoes Red-White',
    price: 150,
    isNew: true,
    isRecommended: true,
  },
  {
    id: faker.random.uuid(),
    imgUrl:
      'https://image.shutterstock.com/z/stock-photo-leather-shoes-isolated-on-white-background-including-clipping-path-216565609.jpg',
    name: 'Black leather shoes',
    price: 250,
    isNew: false,
    isRecommended: true,
  },
  {
    id: faker.random.uuid(),
    imgUrl:
      'https://image.shutterstock.com/z/stock-photo-casual-shoes-on-white-background-included-clipping-path-667459072.jpg',
    name: 'Shoes Canvas',
    price: 50,
    isNew: true,
    isRecommended: false,
  },
  {
    id: faker.random.uuid(),
    imgUrl:
      'https://image.shutterstock.com/z/stock-photo-white-sneakers-on-white-background-including-clipping-path-1100736923.jpg',
    name: 'Shoes White',
    price: 85,
    isNew: false,
    isRecommended: false,
  },
  {
    id: faker.random.uuid(),
    imgUrl:
      'https://image.shutterstock.com/z/stock-photo-yellow-sneakers-15066415.jpg',
    name: 'Sneakers Yellow',
    price: 125,
    isNew: true,
    isRecommended: true,
  },
];

export function authenticate(email: string, password: string) {

  const user: any = Object.values(USERS).find(userData => userData.email === email);

  if (user && user.password === password) {
    return user;
  } else {
    return undefined;
  }

}
