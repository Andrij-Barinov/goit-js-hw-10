// ❗ ЗАДАЧА #1


// Используя ключевое слово class объяви класс Car с пустым телом.

// ТЕСТЫ

// ✅ Объявлен класс Car
// ✅ Результат вызова new Car() это пустой объект


// class Car {
// }



// ❗ ЗАДАЧА #2


// Добавь классу Car метод constructor который принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Класс Car должен создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.

// ТЕСТЫ

// ✅ Объявлен класс Car
// ✅ У класса Car есть метод constructor
// ✅ В результате вызова new Car("Audi", "Q3", 36000) получится объект { brand: "Audi", model: "Q3", price: 36000 }
// ✅ В результате вызова new Car("BMW", "X5", 58900) получится объект { brand: "BMW", model: "X5", price: 58900 }
// ✅ В результате вызова new Car("Nissan","Murano", 31700) получится объект { brand: "Nissan", model: "Murano", price: 31700 }


// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// console.log(new Car("Audi", "Q3", 36000));
// console.log(new Car("BMW", "X5", 58900));
// console.log(new Car("Nissan","Murano", 31700));



// ❗ ЗАДАЧА #3


// Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) конструктора.

// ТЕСТЫ

// ✅ Объявлен класс Car
// ✅ У класса Car есть метод constructor
// ✅ В результате вызова new Car({ brand: "Audi", model: "Q3", price: 36000 }) получится объект { brand: "Audi", model: "Q3", price: 36000 }
// ✅ В результате вызова new Car({ brand: "BMW", model: "X5", price: 58900 }) получится объект { brand: "BMW", model: "X5", price: 58900 }
// ✅ В результате вызова new Car({ brand: "Nissan", model: "Murano", price: 31700 }) получится объект { brand: "Nissan", model: "Murano", price: 31700 }


// class Car {
//     constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
// console.log(new Car({ brand: "BMW", model: "X5", price: 58900 }));
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));



// ❗ ЗАДАЧА #4


// Добавь классу Car два метода.

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

// ТЕСТЫ

// ✅ В классе Car объявлен метод getPrice
// ✅ Метод getPrice возвращает значение свойства price экземпляра класса который его вызывает
// ✅ В классе Car объявлен метод changePrice
// ✅ Метод changePrice изменяет значение свойства price экземпляра класса который его вызывает


// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//     getPrice() {
//     return this.price;
// }
//     changePrice(newPrice) {
//     this.price = newPrice;
// }
// }



// ❗ ЗАДАЧА #5


// Напиши класс Storage, который будет создавать объекты для управления складом товаров. Класс ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

// Объяви следующие методы класса:

// getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта который вызывает этот метод.
// removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров в свойстве items объекта который вызывает этот метод.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.

// ТЕСТЫ

// ✅ Объявлен класс Storage
// ✅ В классе Storage объявлен метод getItems
// ✅ В классе Storage объявлен метод addItem
// ✅ В классе Storage объявлен метод removeItem
// ✅ Метод getItems возвращает значение свойства items экземпляра класса который его вызывает
// ✅ Метод addItem изменяет свойство items экземпляра класса который его вызывает
// ✅ Метод removeItem изменяет свойство items экземпляра класса который его вызывает
// ✅ В результате вызова new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значение переменной storage это объект
// ✅ У объекта storage есть свойство items
// ✅ Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Nanitoids", "Prolonger", "Antigravitator"]
// ✅ Второй вызов, storage.getItems(), после вызова storage.addItem("Droid"), возвращает массив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// ✅ Третий вызов storage.getItems(), после вызова storage.removeItem("Prolonger"), возвращает массив ["Nanitoids", "Antigravitator", "Droid"]


// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(newItem) {
//         this.items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//         const index = this.items.indexOf(itemToRemove);
//         if (index > -1) {
//             this.items.splice(index, 1);
//         }
//     }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]



// ❗ ЗАДАЧА #6


// Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку, которая записывается на создаваемый объект в свойство value.

// Объяви следующие методы класса:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает параметр str (строку) и добавляет её в конец значения свойства value объекта который вызывает этот метод.
// padStart(str) - получает параметр str (строку) и добавляет её в начало значения свойства value объекта который вызывает этот метод.
// padBoth(str) - получает параметр str (строку) и добавляет её в начало и в конец значения свойства value объекта который вызывает этот метод.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.

// ТЕСТЫ

// ✅ Объявлен класс StringBuilder
// ✅ В классе StringBuilder объявлен метод getValue
// ✅ Метод getValue возвращает значение свойства value экземпляра класса который его вызывает
// ✅ В классе StringBuilder объявлен метод padEnd
// ✅ Метод padEnd изменяет свойство value экземпляра класса, который его вызывает
// ✅ В классе StringBuilder объявлен метод padStart
// ✅ Метод padStart изменяет свойство value экземпляра класса который его вызывает
// ✅ В классе StringBuilder объявлен метод padBoth
// ✅ Метод padBoth изменяет свойство value экземпляра класса который его вызывает
// ✅ В результате вызова new StringBuilder(".") значение переменной builder это объект
// ✅ У объекта builder есть свойство value
// ✅ Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку .
// ✅ Второй вызов builder.getValue(), после вызова builder.padStart("^"), возвращает строку ^.
// ✅ Третий вызов builder.getValue(), после вызова builder.padEnd("^"), возвращает строку ^.^
// ✅ Четвёртый вызов builder.getValue(), после вызова builder.padBoth("="), возвращает строку =^.^=


// class StringBuilder {
//     constructor(initialValue) {
//         this.value = initialValue;
//     }
//     getValue() {
//         return this.value;
//     }
//     padEnd(str) {
//         this.value += str;
//     }
//     padStart(str) {
//         this.value = str + this.value;
//     }
//     padBoth(str) {
//         this.value = str + this.value + str;
//     }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="



// ❗ ЗАДАЧА #7


// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.

// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

// ТЕСТЫ

// ✅ Объявлен класс Car
// ✅ Свойство brand в классе Car объявлено приватным
// ✅ Конструктор класса принимает объект со свойствами brand, model и price
// ✅ В результате вызова new Car({ brand: "Audi", model: "Q3", price: 36000 }) получится объект { model: "Q3", price: 36000 }
// ✅ В результате вызова new Car({ brand: "bmw", model: "X5", price: 58900 }) получится объект { model: "X5", price: 58900 }
// ✅ В результате вызова new Car({ brand: "Nissan", model: "Murano", price: 31700 }) получится объект { model: "Murano", price: 31700 }
// ✅ У экземпляра нет публичного свойства brand
// ✅ Метод getBrand() возвращает значение приватного свойства brand.
// ✅ Метод changeBrand("Honda") изменяет значение приватного свойства brand на "Honda"


// class Car {
// #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//  getBrand() {
//     return this.#brand;
//     }
//     changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
// console.log(new Car({ brand: "bmw", model: "X5", price: 58900 }));
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));



// ❗ ЗАДАЧА #8


// Выполни рефакторинг класса Storage, сделав свойство items приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// ТЕСТЫ

// ✅ Объявлен класс Storage
// ✅ У объекта storage нет свойства items
// ✅ В классе Storage объявлен метод getItems
// ✅ В классе Storage объявлен метод addItem
// ✅ В классе Storage объявлен метод removeItem
// ✅ Свойство items в классе Storage объявлено приватным
// ✅ Конструктор класса принимает свойство items
// ✅ В результате вызова new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значение переменной storage это объект
// ✅ Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Nanitoids", "Prolonger", "Antigravitator"]
// ✅ Второй вызов, storage.getItems(), после вызова storage.addItem("Droid"), возвращает массив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// ✅ Третий вызов storage.getItems(), после вызова storage.removeItem("Prolonger"), возвращает массив ["Nanitoids", "Antigravitator", "Droid"]


// class Storage {
//     #items;
//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]



// ❗ ЗАДАЧА #9


// Выполни рефакторинг класса StringBuilder, сделав свойство value приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// ТЕСТЫ

// ✅ Объявлен класс StringBuilder
// ✅ Свойство value в классе StringBuilder объявлено приватным
// ✅ В классе StringBuilder объявлен метод getValue
// ✅ В классе StringBuilder объявлен метод padEnd
// ✅ В классе StringBuilder объявлен метод padStart
// ✅ В классе StringBuilder объявлен метод padBoth
// ✅ В результате вызова new StringBuilder('.') значение переменной builder это объект
// ✅ У объекта builder нет свойства value
// ✅ Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку .
// ✅ Второй вызов builder.getValue(), после вызова builder.padStart("^"), возвращает строку ^.
// ✅ Третий вызов builder.getValue(), после вызова builder.padEnd("^"), возвращает строку ^.^
// ✅ Четвёртый вызов builder.getValue(), после вызова builder.padBoth("="), возвращает строку =^.^=


// class StringBuilder {
//     #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value += str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="



// ❗ ЗАДАЧА #10


// Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand. Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.

// ТЕСТЫ

// ✅ Объявлен класс Car
// ✅ В классе Car объявлено приватное свойство brand
// ✅ В классе Car объявлено приватное свойство model
// ✅ В классе Car объявлено приватное свойство price
// ✅ Конструктор класса принимает объект со свойствами brand, model и price
// ✅ В классе Car объявлен геттер brand
// ✅ В классе Car объявлен сеттер brand
// ✅ В классе Car объявлен геттер model
// ✅ В классе Car объявлен сеттер model
// ✅ В классе Car объявлен геттер price
// ✅ В классе Car объявлен сеттер price


// class Car {
//   #brand;
//   #model;
//   #price;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }
//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }
//   get model() {
//     return this.#model;
//   }
//   set model(newModel) {
//     this.#model = newModel;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }



// ❗ ЗАДАЧА #11


// Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

// Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

// ТЕСТЫ

// ✅ Объявлен класс Car
// ✅ У класса Car есть статическое свойство MAX_PRICE
// ✅ Значение статического свойства MAX_PRICE это число 50000
// ✅ У экземпляра нет свойства MAX_PRICE
// ✅ В классе Car объявлен геттер price
// ✅ В классе Car объявлен сеттер price
// ✅ Вызов сеттера price у экземпляра класса, со значением аргумента меньше чем значение MAX_PRICE, изменяет свойство #price
// ✅ Вызов сеттера price у экземпляра класса, со значением аргумента больше чем значение MAX_PRICE, не изменяет свойство #price


// class Car {
//     static MAX_PRICE = 50000;
//     #price;
//     constructor({ price }) {
//         this.#price = price;
//     }
//     get price() {
//         return this.#price;
//     }
//     set price(newPrice) {
//         if (newPrice <= Car.MAX_PRICE) {
//         this.#price = newPrice;
//         }
//     }
// }
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000
// audi.price = 49000;
// console.log(audi.price); // 49000
// audi.price = 51000;
// console.log(audi.price); // 49000



// ❗ ЗАДАЧА #12


// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

// Если цена автомобиля превышает максимальную, метод должен вернуть строку "Error! Price exceeds the maximum".
// В противном случае метод должен вернуть строку "Success! Price is within acceptable limits".

// Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет использоваться метод checkPrice(price).

// ТЕСТЫ

// ✅ Объявлен класс Car
// ✅ У класса Car есть статический метод checkPrice(price)
// ✅ Вызов Car.checkPrice(36000) возвращает строку "Success! Price is within acceptable limits"
// ✅ Вызов Car.checkPrice(18000) возвращает строку "Success! Price is within acceptable limits"
// ✅ Вызов Car.checkPrice(64000) возвращает строку "Error! Price exceeds the maximum"
// ✅ Вызов Car.checkPrice(57000) возвращает строку "Error! Price exceeds the maximum"


// class Car {
//   static #MAX_PRICE = 50000;
// static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return "Error! Price exceeds the maximum";
//     } else {
//       return "Success! Price is within acceptable limits";
//     }
//   }
//   constructor({ price }) {
//     this.price = price;
//   }
// }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
// console.log(Car.checkPrice(audi.price));
// console.log(Car.checkPrice(bmw.price));



// ❗ ЗАДАЧА #13


// В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.

// Объяви класс Admin, который наследует от класса User
// Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), значение которого это объект { BASIC: "basic", SUPERUSER: "superuser" }

// ТЕСТЫ

// ✅ Объявлен класс Admin
// ✅ Класс Admin наследует от класса User
// ✅ У класса Admin есть публичное статическое свойство AccessLevel
// ✅ Обращение к Admin.AccessLevel.BASIC возвращает строку "basic"
// ✅ Обращение к Admin.AccessLevel.SUPERUSER возвращает строку "superuser"


// class User {
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser"
//   };
// }
// console.log(Admin.AccessLevel.BASIC);
// console.log(Admin.AccessLevel.SUPERUSER);



// ❗ ЗАДАЧА #14


// Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. Добавь классу Admin публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.

// Чтобы показать как будет использоваться класс Admin мы добавили инициализацию экземпляра под объявлением класса.

// ТЕСТЫ

// ✅ Объявлен класс Admin
// ✅ Класс Admin наследует от класса User
// ✅ У класса Admin есть публичное статическое свойство AccessLevel
// ✅ У класса Admin есть метод constructor с параметром в виде объекта {email, accessLevel}
// ✅ У класса Admin в конструкторе для свойства email используется обращение к конструктору родительского класса
// ✅ Обращение к Admin.AccessLevel.BASIC возвращает строку "basic"
// ✅ Обращение к Admin.AccessLevel.SUPERUSER возвращает строку "superuser"


// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
// constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
// }
// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });
// console.log(mango.email);
// console.log(mango.accessLevel);



// ❗ ЗАДАЧА #15


// Добавь классу Admin следующие свойства и методы.

// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.

// После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.

// ТЕСТЫ

// ✅ Объявлен класс Admin
// ✅ Класс Admin наследует от класса User
// ✅ У класса Admin есть публичное свойство blacklistedEmails
// ✅ У класса Admin есть публичный метод blacklist
// ✅ У класса Admin есть публичный метод isBlacklisted
// ✅ После вызова mango.blacklist("poly@mail.com") значение свойства blacklistedEmails это массив ["poly@mail.com"]
// ✅ Вызов mango.isBlacklisted("mango@mail.com") возвращает false
// ✅ Вызов mango.isBlacklisted("poly@mail.com") возвращает true


// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   constructor({ email, accessLevel }) {
//     super(email);
//       this.accessLevel = accessLevel;
//       this.blacklistedEmails = [];
//   }
// blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }
// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });
// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"
// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true