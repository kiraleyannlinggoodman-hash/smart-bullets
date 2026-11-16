# Smart Bullets

Smart Bullets keeps RemNote's native list editing behaviour while hiding the visual bullet markers.

## Expected editing behaviour

These actions use RemNote's native Markdown-style list editing:

| Action | Expected result |
| --- | --- |
| Type `- ` at the start of a line | Start a bullet |
| Press Enter in a bullet | Continue with another bullet |
| Press Enter on an empty bullet | Exit bullet mode |
| Type ordinary text without the list prefix | Keep it as ordinary text |

Smart Bullets does not intercept Enter, rewrite text, or convert ordinary paragraphs into lists. This avoids interfering with RemNote's editor and preserves the real list hierarchy.

## Appearance

- Bullet markers stay hidden, including while hovering over a Rem.
- RemNote's underlying bullet and nested-list structure remains intact.
- Existing collapsed-child indicators and indentation adjustments are retained.

## Development

Install dependencies with `pnpm install`.

Compile the stylesheet after editing `src/scss/snippet.scss` with `pnpm sass`.

Build the RemNote plugin with `pnpm build`. The build creates `PluginZip.zip`.

## Attribution

The initial stylesheet is adapted from **No Bullet Editor Mode** by Min-Ki Park, from the [RemNote Plugins repository](https://github.com/browneyedsoul/remnote-plugins). The original plugin is MIT-licensed; the repository's LICENSE file is retained.
