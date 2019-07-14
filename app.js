let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;       // Must start with
re = /lo$/i;      // Must end with
re = /^h.llo/i;   // Matches any ONE chatacter
re = /^h*llo/i;   // Matches any chatacter 0 or more times
re = /gre?a?y/i;  // Optional character
re = /gre?a?y/i;  // Escape character


// String to match
const str = 'grey';


// Log result
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`)
  }
}

reTest(re, str);