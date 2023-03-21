// 1. ZMIENNE I TYPY

//1a)

console.log(1 + "a");

const isDone = false;
const isAdult = true;
const number = 5;
const word = "słowo";

console.log(isDone, isAdult, number, word);

//1b)

console.log(1 + "b");

console.log(
  2 + "2",
  " typ string, typ number ulega konwersji na string przy dodawaniu number + string"
);
console.log(2 + 2, " typ number, dodawanie dwóch numberów");
console.log(
  2 * "2",
  " typ number, string przy mnożeniu z numberem uega konwersji na typ number"
);
console.log(2 * 2, " typ number, działania na dwóch numberach");
console.log(1 == true, " typ boolean, 1 w boolean jest true");
console.log(0 == false, " typ boolean, 0 w boolean odpowiada false");
console.log(
  0 == null,
  " typ boolean, null nie jest zerem, ale  zwróci true, gdy będzie mniejszy lub równy 0 oraz większy lub równy 0"
);
console.log(
  null == undefined,
  "typ boolean, zachodzi niejawna konwersja typów, ponieważ każdy ma inny typ "
);

console.log("= przypisanie wartości do zmiennej");
console.log(
  " == sprawdza czy wartości po lewej i prawej są równe bez względu na typ"
);
console.log("=== sprawdza czy wartości są równe, uwzględniając tym razem typ");

console.log(1 + "c");
const ref =
  "Typ referencyjny od typu prostego różni się tym, że zapisywana wartość to nie treść a adres wskazujący na jego położenie. Typ referencyjny to obiekty, tablice, a prosty to np. string, number";
console.log(ref);

console.log(1 + "d");

let val = 0;
let num = "2137";
let str = 007;
let und = undefined;
console.log(Boolean(val), Number(num), str.toString(), Boolean(und));

console.log(1 + "e");

const newArray = [];
newArray.push(1, 2, 3);
console.log(newArray);

console.log(1 + "f");

let obj = new Object();
obj.name = "Kamil";
obj.age = 30;
obj.city = "Krotoszyn";
console.log(obj);

console.log(1 + "g");

console.log(
  "Typ Nan(Not-a-Number) to wartość typu liczbowego, któa nie jest liczbą. Najszczęściej oznacza że do funkcji zostały przekzazane złe parametry. Nan porównana do Nan lub innej wartości liczbowej zwróci false."
);

console.log(1 + "h");

console.log(
  "Typ symbol to prymitywny typ danych, któa zawsze ma unkalną wartość. Dzięki temu znajduje zastosowanie w dodawaniu dodatkowych funkcjonalności w obiektach."
);

console.log("---------------------------");
console.log(" 2. Funkcje i warunki");
console.log("---------------------------");

console.log("2a");

function sum(a, b, c) {
  const res = a + b + c;
  return res;
}
console.log(sum(2, 5, 8));

console.log("2b");

function trinagle(a, h) {
  const area = (a * h) / 2;
  return area;
}
const size = trinagle(2, 5);
console.log(size);

console.log("2c");

function abc(age) {
  let calc = age - 18;
  if (calc < 18) {
    console.log("Nie miałeś jeszcze 18 urodzin");
  } else age >= 18;
  {
    console.log(`Od 18 minęło ${calc} lat.`);
  }
}
abc(30);

console.log("2d");

const arr = ["a", "b", "c", "d"];

function xyz(arr) {
  console.log(
    `Przekazana tablica ma ${arr.length} elementów a elementem numer 3 jest ${arr[2]} `
  );
}

xyz(arr);

console.log("2e");

let testPerson = {
  name: "Jan",
  surname: "Kowalski",
  age: 20,
  height: 180,
};

function pers(object) {
  console.log(
    `Pan/i ${object.name} ${object.surname} ma ${object.age} lat oraz ${object.height} cm wzrostu`
  );
}

pers(testPerson);

console.log("2f");

const test = (object, age) => {
  object.age = age;
};
const age = 30;

test(testPerson, age);
console.log(testPerson);

console.log("2g");

function next(number) {
  if ("number" !== typeof number) {
    return "Funkcja obsługuję tylko typ Number!";
  } else if (number % 5 === 0 && number % 3 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  }
}

console.log(next(10));
console.log(next(9));
console.log(next(15));
console.log(next("ad"));

console.log("2h");

const even = (value) => (value % 2 === 0 ? "parzysta" : "nieparzysta");
console.log(even(11));
console.log(even(10));

console.log("2i");

let los = Math.floor(Math.random() * 10 + 1);
console.log(los);

console.log("2j");

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomNumber(1, 50));

console.log("2k");

console.log(Math.round(2.5), " metoda ta zaokrągla liczby");
console.log(Math.sqrt(16), "metoda ta oblicza pierwiastek kwadratowy");
console.log(Math.abs(-5), "metoda ta oblicza wartość bezwzględną");

console.log("3 Funkcje i pętle");
console.log("3a");

for (let i = 1; i <= 9; i++) {
  console.log(i);
}

console.log("3b");

for (let i = 9; i >= 1; i--) {
  console.log(i);
}

console.log("3c");

for (let i = 5; i <= 15; i++) {
  console.log(i);
}

console.log("3d");

for (let i = 0; i >= -10; i--) {
  console.log(i);
}

console.log("3e");

for (let i = 1; i <= 2; i = i + 2) {
  console.log(i);
}

console.log("3f");

for (let i = 10; i >= -10; i = i - 4) {
  console.log(i);
}

console.log("3g");

for (let i = 1; i <= 100; i = i * 2) {
  console.log(i);
}

console.log("3h");

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("3i");

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i + " Parzysta");
  } else {
    console.log(i + " Nieparzysta");
  }
}

console.log("3j");

function newFun(a) {
  for (let i = 1; i <= a; i++) {
    console.log(i);
  }
}

console.log(newFun(5));

console.log("3k");

function everyTwo(a) {
  for (let i = 1; i <= 50; i = i + a) {
    console.log(i);
  }
}

console.log(everyTwo(2));

console.log("3l");

const hallo = (arrNames) => {
  for (let i = 0; i < arrNames.length; i++) {
    console.log(`Hallo ${arrNames[i]}`);
  }
};

const arrNames = [
  "Ksawery",
  "Zenobiusz",
  "Klementyna",
  "Apolonia",
  "Jeremiasz",
  "Bernadetta",
];

console.log(hallo(arrNames));

console.log("3ł");

const arrObjects = [
  {
    brand: "Mustang",
    color: "niebieski",
  },
  {
    brand: "Tesla",
    color: "czarna",
  },
  {
    brand: "Polonez",
    color: "żółty",
  },
  {
    brand: "Toyota",
    color: "fioletowa",
  },
];

const car = (arrCar) => {
  for (let info of arrObjects) {
    console.log(` Przed Tobą stoi ${info.color} ${info.brand}`);
  }
};

console.log(car(arrObjects));

console.log("3m");

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenTwo = (arrNum) => {
  for (let number of arrNumbers) {
    if (number % 2 === 0) {
      console.log(number);
    }
  }
};

console.log(evenTwo(arrNumbers));

console.log("3n");

const arrTypes = [
  2,
  4,
  5,
  undefined,
  null,
  "val",
  NaN,
  7,
  10,
  333,
  "874",
  22,
  21,
  400,
  "400",
  "undefined",
];

const arrOther = [];
const arrNubers = [];
const arrEven = [];

const last = (nArr) => {
  for (let all of nArr) {
    if (typeof all === "number") {
      arrNubers.push(all);
    } else if (all % 2 === 0) {
      arrEven.push(all);
    } else {
      arrOther.push(all);
    }
  }
  return [arrOther, arrNubers, arrEven];
};

console.log(last(arrTypes));

console.log("---------------------------");
console.log(" 4. Metody");
console.log("---------------------------");

console.log("4a");
