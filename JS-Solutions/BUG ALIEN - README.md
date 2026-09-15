<!-- # Bug Alien — Travel Distance

## What this code does

This function calculates how far an aircraft traveled in **kilometers** when its speed is given in **knots** and its travel time is given in **minutes**.

## How the code works

```javascript
function travelDistance(avgSpeed, travelTime) {
  const KM_PER_MILE = 1.852;
  const travelHours = travelTime / 60;
  const travelMiles = avgSpeed * travelHours;
  const travelKms = travelMiles * KM_PER_MILE;

  return travelKms;
}
```

1. `travelTime / 60` converts minutes into hours.
2. `avgSpeed * travelHours` finds the distance traveled. Since knots mean nautical miles per hour, this gives the distance in nautical miles.
3. Multiplying by `1.852` converts nautical miles into kilometers.
4. `return travelKms` sends the final distance back from the function.

## Simple example

If the aircraft travels at `100` knots for `60` minutes:

- 60 minutes = 1 hour
- 100 knots × 1 hour = 100 nautical miles
- 100 × 1.852 = 185.2 kilometers

## Key things to remember

- A **knot** means one nautical mile per hour.
- Divide minutes by `60` to get hours.
- `const` is useful for values that will not be reassigned.
- `return` gives the result of a function back to the code that called it. -->
