# Smart Bullets

A RemNote plugin that hides bullet markers while keeping the underlying bullet-list structure intact.

## Current behaviour

- Bullet markers are hidden when a Rem is not hovered.
- The marker becomes visible when you hover over that Rem.
- RemNote's actual bullets and nested-list structure are not removed or converted.
- The original stylesheet's collapsed-child indicators are preserved.

The keyboard behaviour for automatically starting and ending bullet mode is not implemented yet.

## Development

Install dependencies with `pnpm install`.

Compile the stylesheet after editing `src/scss/snippet.scss` with `pnpm sass`.

Build the RemNote plugin with `pnpm build`. The build creates `PluginZip.zip`.

## Attribution

The initial visual bullet-hiding stylesheet is adapted from **No Bullet Editor Mode** by Min-Ki Park, from the [RemNote Plugins repository](https://github.com/browneyedsoul/remnote-plugins). The original plugin is MIT-licensed; the repository's LICENSE file is retained.
