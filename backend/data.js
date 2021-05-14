import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Ruel',
      email: 'savandalruel@gmail.com',
      password: bcrypt.hashSync('123', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Puma',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
        name: 'Brownie Bites',
        category: 'Food',
        image: './images/p1.jpg',
        price: 50,
        countInStock: 10,
        brand:'SUPER DELIGHT',
        rating: 4.5,
        numReviews: 18,
        description: '200 GRAMS with real Chocolate Chip!'
    },
    {
        name: 'Cheese & Choco',
        category: 'Food',
        image: '/images/p2.jpg',
        price: 130,
        countInStock: 10,
        brand: 'BIG ROLLS',
        rating: 5,
        numReviews: 9,
        description: 'BIG Size! BIg Bites!'
    },
    {
        name: 'Barquillios',
        category: 'Food',
        image: './images/p3.jpg',
        price: 50,
        countInStock: 10,
        brand: 'SNACKERS',
        rating: 4,
        numReviews: 5,
        description: 'Delicious Foods and Snacks'
    },
    {
        name: 'Chocolate Chip Cookies',
        category: 'Food',
        image: '/images/p4.jpg',
        price: 80,
        countInStock: 10,
        brand: 'SUPER DELIGHT',
        rating: 4.5,
        numReviews: 14,
        description: 'Delicious Foods and Snacks'
    },
    {
        name: 'Black&White Cookies',
        category: 'Food',
        image: '/images/p5.jpg',
        price: 95,
        countInStock: 10,
        brand: 'KHONG GUAN',
        rating: 5,
        numReviews: 16,
        description: 'Delicious Foods and Snacks'
    },
    {
        name: 'WAFER Choco & Vanilla',
        category: 'Food',
        image: '/images/p6.jpg',
        price: 50,
        countInStock: 0,
        brand: 'WAFER',
        rating: 5,
        numReviews: 11,
        description: 'Delicious Foods and Snacks'
    },
    {
        name: 'Pringles',
        category: 'Food',
        image: './images/p7.jpg',
        price: 120,
        countInStock: 0,
        brand: 'Pringles',
        rating: 5,
        numReviews: 11,
        description: 'Delicious Foods and Snacks'
    },
    {
        name: 'Pringles',
        category: 'Food',
        image: '/images/p8.jpg',
        price: 120,
        countInStock: 100,
        brand: 'Pringles',
        rating: 5,
        numReviews: 11,
        description: 'Delicious Foods and Snacks'
    },
    {
        name: 'Premium Chocolate Wafer',
        category: 'Food',
        image: '/images/p9.jpg',
        price: 50,
        countInStock: 100,
        brand: 'LEXI',
        rating: 5,
        numReviews: 24,
        description: 'Delicious Foods and Snacks'
    },
    {
        name: 'Gery Chocolatos',
        category: 'Food',
        image: '/images/p10.jpg',
        price: 50,
        countInStock: 100,
        brand: 'Garuda Food',
        rating: 5,
        numReviews: 24,
        description: 'Delicious Foods and Snacks'
    },
    {
        name: 'Choco Mallows',
        category: 'Food',
        image: '/images/p11.jpg',
        price: 70,
        countInStock: 100,
        brand: 'FIBISCO',
        rating: 4.9,
        numReviews: 24,
        description: 'Delicious Foods and Snacks'
    },
    {
        name: 'Choco Crunchies',
        category: 'Food',
        image: '/images/p12.jpg',
        price: 65,
        countInStock: 100,
        brand: 'FIBISCO',
        rating: 4.9,
        numReviews: 24,
        description: 'Delicious Foods and Snacks'
    },
  ],
};
export default data;