<p align="center">
  <img src="https://github.com/tobua/font/raw/main/logo.png" width="60%" alt="tobua/font logo" />
</p>

# font

Collection of free custom fonts created with Figma. More details on the [process to create a custom font with Figma](https://onwebfocus.com/font) are in the related blog post.

- **metica** Rounded sans-serif font [Package Code](https://github.com/tobua/font/tree/main/metica) [npm](https://npmjs.com/metica)
- **monua** Monospace font for Web Development [Package Code](https://github.com/tobua/font/tree/main/monua) [npm](https://npmjs.com/monua)
- **shica** **Sh**ape + Helvet**ica** font [Package Code](https://github.com/tobua/font/tree/main/shica) [npm](https://npmjs.com/shica)
- **tobua** Brand specific custom font [Package Code](https://github.com/tobua/font/tree/main/tobua) [npm](https://npmjs.com/tobua)

## Development

All fonts are based on the [metica Font template](https://www.figma.com/community/file/1281658348421220983) for Figma which is a remix of the [original template](https://www.figma.com/community/file/1115382696459820988) by Rasmus Andersson.

When making changes to any of the packages run `npx changeset` and select the package to bump the version and generate a changeset. After a workflow run this will generate a pull request that will automatically release the packages to npm once merged.
