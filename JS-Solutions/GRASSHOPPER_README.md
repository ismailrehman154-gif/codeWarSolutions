Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
FundamentalsStrings

 Greet Function

This function checks if the person's name matches the owner's name.

 How It Works

 The function takes in two values:
   `name` – the name of the person
   `owner` – the name of the owner

 If `name` and `owner` are the same, it returns:

```javascript
"Hello boss"
```

 If they are different, it returns:

```javascript
"Hello guest"
```

## Example

```javascript
greet("John", "John");
// Returns: "Hello boss"

greet("Mike", "John");
// Returns: "Hello guest"
```

 Code

```javascript
function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}
```

Key Point

The `===` operator checks if both values are exactly the same.

