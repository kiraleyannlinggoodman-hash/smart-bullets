import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";
import css from "!!raw-loader!../snippet.css";

async function onActivate(plugin: ReactRNPlugin) {
  await plugin.app.registerCSS("smart-bullets", css);

  await plugin.app.registerCommand({
    id: "create-bullet",
    name: "Create Bullet",
    description: "Start a native RemNote bullet at the current editor cursor.",
    keyboardShortcut: "ctrl+b",
    action: async () => {
      await plugin.editor.insertPlainText("- ");
    },
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
