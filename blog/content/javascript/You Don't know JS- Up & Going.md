---
title: You don't know JS - Up & Going
---
# You Don't know JS: Up & Going

## Preface
JavaScript is simultaneously a simple, easy-to-use language that has broad appeal, and a complex and nuanced collection of language mechanics which without careful study will elud *true understanding* even for the most seasoned of JavaScript developers.

### Paradox of JavaScript
Therein lies the paradox of JavaScript, the Achilles' Heel of the language, the challenge we are presently addressing. Because JavaScript can be used without understanding, the understanding of the language is often never attained.

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

## Chapter 3: Into YDKJS
Briefly summarize what to expect from the rest of the books.

### Scope & Closures
How scoping of variables really works in JavaScript.

#### Knowledges
- The JS engine compiles your code right before (and sometimes during!) execution.
- Hoisting
- Lexical Scope
- Closure
- Module Pattern

### This & Object Prototypes
Four simple rules to understand and fully determine `this`binding.

#### Knowledges
- look-up chain
- behavior delegation

### Types & Grammer
