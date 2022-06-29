export declare class LoggerView {
    private body;
    private text;
    private foot;
    private footLoad;
    private footInfo;
    private footError;
    private countFootLoad;
    constructor();
    private hideFoot;
    private showLoad;
    private hideLoad;
    private showInfo;
    private showError;
    private addLoggerMsg;
    show(): void;
    hide(): void;
    putLoadMsg(message: string): void;
    putLoadEnd(): void;
    putInfoMsg(message: string): void;
    putErrorMsg(message: string): void;
}
//# sourceMappingURL=view-logger.d.ts.map