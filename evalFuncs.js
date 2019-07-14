let re;
re = /hello/;
re = /hello/i; // 0 = case insensitive
//re = /hello/g; // Global Search

// console.log(re);
// console.log(re.source);

//* exec() 
// Return result in an array or null

//const result = re.exec('hello world');

//console.log(result);

//* test() 
// Returns true of false

//const result = re.test('Hello');

//* match() 
// Return result array or null

// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

//* search()
// Returns index of the first mastch, if not found, returns -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

//* replace()
// Return new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr);