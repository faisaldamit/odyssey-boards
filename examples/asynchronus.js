// console.log('1');
// setTimeout(() => {
// 	console.log('2');
// }, 3000);
// console.log('3');

// function func1() {
//   return {name: 'volvo'}
// }

// const name = func1().name

// -- Promises --
console.log('1');
// 1
fetch('https://jsonplaceholder.typicode.com/posts').then((x) => {
	x.json().then((y) => {
		console.log(y);
	});
});
// 2
fetch('https://jsonplaceholder.typicode.com/posts')
	.then((x) => {
		return x.json();
	})
	.then((y) => {
		console.log(y);
	});
console.log('3');
