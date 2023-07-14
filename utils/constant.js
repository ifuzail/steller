const products = [
  {
    id: 1,
    name: 'Nike Air Max 95-sport shoes',
    category: 'Sport Shoes',
    company: 'Nike',
    slug: 'nike-air-max-95-sport-shoes',
    price: 219.99,
    imageUrl: '/assets/shoe1.webp',
    description: 'Experience unparalleled comfort and style with the Nike Air Max 95 sport shoes. Designed to provide excellent support and cushioning, these shoes are perfect for your active lifestyle.'
  },
  {
    id: 2,
    name: 'Adidas-ADIZERO BOSTON 11 SHOES',
    category: 'Sport Shoes',
    company: 'Adidas',
    slug: 'adidas-adizero-boston-11-shoes',
    price: 129.29,
    imageUrl: '/assets/shoe2.webp',
    description: 'Achieve your running goals with the Adidas Adizero Boston 11 shoes. Built for speed and performance, these shoes offer a lightweight design and responsive cushioning to help you reach new levels of performance.'
  },
  {
    id: 3,
    name: 'Redmi A2 (Sea Green, 2GB RAM, 32GB Storage) | Powerful Octa Core G36 Processor ',
    category: 'Smartphones',
    company: 'Redmi',
    slug: 'redmi-a2-smartphone',
    price: 632.99,
    imageUrl: '/assets/smartphone.webp',
    description: 'Stay connected and capture stunning photos with the Redmi A2 smartphone. Powered by a powerful octa-core processor, this smartphone delivers smooth performance and comes with ample storage for all your apps and files.'
  },
  {
    id: 4,
    name: 'realme narzo 50i Prime (Dark Blue 4GB RAM+64GB Storage) Octa-core Processor | 5000 mAh Battery',
    category: 'Smartphones',
    company: 'realme',
    slug: 'realme-narzo-50i-prime',
    price: 491.99,
    imageUrl: '/assets/smartphone2.webp',
    description: 'Experience long-lasting performance and a vibrant display with the realme narzo 50i Prime smartphone. Packed with a powerful processor and a large battery, this smartphone is perfect for your everyday needs.'
  },
  {
    id: 5,
    name: 'HP Laptop 15s, 11th Gen Intel Core i3-1115G4, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, Intel UHD Graphics',
    category: 'Laptops',
    company: 'HP',
    slug: 'hp-laptop-intel-uhd-graphic',
    price: 2119.99,
    imageUrl: '/assets/laptop.webp',
    description: 'Boost your productivity with the HP Laptop 15s. Featuring an 11th Gen Intel Core i3 processor and ample storage, this laptop delivers reliable performance for work or entertainment.'
  },
  {
    id: 6,
    name: 'Lenovo IdeaPad Slim 3 Intel Core i3-1115G4 11th Gen 15.6" (39.62cm) FHD Laptop',
    category: 'Laptops',
    company: 'Lenovo',
    slug: 'lenovo-ideapad-slim-3',
    price: 1249.99,
    imageUrl: '/assets/laptop2.webp',
    description: 'Get the perfect combination of style and performance with the Lenovo IdeaPad Slim 3. Powered by an Intel Core i3 processor, this laptop offers crisp visuals and seamless multitasking.'
  },
  {
    id: 7,
    name: 'boAt Xtend/Xtend RTL Smartwatch with Alexa Built-in, 1.69” HD Display',
    category: 'Smartwatches',
    company: 'boAt',
    slug: 'boat-xtend-rtl-smartwatch',
    price: 239.99,
    imageUrl: '/assets/watch.webp',
    description: 'Stay connected and track your fitness goals with the boAt Xtend Smartwatch. With Alexa built-in and a high-definition display, this smartwatch is a stylish companion for your everyday life.'
  },
  {
    id: 8,
    name: 'JBL C100SI Wired In Ear Headphones with Mic, JBL Pure Bass Sound, One Button Multi-function Remote, Angled Buds for Comfort fit (Black)',
    category: 'Headphones',
    company: 'JBL',
    slug: 'jbl-earphone',
    price: 413.99,
    imageUrl: '/assets/earphone2.webp',
    description: 'Immerse yourself in high-quality sound with the JBL C100SI in-ear headphones. Designed for comfort and convenience, these headphones deliver JBL\'s signature pure bass sound and come with a built-in microphone.'
  },
  {
    id: 9,
    name: 'Noise Pulse 2 Max 1.85" Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS',
    category: 'Smartwatches',
    company: 'Noise',
    slug: 'noise-smartwatch',
    price: 229.99,
    imageUrl: '/assets/watch2.webp',
    description: 'Stay connected and monitor your fitness with the Noise Pulse 2 Max smartwatch. Featuring a vibrant display and long battery life, this smartwatch helps you stay on top of your health goals.'
  },
  {
    id: 10,
    name: 'boAt Bassheads 162 in Ear Wired Earphones with Mic(Active Black)',
    category: 'Headphones',
    company: 'boAt',
    slug: 'boat-bassheads',
    price: 219.99,
    imageUrl: '/assets/earphone.webp',
    description: 'Enjoy your favorite music with enhanced bass using the boAt Bassheads 162 earphones. With a built-in microphone and comfortable fit, these earphones are perfect for on-the-go listening.'
  },
  {
    id: 11,
    name: 'Noise Newly Launched Buds Connect Truly Wireless in Ear Earbuds with 50H Playtime, Quad Mic with ENC',
    category: 'Earbuds',
    company: 'Noise',
    slug: 'noise-earbuds',
    price: 100.99,
    imageUrl: '/assets/airdopes.webp',
    description: 'Experience true freedom with the Noise Buds Connect truly wireless earbuds. With an impressive playtime and quad microphone setup, these earbuds deliver exceptional audio quality for your music and calls.'
  },
  {
    id: 12,
    name: 'Sony WH-1000XM4 Wireless Noise Cancelling Headphones',
    category: 'Headphones',
    company: 'Sony',
    slug: 'sony-wh-1000xm4-headphones',
    price: 299.99,
    imageUrl: '/assets/headphone1.png',
    description: 'Experience immersive audio and exceptional noise cancellation with the Sony WH-1000XM4 wireless headphones. These headphones deliver premium sound quality and feature smart features for personalized audio experience.'
  },
  {
    id: 13,
    name: 'Samsung Galaxy Tab S7+ 12.4" AMOLED Display, 256GB Storage, S Pen Included',
    category: 'Tablets',
    company: 'Samsung',
    slug: 'samsung-galaxy-tab-s7-plus',
    price: 849.99,
    imageUrl: '/assets/tab1.jpg',
    description: 'Unleash your productivity and creativity with the Samsung Galaxy Tab S7+. Featuring a stunning AMOLED display and powerful hardware, this tablet provides a premium tablet experience for work and entertainment.'
  },
  {
    id: 14,
    name: 'Apple Watch Series 6 (GPS, 44mm)',
    category: 'Smartwatches',
    company: 'Apple',
    slug: 'apple-watch-series-6',
    price: 399.99,
    imageUrl: '/assets/smartwatch1.webp',
    description: 'Stay connected and monitor your health with the Apple Watch Series 6. With advanced features like ECG, blood oxygen monitoring, and a wide range of fitness tracking capabilities, this smartwatch is the ultimate companion for an active lifestyle.'
  },
  {
    id: 15,
    name: 'Dell XPS 13 9310 13.4" FHD+ Touchscreen Laptop',
    category: 'Laptops',
    company: 'Dell',
    slug: 'dell-xps-13-9310-laptop',
    price: 1399.99,
    imageUrl: '/assets/laptop3.webp',
    description: 'Experience exceptional performance and stunning visuals with the Dell XPS 13 9310 laptop. Featuring a compact design, powerful specifications, and a touchscreen display, this laptop is perfect for both work and entertainment.'
  },
  {
    id: 16,
    name: 'Canon EOS R5 Mirrorless Camera Body',
    category: 'Cameras',
    company: 'Canon',
    slug: 'canon-eos-r5-camera',
    price: 3799.99,
    imageUrl: '/assets/camera1.webp',
    description: 'Capture breathtaking photos and videos with the Canon EOS R5 Mirrorless Camera. With its high-resolution sensor, advanced autofocus, and professional-grade video capabilities, this camera is a game-changer for photographers and videographers.'
  }
];

export default products;
