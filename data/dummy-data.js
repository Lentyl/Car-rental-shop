import Product from '../models/product';

const PRODUCTS = [
    new Product(
        'p1',
        'u1',
        'Arrinera Hussarya',
        'https://motowahacz.pl/wp-content/uploads/2015/04/Arrinera-Hussarya-Poznan-Motor-Show.jpg',
        'Arrinera hussarya, great car to pick up a gold digger',
        29.99
    ),
    new Product(
        'p2',
        'u1',
        'New Warszawa M20 GT',
        'https://www.magnapolonia.org/wp-content/uploads/2018/09/M20-GT.jpg',
        'New Warsaw, best car for business meeting. Make impression on everybody.',
        35.99
    ),
    new Product(
        'p3',
        'u2',
        'Syrena Meluzyna',
        'https://www.rdc.pl/wp-content/uploads/2016/01/Syrena-Meluzyna-R.jpg',
        'For fast ride with your beloved.',
        8.99
    ),
    new Product(
        'p4',
        'u3',
        'Lamborghini Sián FKP 37',
        'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/lambo-1933.jpg',
        "The name Sián derives from the bolognese dialect of Emilian siân, which means a flash of lightning.",
        40.99
    ),
    new Product(
        'p5',
        'u3',
        'Ferrari F8 Tributo',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190037-car-f8-tributo-geneva-motorshow-2019-1551802112.jpg?crop=1.00xw:0.669xh;0,0.276xh&resize=1200:*',
        'Awesome ride for barbecue!',
        35.99
    ),
    new Product(
        'p6',
        'u1',
        'Porsche 918 Spyder',
        'https://www.carsuk.net/wp-content/uploads/2010/03/Porsche-918-Spyder.jpg',
        "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
        25.49
    )
];

export default PRODUCTS;