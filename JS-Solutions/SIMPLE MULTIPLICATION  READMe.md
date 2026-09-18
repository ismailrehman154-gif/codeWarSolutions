[text](<SIMPLE MULTIPLICATION.js>)



# Simple Multiplication

This function checks if a number is even or odd.

## How It Works

* If the number is **even**, multiply it by `8`.
* If the number is **odd**, multiply it by `9`.
* The function returns the final answer.

## Code

```javascript
function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}
```

## Example

```javascript
simpleMultiplication(4);
// Returns 32

simpleMultiplication(5);
// Returns 45
```

## Key Point

`number % 2 === 0` checks if a number is even.

If there is no remainder after dividing by 2, the number is even. Otherwise, it is odd.
