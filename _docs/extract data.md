---
layout: docs
title: Extract Data
permalink: /docs/extract data/
---

Extract data should be the reverse process of [Merge](/docs/merge/).
There are two ways to extract data from source text in StringEx.

----------

## Split

**Split** is useful to extract data from text block.It has two modes to work:

#### Filter mode

In this mode, the program will filter the source text with the characters of input filter text.
The result will be the text which contains multiple columns divided by filter characters.
Look example below,

```
example1 Jimmy Punch
example2 Jimmy Kick
example3 Jimmy Jump
example4 Jimmy Fly
```

If you want to remove all the space characters in source text.So the filter text is ```" "```, and the source text
will be divided into three columns:

| Column1  | Column2 | Column3 |
| -------- | ------- | ------- |
| example1 | Jimmy   | Punch   |
| example2 | Jimmy   | Kick    |
| example3 | Jimmy   | Jump    |
| example4 | Jimmy   | Fly     |

You can input multiple characters to filter in the source text, for example below:

```
example1,Jimmy Punch
example2,Jimmy Kick
example3,Jimmy Jump
example4,Jimmy Fly
```

To get the same three columns as the result above, now you should input ```", "```.

----------

#### **Split** mode

This mode is used while you want to split source text with a specify word.For example,

```
example1JimmyPunch
example2JimmyKick
example3JimmyJump
example4JimmyFly
```

If the input filter text is ```"Jimmy"```, then the result will be:

| Column1  | Column2 |
| -------- | ------- |
| example1 | Punch   |
| example2 | Kick    |
| example3 | Jump    |
| example4 | Fly     |

----------

## Match

Generally speaking, **Split** is enough for you, but there are a few special occasions that **Split** is helpless,
such as you want to pick up data from non-block text, or you have a text block which is hard to process by **Split**.
The example source below is copied from [GitHub](https://github.com/jekyll/jekyll/pulse):
  
```
#5658 Fix a couple of typos in the docs 3 days ago
#5657 Fix typo in Variables doc page 4 days ago
#5653 Improve Permalinks documentation. 6 days ago
#5652 Use `assert_nil` instead of `assert_equal nil` 6 days ago
```

How to **Split** them into only three columns by space character?You can't, but it's easy to succeed with **Match**.
The **Match** use [Regular Expression](https://en.wikipedia.org/wiki/Regular_expression) to find data in source text.In this case, the expression is:

```javascript
(#\d+) (.+) (\d .+)
```

It uses group syntax to group the matches.The first group ```(#\d+)``` means find the sub string prefixed by pound character and
followed by digital numbers.The third group ```(\d .+)``` matches the sub string head from a digital number and end to line end.
The second group is the sub string throws away the other groups.So we will get the right result:

| Column1  | Column2 | Column3 |
| -------- | ----------------------------------------------- | ---------- |
| #5658 | Fix a couple of typos in the docs                  | 3 days ago |
| #5657 | Fix typo in Variables doc page                     | 4 days ago |
| #5653 | Improve Permalinks documentation.                  | 6 days ago |
| #5652 | Use \`assert_nil\` instead of \`assert_equal nil\` | 6 days ago |
