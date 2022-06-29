import { fs } from "@tauri-apps/api";
import view from "./view";
import { SetupFile } from "./view-setup";
view.showLogger();
view.logger.putInfoMsg("Reading setup...");
fs.readTextFile("./setup.json")
  .then((text) => {
    view.logger.putInfoMsg("Setup found.");
    const setup: SetupFile = JSON.parse(text);
    configure(setup);
  })
  .catch((err) => {
    view.logger.putErrorMsg(err);
    view.showSetup((setup) => configure(setup));
  });

function configure(setup: SetupFile) {
  view.showLogger();
  view.logger.putInfoMsg("Host: " + setup.serverHost);
  view.logger.putInfoMsg("Port: " + setup.serverPort);
  view.logger.putInfoMsg("Path: " + setup.serverPath);
}
