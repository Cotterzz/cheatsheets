// ES12 or 2021 New Features
	const strD = strA.replaceAll(strB, strC); // String replaceAll() replaces all occurrences of strB with strC in strA, and returns a new strD, leaving strA unchanged
	// WeakRef
	// weakRef.deref()
	// FinalizationRegistry
	// Promise.any() resolves as soon as one promise is resolved, ignoring others, and returning an aggreggate Error if they all fail
	// Logical assignment operators, combining &&, || and ?? with =
	x &&= y; // if x is truthy, assign to y
	x ||= y; // if x is falsy, assign to y
	x ??= y; // using the nullish coalescing operator, if x is null or undefined only, assign to y
	const billion = 1000_000_000; // Underscores as Numeric separators