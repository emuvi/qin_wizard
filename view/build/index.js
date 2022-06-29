"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@tauri-apps/api");
const view_1 = require("./view");
view_1.default.showLogger();
view_1.default.logger.putInfoMsg("Reading setup...");
api_1.fs.readTextFile("./setup.json")
    .then((text) => {
    view_1.default.logger.putInfoMsg("Setup found.");
    const setup = JSON.parse(text);
    configure(setup);
})
    .catch((err) => {
    view_1.default.logger.putErrorMsg(err);
    view_1.default.showSetup((setup) => configure(setup));
});
function configure(setup) {
    view_1.default.showLogger();
    view_1.default.logger.putInfoMsg("Host: " + setup.serverHost);
    view_1.default.logger.putInfoMsg("Port: " + setup.serverPort);
    view_1.default.logger.putInfoMsg("Path: " + setup.serverPath);
}
//# sourceMappingURL=index.js.map