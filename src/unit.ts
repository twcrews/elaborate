const pluralize = require("pluralize");

export const unitString = (baseUnit: string, value: number): string => {
	if (value === 1 || value === -1) {
		return baseUnit;
	}
	return pluralize(baseUnit);
};
