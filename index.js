// ❗ ЗАДАЧА #1

// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.

// ТЕСТЫ

// ✅ Метод checkPizza объекта pizzaPalace использует this.
// ✅ Метод order объекта pizzaPalace использует this
// ✅ Вызов pizzaPalace.order("Smoked") возвращает строку "Order accepted, preparing «Smoked» pizza"
// ✅ Вызов pizzaPalace.order("Four meats") возвращает строку "Order accepted, preparing «Four meats» pizza"
// ✅ Вызов pizzaPalace.order("Big Mike") возвращает строку "Sorry, there is no pizza named «Big Mike»"
// ✅ Вызов pizzaPalace.order("Viennese") возвращает строку "Sorry, there is no pizza named «Viennese»"


// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);
//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }
//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };
// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Viennese"));



// ❗ ЗАДАЧА #2

// Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды. Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.

// После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// ТЕСТЫ

// ✅ Объявлена переменная customer
// ✅ Значение переменной customer это объект со свойствами и методами
// ✅ Вызов customer.getDiscount() возвращает текущее значение свойства discount
// ✅ Вызов customer.setDiscount(0.15) обновляет значение свойства discount
// ✅ Вызов customer.getBalance() возвращает текущее значение свойства balance.
// ✅ Вызов customer.getOrders() возвращает текущее значение свойства orders
// ✅ Вызов customer.addOrder(5000, "Steak") добавляет "Steak" в массив значений свойства orders и обновляет баланс
// ✅ Метод getBalance объекта customer использует this
// ✅ Метод getDiscount объекта customer использует this
// ✅ Метод setDiscount объекта customer использует this
// ✅ Метод getOrders объекта customer использует this
// ✅ Метод addOrder объекта customer использует this


// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
// };
// customer.setDiscount(0.15);
// console.log(customer.getDiscount());
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance());
// console.log(customer.getOrders());



// ❗ ЗАДАЧА #3

// Тестировщики нашли баги в коде сервиса хранения истории заказов еды. Тебе необходимо исправить их, правильно расставив this в методах объекта historyService, чтобы методы начали работать правильно.

// ТЕСТЫ

// ✅ Объявлена переменная historyService
// ✅ Значение переменной historyService это объект с исходными свойствами и методами
// ✅ Вызов historyService.getOrdersLog() возвращает строку с перечислением данных всех заказов из свойства orders
// ✅ Вызов historyService.getEmails() возвращает массив всех уникальных почтовых адресов из свойства orders
// ✅ Вызов historyService.getOrdersByEmail("solomon@topmail.net") возвращает [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// ✅ Вызов historyService.getOrdersByEmail("artemis@coldmail.net") возвращает [{ email: "artemis@coldmail.net", dish: "Pizza" }]
// ✅ Метод getOrdersLog объекта historyService использует this
// ✅ Метод getEmails объекта historyService использует this
// ✅ Метод getOrdersByEmail объекта historyService использует this


// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
// };
// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));



// ❗ ЗАДАЧА #4

// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

// ТЕСТЫ

// ✅ Объявлена переменная parent
// ✅ Значение переменной parent это объект
// ✅ Вызов parent.hasOwnProperty("surname") возвращает true
// ✅ Вызов parent.hasOwnProperty("heritage") возвращает true
// ✅ Объявлена переменная child
// ✅ Значение переменной child это объект
// ✅ Вызов child.hasOwnProperty("name") возвращает true
// ✅ Обращение к child.name возвращает "Jason"
// ✅ Вызов child.hasOwnProperty("age") возвращает true
// ✅ Обращение к child.age возвращает 27
// ✅ Вызов child.hasOwnProperty("surname") возвращает false
// ✅ Обращение к child.surname возвращает "Moore"
// ✅ Вызов child.hasOwnProperty("heritage") возвращает false
// ✅ Обращение к child.heritage возвращает "Irish"
// ✅ Вызов parent.isPrototypeOf(child) возвращает true
// ✅ Используется метод Object.create()


// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
// console.log(parent.hasOwnProperty("surname"));
// console.log(parent.hasOwnProperty("heritage"));
// console.log(child.hasOwnProperty("name"));
// console.log(child.hasOwnProperty("age"));
// console.log(child.hasOwnProperty("surname"));
// console.log(child.hasOwnProperty("heritage"));
// console.log(parent.isPrototypeOf(child));



// ❗ ЗАДАЧА #5

// Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.

// ТЕСТЫ

// ✅ Объявлена переменная ancestor
// ✅ Значение переменной ancestor это объект.
// ✅ Объявлена переменная parent
// ✅ Значение переменной parent это объект.
// ✅ Объявлена переменная child
// ✅ Значение переменной child это объект.
// ✅ Вызов ancestor.isPrototypeOf("parent") возвращает true
// ✅ Вызов parent.isPrototypeOf("child") возвращает true
// ✅ Вызов ancestor.hasOwnProperty("surname") возвращает true
// ✅ Обращение к ancestor.surname возвращает "Dawson"
// ✅ Вызов parent.hasOwnProperty("surname") возвращает true
// ✅ Обращение к parent.surname возвращает "Moore"
// ✅ Вызов child.hasOwnProperty("surname") возвращает false
// ✅ Обращение к child.surname возвращает "Moore"
// ✅ Вызов ancestor.hasOwnProperty("heritage") возвращает true
// ✅ Обращение к ancestor.heritage возвращает "Irish"
// ✅ Вызов parent.hasOwnProperty("heritage") возвращает false
// ✅ Обращение к parent.heritage возвращает "Irish"
// ✅ Вызов child.hasOwnProperty("heritage") возвращает false
// ✅ Обращение к child.heritage возвращает "Irish"
// ✅ Используется метод Object.create()


// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;
// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
// console.log(ancestor.isPrototypeOf(parent));
// console.log(parent.isPrototypeOf(child));
// console.log(ancestor.hasOwnProperty("surname"));
// console.log(parent.hasOwnProperty("surname"));
// console.log(child.hasOwnProperty("surname"));
// console.log(ancestor.hasOwnProperty("heritage"));
// console.log(parent.hasOwnProperty("heritage"));
// console.log(child.hasOwnProperty("heritage"));