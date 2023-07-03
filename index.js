const inventors = [
   { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
   { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
   { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
   { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
   { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
   { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
   { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

const people = [
   "Zeck, Xlenn ",
   "Kecker, Oarl",
   "Keckett , Yamuel",
   "Ueddoes, Tick",
   "Seck, Olenn ",
   "Becker, Zarl",
   "Eeckett , Lamuel",
   "Beddoes, Lick",
   "Feck, Ulenn ",
   "Aecker, Xarl",
   "Aeckett , Kamuel",
   "Zeddoes, Kick",
   "Geck, Ylenn ",
   "Decker, Carl",
   "Seckett , Jamuel",
   "Xeddoes, Jick",
   "Teck, Tlenn ",
   "Secker, Varl",
   "Geckett , Hamuel",
   "Ceddoes, Hick",
   "Heck, Rlenn ",
   "Fecker, Barl",
   "Heckett , Gamuel",
   "Veddoes, Gick",
   "Yeck, Elenn ",
   "Gecker, Marl",
   "Neckett , Famuel",
   "Beddoes, Fick",
   "Ieck, Wlenn ",
   "Hecker, Narl",
   "Meckett , Damuel",
   "Neddoes, Dick",
   "Peck, Qlenn ",
   "Jecker, Karl",
   "Deckett , Aamuel",
   "Meddoes, Sick",
   "Qeck, Glenn ",
   "Kecker, Larl",
   "Beckett , Samuel",
   "Meddoes, Aick",
];

const fifteen = inventors.filter(
   (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(fifteen);

const fullNames = inventors.map(
   (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(fullNames);

// const ordered = inventors.sort(function(a, b){
//    if (a.year > b.year) {
//       return 1;

//    } else {
//       return -1;
//    }
// })
//  console.table(ordered);

// ..........OR....................

const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(ordered);

//    var totalYears = 0;
//     for (var i = 0; i < inventors.length; i++) {
//       totalYears += inventors[i].year
//     }
//   console.log(totalYears);

// ...................OR...................

const totalYears = inventors.reduce((total, inventor) => {
   return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

const oldest = inventors.sort(function (a, b) {
   const lastGuy = a.passed - a.year;
   const nextGuy = b.passed - b.year;
   return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);

//  const category = document.querySelector(".mw-category");
//  const links = Array.from(category.querySelectorAll("a"));
//  const de = links
//          .map(link => link.textContent)
//          .filter(streetName => streetName.includes("de"));

const alpha = people.sort((lastOne, nextOne) => {
   const [aLast, aFirst] = lastOne.split(",");
   const [bLast, bFirst] = nextOne.split(",");
   return aLast > bLast ? 1 : -1;
});
console.log(alpha);

const data = [
   "car",
   "car",
   "truck",
   "truck",
   "bike",
   "walk",
   "car",
   "van",
   "bike",
   "walk",
   "car",
   "van",
   "car",
   "truck",
   "plane",
];

const transportation = data.reduce(function (obj, iten) {
   if (!obj[iten]) {
      obj[iten] = 0;
   }
   obj[iten]++;
   return obj;
}, {});
console.log(transportation);
