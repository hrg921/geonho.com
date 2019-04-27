---
type: til
title: The stacking context
created: 2019-04-27
tags:
  - css
  - z-index
  - relative
  - fixed
---

# Proper usage of z-index

The **stacking context** is a three-dimensional conceptualization of HTML elements along imaginary z-axis relative to the user, who is assumed to be facing the viewport or the webpage. HTML elements occupy this space in priority order based on element attributes.

## The stacking context

### Scenario

- Root element of the document
- position: absolute or relative (z-index: auto)
- position: fixed or sticky
- flexbox children (z-index: auto)
- grid childrent (z-index: auto)
- opacity < 1
- mix-blend-mode: normal
- not none values for transform, filter, perspective, clip-path, mask, mask-image, mask-border
- isolation: isolate
- -webkit-overflow-scrolling: touch
- will-change: non-initial value
- contain: layout or paint

## Z-index

The `z-index` values of the its child stacking contexts only have meaning in this parent.

## Summary

- Stacking contexts can be contained in other stacking contexts, and together create a hierarchy of stacking contexts.
- Each stacking context is completely independent of its siblings: **only descendant elements are considered when stcking is processed.**
- Each stacking context is self-contained: after the element's contents are stacked, the whole element is considered in the order of parent stacking context.

## Example

![z index](https://developer.mozilla.org/@api/deki/files/913/=Understanding_zindex_04.png)

Note that Div#1 is over Div#4, this is because Div#3's z-index is lower value than Div#1's.

```html
<div id="div1">
  <h1>Division Element #1</h1>
  <code
    >position: relative;<br />
    z-index: 5;</code
  >
</div>

<div id="div2">
  <h1>Division Element #2</h1>
  <code
    >position: relative;<br />
    z-index: 2;</code
  >
</div>

<div id="div3">
  <div id="div4">
    <h1>Division Element #4</h1>
    <code
      >position: relative;<br />
      z-index: 6;</code
    >
  </div>

  <h1>Division Element #3</h1>
  <code
    >position: absolute;<br />
    z-index: 4;</code
  >

  <div id="div5">
    <h1>Division Element #5</h1>
    <code
      >position: relative;<br />
      z-index: 1;</code
    >
  </div>

  <div id="div6">
    <h1>Division Element #6</h1>
    <code
      >position: absolute;<br />
      z-index: 3;</code
    >
  </div>
</div>

<style></style>
```

```css
* {
  margin: 0;
}
html {
  padding: 20px;
  font: 12px/20px Arial, sans-serif;
}
div {
  opacity: 0.7;
  position: relative;
}
h1 {
  font: inherit;
  font-weight: bold;
}
#div1,
#div2 {
  border: 1px dashed #696;
  padding: 10px;
  background-color: #cfc;
}
#div1 {
  z-index: 5;
  margin-bottom: 190px;
}
#div2 {
  z-index: 2;
}
#div3 {
  z-index: 4;
  opacity: 1;
  position: absolute;
  top: 40px;
  left: 180px;
  width: 330px;
  border: 1px dashed #900;
  background-color: #fdd;
  padding: 40px 20px 20px;
}
#div4,
#div5 {
  border: 1px dashed #996;
  background-color: #ffc;
}
#div4 {
  z-index: 6;
  margin-bottom: 15px;
  padding: 25px 10px 5px;
}
#div5 {
  z-index: 1;
  margin-top: 15px;
  padding: 5px 10px;
}
#div6 {
  z-index: 3;
  position: absolute;
  top: 20px;
  left: 180px;
  width: 150px;
  height: 125px;
  border: 1px dashed #009;
  padding-top: 125px;
  background-color: #ddf;
  text-align: center;
}
```
