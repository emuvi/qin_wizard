"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerView = void 0;
class LoggerView {
    constructor() {
        this.body = document.getElementById("QinWizardViewLogger");
        this.text = document.getElementById("QinWizardViewLoggerText");
        this.foot = document.getElementById("QinWizardViewLoggerFoot");
        this.footLoad = document.getElementById("QinWizardViewLoggerFootImgLoad");
        this.footInfo = document.getElementById("QinWizardViewLoggerFootImgInfo");
        this.footError = document.getElementById("QinWizardViewLoggerFootImgError");
        this.countFootLoad = 0;
        this.hideFoot();
    }
    hideFoot() {
        this.foot.style.display = "none";
        this.footLoad.style.visibility = "hidden";
        this.footInfo.style.visibility = "hidden";
        this.footError.style.visibility = "hidden";
    }
    showLoad() {
        this.foot.style.display = "";
        this.footLoad.style.visibility = "";
        this.countFootLoad++;
    }
    hideLoad() {
        this.countFootLoad--;
        if (this.countFootLoad < 0) {
            console.log("Error: QinpelDsk Desk image loading was hide more than showed.");
            this.countFootLoad = 0;
        }
        if (this.countFootLoad == 0) {
            this.footLoad.style.visibility = "hidden";
        }
    }
    showInfo() {
        this.foot.style.display = "";
        this.footInfo.style.visibility = "";
    }
    showError() {
        this.foot.style.display = "";
        this.footError.style.visibility = "";
    }
    addLoggerMsg(message) {
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
    show() {
        this.body.style.display = "";
    }
    hide() {
        this.body.style.display = "none";
    }
    putLoadMsg(message) {
        this.addLoggerMsg(message);
        this.showLoad();
    }
    putLoadEnd() {
        this.hideLoad();
    }
    putInfoMsg(message) {
        this.addLoggerMsg(message);
        this.showInfo();
    }
    putErrorMsg(message) {
        this.addLoggerMsg(message);
        this.showError();
    }
}
exports.LoggerView = LoggerView;
function getStringWithAtLeastSizeOf(prefix, value, size) {
    var result = value + "";
    while (result.length < size) {
        result = prefix + result;
    }
    return result;
}
function getMsgTime() {
    const time = new Date();
    return (getStringWithAtLeastSizeOf("0", time.getHours().toString(), 2) +
        ":" +
        getStringWithAtLeastSizeOf("0", time.getMinutes().toString(), 2) +
        ":" +
        getStringWithAtLeastSizeOf("0", time.getSeconds().toString(), 2) +
        "." +
        getStringWithAtLeastSizeOf("0", time.getMilliseconds().toString(), 3));
}
//# sourceMappingURL=view-logger.js.map