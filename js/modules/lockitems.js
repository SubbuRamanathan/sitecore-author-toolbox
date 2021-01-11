/* eslint no-console: ["error", { allow: ["warn", "error", "log", "info", "table", "time", "timeEnd"] }] */
import * as global from "./global.js";

export { checkLockedItems };

/**
 * Check all locked items
 */
const checkLockedItems = (item, storage) => {
  storage.feature_lockeditems == undefined ? (storage.feature_lockeditems = true) : false;
  if (storage.feature_lockeditems) {
    global.debug ? console.log("Check locked items") : false;
    let itemUrl = `sitecore/shell/-/xaml/Sitecore.Shell.Applications.WebEdit.Dialogs.LockedItems.aspx?Cart_ctl00_ctl00_ctl00_ctl00_ctl05_Items_Callback=yes`;
    var ajax = new XMLHttpRequest();
    ajax.timeout = 10000;
    ajax.open("GET", itemUrl, true);
    // eslint-disable-next-line consistent-return
    ajax.onreadystatechange = function () {
      if (ajax.readyState === 4 && ajax.status == "200") {
        let dom = new DOMParser().parseFromString(ajax.responseText, "application/xml");
        let data = dom.querySelector("Data").innerHTML.toLowerCase();

        if (data.includes(item)) {
          let scEditorID = document.querySelector(".scEditorHeader");
          let scMessageBarLocked = document.querySelector(".scLockItemBar");
          let lockedMessage = "You have locked this item";

          //prettier-ignore
          let scMessage = `<div id="scMessageBarUrl" class="scMessageBar scWarning scLockItemBar">
            <div class="scMessageBarIcon" style="background-image:url(${global.iconLock})"></div>
              <div class="scMessageBarTextContainer">
                <div class="scMessageBarTitle">${lockedMessage}</div>
                <div class="scMessageBarText">Nobody can edit this page until it is unlocked.</div>
                <ul class="scMessageBarOptions" style="margin:0px">
                    <li class="scMessageBarOptionBullet">
                        <a href="#" onclick="javascript:return scForm.postEvent(this,event,'item:checkin')" class="scMessageBarOption">Unlock this now</a>
                    </li>
                </ul>
              </div>
            </div>`;
          !scMessageBarLocked ? scEditorID.insertAdjacentHTML("afterend", scMessage) : false;

          document.querySelector("#scLockMenuText") ? (document.querySelector("#scLockMenuText").innerHTML = "Unlock this item") : false;
        }
      }
    };

    setTimeout(function () {
      ajax.send(null);
    }, 500);
  }
};

//https://cm-newsroom.rlx-staging.com/sitecore/shell/-/xaml/Sitecore.Shell.Applications.WebEdit.Dialogs.LockedItems.aspx?Cart_ctl00_ctl00_ctl00_ctl00_ctl05_Items_Callback=yes
