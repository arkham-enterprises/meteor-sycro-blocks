# Meteor Sycro Blocks

Sycro Blocks is a simple package that provides you with Blaze templates that use [fullpage.js](http://alvarotrigo.com/fullPage/) to
generate full page blocks in your app.

```html
<body>
  {{#SycroBlocks verticalCentered=true }}
    {{#SycroBlock}}
      <h1>That's one block of content</h1>
    {{/SycroBlock}}
    {{#SycroBlock}}
      <h1>That's the second block of content</h1>
    {{/SycroBlock}}
  {{/SycroBlocks}}
</body>
```

The parameters to pass to the `SycroBlocks` template can be seen [here](https://github.com/alvarotrigo/fullPage.js#initialization).

## How To Install

```bash
cd /path/to/project
meteor add sycro:blocks
```
