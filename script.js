console.log('Hello!');
// 1. Given an array of objects representing books, extract the titles using `.map()`.

const books = [
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },

  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },

  { title: '1984', author: 'George Orwell' },
];
const titles = books.map((book) => book.title);
console.log(titles);
// Output: [ 'The Catcher in the Rye', 'To Kill a Mockingbird', '1984' ]

// 2. Given an array of objects representing fruits, convert their names to uppercase using `.map()`.

const fruits = [
  { name: 'apple', color: 'red' },

  { name: 'banana', color: 'yellow' },

  { name: 'kiwi', color: 'brown' },
];

const fruitsArray = fruits.map((fruit) => ({
  ...fruit,
  name: fruit.name.toUpperCase(),
}));
console.log(fruitsArray);

// // Output:

// [
//   { name: 'APPLE', color: 'red' },

//   { name: 'BANANA', color: 'yellow' },

//   { name: 'KIWI', color: 'brown' },
// ];

// 3. Given an array of objects representing employees with salaries, increase each salary by 10% using `.map()`.

const employees = [
  { name: 'Alice', salary: 50000 },

  { name: 'Bob', salary: 60000 },

  { name: 'Charlie', salary: 70000 },
];
const employeesWithMoreSalary = employees.map((employee) => ({
  ...employee,
  salary: employee.salary + (employee.salary * 10) / 100,
}));
console.log(employeesWithMoreSalary);
// Output:

// [
//   { name: 'Alice', salary: '55000.00' },

//   { name: 'Bob', salary: '66000.00' },

//   { name: 'Charlie', salary: '77000.00' },
// ];

// 4. Given an array of objects representing products with prices, apply a 20% discount using `.map()`.

const products = [
  { name: 'Laptop', price: 1000 },

  { name: 'Smartphone', price: 500 },

  { name: 'Headphones', price: 100 },
];
const productWithDiscount = products.map((product) => ({
  ...product,
  price: product.price - (product.price * 20) / 100,
}));
console.log(productWithDiscount);
// Output:

// [
//   { name: 'Laptop', price: 800 },

//   { name: 'Smartphone', price: 400 },

//   { name: 'Headphones', price: 80 },
// ];

// 5. Given an array of objects representing cities with temperatures (in Celsius), convert temperatures to Fahrenheit using `.map()`.

const cities = [
  { name: 'New York', temperature: 25 },

  { name: 'Los Angeles', temperature: 30 },

  { name: 'Chicago', temperature: 20 },
];

const tempInFaren = cities.map((city) => ({
  ...city,
  temperature: city.temperature * 1.8 + 32,
}));
console.log(tempInFaren);
// Output:

// [
//   { name: 'New York', temperature: 77 },

//   { name: 'Los Angeles', temperature: 86 },

//   { name: 'Chicago', temperature: 68 },
// ];

// 6. Given an array of objects representing teachers with monthly salaries, use .map() to calculate their annual income assuming they receive a summer bonus of $500.

const teachers = [
  { name: 'Olivia', monthlySalary: 4500 },

  { name: 'Paul', monthlySalary: 5500 },

  { name: 'Rachel', monthlySalary: 5000 },
];
const bonusSalary = teachers.map((teacher) => ({
  ...teacher,
  annualIncome: teacher.monthlySalary * 12 + 500,
}));
console.log(bonusSalary);
// Output:

// [
//   { name: 'Olivia', annualIncome: 54500 },

//   { name: 'Paul', annualIncome: 66500 },

//   { name: 'Rachel', annualIncome: 60500 },
// ];

// 7. Given an array of objects representing countries with populations, use .map() to calculate the population density (population per square kilometers). Density is calculated as population / landArea.

const countries = [
  { name: 'USA', population: 331000000, landArea: 9833517 },

  { name: 'India', population: 1393000000, landArea: 2973190 },

  { name: 'Brazil', population: 213993437, landArea: 8515767 },
];
const popDensity = countries.map((country) => ({
  name: country.name,
  populationDensity: country.population / country.landArea,
}));
console.log(popDensity);
// Output:

// [
//   { name: 'USA', populationDensity: 33.64868828467571 },

//   { name: 'India', populationDensity: 468.5322715634708 },

//   { name: 'Brazil', populationDensity: 25.135909903568547 },
// ];
