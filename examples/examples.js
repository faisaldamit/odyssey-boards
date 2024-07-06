// -- Arrow Functions --
{
	function f(x) {
		return x * 2;
	}

	const f2 = function (x) {
		return x * 2;
	};

	const f3 = (x) => {
		return x * 2;
	};

	const f4 = (x) => x * 2;

	console.log(f(4));
}

// -- Array methods --
{
	const arr = [
		{ name: 'John', age: 24 },
		{ name: 'Mamadou', age: 22 },
		{ name: 'Oussama', age: 21 },
		{ name: 'Yassine', age: 25 },
	];

	const l3ir9Sami = arr.filter((x) => {
		return x.name !== 'Mamadou';
	});

	console.log(l3ir9Sami);

	const names = l3ir9Sami.map((x) => {
		const name = x.name;
		const age = x.age;

		return name + ' ' + age;
	});

	console.log(names);
}

// -- Spread operator --
{
	const list = [1, 2, 3];
	list.push(4);
	const list2 = [0, ...list, -2, ...list];

	console.log(list2);

	const obj = { brand: 'Fiat', color: 'Blue', model: 'Dobolo' };
	let obj2 = { color: 'Red', ...obj };
	let obj3 = { ...obj, color: 'Red' };
}

// -- Destructuring
{
	const obj = { brand: 'Fiat', color: 'Blue', model: 'Dobolo' };
	// const color = obj.color
	const { color } = obj;

	const list = [1, 2, 3];
	const [, , three] = list;

	console.log(three);
}
