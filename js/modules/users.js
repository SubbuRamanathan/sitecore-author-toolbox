/* eslint no-console: ["error", { allow: ["warn", "error", "log", "info", "table", "time", "timeEnd"] }] */
import * as global from "./global.js";
import { exeJsCode, calcMD5 } from "./helpers.js";
import { currentColorScheme } from "./dark.js";
import { initExperimentalUi, getAccentColor, initColorPicker } from "./experimentalui.js";

export { initIntroScreen, getGravatar, initGravatarImage, initAppName, initWorkboxMenu, initUserPortraitMenu, initRibbonToggleMenu, initUserMenu };

/**
 * Init Introduction scree
 */
const initIntroScreen = () => {
  //check if hidden in local storage
  if (!localStorage.getItem("scIntroScreen")) {
    if (!document.querySelector(".scIntroOverlay")) {
      setTimeout(function () {
        //create html
        let html = `<div class="scIntroOverlay"><img src="${global.iconIntro}" /></div>`;
        document.querySelector("body").insertAdjacentHTML("beforeend", html);
        //add listener
        document.querySelector(".scIntroOverlay").addEventListener(
          "click",
          function (event) {
            document.querySelector(".scIntroOverlay").setAttribute("style", "visibility:hidden");
            event.preventDefault();
            localStorage.setItem("scIntroScreen", true);
          },
          false
        );
      }, 1500);
    }
  }
};

/**
 * Get Gravatar image from an email
 */
const getGravatar = (email, size = "170", type = "robohash") => {
  //Type = [ 404 | mp | identicon | monsterid | wavatar | retro | robohash | blank ]
  var link = "https://www.gravatar.com/avatar/" + calcMD5(email) + "?s=" + size + "&d=" + type;

  return link;
};

/**
 * Add Gravatar Image to Experience Profile
 */
const initGravatarImage = (storage) => {
  storage.feature_gravatarimage == undefined ? (storage.feature_gravatarimage = true) : false;

  if (storage.feature_gravatarimage) {
    //Listener
    let target = document.querySelector("body");
    let observer = new MutationObserver(function () {
      let InfoPhotoImage = document.querySelector("img[data-sc-id=InfoPhotoImage]");
      let InfoEmailLink = document.querySelector("a[data-sc-id=InfoEmailLink]");

      if (InfoPhotoImage && InfoEmailLink) {
        if (InfoEmailLink.innerHTML.includes("@") && !InfoPhotoImage.src.includes("www.gravatar.com")) {
          InfoPhotoImage.src = getGravatar(InfoEmailLink.innerHTML, 170);

          //Add https://www.fullcontact.com/developer-portal/ api to get more information
          // fetch('https://api.fullcontact.com/v3/person.enrich', {
          //   method: 'POST',
          //   headers: {
          //     "Authorization": "Bearer " + local.fullcontactApiKey
          //   },
          //   body: JSON.stringify({
          //     "email": "ugo.quaisse@gmail.com"
          //     })
          // })
          // .then(res => res)
          // .then(res => console.log(res));

          observer.disconnect();
        }
      }
    });

    //Observer publish
    target
      ? observer.observe(target, {
          attributes: false,
          childList: true,
          characterData: true,
          subtree: true,
        })
      : false;
  }
};

/**
 * Attach Dropdown User Menu to the profil image
 */
const initAppName = (storage, name = "Content Editor") => {
  if (storage.feature_experimentalui) {
    //Add app name
    let startButton = document.querySelector(".sc-globalHeader-startButton");
    let newDashboard = document.querySelector("link[href*='/applications/launchpad/launchpad.css' i]");
    let htmlApp = `<div class="sc-globalheader-appName">${name}</div>`;
    startButton && !newDashboard ? startButton.insertAdjacentHTML("afterend", htmlApp) : false;
  }
};

/**
 * Attach Workbox notification icon to the header
 */
const initWorkboxMenu = (storage, type = "CE") => {
  if (storage.feature_experimentalui) {
    let menu = document.querySelector(".sc-accountInformation");
    let clickEvent;
    //Add Notification and arrow icons
    if (type == "CE") {
      //prettier-ignore
      clickEvent = `javascript:scSitecore.prototype.showModalDialog('${global.workboxPage.replace("&sc_bw=1", "&sc_bw=0")}', '', 'center:yes; help:no; resizable:yes; scroll:yes; status:no; dialogMinHeight:200; dialogMinWidth:300; dialogWidth:1100; dialogHeight:700; header:Workbox', null, null); false`;
    } else {
      clickEvent = `window.location.href='/sitecore/shell/Applications/Workbox.aspx?sc_bw=1'`;
    }
    //prettier-ignore
    let htmlIcon = `<span class="t-bottom t-sm" data-tooltip="Workbox notification"><img loading="lazy" id="scNotificationBell" onclick="${clickEvent}" src="${global.iconBell}" class="scIconMenu" accesskey="w" /></span>`;
    menu ? menu.insertAdjacentHTML("afterbegin", htmlIcon) : false;
  }
};

/**
 * Attach ribbon toggle icon to the header
 */
const initRibbonToggleMenu = (storage, type = "CE") => {
  if (storage.feature_experimentalui) {
    let menu = document.querySelector(".sc-accountInformation");
    let htmlIcon = ``;
    if (type == "CE") {
      htmlIcon = `<span class="t-bottom t-sm" data-tooltip="Toggle ribbon"><img loading="lazy" id="scSitecoreRibbon" onclick="showSitecoreRibbon()" src="${global.iconDownArrow}" class="scIconMenu" accesskey="a" /></span>`;
    } else if (type == "EE") {
      document.querySelector("[data-sc-id='QuickRibbon']").classList.add("QuickRibbonHide");
      htmlIcon = `<span class="t-bottom t-sm" data-tooltip="Toggle ribbon"><img loading="lazy" id="scSitecoreRibbon" onclick="showSitecoreRibbonEE()" src="${global.iconDownArrow}" class="scIconMenu" accesskey="a" /></span>`;
    }
    menu ? menu.insertAdjacentHTML("afterbegin", htmlIcon) : false;
  }
};

/**
 * Attach ribbon toggle icon to the header
 */
const initUserPortraitMenu = (storage) => {
  let accountInformation = document.querySelector(".sc-accountInformation");
  if (storage.feature_experimentalui) {
    accountInformation.querySelectorAll("li")[0].setAttribute("style", "display:none");
    accountInformation.querySelectorAll("li")[1].innerHTML = accountInformation.querySelector("li > img").outerHTML;
  }
  accountInformation.querySelector("li > img").setAttribute("id", "globalHeaderUserPortrait");
};

/**
 * Attach Dropdown User Menu to the profil image
 */
const initUserMenu = (storage, type = "CE") => {
  let accountInformation = document.querySelector(".sc-accountInformation");
  let scGlobalHeader = document.querySelector(".sc-globalHeader-loginInfo");
  let htmlMenu;
  let page = global.isLaunchpad ? "LP" : type;
  if (accountInformation) {
    //Menu
    let accountUser = accountInformation.querySelectorAll("li")[1].innerText.trim();
    initRibbonToggleMenu(storage, page);
    initWorkboxMenu(storage, page);
    initUserPortraitMenu(storage);

    //Accent color
    //let accentColor = `<li onclick="" id="scSkip"><img src="${global.iconMenuColor}" /> Accent color <input type="color" id="scAccentColor" name="scAccentColor" value="#ee3524"></li> `;

    if (page == "CE") {
      //prettier-ignore
      htmlMenu = `<div class="scAccountMenu">
        <div class="scAccountMenuWrapper">
        <div class="scAccountColumn scAccountGroup1">
          <ul> 
            <li onclick="javascript:return scForm.invoke('preferences:changeuserinformation', event)">My profile (${accountUser})</li>
            <li onclick="javascript:return scForm.invoke('security:changepassword', event) ">Change Password</li>
            <li onclick="javascript:return scForm.invoke('shell:useroptions', event)">Sitecore Options</li>
          
            <li onclick="javascript:goToSubmenu(1)" id="scSkip" class="separator opensubmenu"><img src="${global.iconMenuBright}" /> Dark Mode <span id="scSkip" class="darkMenuHint">Light</span></li>
            <li onclick="javascript:goToSubmenu(2)" id="scSkip" class="opensubmenu"><img src="${global.iconMenuTheme}" /> Theme <span id="scSkip" class="themeMenuHint">Classic</span></li>
            <li onclick="window.open('${global.launchpadPage}?launchpad=true')"><img src="${global.iconMenuOptions}" /> Extension Options</li>

            <li onclick="satLogout()">Log out</li>
            
          </ul>
        </div>

        <div class="scAccountSub">
          <div class="scAccountColumn scAccountGroup2">
            <ul>
              <li onclick="javascript:goToSubmenu(0)" id="scSkip" class="backsubmenu"><img src="${global.iconMenuBright}" /> Dark Mode</li>
              <li>Light <input type="radio" class="darkmodeRadio" name="darkMode" value="light" checked></li>
              <li>Dark <input type="radio" class="darkmodeRadio" name="darkMode" value="dark"></li>
              <li>Automatic <input type="radio" class="darkmodeRadio" name="darkMode" value="auto"></li>
            </ul>
          </div>
          <div class="scAccountColumn scAccountGroup2">
            <ul>
              <li onclick="javascript:goToSubmenu(0)" id="scSkip" class="backsubmenu"><img src="${global.iconMenuTheme}" /> Theme</li>
              <li>Classic <input type="radio" class="interfaceRadio" name="interface" value="classic" checked></li>
              <li>Experimental UI <input type="radio" class="interfaceRadio" name="interface" value="experimental"></li>
            </ul>
          </div>
        </div>
        </div>
      </div>`;
    } else if (page == "LP") {
      //prettier-ignore
      htmlMenu = `<div class="scAccountMenu">
        <div class="scAccountMenuWrapper">
        <div class="scAccountColumn scAccountGroup1">
          <ul> 
          
            <li onclick="javascript:goToSubmenu(1)" id="scSkip" class="separator opensubmenu"><img src="${global.iconMenuBright}" /> Dark Mode <span id="scSkip" class="darkMenuHint">Light</span></li>
            <li onclick="javascript:goToSubmenu(2)" id="scSkip" class="opensubmenu"><img src="${global.iconMenuTheme}" /> Theme <span id="scSkip" class="themeMenuHint">Classic</span></li> 
            <li onclick="window.open('${global.launchpadPage}?launchpad=true')"><img src="${global.iconMenuOptions}" /> Extension Options</li>

            <li onclick="satLogout()">Log out</li>
            
          </ul>
        </div>

        <div class="scAccountSub">
          <div class="scAccountColumn scAccountGroup2">
            <ul>
              <li onclick="javascript:goToSubmenu(0)" id="scSkip" class="backsubmenu"><img src="${global.iconMenuBright}" /> Dark Mode</li>
              <li>Light <input type="radio" class="darkmodeRadio" name="darkMode" value="light" checked></li>
              <li>Dark <input type="radio" class="darkmodeRadio" name="darkMode" value="dark"></li>
              <li>Automatic <input type="radio" class="darkmodeRadio" name="darkMode" value="auto"></li>
            </ul>
          </div>
          <div class="scAccountColumn scAccountGroup2">
            <ul>
              <li onclick="javascript:goToSubmenu(0)" id="scSkip" class="backsubmenu"><img src="${global.iconMenuTheme}" /> Theme</li>
              <li>Classic <input type="radio" class="interfaceRadio" name="interface" value="classic" checked></li>
              <li>Experimental UI <input type="radio" class="interfaceRadio" name="interface" value="experimental"></li>
            </ul>
          </div>
        </div>
        </div>
      </div>`;
    } else if (page == "EE") {
      //prettier-ignore
      htmlMenu = `<div class="scAccountMenu">
          <div class="scAccountMenuWrapper">
            <div class="scAccountColumn scAccountGroup1">
              <ul> 
                <li onclick="javascript:return scForm.invoke('preferences:changeuserinformation', event)">My profile (${accountUser})</li>
                <li onclick="javascript:return scForm.invoke('system:logout', event)">Log out</li>
              </ul>
            </div>   
          </div>
        </div>`;
    }
    scGlobalHeader.insertAdjacentHTML("afterbegin", htmlMenu);

    //Resize menu
    let height = document.querySelectorAll(".scAccountMenu > .scAccountMenuWrapper > .scAccountColumn > ul")[0].offsetHeight;
    document.querySelector(".scAccountMenu").setAttribute("style", "height:" + height + "px");

    //Listeners
    document.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.shiftKey) {
        exeJsCode(`showSitecoreRibbon()`);
        event.preventDefault();
        event.stopPropagation();
      }
    });

    //Events
    if (document.querySelector(".scAccountMenu")) {
      document.addEventListener("click", (elem) => {
        if (elem.target.id != "darkModeSwitch" && elem.target.id != "experimentalUiSwitch" && elem.target.id != "scSkip" && elem.target.classList != "darkmodeRadio" && elem.target.classList != "interfaceRadio") {
          elem.target.id == "globalHeaderUserPortrait" ? document.querySelector(".scAccountMenu").classList.toggle("open") : document.querySelector(".scAccountMenu").classList.remove("open");
        }
      });
    }

    if (document.querySelector("#DesktopLinks")) {
      document.querySelector("#DesktopLinks").addEventListener("click", () => {
        document.querySelector(".scAccountMenu").classList.remove("open");
      });
    }

    //Press escape
    document.addEventListener("keyup", (event) => {
      if (event.key === "Escape") {
        document.querySelector(".scAccountMenu").classList.remove("open");
      }
    });
  }
  //Init UI chain
  initColorPicker(storage);
  initDarkSwitchEvents();
  initInterfaceEvents();
  initExperimentalUi(storage);
};

/**
 * Init Dark Radio Switch events
 */
const initDarkSwitchEvents = () => {
  document.querySelectorAll(".darkmodeRadio").forEach(function (radio) {
    radio.onclick = function () {
      if (radio.value == "dark" || (radio.value == "auto" && currentColorScheme() == "dark")) {
        //main
        document.body.classList.add("satDark");
        //iframes
        document.querySelectorAll("iframe").forEach(function (iframe) {
          if (iframe.contentDocument.body) {
            iframe.contentDocument.body.classList.add("satDark");
            iframe.contentDocument.querySelectorAll("iframe").forEach(function (i) {
              i.contentDocument.body.classList.add("satDark");
            });
          }
        });
        //hint
        radio.value == "auto" ? (document.querySelector(".darkMenuHint").innerText = "Auto") : (document.querySelector(".darkMenuHint").innerText = "On");
        //Storage
        chrome.storage.sync.set({
          feature_darkmode: true,
          feature_darkmode_auto: radio.value == "auto",
        });
      } else if (radio.value == "auto" && currentColorScheme() == "light") {
        //main
        document.body.classList.remove("satDark");
        //iframes
        document.querySelectorAll("iframe").forEach(function (iframe) {
          if (iframe.contentDocument && iframe.contentDocument.body) {
            iframe.contentDocument.body.classList.remove("satDark");
            iframe.contentDocument.querySelectorAll("iframe").forEach(function (i) {
              i.contentDocument.body.classList.remove("satDark");
            });
          }
        });
        //hint
        document.querySelector(".darkMenuHint").innerText = "Auto";
        //Storage
        chrome.storage.sync.set({
          feature_darkmode: true,
          feature_darkmode_auto: true,
        });
      } else if (radio.value == "light") {
        //main
        document.body.classList.remove("satDark");
        //iframes
        document.querySelectorAll("iframe").forEach(function (iframe) {
          if (iframe.contentDocument.body) {
            iframe.contentDocument.body.classList.remove("satDark");
            iframe.contentDocument.querySelectorAll("iframe").forEach(function (i) {
              i.contentDocument.body.classList.remove("satDark");
            });
          }
        });
        //hint
        document.querySelector(".darkMenuHint").innerText = "Light";
        //Storage
        chrome.storage.sync.set({
          feature_darkmode: false,
          feature_darkmode_auto: false,
        });
      }
    };
  });
};

/**
 * Init Interface Switch events
 */
const initInterfaceEvents = () => {
  document.querySelectorAll(".interfaceRadio").forEach(function (radio) {
    radio.onclick = function () {
      if (radio.value == "classic") {
        //main
        document.body.classList.remove("satExperimentalUi");
        //iframes
        document.querySelectorAll("iframe").forEach(function (iframe) {
          if (iframe.contentDocument) {
            iframe.contentDocument.body.classList.remove("satExperimentalUi");
            iframe.contentDocument.querySelectorAll("iframe").forEach(function (i) {
              i.contentDocument.body.classList.remove("satExperimentalUi");
            });
          }
        });
        //hint
        document.querySelector(".themeMenuHint").innerText = "Classic";
        //Storage
        chrome.storage.sync.set({
          feature_experimentalui: false,
          feature_material_icons: false,
          feature_cetabs: true,
        });
      } else if (radio.value == "experimental") {
        //main
        document.body.classList.add("satExperimentalUi");
        //iframes
        document.querySelectorAll("iframe").forEach(function (iframe) {
          if (iframe.contentDocument) {
            iframe.contentDocument.body.classList.add("satExperimentalUi");
            iframe.contentDocument.querySelectorAll("iframe").forEach(function (i) {
              i.contentDocument.body.classList.add("satExperimentalUi");
            });
          }
        });
        //Get accent color
        getAccentColor();
        //hint
        document.querySelector(".themeMenuHint").innerText = "Experimental UI";
        //Storage
        chrome.storage.sync.set({
          feature_experimentalui: true,
          feature_material_icons: true,
          feature_cetabs: true,
        });
      }
      //Reload view
      setTimeout(function () {
        location.reload();
      }, 10);
    };
  });
};
