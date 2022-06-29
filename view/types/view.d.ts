import { LoggerView } from "./view-logger";
import { SetupFile } from "./view-setup";
declare function showLogger(): void;
declare function showSetup(onSave: (setup: SetupFile) => void): void;
declare const _default: {
    logger: LoggerView;
    showLogger: typeof showLogger;
    showSetup: typeof showSetup;
};
export default _default;
//# sourceMappingURL=view.d.ts.map