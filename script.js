// Объекты (Практика)
    // Задание 1: "Карточка пользователя"

const user = {
    name: 'Алексей',
    age: 25,
    isAdmin: true,
}

console.log(user.name)
console.log(user.age)
console.log(user.isAdmin)

// for (const key in user) {
//     console.log(user[key])
// }

    // Задание 2: "Добавление и изменение"

const car = {
    brand: 'oka',
    year: 2003,
}

car.color = 'blue'
car.year = 2001

console.log(car)

    // Задание 3: "Вложенные объекты"

const order = {
    customer: {
        name: 'biba',
        phone: 1111,
    },
    shipping: {
        city: 'chyngachanga',
        zip: 3434,
    },
    items: [
        'banana',
        'car',
        'baton',
    ],
}

console.log(order.customer.name)
console.log(order.shipping.city)
console.log(order.items[0])

    // Задание 4: "Объект как база данных"

const products = {
    'Молоко': 100,
    'Хлеб': 40,
    'Масло': 180,
}

console.log(products['Масло'])

products['Лук'] = 70

console.log(products['Лук'])

    // Задание 5: "Реальный заказ"

const fullOrder = {
    buyer: {
        'имя': 'Boba',
        'email': 'babaiboba@gmail.com',
        'телефон': 2222,
    },

    shipping: {
        'город': 'chyngachanga',
        'адрес': 'улица Пушкина, дом Колотушкина',
        'способ доставки': 'почта',
    },
    payment: {
        'способ оплаты': 'деньгами',
        'статус': 'оплачено',
    },

    items: [
        {name: 'бинты', quantity: 2, price: 400},
        {name: 'таблетки', quantity: 5, price: 640},
        {name: 'сироп', quantity: 4, price: 1000},
    ]


    
}

let sum = 0

for (let i = 0; i < fullOrder.items.length; i++) {
    sum = sum + fullOrder.items[i].quantity
}

console.log(sum)

let sum2 = 0

for (let i = 0; i < fullOrder.items.length; i++) {
    sum2 = sum2 + fullOrder.items[i].quantity * fullOrder.items[i].price
}

console.log(sum2)