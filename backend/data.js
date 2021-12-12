import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name:'Basir',
            email:'admin@example.com',
            password:bcrypt.hashSync('1234', 8),
            isAdmin:true,
        },
        {
            name:'John',
            email:'John.User@example.com',
            password:bcrypt.hashSync('12345', 8),
            isAdmin:false,
        }
    ],
    products: [{

            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
            countInStock: 10
        },
        {

            name: 'Addidas Fit Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 100,
            brand: 'Addidas',
            rating: 4.0,
            numReviews: 3,
            description: 'high quality product',
            countInStock: 17
        },
        {

            name: 'Lacoste Slim Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 120,
            brand: 'Lacoste',
            rating: 3.0,
            numReviews: 10,
            description: 'high quality product',
            countInStock: 0
        },
        {

            name: 'Nike Slim Pants',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 160,
            brand: 'Nike',
            rating: 5.0,
            numReviews: 1,
            description: 'high quality product',
            countInStock: 4
        },
        {

            name: 'Cholon Slim Shirt',
            category: 'Shirts',
            image: '/images/p5.jpg',
            price: 200,
            brand: 'Cholon',
            rating: 2.0,
            numReviews: 10,
            description: 'high quality product',
            countInStock: 2000
        },
        {

            name: 'benthanh Slim Shirt',
            category: 'Shirts',
            image: '/images/p6.jpg',
            price: 700,
            brand: 'benthanh',
            rating: 0.5,
            numReviews: 100,
            description: 'poor quality product',
            countInStock: 5
        }
    ]
};

export default data;