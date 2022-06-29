import { LoggerView } from "./view-logger";
import { SetupFile, SetupView } from "./view-setup";

const logger = new LoggerView();
logger.putInfoMsg("QinWizard Logger");

const setup = new SetupView();

function showLogger() {
  logger.show();
  setup.hide();
}

function showSetup(onSave: (setup: SetupFile) => void) {
  logger.hide();
  setup.onSave = onSave;
  setup.show();
}

export default {
  logger,
  showLogger,
  showSetup,
};
