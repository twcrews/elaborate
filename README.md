# Elaborate

Advanced string formatting functions for Node.

---

## Installation

Available at NPM:

`npm install elaborate`

---

## Usage

At this time, Elaborate only contains a few functions:

`timespan` - returns the absolute number of milliseconds between two `Date` objects.

```
const start = new Date(2020, 1, 1, 0, 0, 0, 0);
const end = new Date(2020, 1, 1, 0, 0, 1, 0);

const myTimespan = timespan();  // 1000
```

---

`friendlyTimespanArray` - Generates an array of timespan strings based on a timespan in milliseconds.

```
const start = new Date(2020, 1, 1, 0, 0, 0, 0);
const end = new Date(2020, 1, 6, 0, 0, 1, 500);

const myTimespan = timespan();  // 1000

const myArray = friendlyTimespanArray(myTimespan);
/*
	[
		"5 days",
		"1 second",
		"500 milliseconds"
	]
*/
```

---

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
