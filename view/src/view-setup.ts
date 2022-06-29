import { fs } from "@tauri-apps/api";

export class SetupView {
  private body = document.getElementById("QinWizardViewSetup") as HTMLDivElement;
  private title = document.getElementById("QinWizardViewSetupTitle") as HTMLDivElement;
  private local = document.getElementById("QinWizardViewSetupLocal") as HTMLButtonElement;
  private remote = document.getElementById("QinWizardViewSetupRemote") as HTMLButtonElement;
  private host = document.getElementById("QinWizardViewSetupHost") as HTMLInputElement;
  private port = document.getElementById("QinWizardViewSetupPort") as HTMLInputElement;
  private path = document.getElementById("QinWizardViewSetupPath") as HTMLInputElement;
  private save = document.getElementById("QinWizardViewSetupSave") as HTMLButtonElement;

  public onSave: (setup: SetupFile) => void;

  constructor() {
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
      const setup: SetupFile = {
        serverHost: this.host.value,
        serverPort: parseInt(this.port.value, 10),
        serverPath: this.path.value,
      };
      fs.writeTextFile("./setup.json", JSON.stringify(setup));
      this.onSave(setup);
    };
  }

  public show() {
    this.body.style.display = "";
  }

  public hide() {
    this.body.style.display = "none";
  }
}

export type SetupFile = {
  serverHost: string;
  serverPort: number;
  serverPath: string;
};
