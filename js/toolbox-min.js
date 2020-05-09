import*as e from"./modules/global.js";import*as t from"./modules/local.js";import{consoleLog as r,loadCssFile as a,loadJsFile as o,exeJsCode as i,preferesColorScheme as n,sitecoreItemJson as s,fetchTimeout as c,getScItemData as l,repositionElement as d,startDrag as u}from"./modules/helpers.js";import{showSnackbar as g}from"./modules/snackbar.js";import{checkWorkbox as m}from"./modules/workbox.js";import{checkUrlStatus as f}from"./modules/url.js";import{checkNotification as p,sendNotification as h}from"./modules/notification.js";import{cleanCountryName as v,findCountryName as y}from"./modules/language.js";import{sitecoreAuthorToolbox as b}from"./modules/contenteditor.js";import{getGravatar as _}from"./modules/users.js";chrome.storage.sync.get(t=>{r(window.location.href.replace("https://","").replace("http://",""),"green");let c=n();if(e.isSitecore&&!e.isEditMode&&!e.isLoginPage&&!e.isCss&&!e.isUploadManager){if(r("Content Editor detected","red"),r("*** Loading ***","yellow"),a("css/onload-min.css"),o("js/inject-min.js"),null==t.feature_darkmode&&(t.feature_darkmode=!1),null==t.feature_darkmode_auto&&(t.feature_darkmode_auto=!1),(!t.feature_darkmode||t.feature_darkmode_auto||e.isTelerikUi||e.isExperienceEditor||e.isAdminCache||e.isSecurityWindow||e.isContentHome||e.isLoginPage||e.isEditMode||e.isUserManager||e.isRules||e.isAdmin)&&(!t.feature_darkmode||!t.feature_darkmode_auto||e.isTelerikUi||e.isExperienceEditor||e.isAdminCache||e.isSecurityWindow||e.isContentHome||e.isLoginPage||e.isEditMode||e.isUserManager||e.isRules||e.isAdmin||"dark"!=c)||(a("css/dark/default-min.css"),a("css/dark/ribbon-min.css"),a("css/dark/contentmanager-min.css"),a("css/dark/dialogs-min.css"),a("css/dark/gallery-min.css"),a("css/dark/speak-min.css")),p(),!e.isRichTextEditor&&document.querySelector("body").insertAdjacentHTML("beforeend",'<input type="hidden" class="extensionId" value="'+e.extensionId+'" />'),e.isContentEditor||e.isLaunchpad){if(r("**** Content Editor / Launchpage ****","yellow"),window.onpopstate=function(e){e.state&&""!=e.state.id&&(localStorage.setItem("scBackPrevious",!0),i('scForm.invoke("item:load(id='+e.state.id+",language="+e.state.language+",version="+e.state.version+')");'))},t.feature_darkmode&&t.feature_darkmode_auto){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{i("scForm.invoke('contenteditor:save', event)"),setTimeout((function(){window.location.reload()}),500)})}if(!e.hasRedirection&&!e.hasRedirectionOther&&!e.isLaunchpad)if(null==t.feature_reloadnode&&(t.feature_reloadnode=!0),null!=t.scData){if(""!=e.scUrlHash)Z=e.scUrlHash.split("_"),t.scItemID=Z[0],t.scLanguage=Z[1],t.scVersion=Z[2],t.scSource="Hash";else{var d=t.scData;for(var S in d)d.hasOwnProperty(S)&&S==window.location.origin&&(t.scItemID=d[S].scItemID,t.scLanguage=d[S].scLanguage,t.scVersion=d[S].scVersion,t.scSource="Storage")}null==t.scLanguage&&(t.scLanguage="en"),t.scItemID&&1==t.feature_reloadnode&&(r("[Read "+t.scSource+"] Item : "+t.scItemID,"beige"),r("[Read "+t.scSource+"] Language : "+t.scLanguage,"beige"),r("[Read "+t.scSource+"] Version : "+t.scVersion,"beige"),r("*** Redirection ***","yellow"),i('scForm.invoke("item:load(id='+t.scItemID+",language="+t.scLanguage+",version="+t.scVersion+')");')),b()}else b();if(null==t.feature_favorites&&(t.feature_favorites=!0),t.feature_favorites&&!e.isPublishWindow&&e.scContentTree){var k=document.querySelector("#sitecorAuthorToolboxFav");k&&k.remove();var x='<iframe id="sitecorAuthorToolboxFav" class="sitecorAuthorToolboxFav" src="'+("../default.aspx?xmlcontrol=Gallery.Favorites&id="+l().id+"&la=en&vs=1")+'" style="width:100%; height:150px; margin-top: 0px; resize: vertical;"></iframe>';e.scContentTree.insertAdjacentHTML("afterend",x)}if(!e.isLaunchpad){let r=e.extensionVersion;!chrome.runtime.error&&t.hideSnackbar!=r&&g(r)}null==t.feature_workbox&&(t.feature_workbox=!0),!chrome.runtime.error&&1==t.feature_workbox&&m()}if(e.isDesktop&&!e.isGalleryFavorites&&(r("**** Desktop Shell ****","orange"),null==t.feature_launchpad&&(t.feature_launchpad=!0),t.feature_launchpad)){var L='<a href="#" class="scStartMenuLeftOption" title="" onclick="window.location.href=\''+e.launchpadPage+"?launchpad=true&url="+e.windowLocationHref+'\'"><img src="'+e.launchpadIcon+'" class="scStartMenuLeftOptionIcon" alt="" border="0"><div class="scStartMenuLeftOptionDescription"><div class="scStartMenuLeftOptionDisplayName">'+e.launchpadGroupTitle+'</div><div class="scStartMenuLeftOptionTooltip">'+e.launchpadTitle+"</div></div></a>",M=document.querySelectorAll(".scStartMenuLeftOption");for(let e of M)"Install and maintain apps."==e.getAttribute("title")&&e.insertAdjacentHTML("afterend",L)}if(e.isLaunchpad&&(r("**** Launchpad ****","orange"),null==t.feature_launchpad&&(t.feature_launchpad=!0),t.feature_launchpad)){var T=document.querySelectorAll(".last");L='<div class="sc-launchpad-group"><header class="sc-launchpad-group-title">'+e.launchpadGroupTitle+'</header><div class="sc-launchpad-group-row"><a href="#" onclick="window.location.href=\''+e.launchpadPage+"?launchpad=true&url="+e.windowLocationHref+'\'" class="sc-launchpad-item" title="'+e.launchpadTitle+'"><span class="icon"><img src="'+e.launchpadIcon+'" width="48" height="48" alt="'+e.launchpadTitle+'"></span><span class="sc-launchpad-text">'+e.launchpadTitle+"</span></a></div></div>",T[0].insertAdjacentHTML("afterend",L)}if(e.isSearch){r("**** Internal Search ****","orange");var w=document.querySelector("#results"),q=new MutationObserver((function(e){var t=document.querySelector("#results").querySelectorAll(".BlogPostArea");for(var r of t){var a=r.querySelector(".BlogPostFooter"),o=r.querySelector(".BlogPostViews > a > img").getAttribute("title");(o=(o=o.split(" - "))[1].toLowerCase()).includes("/home/")&&(o="/"+(o=o.split("/home/"))[1]);var i='<div class="BlogPostExtra BlogPostContent" style="padding: 5px 0 0px 78px; color: #0769d6"><strong>Sitecore path:</strong> '+o+" <strong>Languages available:</strong> "+r.querySelector(".BlogPostHeader > span").getAttribute("title")+"</div>";o&&a.insertAdjacentHTML("afterend",i)}}));w&&q.observe(w,{attributes:!1,childList:!0,characterData:!1,subtree:!1})}if(e.isFieldEditor){if(r("**** Field editor ****","orange"),null==t.feature_charscount&&(t.feature_charscount=!0),t.feature_charscount){var E,A,C=document.querySelectorAll("input, textarea"),B=0;for(var H of C)"scContentControl"!=H.className&&"scContentControlMemo"!=H.className||(H.setAttribute("style","padding-right: 70px !important"),H.parentElement.setAttribute("style","position:relative !important"),B=H.value.length,A=B>1?B+" chars":B+" char",E='<div id="chars_'+H.id+'" style="position: absolute; bottom: 1px; right: 1px; padding: 6px 10px; border-radius: 4px; line-height: 20px; opacity:0.5;">'+A+"</div>",H.insertAdjacentHTML("afterend",E));document.addEventListener("keyup",(function(e){"input"!=e.target.localName&&"textarea"!=e.target.localName||(B=e.target.value.length,A=B>1?B+" chars":B+" char",document.querySelector("#chars_"+e.target.id)&&(document.querySelector("#chars_"+e.target.id).innerText=A))}),!1)}var I=document.querySelectorAll(".scBucketListSelectedBox, .scContentControlMultilistBox"),j=document.querySelector("#Section_Data");(I=I[1]?I[1]:I[0])&&I.addEventListener("change",(function(){var t=I.value,r=I[I.selectedIndex].text,a='<a class="scMessageBarOption" href="'+window.location.origin+"/sitecore/shell/Applications/Content%20Editor.aspx#"+t+'" target="_blank"><u>Click here ⧉</u></a> ',o='<a class="scMessageBarOption" href="'+window.location.origin+"/?sc_mode=edit&sc_itemid="+t+'" target="_blank"><u>Click here ⧉</u></a> ',i='<div id="Warnings" class="scMessageBar scWarning"><div class="scMessageBarIcon" style="background-image:url('+e.icon+')"></div><div class="scMessageBarTextContainer"><div class="scMessageBarTitle">'+r+'</div><span id="Information" class="scMessageBarText"><span class="scMessageBarOptionBullet">'+a+'</span> to edit this item in <b>Content Editor</b>.</span><span id="Information" class="scMessageBarText"><br /><span class="scMessageBarOptionBulletXP">'+o+"</span> to edit this page in <b>Experience Editor</b>.</span></div></div>";document.querySelector(".scMessageBar")?(document.querySelector(".scMessageBarTitle").innerHTML=r,document.querySelector(".scMessageBarOptionBullet").innerHTML=a,document.querySelector(".scMessageBarOptionBulletXP").innerHTML=o):j.insertAdjacentHTML("beforebegin",i)})),null==t.feature_errors&&(t.feature_errors=!0);var P=0,D=document.getElementsByClassName("scValidationMarkerIcon"),R=document.querySelector("#MainPanel");if(t.feature_errors){var F='<div id="scMessageBarError" class="scMessageBar scError"><div class="scMessageBarIcon" style="background-image:url('+e.icon+')"></div><div class="scMessageBarTextContainer"><ul class="scMessageBarOptions" style="margin:0px">';for(let e of D)"/sitecore/shell/themes/standard/images/bullet_square_yellow.png"!=e.getAttribute("src")&&(F+='<li class="scMessageBarOptionBullet" onclick="'+e.getAttribute("onclick")+'" style="cursor:pointer;">'+e.getAttribute("title")+"</li>",P++);F+="</ul></div></div>",P>0&&R.insertAdjacentHTML("beforebegin",F),w=document.querySelector(".scValidatorPanel"),q=new MutationObserver((function(t){P=0;var r='<div id="scMessageBarError" class="scMessageBar scError"><div class="scMessageBarIcon" style="background-image:url('+e.iconError+')"></div><div class="scMessageBarTextContainer"><ul class="scMessageBarOptions" style="margin:0px">';for(let e of D)"/sitecore/shell/themes/standard/images/bullet_square_yellow.png"!=e.getAttribute("src")&&(r+='<li class="scMessageBarOptionBullet" onclick="'+e.getAttribute("onclick")+'" style="cursor:pointer;">'+e.getAttribute("title")+"</li>",P++);if(r+="</ul></div></div>",P>0)R.insertAdjacentHTML("beforebegin",r);else{var a=document.getElementById("scMessageBarError");a&&a.parentNode.removeChild(a)}})),w&&q.observe(w,{attributes:!0,childList:!0,characterData:!0})}}if(e.isMediaFolder&&(r("**** Media Folder ****","orange"),null==t.feature_dragdrop&&(t.feature_dragdrop=!0),t.feature_dragdrop)){var O=window.location.href.split("id=%7B"),N=(O=(O=O[1].split("%7B"))[0].split("%7D"))[0],U="/sitecore/client/Applications/Dialogs/UploadMediaDialog?ref=list&ro=sitecore://master/%7b"+N+"%7d%3flang%3den&fo=sitecore://master/%7b"+N+"%7d",V=document.querySelector(".scFolderButtons"),W='<a href="#" class="scButton" onclick="javascript:scSitecore.prototype.showModalDialog(\''+U+"', '', '', null, null); false\"><img src=\" "+e.launchpadIcon+' " width="16" height="16" class="scIcon" alt="" border="0"><div class="scHeader">Upload files (Drag and Drop)</div></a>';V.insertAdjacentHTML("afterbegin",W)}if(e.isExperienceProfile&&(r("**** Experience Profile ****","orange"),null==t.feature_gravatarimage&&(t.feature_gravatarimage=!0),t.feature_gravatarimage&&(w=document.querySelector("body"),q=new MutationObserver((function(e){let t=document.querySelector("img[data-sc-id=InfoPhotoImage]"),r=document.querySelector("a[data-sc-id=InfoEmailLink]");t&&r&&r.innerHTML.includes("@")&&!t.src.includes("www.gravatar.com")&&(t.src=_(r.innerHTML,170),q.disconnect())})),w&&q.observe(w,{attributes:!1,childList:!0,characterData:!0,subtree:!0}))),(e.isRichTextEditor||e.isHtmlEditor)&&(r("**** Rich Text Editor ****","orange"),null==t.feature_rtecolor&&(t.feature_rtecolor=!0),null==t.feature_darkmode&&(t.feature_darkmode=!1),null==t.feature_darkmode_auto&&(t.feature_darkmode_auto=!1),t.feature_rtecolor)){var G,z="default";if(e.isRichTextEditor?G=document.querySelector("#Editor_contentIframe"):e.isHtmlEditor&&(G=document.querySelector("#ctl00_ctl00_ctl05_Html")),G){if(e.isRichTextEditor){document.querySelector("#Editor_contentIframe").contentWindow.document.body,document.querySelector("#EditorContentHiddenTextarea");var Q=document.querySelector(".reTextArea")}a("css/codemirror.css"),(t.feature_darkmode&&!t.feature_darkmode_auto||t.feature_darkmode&&t.feature_darkmode_auto&&"dark"==c)&&(z="ayu-dark",a("css/dark/ayu-dark.css")),e.isRichTextEditor?(Q.insertAdjacentHTML("afterend",'<input type="hidden" class="scDarkMode" value="'+z+'" />'),Q.insertAdjacentHTML("afterend",'<input type="hidden" class="scEditor" value="richTextEditor" />')):e.isHtmlEditor&&(G.insertAdjacentHTML("afterend",'<input type="hidden" class="scDarkMode" value="'+z+'" />'),G.insertAdjacentHTML("afterend",'<input type="hidden" class="scEditor" value="htmlEditor" />')),o("js/bundle-min.js")}}if(e.isGalleryLanguage&&(r("**** Languages menu ****","orange"),null==t.feature_flags&&(t.feature_flags=!0),t.feature_flags)){var X,J,K,Y,Z,$,ee=document.querySelector("#Languages"),te=ee.querySelectorAll(".scMenuPanelItem,.scMenuPanelItemSelected"),re=0;(te=[].slice.call(te).sort((function(e,t){return e.querySelector("table > tbody > tr > td > div > div:last-child").textContent>t.querySelector("table > tbody > tr > td > div > div:last-child").textContent?-1:1}))).forEach((function(e){ee.appendChild(e)}));for(let e of te){re=0,X=e.getElementsByTagName("td");for(let e of X)0==re?Y=e.getElementsByTagName("img"):(J=(J=e.getElementsByTagName("b"))[0].innerHTML,"0"!=(K=(K=(K=e.getElementsByTagName("div"))[2].innerHTML).split(" "))[0]&&(Z=e.getElementsByTagName("div"))[2].setAttribute("style","background-color: yellow; display: initial; padding: 0px 3px; color: #000000 !important"),J=y(J),Y[0].onerror=function(){this.src=chrome.runtime.getURL("images/Flags/32x32/flag_generic.png")},Y[0].src=chrome.runtime.getURL("images/Flags/32x32/flag_"+J+".png")),re++;0}}if(e.isPublishDialog&&(r("**** Publishing window ****","orange"),null==t.feature_flags&&(t.feature_flags=!0),t.feature_flags&&(w=document.querySelector("body"),q=new MutationObserver((function(e){var t,r=document.querySelectorAll("div[data-sc-id=CheckBoxListLanguages] > table:last-child")[0];if(null!=r&&r.children[0].children.length>1)for(var a of r.children[0].children)for(var o of a.children)t=y(o.innerText.trim()),null==o.querySelector("#scFlag")&&o.querySelector("label > span").insertAdjacentHTML("beforebegin",' <img id="scFlag" src="'+chrome.runtime.getURL("images/Flags/16x16/flag_"+t+".png")+'" style="display: inline; vertical-align: middle; padding-right: 2px;" onerror="this.onerror=null;this.src=\'-/icon/Flags/16x16/flag_generic.png\';"/>')})),w&&q.observe(w,{attributes:!1,childList:!0,characterData:!1,subtree:!0}))),e.isPublishWindow){r("**** Publish / Rebuild / Package ****","orange"),null==t.feature_flags&&(t.feature_flags=!0);document.querySelector("form").getAttribute("action").split("id=")[1].replace("%7B","{").replace("%7D","}");if(t.feature_flags){var ae=document.querySelectorAll("#Languages > label");for(let e of ae)J=y(e.innerText.trim()),e.insertAdjacentHTML("beforebegin",' <img id="scFlag" src="'+chrome.runtime.getURL("images/Flags/16x16/flag_"+J+".png")+'" style="display: inline; vertical-align: middle; padding-right: 2px;" onerror="this.onerror=null;this.src=\'-/icon/Flags/16x16/flag_generic.png\';"/>')}}null==t.feature_autoexpand&&(t.feature_autoexpand=!0),t.feature_autoexpand&&(document.addEventListener("click",(function(t){if(null!=t.target.offsetParent&&t.target.offsetParent.matches(".scContentTreeNodeNormal")){document.querySelector("#EditorFrames").setAttribute("style","opacity:0.6"),document.querySelector(".scContentTreeContainer").setAttribute("style","opacity:0.6"),document.querySelector(".scEditorTabHeaderActive > span").innerText=e.tabLoadingTitle;setTimeout((function(){document.querySelector("#EditorFrames").setAttribute("style","opacity:1"),document.querySelector(".scContentTreeContainer").setAttribute("style","opacity:1")}),8e3)}if(!t.target.matches(".scContentTreeNodeGlyph"))return;let r=t.target.id;setTimeout((function(){if(document&&r){let e=document.querySelector("#"+r).nextSibling.nextSibling.nextSibling;if(e){let t=e.querySelectorAll(".scContentTreeNode");1==t.length&&t[0].querySelector(".scContentTreeNodeGlyph").click()}}}),200)}),!1),document.addEventListener("mousedown",(function(e){if(!e.target.matches(".glyph"))return;let t=e.target.id,r=e.target.src.includes("collapsed");setTimeout((function(){if(document&&t&&r){var e=document.querySelector("#"+t).closest("ul").nextSibling;if(e)e.querySelector(".glyph").click()}}),200)}),!1)),w=document.querySelector("#LastPage"),q=new MutationObserver((function(e){if(null==t.feature_notification&&(t.feature_notification=!0),t.feature_notification){var r=(w=document.querySelector("#LastPage")).querySelector(".sc-text-largevalue").innerHTML,a=w.querySelector(".scFieldLabel").innerHTML;"Result:"==a&&(a="Finished "+document.querySelector("#ResultText").value.split("Finished")[1]),h(r,a);var o=parent.parent.document.querySelector("body");f(o)}})),w&&q.observe(w,{attributes:!0}),w=document.querySelector("#scLanguage"),q=new MutationObserver((function(t){r("*** Update UI ***","yellow");var a=document.querySelector(".scEditorHeaderQuickInfoInput");if(a){l();var o=a.getAttribute("value"),i=document.querySelector("#scLanguage").getAttribute("value").toLowerCase();let t=document.querySelector(".scEditorHeaderVersionsVersion > span");t=null!=t?t.innerText:1;var n=document.querySelectorAll(".scEditorQuickInfo"),s=(n[n.length-1],n.length),c=document.getElementsByClassName("scEditorHeaderTitle"),d=document.querySelectorAll(".scEditorHeaderQuickInfoInput"),u=d[d.length-2].getAttribute("value"),g=localStorage.getItem("scBackPrevious");if(!e.hasRedirection&&!e.hasRedirectionOther)if("true"!=g){var m={sitecore:!0,id:o,language:i,version:t};history.pushState(m,void 0,"#"+o+"_"+i+"_"+t)}else localStorage.removeItem("scBackPrevious");if(e.debug&&console.info("%c - Tabs opened: "+s+" ","font-size:12px; background: #7b3090; color: white; border-radius:5px; padding 3px;"),s>1&&!document.getElementById("showInContentTree"+s)){var f=window.location.href,p=(f=f.split("#"))[0]+"&reload#"+u;c[s-1].insertAdjacentHTML("afterend",'[<a id="showInContentTree'+s+'" href="" onclick="javascript:window.location.href=\''+p+"'; return false;\" />Show in content tree</a>]")}}t.forEach((function(e){"attributes"==e.type&&b()}))})),w&&q.observe(w,{attributes:!0})}if(e.isEditMode&&!e.isLoginPage||e.isPreviewMode&&!e.isLoginPage){r("Experience Editor detected","red"),a("css/onload-min.css"),a("css/tooltip-min.css"),o("js/inject-min.js");var oe=document.querySelector("[data-sc-itemid]");if(oe){var ie=decodeURI(oe.getAttribute("data-sc-itemid"));s(ie,"en",1)}if(e.isGalleryLanguageExpEd&&(r("**** Languages menu ****","yellow"),null==t.feature_flags&&(t.feature_flags=!0),t.feature_flags)){var ne;te=(ee=document.querySelector(".sc-gallery-content")).querySelectorAll(".sc-gallery-option-content,.sc-gallery-option-content-active"),0,re=0,(te=[].slice.call(te).sort((function(e,t){return e.querySelector("div > div:last-child > span").textContent>t.querySelector("div > div:last-child > span").textContent?-1:1}))).forEach((function(e){ee.appendChild(e)}));for(let e of te)ne=e.closest(".sc-gallery-option-content,.sc-gallery-option-content-active"),J=e.querySelector(".sc-gallery-option-content-header > span").innerText,"0"!=(Z=(K=e.querySelector(".sc-gallery-option-content-description > span")).innerHTML.split(" "))[0]&&K.setAttribute("style","background-color: yellow; display: initial; padding: 0px 3px; color: #000000 !important"),J=y(J),ne.setAttribute("style","padding-left:48px; background-image: url("+chrome.runtime.getURL("images/Flags/32x32/flag_"+J+".png")+"); background-repeat: no-repeat; background-position: 5px;")}if(e.isRibbon){r("**** Ribbon ****","yellow");var se=document.querySelector(".flag_generic_24");for($ in J=se.nextSibling.innerText,J=v(J),e.jsonData)e.jsonData.hasOwnProperty($)&&J==e.jsonData[$].language.toUpperCase()&&(J=e.jsonData[$].flag);se.setAttribute("style","background-image: url("+chrome.runtime.getURL("images/Flags/24x24/flag_"+J+".png")+"); background-repeat: no-repeat; background-position: top left;")}w=document.querySelector(".scChromeControls"),q=new MutationObserver((function(e){var t=document.querySelectorAll(".scChromeToolbar");for(var r of t){r.setAttribute("style","margin-left:50px");var a=r.querySelectorAll(".scChromeCommand");r.querySelector(".scChromeText"),r.querySelector(".scChromeCommandText");for(var o of a){var i=o.getAttribute("title");o.setAttribute("style","z-index:auto"),null!=i&&(o.setAttribute("data-tooltip",i),o.classList.add("t-bottom"),o.classList.add("t-sm"),o.removeAttribute("title"))}}})),w&&q.observe(w,{attributes:!0,childList:!0,characterData:!0});var ce=document.querySelector(".pagemode-edit");!ce&&(ce=document.querySelector(".on-page-editor")),!ce&&(ce=document.querySelector(".experience-editor")),!ce&&(ce=document.querySelector(".scWebEditRibbon"));e.windowLocationHref.includes("?"),document.querySelector("#scCrossPiece"),document.querySelector("#scWebEditRibbon"),document.querySelector(".sc-messageBar");let i;var le;null==t.feature_darkmode&&(t.feature_darkmode=!1),null==t.feature_darkmode_auto&&(t.feature_darkmode_auto=!1),null==t.feature_experienceeditor&&(t.feature_experienceeditor=!0),t.feature_experienceeditor&&a("css/reset-min.css"),(t.feature_darkmode&&!t.feature_darkmode_auto&&e.isRibbon||t.feature_darkmode&&!t.feature_darkmode_auto&&e.isDialog||t.feature_darkmode&&!t.feature_darkmode_auto&&e.isInsertPage||t.feature_darkmode&&t.feature_darkmode_auto&&e.isRibbon&&"dark"==c||t.feature_darkmode&&t.feature_darkmode_auto&&e.isDialog&&"dark"==c||t.feature_darkmode&&t.feature_darkmode_auto&&e.isInsertPage&&"dark"==c)&&a("css/dark/experience-min.css"),(t.feature_darkmode&&!t.feature_darkmode_auto||t.feature_darkmode&&t.feature_darkmode_auto&&"dark"==c)&&(i="dark"),w=document.body,q=new MutationObserver((function(e){for(var t of e)for(var r of t.addedNodes)if("scCrossPiece"==r.id){var a='<div class="scExpTab '+i+'"><span class="tabHandle"></span><span class="tabText" onclick="toggleRibbon()">▲ Hide<span></div>';r.insertAdjacentHTML("afterend",a),q.disconnect(),u()}})),t.feature_experienceeditor&&w&&q.observe(w,{attributes:!1,childList:!0,characterData:!1}),le=e.isEditMode?e.windowLocationHref.replace("sc_mode=edit","sc_mode=normal"):e.isPreviewMode?e.windowLocationHref.replace("sc_mode=preview","sc_mode=normal"):e.windowLocationHref.includes("?")?e.windowLocationHref+"&sc_mode=normal":e.windowLocationHref+"?sc_mode=normal",t.feature_experienceeditor&&!e.isRibbon&&(L='<div class="scNormalModeTab '+i+'"><span class="t-right t-sm" data-tooltip="Open in Normal Mode"><a href="'+le+'"><img src="'+e.iconChrome+'"/></a></span></div>',ce&&ce.insertAdjacentHTML("afterend",L)),t.feature_experienceeditor&&!e.isRibbon&&(L='<div class="scContentEditorTab '+i+'"><span class="t-right t-sm" data-tooltip="Open in Content Editor"><a href="'+window.location.origin+'/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1"><img src="'+e.iconCE+'"/></a></span></div>',ce&&ce.insertAdjacentHTML("afterend",L))}});