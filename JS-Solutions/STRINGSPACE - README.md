<!-- # Remove Spaces From a String

## What this code does

This function removes **all spaces** from a string and returns the text without spaces.

### Example

```javascript
noSpace("Hello World");
// "HelloWorld"
```

## How the code works

```javascript
function noSpace(x) {
  return x.split(' ').join('');
}
```

It works in two steps:

### 1. Split the string at every space

```javascript
"Hello World".split(' ')
```

becomes:

```javascript
["Hello", "World"]
```

### 2. Join everything back together with no spaces

```javascript
["Hello", "World"].join('')
```

becomes:

```javascript
"HelloWorld"
```

## Key things to remember

- `.split(' ')` separates text wherever there is a space.
- `.join('')` combines the pieces with nothing between them.
- Using the two together is a simple way to remove spaces from a string. -->
