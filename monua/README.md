# monua

Monospace font for Web Development.

## React JSX (Vite)

```jsx
import monua from 'monua'

const monuaFont = `@font-face {
  font-family: "monua";
  src: url("${monua}") format("woff2");
}`

ReactDOM.createRoot(document.body).render(
  <>
    <style>{monuaFont}</style>
    <App />
  </>
)
```

## CSS Modules (Vite)

```css
/* src/index.css */
@font-face {
  font-family: 'monua';
  src: url('monua') format('woff2');
}

h1 {
  font-family: monua, sans-serif;
}
```

## Next.js

With the `next/font` helper Next.js offers a convenient way to load local fonts. In order for the build to load the font the path has to be specified as a string with a path relative to the current file.

```js
import localFont from 'next/font/local'

const myFont = localFont({ src: '../node_modules/monua/monua.woff2' })

const MyPage = <main className={myFont.className}>Custom Font</main>
```
