<!-- # String to Array

## What this code does

This function takes a sentence and turns it into an **array of separate words**.

### Example

```javascript
stringToArray("Robin Singh");
// ["Robin", "Singh"]
```

## How the code works

```javascript
function stringToArray(string) {
  return string.split(" ");
}
```

The important part is:

```javascript
string.split(" ")
```

`.split(" ")` looks for every space in the string and uses those spaces to separate the words.

For example:

```javascript
"I love JavaScript".split(" ")
```

becomes:

```javascript
["I", "love", "JavaScript"]
```

The `console.log()` at the bottom is simply testing the function and showing its result in the console.

## Key things to remember

- A string is text inside quotes.
- An array stores multiple values inside `[]`.
- `.split(" ")` separates a string wherever it finds a space.
- `console.log()` displays a value in the console. -->
