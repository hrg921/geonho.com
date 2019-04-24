---
type: til
title: Why float property has to be avoided
created: 2019-04-24
tags:
  - css
  - flex
  - float
  - alignment
---

# Float vs Flex

정렬을 위해 float과 flex를 사용한다. MDN에 나온 Float의 정의는 다음과 같다.

## Float's definition in MDN

The float CSS property places an element on the left or right side of its container, **allowing text and inline elements to wrap around it**. The element is **removed from the normal flow of the page, though still remaining a part of the flow** (in contrast to absolute positioning).

## Float의 위험성

float 속성을 이용하면 정상적인 페이지의 흐름에서 제외시키지만 흐름의 일부로 납둔다고 한다. 이는 CSS전체의 흐름에 안좋은 영향을 미칠 수 있다. 알게 모르게 페이지가 이상하게 동작한다면 float의 문제일 수도 있다는 것이다

## Flex's definition in MDN

CSS Flexible Box Layout is a module of CSS that defines a CSS box model optimized for user interface design, and **the layout of items in one dimension**. In the flex layout model, the children of a flex container can be laid out in any direction, and can “flex” their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent. Both horizontal and vertical alignment of the children can be easily manipulated.

## Float에 비한 Flex의 장점

Flex는 기본적으로 유저인터페이스를 위해 고안되었다. 또한 레이아웃을 한 방향으로밖에 정의하지 못한다. 물론 컨테이너에 한해서 말이다. 이는 단방향의 데이터 흐름과 마찬가지로 CSS의 흐름을 알기 쉽게 해주며 쉬운 사용성 또한 제공한다. 반면 Float는 2차원의 CSS흐름을 제공한다. Floating된 아이템의 흐름과 컨테이너의 흐름을 동시에 사용하기 때문이다. 유저인터페이스를 구현하는 것이 목적이라면 Flex를 사용하는 것이 더 이치에 맞겠다.

## References

- [float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
- [CSS Flexible Box Layout
  ](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
