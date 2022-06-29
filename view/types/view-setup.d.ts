export declare class SetupView {
    private body;
    private title;
    private local;
    private remote;
    private host;
    private port;
    private path;
    private save;
    onSave: (setup: SetupFile) => void;
    constructor();
    show(): void;
    hide(): void;
}
export declare type SetupFile = {
    serverHost: string;
    serverPort: number;
    serverPath: string;
};
//# sourceMappingURL=view-setup.d.ts.map