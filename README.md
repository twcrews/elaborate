# Elaborate

Advanced string formatting functions

---

## Usage

At this time, Elaborate only contains a few functions:

`timespan` - returns the absolute number of milliseconds between two `Date` objects.

```
import { timespan } from "elaborate";

const start = new Date(2020, 1, 1, 0, 0, 0, 0);
const end = new Date(2020, 1, 1, 0, 0, 1, 0);

const myTimespan = timespan();  // 1000
```

---

`friendlyTimespanArray` - Generates an array of timespan strings based on a timespan in milliseconds.

```
import { friendlyTimespanArray } from "elaborate";

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
