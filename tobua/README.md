# tobua

Brand specific custom font.

## React JSX (Vite)

```jsx
import tobua from 'tobua'

const tobuaFont = `@font-face {
  font-family: "tobua";
  src: url("${tobua}") format("woff2");
}`

ReactDOM.createRoot(document.body).render(
  <>
    <style>{tobuaFont}</style>
    <App />
  </>
)
```

## CSS Modules (Vite)

```css
/* src/index.css */
@font-face {
  font-family: 'tobua';
  src: url('tobua') format('woff2');
}

h1 {
  font-family: tobua, sans-serif;
}
```

## Next.js

With the `next/font` helper Next.js offers a convenient way to load local fonts. In order for the build to load the font the path has to be specified as a string with a path relative to the current file.

```js
import localFont from 'next/font/local'

const myFont = localFont({ src: '../node_modules/tobua/tobua.woff2' })

const MyPage = <main className={myFont.className}>Custom Font</main>
```
