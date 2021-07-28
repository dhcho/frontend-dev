const foods = [
    {no:1, name: 'Bread', quantity: 10},
    {no:2, name: 'Egg', quantity: 20},
    {no:3, name: 'Milk', quantity: 50},
    {no:3, name: 'Carrot', quantity: 20}
];

const res = foods.filter(food => food.quantity <= 20);

console.log(res);