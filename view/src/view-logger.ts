export class LoggerView {
  private body = document.getElementById("QinWizardViewLogger") as HTMLDivElement;
  private text = document.getElementById("QinWizardViewLoggerText") as HTMLDivElement;
  private foot = document.getElementById("QinWizardViewLoggerFoot") as HTMLDivElement;
  private footLoad = document.getElementById(
    "QinWizardViewLoggerFootImgLoad"
  ) as HTMLImageElement;
  private footInfo = document.getElementById(
    "QinWizardViewLoggerFootImgInfo"
  ) as HTMLImageElement;
  private footError = document.getElementById(
    "QinWizardViewLoggerFootImgError"
  ) as HTMLImageElement;
  private countFootLoad = 0;

  constructor() {
    this.hideFoot();
  }

  private hideFoot() {
    this.foot.style.display = "none";
    this.footLoad.style.visibility = "hidden";
    this.footInfo.style.visibility = "hidden";
    this.footError.style.visibility = "hidden";
  }

  private showLoad() {
    this.foot.style.display = "";
    this.footLoad.style.visibility = "";
    this.countFootLoad++;
  }

  private hideLoad() {
    this.countFootLoad--;
    if (this.countFootLoad < 0) {
      console.log("Error: QinpelDsk Desk image loading was hide more than showed.");
      this.countFootLoad = 0;
    }
    if (this.countFootLoad == 0) {
      this.footLoad.style.visibility = "hidden";
    }
  }

  private showInfo() {
    this.foot.style.display = "";
    this.footInfo.style.visibility = "";
  }

  private showError() {
    this.foot.style.display = "";
    this.footError.style.visibility = "";
  }

  private addLoggerMsg(message: string) {
    const divStatus = document.createElement("div");
    divStatus.className = "QinWizardViewLoggerTextMessageStatus";
    divStatus.innerText = message;
    const divTime = document.createElement("div");
    divTime.className = "QinWizardViewLoggerTextMessageTime";
    divTime.innerText = getMsgTime();
    const divMessage = document.createElement("div");
    divMessage.className = "QinWizardViewLoggerTextMessage";
    divMessage.append(divStatus);
    divMessage.append(divTime);
    this.text.append(divMessage);
    this.text.scrollTo(0, this.text.scrollHeight);
  }

  public show() {
    this.body.style.display = "";
  }

  public hide() {
    this.body.style.display = "none";
  }

  public putLoadMsg(message: string) {
    this.addLoggerMsg(message);
    this.showLoad();
  }

  public putLoadEnd() {
    this.hideLoad();
  }

  public putInfoMsg(message: string) {
    this.addLoggerMsg(message);
    this.showInfo();
  }

  public putErrorMsg(message: string) {
    this.addLoggerMsg(message);
    this.showError();
  }
}

function getStringWithAtLeastSizeOf(prefix: string, value: string, size: number) {
  var result = value + "";
  while (result.length < size) {
    result = prefix + result;
  }
  return result;
}

function getMsgTime() {
  const time = new Date();
  return (
    getStringWithAtLeastSizeOf("0", time.getHours().toString(), 2) +
    ":" +
    getStringWithAtLeastSizeOf("0", time.getMinutes().toString(), 2) +
    ":" +
    getStringWithAtLeastSizeOf("0", time.getSeconds().toString(), 2) +
    "." +
    getStringWithAtLeastSizeOf("0", time.getMilliseconds().toString(), 3)
  );
}
