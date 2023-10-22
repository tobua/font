<p align="center">
  <img src="https://github.com/tobua/font/raw/main/shica/logo.svg" alt="shica font" width="400">
</p>

# shica

**Sh**ape + Helvet**ica** font.

## React JSX (Vite)

```jsx
import shica from 'shica'

const shicaFont = `@font-face {
  font-family: "shica";
  src: url("${shica}") format("woff2");
}`

ReactDOM.createRoot(document.body).render(
  <>
    <style>{shicaFont}</style>
    <App />
  </>
)
```

Alternatively, the `shica/css` import can be used with pre-generated style tag content that includes the font in woff2 and otf.

```jsx
import shicaStyle from 'shica/style'

const Head = <style>{shicaStyle}</style>
```

## CSS Modules (Vite)

```css
/* src/index.css */
@font-face {
  font-family: 'shica';
  src: url('shica') format('woff2');
}

h1 {
  font-family: shica, sans-serif;
}
```

## Next.js

With the `next/font` helper Next.js offers a convenient way to load local fonts. In order for the build to load the font the path has to be specified as a string with a path relative to the current file.

```js
import localFont from 'next/font/local'

const myFont = localFont({ src: '../node_modules/shica/shica.woff2' })

const MyPage = <main className={myFont.className}>Custom Shape Font</main>
```
