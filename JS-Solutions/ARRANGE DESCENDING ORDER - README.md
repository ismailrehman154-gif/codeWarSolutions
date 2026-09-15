<!-- # Arrange Descending Order

## What this code does

This function takes a positive number and rearranges its digits from largest to smallest so it creates the biggest number possible.

### Example

```javascript
descendingOrder(42145); // 54421
```

## How the code works

```javascript
function descendingOrder(n){
  return Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
```

1. `String(n)` changes the number into a string so we can work with each digit.
2. `.split("")` separates the string into an array of individual digits.
3. `.sort((a, b) => b - a)` sorts the digits from highest to lowest.
4. `.join("")` puts the digits back together into one string.
5. `Number(...)` changes the final string back into a number.

## Key things to remember

- `String()` converts something into a string.
- `.split("")` breaks a string into individual characters.
- `.sort()` sorts items in an array.
- `.join("")` combines array items into one string.
- `Number()` converts a value into a number. -->
