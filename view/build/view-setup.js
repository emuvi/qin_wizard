"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupView = void 0;
const api_1 = require("@tauri-apps/api");
class SetupView {
    constructor() {
        this.body = document.getElementById("QinWizardViewSetup");
        this.title = document.getElementById("QinWizardViewSetupTitle");
        this.local = document.getElementById("QinWizardViewSetupLocal");
        this.remote = document.getElementById("QinWizardViewSetupRemote");
        this.host = document.getElementById("QinWizardViewSetupHost");
        this.port = document.getElementById("QinWizardViewSetupPort");
        this.path = document.getElementById("QinWizardViewSetupPath");
        this.save = document.getElementById("QinWizardViewSetupSave");
        this.local.onclick = () => {
            this.host.value = "localhost";
        };
        this.remote.onclick = () => {
            this.host.value = "pointel.pointto.us";
        };
        this.save.onclick = () => {
            this.host.value = this.host.value.trim();
            this.port.value = this.port.value.trim();
            this.path.value = this.path.value.trim();
            if (this.host.value === "") {
                this.title.innerText = "You must select the host.";
                return;
            }
            if (this.port.value === "") {
                this.title.innerText = "You must select the port.";
                return;
            }
            if (this.path.value === "") {
                this.title.innerText = "You must select the path.";
                return;
            }
            const setup = {
                serverHost: this.host.value,
                serverPort: parseInt(this.port.value, 10),
                serverPath: this.path.value,
            };
            api_1.fs.writeTextFile("./setup.json", JSON.stringify(setup));
            this.onSave(setup);
        };
    }
    show() {
        this.body.style.display = "";
    }
    hide() {
        this.body.style.display = "none";
    }
}
exports.SetupView = SetupView;
//# sourceMappingURL=view-setup.js.map