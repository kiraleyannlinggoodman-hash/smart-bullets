# Smart Bullets

Smart Bullets hides RemNote's visual bullet markers while preserving its native list structure.

![Smart Bullets tomato logo](public/logo.png)

## Create a bullet

Place the editor cursor where you want a new list item and press **Control + B** (**⌃ + B** on Mac). The plugin inserts RemNote's native Markdown list trigger (`- `) at the cursor.

You no longer need to type the list trigger yourself.

| Action | Expected result |
| --- | --- |
| Press **⌃ + B** on Mac (Control + B) | Insert the native bullet-list trigger |
| Press Enter in a bullet | RemNote continues the list |
| Press Enter on an empty bullet | RemNote exits the list |

Smart Bullets does not create a separate imitation list. It relies on RemNote's editor to interpret the native list trigger, so list nesting and normal list editing remain RemNote's responsibility.

## Appearance

- Bullet markers remain hidden by the plugin's stylesheet.
- The underlying RemNote bullet and nested-list structure is preserved.
- Existing collapsed-child indicators and indentation adjustments are retained.

## Keyboard shortcut

The plugin registers a RemNote command named **Create Bullet**, with **Control + B** as its default shortcut. RemNote's command shortcut syntax uses `ctrl+b`. The shortcut can be reviewed or changed in RemNote's keyboard-shortcut settings.

## Development

Install dependencies with `pnpm install`.

Compile the stylesheet after editing `src/scss/snippet.scss` with `pnpm sass`.

Build the RemNote plugin with `pnpm build`. The build creates `PluginZip.zip`.

## Attribution

The initial stylesheet is adapted from **No Bullet Editor Mode** by Min-Ki Park, from the [RemNote Plugins repository](https://github.com/browneyedsoul/remnote-plugins). The original plugin is MIT-licensed; the repository's LICENSE file is retained.
