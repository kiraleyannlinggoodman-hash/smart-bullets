# Smart Bullets

Smart Bullets keeps RemNote's native list editing behaviour while hiding the visual bullet markers.

![Smart Bullets tomato logo](public/logo.svg)

## Create a bullet

Place the cursor in an empty Rem and press **Control + B** (**⌃ + B** on Mac). Smart Bullets inserts RemNote's native Markdown list trigger (`- `) at the cursor, so RemNote creates a real bullet-list item.

You no longer need to type `- ` manually to start a bullet.

| Action | Expected result |
| --- | --- |
| Press **⌃ + B** on Mac (Control + B) | Start a native bullet |
| Press Enter in a bullet | Continue with another bullet |
| Press Enter on an empty bullet | Exit bullet mode |
| Type ordinary text without the shortcut | Keep it as ordinary text |

Smart Bullets does not replace RemNote's list structure. It uses the editor's native Markdown list conversion, preserving real bullets, nesting, and normal Enter behaviour.

## Appearance

- Bullet markers stay hidden, including while hovering over a Rem.
- RemNote's underlying bullet and nested-list structure remains intact.
- Existing collapsed-child indicators and indentation adjustments are retained.

## Keyboard shortcut

The plugin registers a RemNote command named **Create Bullet**, with **Control + B** as its default shortcut. You can review or change it in RemNote's keyboard-shortcut settings.

## Development

Install dependencies with `pnpm install`.

Compile the stylesheet after editing `src/scss/snippet.scss` with `pnpm sass`.

Build the RemNote plugin with `pnpm build`. The build creates `PluginZip.zip`.

## Attribution

The initial stylesheet is adapted from **No Bullet Editor Mode** by Min-Ki Park, from the [RemNote Plugins repository](https://github.com/browneyedsoul/remnote-plugins). The original plugin is MIT-licensed; the repository's LICENSE file is retained.
