// 1 - var, let, const
// Exemplo de código com vazamento de escopo usando a variavel var!
var x = 10;
var y = 15;

if (y > 5) {
    var x = 5;
    console.log(x);
}
console.log(x)

// Exemplo de codigo com vazamento corrigido usando a variavel let!

let a = 10;
let b = 15;

if (b > 10) {
    let a = 5;
    console.log(a);
}
console.log(a);

let i = 10;

for (let i = 0; i <= 5; i++) {
    console.log(i);
}
console.log(i);

function logName(name) {
    if (name) {
        console.log(name);
    } else {
        console.log("VAZIO");
    }
}

logName();

const name = 'Sérgio';
console.log(name);

// 2 - arrow function
const sum = function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
    if (name) {
        return 'Olá ' + name + '!'
    } else {
        return 'Olá!'
    }
}

console.log(greeting('Thuany'));
console.log(greeting());

const testeArrow = () => 'Tesstou!!!'


const user = {
    name: 'Theo',
    sayUserName() {
        var self = this;
        setTimeout(function () {
            console.log(self)
            console.log('Username: ' + self.name)
        }, 500)
    },
    sayUserArrowName() {
        setTimeout(() => {
            console.log(this);
            console.log('Username:' + this.name)
        }, 700)
    }
};

user.sayUserName();
user.sayUserArrowName();

// 3 - Filter

const arr = [1, 2, 3, 4, 5];

console.log(arr);

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n;
    }
});

console.log(highNumbers)

const users = [
    {name: 'Matheus', available: true},
    {name: 'Pedro', available: false},
    {name: 'João', available: false},
    {name: 'Marcos', available: true},
]

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(notAvailableUsers);

// 4 - Map

const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Chaleira Elétrica', price: 49.99, category: 'Eletrônico'},
    {name: 'Fogão', price: 400, category: 'Eletrônico'},
    { name: 'Calça jeans', price: 50.99, category: 'Roupas' },
]

products.map((product) => {
    if (product.category === 'Roupas') {
        product.onSale = true;
    }
});

console.log(products);

// 5 - templetes literals

const userName = 'Thuany';
const age = 30;

console.log(`O nome do usuário é ${userName} e ela tem ${age} anos.`)

// 6 -  destructuring
const fruits = ["Maça", "Laranja", "Mamão"]

const [f1, f2, f3] = fruits;

console.log(f1);
console.log(f3);

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza",
}

const {
    name: productName,
    price,
    category: productCtegory,
    color,
} = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCtegory}`);

// 7- spread operator

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];
console.log(a3);

const a4 = [0, ...a1, 4];
console.log(a4);

const carName = { name: 'Gol' };
const carBrand = { branda: 'VW' };
const otherInfo = { km: 100000, price: 49000 };

const car = { ...carName, ...carBrand, ...otherInfo };
console.log(car);

// 8 - Classes

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }
}

const shirt = new Product('Camissa gola V', 20);

console.log(shirt);
console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(50));

// 9 - Herança

class ProductWithAtributes extends Product {
    constructor(name, price, colors) {
        super(name, price);
        this.colors = colors;
    }

    showColors() {
        console.log('As cores são:')
        this.colors.forEach((color) => {
            console.log(color);
        });
    }  
}

const hat = new ProductWithAtributes('Chapéu', 29.99, ['Preto', 'Azul', 'Verde']);

console.log(hat.name);
console.log(hat.productWithDiscount(30));
hat.showColors();