---
title: You don't know JS - Up & Going
---
# You Don't know JS: Up & Going

## Chapter 1: Into Programming
For the Beginner, basic programming concepts are introduced.

## Chapter 2: Into JavaScript
JavaScript Guide for the JS begineers.

### Closure
Confused Concept. You can think of closure as a way to "**remember**" and continue to access a function's scope (its variables) even once the function has finished running.

#### makeAdder function
```javascript
function makeAdder(x) {
    // parameter `x` is an inner variable

    // inner function `add()` uses `x`, so
    // it has a "closure" over it
    function add(y) {
        return y + x;
    };

    return add;
}
```

#### closure concept example
```javascript
// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder( 1 );

// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusTen = makeAdder( 10 );

plusOne( 3 );       // 4  <-- 1 + 3
plusOne( 41 );      // 42 <-- 1 + 41

plusTen( 13 );      // 23 <-- 10 + 13
```

#### Related Background Knowledge
Unconsciously, I used this concept with React when I have to create event handler with respect to list value.
