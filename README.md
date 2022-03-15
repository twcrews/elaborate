# Elaborate

Advanced string formatting functions for Node.

---

## Installation

Available at NPM:

`npm install elaborate`

---

## Usage

At this time, Elaborate only contains a few function groups:

### Date functions

`timespan` - returns the absolute number of milliseconds between two `Date` objects.

```
const start = new Date(2020, 1, 1, 0, 0, 0, 0);
const end = new Date(2020, 1, 1, 0, 0, 1, 0);

const myTimespan = timespan(start, end);

console.log(myTimespan);  // 1000
```

---

`friendlyTimespanArray` - Generates an array of timespan strings based on a timespan in milliseconds.

```
const start = new Date(2020, 1, 1, 0, 0, 0, 0);
const end = new Date(2020, 1, 6, 0, 0, 1, 500);

const myTimespan = timespan(start, end);  // 1000

const myArray = friendlyTimespanArray(myTimespan);

console.log(myArray);
/*
	[
		"5 days",
		"1 second",
		"500 milliseconds"
	]
*/
```

---

`friendlyTimespanString` - Converts a timespan into a friendly string.

```
const start = new Date(2020, 1, 1, 0, 0, 0, 0);
const end = new Date(2020, 1, 6, 0, 0, 1, 500);

const myTimespan = timespan(start, end);  // 1000

const myString = friendlyTimespanString(myTimespan);

console.log(myString);  // 5 days, 1 second, and 500 milliseconds
```

---

### Unit functions

`smartPluralize` - Pluralizes a unit word based on the given value.

```
const babyCount = 12;
const myString = smartPluralize(babyCount, "baby");  // babies
```

---

`unitToLocaleString` - Converts a value to its locale string and appends the specified unit.

```
const beanCount = 21;
const myString = unitToLocaleString(beanCount, "bean");  // 21 beans
```

---

`unitToWords` - Converts a value to numeric words and appends the specified unit.

```
const yearCount = 500;
const myString = unitToWords(yearCount, "mile");  // five hundred miles
```

---

### Enumeration functions

`friendlyList` - Converts an array of strings to a friendly string.

```
const simpleArray = ["apples", "oranges", "bananas"];
const myList = friendlyList(simpleArray);

console.log(myList);  // apples, oranges, and bananas
```

```
const complexArray = [
	"a burger, fries, and a shake",
	"two hotdogs",
	"one soda, to go"
];

const myList = friendlyList(complexArray);

console.log(myList);  // a burger, fries, and a shake; two hotdogs; and one soda, to go
```
