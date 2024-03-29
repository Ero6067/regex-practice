let re;
//* Literal Characters
re = /hello/;
re = /hello/i;

//* Metacharacter Symbols
re = /^h/i;             // Must start with
re = /lo$/i;            // Must end with
re = /^h.llo/i;         // Matches any ONE chatacter
re = /^h*llo/i;         // Matches any chatacter 0 or more times
re = /gre?a?y/i;        // Optional character
re = /gre?a?y\?/i;      // Escape character

//* Brackets [] - Character Sets
re = /gr[ae]y/i;        // Must be one of the characters inside the brackets
re = /[GF]ray/;         // Must be a G or F
re = /[^GF]ray/;        // Match anything that isn't inside the brackets
re = /[^GF]ray/;        // Must be anything but a G or F
re = /[A-Z]ray/;        // Matches any uppercase letter
re = /[a-z]ray/;        // /Matches any lowercase letter
re = /[A-Za-z]ray/;     // Matches any letter
re = /[0-9]ray/;        // Matches any digit

//* Braces {} - Quantifiers
re = /Hel{2}o/i;        // Must occur exactly {x} times
re = /Hel{2,4}o/i;      // Must occur exactly {x-y} times
re = /Hel{2,}o/i;       // Must occur at least {x} times

//* Paranthese () - Grouping
re = /^([0-9]x){3}$/;   

//* Shorthand Character Classes
re = /\w/;              // Word character - alphanumeric or _
re = /\w+/;             // + = one or more
re = /\W/;              // Non-Word character
re = /\d/;              // Match any digit
re = /\d+/;             // Match any digit 0 or more times
re = /\D/;              // Match any Non-digit
re = /\s/;              // Match whitespace character
re = /\S/;              // Match non-whitespace character
re = /Hell\b/i;         // Word boundry

//* Assertions 
re = /x(?=y)/;          // Match x only if followed by y
re = /x(?!y)/;          // Match x only if NOT followed by y

// String to match
const str = '3x3x3xy';


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