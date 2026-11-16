import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";
import css from "!!raw-loader!../snippet.css";

async function onActivate(plugin: ReactRNPlugin) {
  await plugin.app.registerCSS("smart-bullets", css);
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
