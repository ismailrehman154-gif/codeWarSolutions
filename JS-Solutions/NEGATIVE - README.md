<!-- # Make a Number Negative

## What this code does

This function makes a number negative **only if it is positive**.

If the number is already negative or is `0`, it returns the number unchanged.

### Examples

```javascript
makeNegative(1);    // -1
makeNegative(-5);   // -5
makeNegative(0);    // 0
makeNegative(0.12); // -0.12
```

## How the code works

```javascript
function makeNegative(num) {
  if (num > 0) {
    return -num;
  }

  return num;
}
```

1. The function receives a number called `num`.
2. `if (num > 0)` checks whether the number is positive.
3. If it is positive, `return -num` puts a negative sign in front of it.
4. If it is not positive, `return num` gives back the original number.

## Key things to remember

- `if` lets your code make a decision.
- `>` means "greater than."
- `return` ends the function and gives back a value.
- `-num` changes a positive number into its negative version. -->
