const Images = {
  alexa: require("../assets/images/alexa.jpg"),
  airpods: require("../assets/images/airpods.jpg"),
  camera: require("../assets/images/camera.jpg"),
  playstation: require("../assets/images/playstation.jpg"),
  mouse: require("../assets/images/mouse.jpg"),
  sneaker1: require("../assets/images/sneaker1.jpg"),
  sneaker2: require("../assets/images/sneaker2.jpg"),
  sneaker3: require("../assets/images/sneaker3.jpg"),
  sneaker4: require("../assets/images/sneaker4.jpg"),
  sneaker5: require("../assets/images/sneaker5.jpg"),
};
const products = [
  {
    _id: 7370697998513,
    name: "Women’s Sweater",
    description: `
    <ul>
    <li>Premium Quality</li>
      <li>Comfortable To Wear</li>
      </ul>`,
    brand: "Reality",
    price: 2975,
    countInStock: 20,
    category: "Women’s Clothing",
    image:
      "https://cdn.shopify.com/s/files/1/0535/5585/5537/products/01_0d5fcc15-c8c9-4309-b1c4-84aa4dbd36d7.jpg?v=1667658573",
  },

  {
    _id: 7370730995889,
    name: "Batwing Long Sleeve Top",
    brand: "Reality",
    price: 3255,
    countInStock: 20,
    category: "Women’s Clothing",
    image:
      "https://cdn.shopify.com/s/files/1/0535/5585/5537/products/71_a0028ae2-6b9d-408f-a727-055512770f28.jpg?v=1667659702",
  },
  {
    _id: 7339034083505,
    name: "STRIPED SWEAT SHIRT",
    description:
      '\u003cp\u003e\u003cimg alt="" src="https://cdn.shopify.com/s/files/1/0535/5585/5537/files/m1613_e2c277f2-32ae-4716-9f50-bb4ce3205120_480x480.jpg?v=1664361784"\u003e\u003c/p\u003e\n\u003cul\u003e\n\n\u003cli\u003e\u003cspan\u003eComfortable round neck design.\u003c/span\u003e\u003c/li\u003e\n\u003cli\u003e\u003cspan\u003eComfy full sleeves.\u003c/span\u003e\u003c/li\u003e\n\u003cli\u003e\u003cspan\u003eMachine or handwash upto 30°C/86F.\u003c/span\u003e\u003c/li\u003e\n\u003cli\u003e\u003cspan\u003eDo not bleach.\u003c/span\u003e\u003c/li\u003e\n\u003cli\u003e\u003cspan\u003eDo not iron directly on prints\u003c/span\u003e\u003c/li\u003e\n\u003c/ul\u003e',
    brand: "Reality",
    price: 3255,
    countInStock: 20,
    category: "Men's Sweater",
    image:
      "https://cdn.shopify.com/s/files/1/0535/5585/5537/products/51_a39a5923-6302-428d-bba9-3734edd01b91.jpg?v=1665256037",
  },
  {
    _id: 7373262258353,
    name: "BLACK FUR COLLAR CARDIGAN",
    brand: "Reality",
    price: 3255,
    countInStock: 20,
    category: "Women’s Clothing",
    image:
      "https://cdn.shopify.com/s/files/1/0535/5585/5537/products/35_57b1b7b1-3fd5-4f9e-8c07-27aaaa25d0f1.jpg?v=1667914890",
  },
  {
    _id: 7366493831344,
    name: "Sneakers",
    image: Images.sneaker1,
    description: "Sneakers",
    brand: "ShoeRepublic",
    category: "Shoes",
    price: 19000,
    countInStock: 10,
  },
  {
    _id: 7366493831346,
    name: "Sneakers",
    image: Images.sneaker2,
    description: "Sneakers",
    brand: "ShoeRepublic",
    category: "Shoes",
    price: 19000,
    countInStock: 10,
  },
  {
    _id: 7366493831347,
    name: "Sneakers",
    image: Images.sneaker3,
    description: "Sneakers",
    brand: "ShoeRepublic",
    category: "Shoes",
    price: 19000,
    countInStock: 10,
  },
  {
    _id: 7366493831348,
    name: "Sneakers",
    image: Images.sneaker4,
    description: "Sneakers",
    brand: "ShoeRepublic",
    category: "Shoes",
    price: 19000,
    countInStock: 10,
  },
  {
    _id: 7366493831349,
    name: "Sneakers",
    image: Images.sneaker5,
    description: "Sneakers",
    brand: "ShoeRepublic",
    category: "Shoes",
    price: 19000,
    countInStock: 10,
  },

  {
    _id: 7366493831345,
    name: "BOAT NECK SWEATER",
    brand: "Reality",
    countInStock: 20,
    category: "Women’s Clothing",
    price: 3255,
    image:
      "https://cdn.shopify.com/s/files/1/0535/5585/5537/products/1_3523a20e-4eb0-4d80-86cb-62b3e49d0ad7.jpg?v=1667222026",
  },
  {
    _id: "1",
    name: "Airpods Wireless Bluetooth Headphones",
    image: Images.airpods,
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 189000,
    countInStock: 10,
  },
  {
    _id: "2",
    name: "iPhone 11 Pro 256GB Memory",
    image: Images.alexa,
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 199000,
    countInStock: 7,
  },
  {
    _id: "3",
    name: "Cannon EOS 80D DSLR Camera",
    image: Images.camera,
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 92900,
    countInStock: 5,
  },
  {
    _id: "4",
    name: "Sony Playstation 4 Pro White Version",
    image: Images.playstation,
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 160000,
    countInStock: 11,
  },
  {
    _id: "5",
    name: "Logitech G-Series Gaming Mouse",
    image: Images.mouse,
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 20000,
    countInStock: 7,
  },
];

export default products;
