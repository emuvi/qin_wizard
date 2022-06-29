"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_logger_1 = require("./view-logger");
const view_setup_1 = require("./view-setup");
const logger = new view_logger_1.LoggerView();
logger.putInfoMsg("QinWizard Logger");
const setup = new view_setup_1.SetupView();
function showLogger() {
    logger.show();
    setup.hide();
}
function showSetup(onSave) {
    logger.hide();
    setup.onSave = onSave;
    setup.show();
}
exports.default = {
    logger,
    showLogger,
    showSetup,
};
//# sourceMappingURL=view.js.map