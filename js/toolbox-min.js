var initX,initY,mousePressX,debug=!0;function stripHtml(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""}function sendNotification(e,t){new Notification(e,{body:t,icon:chrome.runtime.getURL("images/icon.png")})}function repositionElement(e){this.style.left=initX+e.clientX-mousePressX+"px"}function startDrag(){var e=document.querySelector(".scExpTab");e&&e.addEventListener("mousedown",(function(t){initX=this.offsetLeft,mousePressX=t.clientX,this.addEventListener("mousemove",repositionElement,!1),window.addEventListener("mouseup",(function(){e.removeEventListener("mousemove",repositionElement,!1)}),!1)}),!1)}function cleanCountryName(e){var t=e;return""!=t&&t.includes(" :")&&(t=(t=t.split(" :"))[0]),(t=(t=null==(t=t.split(" ("))[1]?t[0]:t[1]).split(")"))[0].includes(", ")&&((t=t[0].split(", "))[0]=t[1],t[0]=t[0].replace(" ","_")),(t=(t=t[0].replace(" ","_")).toUpperCase()).replace("TRADITIONAL,_","").replace("SIMPLIFIED,_","").replace("U.A.E.","UNITED_ARAB_EMIRATES").replace("KOREA","SOUTH_KOREA").replace("UNITED_STATES","USA").replace("UNITED_KINGDOM","GREAT_BRITAIN").replace("ENGLISH","GREAT_BRITAIN")}function sitecoreAuthorToolbox(){var e=0,t=chrome.runtime.getURL("images/rocket.png"),a=chrome.runtime.getURL("images/error.png"),n=(chrome.runtime.getURL("images/edit.png"),chrome.runtime.getURL("images/translate.png")),r=chrome.runtime.getURL("images/Flags/32x32/flag_generic.png"),o=chrome.runtime.getURL("data/languages.json");let s=["ARABIC","HEBREW","PERSIAN","URDU","SINDHI"],i=document.querySelector(".scEditorHeader");document.querySelector(".scEditorHeaderTitle");document.getElementsByClassName("scEditorQuickInfo");let c=document.querySelector(".scEditorHeaderQuickInfoInput"),l=document.querySelector(".scEditorHeaderVersionsLanguage"),d=document.querySelector(".scEditorHeaderVersionsVersion > span");d&&(d=d.innerText);window.location.hash;let u=document.querySelector(".scEditorTabHeaderActive");document.querySelectorAll(".scRibbonEditorTabNormal");var g=document.getElementsByClassName("scValidationMarkerIcon");document.getElementsByClassName("scValidationResult");let m=document.querySelector("#EditorFrames"),p=document.querySelector(".scEditorSections"),f=(document.getElementById("SearchPanel"),document.getElementById("ContentTreeHolder")),h=!1;var b=document.getElementsByClassName("scEditorHeaderVersionsLanguage");if(b[0])var y=b[0].getAttribute("title"),v=stripHtml(b[0].innerHTML);if(c){var x=document.getElementsByClassName("scEditorHeaderQuickInfoInput"),w=x[0].getAttribute("value"),L=x[1].getAttribute("value").toLowerCase(),E=L.toLowerCase(),M=(L=L.split("/home/"))[0];M=(M=M.split("/")).slice(-1)[0].toLowerCase();var B,_=E.includes("/data/"),T=(E.includes("/marketing control panel/"),E.includes("/sitecore/templates"),E.includes("/sitecore/system"),E.includes("/sitecore/layout"),E.includes("/sitecore/forms"),E.includes("/presentation"),E.includes("/sitecore/content")),k=document.getElementById("scLanguage").getAttribute("value").toLowerCase(),C=window.location.origin+"/?sc_itemid="+w+"&sc_mode=normal&sc_lang="+k+"&sc_version="+d,S=v.includes("(");L=null!=L[1]?encodeURI(window.location.origin+"/"+k+"/"+L[1]+"?sc_site=xxxsxa_sitexxx&sc_mode=normal").toLowerCase():encodeURI(window.location.origin+"/"+k+"/?sc_site=xxxsxa_sitexxx").toLowerCase(),"home"!=M&&T&&!_?chrome.storage.sync.get(["feature_urls"],(function(e){null==e.feature_urls&&(e.feature_urls=!0),!document.getElementById("scMessageBarUrl")&&e.feature_urls&&chrome.runtime.sendMessage({greeting:"sxa_site"},(function(e){if(null!=e.farewell){var a=M.toLowerCase(),n=e.farewell.toLowerCase(),r=n.includes(a);debug&&console.log("%c - QuickInfo ("+a+") VS Cookie ("+n+") = "+r+" ","font-size:12px; background: #e3658e; color: black; border-radius:5px; padding 3px;")}L=null!=e.farewell&&r?L.replace("xxxsxa_sitexxx",e.farewell):L.replace("xxxsxa_sitexxx",M);var o='<div id="scMessageBarUrl" class="scMessageBar scWarning"><div class="scMessageBarIcon" style="background-image:url('+t+')"></div><div class="scMessageBarTextContainer"><div class="scMessageBarTitle">Sitecore Live URL</div><div class="scMessageBarText">If you want to preview this page in <b>'+y+"</b> (version "+d+')</div><ul class="scMessageBarOptions" style="margin:0px"><li class="scMessageBarOptionBullet"><a href="'+L+'" target="_blank" class="scMessageBarOption">Open this link</a> or try <a href="'+C+'" target="_blank" class="scMessageBarOption">this alternative link</a></li></ul></div></div>';i.insertAdjacentHTML("afterend",o)}))})):_&&chrome.storage.sync.get(["feature_urls"],(function(e){if(null==e.feature_urls&&(e.feature_urls=!0),!document.getElementById("scMessageBarInfo")&&e.feature_urls);}))}else if(!document.getElementById("scMessageBarUrl")&&p){var I='<div id="scMessageBarUrl" class="scMessageBar scWarning"><div class="scMessageBarIcon" style="background-image:url('+t+')"></div><div class="scMessageBarTextContainer"><div class="scMessageBarTitle">Oh snap! 😭😭😭</div><div class="scMessageBarText">To fully enjoy Sitecore Author Toolbox, please enable <b>Title bar</b> and <b>Quick info section</b> under <b>Application Options</b>.</div><ul class="scMessageBarOptions" style="margin:0px"><li class="scMessageBarOptionBullet"><a href="" onclick="javascript:return scForm.postEvent(this,event,\'shell:useroptions\')" class="scMessageBarOption">Open Application Options</a>.</li></ul></div></div>';p.insertAdjacentHTML("afterbegin",I)}chrome.storage.sync.get(["feature_flags"],(function(e){if(null==e.feature_flags&&(e.feature_flags=!0),S)B=(B=cleanCountryName(v)).toLowerCase(),B=chrome.runtime.getURL("images/Flags/32x32/flag_"+B+".png"),!document.getElementById("scFlag")&&e.feature_flags&&B&&u.insertAdjacentHTML("afterbegin",'<img id="scFlag" src="'+B+'" style="width: 20px; vertical-align: middle; padding: 0px 5px 0px 0px;" onerror="this.onerror=null;this.src=\''+r+"';\"/>"),!document.getElementById("scFlagMenu")&&e.feature_flags&&B&&l.insertAdjacentHTML("afterbegin",'<img id="scFlagMenu" src="'+B+'" style="width: 15px; vertical-align: sub; padding: 0px 5px 0px 0px;" onerror="this.onerror=null;this.src=\''+r+"';\"/>");else if(e.feature_flags){var t=new XMLHttpRequest;t.overrideMimeType("application/json"),t.open("GET",o,!0),t.onreadystatechange=function(){if(4===t.readyState&&"200"==t.status){var a,n=JSON.parse(t.responseText);for(a in n)n.hasOwnProperty(a)&&v&&v.toUpperCase()==n[a].language.toUpperCase()&&(B=(B=n[a].flag).toLowerCase(),B=chrome.runtime.getURL("images/Flags/32x32/flag_"+B+".png"),!document.getElementById("scFlag")&&e.feature_flags&&B&&u.insertAdjacentHTML("afterbegin",'<img id="scFlag" src="'+B+'" style="width: 20px; vertical-align: middle; padding: 0px 5px 0px 0px;" onerror="this.onerror=null;this.src=\''+r+"';\"/>"),!document.getElementById("scFlagMenu")&&e.feature_flags&&B&&l.insertAdjacentHTML("afterbegin",'<img id="scFlagMenu" src="'+B+'" style="width: 15px; vertical-align: sub; padding: 0px 5px 0px 0px;" onerror="this.onerror=null;this.src=\''+r+"';\"/>"))}},t.send(null)}})),chrome.storage.sync.get(["feature_rtl"],(function(e){if(null==e.feature_rtl&&(e.feature_rtl=!0),e.feature_rtl&&v){var t;if(x=v.split(" ("),B=x[0].toUpperCase(),(link=document.createElement("link")).type="text/css",link.rel="stylesheet",s.includes(B)){link.href=chrome.runtime.getURL("css/rtl-min.css"),t=document.getElementsByClassName("scContentControlHtml");for(let e of t)e.onload=function(){e.contentWindow.document.getElementById("ContentWrapper").style.direction="RTL"}}else{link.href=chrome.runtime.getURL("css/ltr-min.css"),t=document.getElementsByClassName("scContentControlHtml");for(let e of t)e.onload=function(){e.contentWindow.document.getElementById("ContentWrapper").style.direction="LTR"}}document.getElementsByTagName("head")[0].appendChild(link)}})),chrome.storage.sync.get(["feature_errors"],(function(t){if(null==t.feature_errors&&(t.feature_errors=!0),t.feature_errors){e=0;var n='<div id="scMessageBarError" class="scMessageBar scError"><div class="scMessageBarIcon" style="background-image:url('+a+')"></div><div class="scMessageBarTextContainer"><ul class="scMessageBarOptions" style="margin:0px">';for(let t of g)"/sitecore/shell/themes/standard/images/bullet_square_yellow.png"!=t.getAttribute("src")&&(n+='<li class="scMessageBarOptionBullet" onclick="'+t.getAttribute("onclick")+'" style="cursor:pointer;">'+t.getAttribute("title")+"</li>",e++);n+="</ul></div></div>",e>0&&i.insertAdjacentHTML("afterend",n);var r=document.querySelector(".scValidatorPanel"),o=new MutationObserver((function(t){e=0;var n='<div id="scMessageBarError" class="scMessageBar scError"><div class="scMessageBarIcon" style="background-image:url('+a+')"></div><div class="scMessageBarTextContainer"><ul class="scMessageBarOptions" style="margin:0px">';for(let t of g)"/sitecore/shell/themes/standard/images/bullet_square_yellow.png"!=t.getAttribute("src")&&(n+='<li class="scMessageBarOptionBullet" onclick="'+t.getAttribute("onclick")+'" style="cursor:pointer;">'+t.getAttribute("title")+"</li>",e++);if(n+="</ul></div></div>",e>0)i.insertAdjacentHTML("afterend",n);else{var r=document.getElementById("scMessageBarError");r&&r.parentNode.removeChild(r)}debug&&console.log("Changement: "+document.getElementsByClassName("scValidatorPanel"))}));if(r){o.observe(r,{attributes:!0,childList:!0,characterData:!0})}}}));var A=document.getElementById("EditorFrames");if(A){var H,R,N;A=A.getElementsByTagName("iframe"),e=0;for(let t of A)if(H=A[e].src,R=A[e],N=H.includes("/Media/"),e++,N){debug&&console.info("SRC of MEDIA IFRAME "+e+" - "+H);break}chrome.storage.sync.get(["feature_dragdrop"],(function(e){if(null==e.feature_dragdrop&&(e.feature_dragdrop=!0),N&&e.feature_dragdrop)R.onload=function(){var e='<iframe id="sitecorAuthorToolbox" class="sitecorAuthorToolbox" src="'+("/sitecore/client/Applications/Dialogs/UploadMediaDialog?fo=sitecore://master/{"+(H=(H=H.split("id=%7B"))[1].split("%7B"))[0]+"}")+'" style="width:100%; height:500px; margin-top: -60px; resize: vertical;"></iframe>';R.setAttribute("style","margin-top: -30px;");var t=document.getElementById("sitecorAuthorToolbox");t&&(t.remove(),debug&&console.info("Remove iFrame from DOM")),m.insertAdjacentHTML("afterbegin",e)};else{var t=document.getElementById("sitecorAuthorToolbox");t&&(t.remove(),debug&&console.info("Remove iFrame from DOM (no folder)"))}}))}window.Notification?"granted"===Notification.permission||Notification.requestPermission().then((function(e){"granted"===e||console.info("User blocked notifications.")})).catch((function(e){console.warn(e)})):console.info("Browser does not support notifications."),chrome.storage.sync.get(["feature_favorites"],(function(e){if(null==e.feature_favorites&&(e.feature_favorites=!0),e.feature_favorites&&!isPublishWindow&&f){var t=document.getElementById("sitecorAuthorToolboxFav");t&&t.remove();var a='<iframe id="sitecorAuthorToolboxFav" class="sitecorAuthorToolboxFav" src="'+("../default.aspx?xmlcontrol=Gallery.Favorites&id="+w+"&la="+k+"&vs=1")+'" style="width:100%; height:150px; margin-top: 0px; resize: vertical;"></iframe>';f.insertAdjacentHTML("afterend",a)}})),chrome.storage.sync.get(["feature_charscount"],(function(e){if(null==e.feature_charscount&&(e.feature_charscount=!0),e.feature_charscount){var t,a,n=document.querySelectorAll("input, textarea"),r=0;for(var o of n)"scContentControl"!=o.className&&"scContentControlMemo"!=o.className||(o.setAttribute("style","padding-right: 70px !important"),o.parentElement.setAttribute("style","position:relative !important"),r=o.value.length,a=r>1?r+" chars":r+" char",t='<div id="chars_'+o.id+'" style="position: absolute; bottom: 1px; right: 1px; padding: 6px 10px; border-radius: 4px; line-height: 20px; opacity:0.5;">'+a+"</div>",o.insertAdjacentHTML("afterend",t));document.addEventListener("keyup",(function(e){"input"!=e.target.localName&&"textarea"!=e.target.localName||(r=e.target.value.length,a=r>1?r+" chars":r+" char",debug&&console.log("chars_"+e.target.id+" -> "+a),document.querySelector("#chars_"+e.target.id)&&(document.querySelector("#chars_"+e.target.id).innerText=a))}),!1)}})),chrome.storage.sync.get(["feature_translatemode"],(function(t){if(null==t.feature_translatemode&&(t.feature_translatemode=!0),t.feature_translatemode){var a=document.querySelector(".scEditorPanel"),r=document.querySelectorAll(".scEditorSectionPanel .scEditorSectionPanelCell")[1],o=a.querySelectorAll("input, textarea, select");if(e=0,r&&null!=r.querySelector(".scEditorFieldMarkerInputCell > table > tbody")&&(h=!0),h){for(var s of o)if("scContentControl"==s.className||"scContentControlMemo"==s.className||"scContentControlImage"==s.className||s.className.includes("scCombobox")&&!s.className.includes("scComboboxEdit")){if(g=null,e%2==0){var c=s,l=s.getAttribute("onfocus");l=(l=(l=l.split("lang="))[1].split("&"))[0].toUpperCase()}else{var d=s,u=s.getAttribute("onfocus");u=(u=(u=u.split("lang="))[1].split("&"))[0].toUpperCase();var g=s.closest("td").parentNode.querySelectorAll("td")[1];null!=g&&(g.innerHTML='<a class="scTranslateRTL" href="javascript:copyTranslate(\''+c.id+"','"+d.id+"','RTL');\" title=\"Copy "+u+" to "+l+'"><img src="'+chrome.runtime.getURL("images/navigate_left.png")+'" style="padding: 0px 2px 0px 0px; vertical-align: bottom; width: 20px;" alt="Copy"></a>')}e++}document.getElementById("scMessageBarTranslation")||(I='<div id="scMessageBarTranslation" class="scMessageBar scInformation"><div class="scMessageBarIcon" style="background-image:url('+n+')"></div><div class="scMessageBarTextContainer"><div class="scMessageBarTitle">Translation Mode ('+u+" to "+l+')</div><div class="scMessageBarText">You are translating content. If you want, you can directly </b></div><ul class="scMessageBarOptions" style="margin:0px"><li class="scMessageBarOptionBullet"><span class="scMessageBarOption" onclick="javascript:copyTranslateAll();" style="cursor:pointer">Copy existing content into '+v+' version</span></li> or <li class="scMessageBarOptionBullet"><span class="scMessageBarOption" style="cursor:pointer !important;" onclick="window.open(\'https://translate.google.com/#view=home&op=translate&sl='+u.toLowerCase()+"&tl="+l.toLowerCase()+"&text=Hello Sitecore');\">Use Google Translate</span></li></ul></div></div>",i.insertAdjacentHTML("afterend",I))}}})),!0===debug&&(console.info("%c - Sitecore Item: "+w+" ","font-size:12px; background: #7b3090; color: white; border-radius:5px; padding 3px;"),console.info("%c - Sitecore Language: "+k+" ","font-size:12px; background: #7b3090; color: white; border-radius:5px; padding 3px;"),console.info("%c - Sitecore Version: "+d+" ","font-size:12px; background: #7b3090; color: white; border-radius:5px; padding 3px;"),console.info("%c - Translation Mode: "+h+" ","font-size:12px; background: #7b3090; color: white; border-radius:5px; padding 3px;"))}debug&&(console.info("%c *********************************** Url Loaded *********************************** ","font-size:14px; background: #32ed74; color: black; border-radius:5px; padding 3px;"),console.info("%c "+window.location.href,"font-size:8px"));var windowLocationHref=window.location.href.toLowerCase(),isSitecore=window.location.pathname.includes("/sitecore/"),isPreviewMode=document.querySelector(".pagemode-preview");isPreviewMode||(isPreviewMode=windowLocationHref.includes("sc_mode=preview"));var isEditMode=document.querySelector(".pagemode-edit");isEditMode||(isEditMode=windowLocationHref.includes("sc_mode=edit")),isEditMode||(isEditMode=windowLocationHref.includes("/experienceeditor/"));var isGalleryLanguage=windowLocationHref.includes("gallery.language"),isGalleryLanguageExpEd=windowLocationHref.includes("selectlanguagegallery"),isGalleryFavorites=windowLocationHref.includes("gallery.favorites"),isGalleryVersions=windowLocationHref.includes("gallery.versions"),isAdminCache=windowLocationHref.includes("/admin/cache.aspx"),isAdmin=windowLocationHref.includes("/admin/"),isMediaBrowser=windowLocationHref.includes("sitecore.shell.applications.media.mediabrowser"),isPublishWindow=windowLocationHref.includes("/shell/applications/publish.aspx"),isSecurityWindow=windowLocationHref.includes("/shell/applications/security/"),isExperienceEditor=windowLocationHref.includes("/applications/experienceeditor/"),isContentHome=windowLocationHref.includes("/content/"),isLoginPage=windowLocationHref.includes("sitecore/login"),isLaunchpad=windowLocationHref.includes("/client/applications/launchpad"),isDesktop=windowLocationHref.includes("/shell/default.aspx"),isRichTextEditor=windowLocationHref.includes("/controls/rich%20text%20editor/"),isFieldEditor=windowLocationHref.includes("field%20editor.aspx"),isModalDialogs=windowLocationHref.includes("jquerymodaldialogs.html"),isSecurityDetails=windowLocationHref.includes("securitydetails.aspx"),isEditorFolder=windowLocationHref.includes("editors.folder.aspx"),isRibbon=windowLocationHref.includes("/ribbon.aspx"),isDialog=windowLocationHref.includes("experienceeditor/dialogs/confirm/"),isInsertPage=windowLocationHref.includes("/dialogs/insertpage/"),isCreateUser=windowLocationHref.includes("createnewuser"),isUserManager=windowLocationHref.includes("user%20manager.aspx"),isPersonalization=windowLocationHref.includes("dialogs.personalization"),isRules=windowLocationHref.includes("rules.aspx"),isCss=windowLocationHref.includes(".css");if(isSitecore&&!isEditMode&&!isLoginPage&&!isCss){debug&&console.info("%c ✏️ Sitecore detected ","font-size:14px; background: #f33d35; color: white; border-radius:5px; padding 3px;");var script=document.createElement("script");script.src=chrome.runtime.getURL("js/BucketList-min.js"),(document.head||document.documentElement).appendChild(script),script.remove(),(script=document.createElement("script")).src=chrome.runtime.getURL("js/inject-min.js"),(document.head||document.documentElement).appendChild(script),script.remove();var link=document.createElement("link");link.type="text/css",link.rel="stylesheet",link.href=chrome.runtime.getURL("css/onload-min.css"),document.getElementsByTagName("head")[0].appendChild(link);var launchpadPage=chrome.runtime.getURL("options.html"),launchpadIcon=chrome.runtime.getURL("images/icon.png"),launchpadGroupTitle="Sitecore Author Toolbox",launchpadTitle="Options",launchpadUrl=windowLocationHref;if(isDesktop?(debug&&console.info("====================> DESKTOP SHELL <===================="),chrome.storage.sync.get(["feature_launchpad"],(function(e){if(null==e.feature_launchpad&&(e.feature_launchpad=!0),e.feature_launchpad){var t='<a href="#" class="scStartMenuLeftOption" title="" onclick="window.location.href=\''+launchpadPage+"?launchpad=true&url="+launchpadUrl+'\'"><img src="'+launchpadIcon+'" class="scStartMenuLeftOptionIcon" alt="" border="0"><div class="scStartMenuLeftOptionDescription"><div class="scStartMenuLeftOptionDisplayName">'+launchpadGroupTitle+'</div><div class="scStartMenuLeftOptionTooltip">'+launchpadTitle+"</div></div></a>",a=document.querySelectorAll(".scStartMenuLeftOption");for(let e of a)"Install and maintain apps."==e.getAttribute("title")&&e.insertAdjacentHTML("afterend",t)}}))):isLaunchpad?(debug&&console.info("====================> LAUNCHPAD <===================="),chrome.storage.sync.get(["feature_launchpad"],(function(e){if(null==e.feature_launchpad&&(e.feature_launchpad=!0),e.feature_launchpad){var t=document.querySelectorAll(".last"),a='<div class="sc-launchpad-group"><header class="sc-launchpad-group-title">'+launchpadGroupTitle+'</header><div class="sc-launchpad-group-row"><a href="#" onclick="window.location.href=\''+launchpadPage+"?launchpad=true&url="+launchpadUrl+'\'" class="sc-launchpad-item" title="'+launchpadTitle+'"><span class="icon"><img src="'+launchpadIcon+'" width="48" height="48" alt="'+launchpadTitle+'"></span><span class="sc-launchpad-text">'+launchpadTitle+"</span></a></div></div>";t[0].insertAdjacentHTML("afterend",a)}}))):isAdminCache&&debug&&console.info("====================> ADMIN CACHE <===================="),isFieldEditor){debug&&console.info("====================> FIELD EDITOR <===================="),chrome.storage.sync.get(["feature_charscount"],(function(e){if(null==e.feature_charscount&&(e.feature_charscount=!0),e.feature_charscount){var t,a,n=document.querySelectorAll("input, textarea"),r=0;for(var o of n)"scContentControl"!=o.className&&"scContentControlMemo"!=o.className||(o.setAttribute("style","padding-right: 70px !important"),o.parentElement.setAttribute("style","position:relative !important"),r=o.value.length,a=r>1?r+" chars":r+" char",t='<div id="chars_'+o.id+'" style="position: absolute; bottom: 1px; right: 1px; padding: 6px 10px; border-radius: 4px; line-height: 20px; opacity:0.5;">'+a+"</div>",o.insertAdjacentHTML("afterend",t));document.addEventListener("keyup",(function(e){"input"!=e.target.localName&&"textarea"!=e.target.localName||(r=e.target.value.length,a=r>1?r+" chars":r+" char",debug&&console.log("chars_"+e.target.id+" -> "+a),document.querySelector("#chars_"+e.target.id)&&(document.querySelector("#chars_"+e.target.id).innerText=a))}),!1)}}));var scBucketListSelectedBox=document.querySelectorAll(".scBucketListSelectedBox, .scContentControlMultilistBox, .scCombobox"),Section_Data=document.querySelector("#Section_Data");(scBucketListSelectedBox=scBucketListSelectedBox[1]?scBucketListSelectedBox[1]:scBucketListSelectedBox[0])&&scBucketListSelectedBox.addEventListener("change",(function(){var e=scBucketListSelectedBox.value,t=scBucketListSelectedBox[scBucketListSelectedBox.selectedIndex].text,a=chrome.runtime.getURL("images/rocket.png"),n='<a class="scMessageBarOption" href="'+window.location.origin+"/sitecore/shell/Applications/Content%20Editor.aspx#"+e+'" target="_blank"><u>Click here ⧉</u></a> ',r='<div id="Warnings" class="scMessageBar scWarning"><div class="scMessageBarIcon" style="background-image:url('+a+')"></div><div class="scMessageBarTextContainer"><div class="scMessageBarTitle">'+t+'</div><span id="Information" class="scMessageBarText"><span class="scMessageBarOptionBullet">'+n+"</span> to edit this item in Content Editor.</span></div></div>";document.querySelector(".scMessageBar")?(document.querySelector(".scMessageBarTitle").innerHTML=t,document.querySelector(".scMessageBarOptionBullet").innerHTML=n):Section_Data.insertAdjacentHTML("beforebegin",r)})),chrome.storage.sync.get(["feature_errors"],(function(e){null==e.feature_errors&&(e.feature_errors=!0);var t=0,a=document.getElementsByClassName("scValidationMarkerIcon"),n=document.querySelector("#MainPanel"),r=chrome.runtime.getURL("images/error.png");if(e.feature_errors){var o='<div id="scMessageBarError" class="scMessageBar scError"><div class="scMessageBarIcon" style="background-image:url('+r+')"></div><div class="scMessageBarTextContainer"><ul class="scMessageBarOptions" style="margin:0px">';for(let e of a)"/sitecore/shell/themes/standard/images/bullet_square_yellow.png"!=e.getAttribute("src")&&(o+='<li class="scMessageBarOptionBullet" onclick="'+e.getAttribute("onclick")+'" style="cursor:pointer;">'+e.getAttribute("title")+"</li>",t++);o+="</ul></div></div>",t>0&&n.insertAdjacentHTML("beforebegin",o);var s=document.querySelector(".scValidatorPanel"),i=new MutationObserver((function(e){t=0;var o='<div id="scMessageBarError" class="scMessageBar scError"><div class="scMessageBarIcon" style="background-image:url('+r+')"></div><div class="scMessageBarTextContainer"><ul class="scMessageBarOptions" style="margin:0px">';for(let e of a)"/sitecore/shell/themes/standard/images/bullet_square_yellow.png"!=e.getAttribute("src")&&(o+='<li class="scMessageBarOptionBullet" onclick="'+e.getAttribute("onclick")+'" style="cursor:pointer;">'+e.getAttribute("title")+"</li>",t++);if(o+="</ul></div></div>",t>0)n.insertAdjacentHTML("beforebegin",o);else{var s=document.getElementById("scMessageBarError");s&&s.parentNode.removeChild(s)}debug&&console.log("!! Change !!")}));if(s){i.observe(s,{attributes:!0,childList:!0,characterData:!0})}}}))}isGalleryLanguage?(debug&&console.info("====================> LANGUAGES <===================="),chrome.storage.sync.get(["feature_flags"],(function(e){if(null==e.feature_flags&&(e.feature_flags=!0),e.feature_flags){var t,a=new XMLHttpRequest;a.overrideMimeType("application/json"),a.open("GET",chrome.runtime.getURL("data/languages.json"),!0),a.onreadystatechange=function(){if(4===a.readyState&&"200"==a.status){t=JSON.parse(a.responseText);var e,n,r,o,s=document.getElementById("Languages").querySelectorAll(".scMenuPanelItem,.scMenuPanelItemSelected"),i=0;for(let a of s){i=0,e=a.getElementsByTagName("td");for(let a of e){if(0==i)r=a.getElementsByTagName("img");else{if(n=(n=a.getElementsByTagName("b"))[0].innerHTML,"0"!=a.getElementsByTagName("div")[2].innerHTML.split(" ")[0]&&a.getElementsByTagName("div")[2].setAttribute("style","background-color: yellow; display: initial; padding: 0px 3px; color: #000000 !important"),n.includes("(region)"))for(o in n=n.split(" (region"),t)t.hasOwnProperty(o)&&n[0].toUpperCase()==t[o].language.toUpperCase()&&(n=t[o].flag);else n=cleanCountryName(n);n=n.toLowerCase(),r[0].onerror=function(){this.src=chrome.runtime.getURL("images/Flags/32x32/flag_generic.png")},r[0].src=chrome.runtime.getURL("images/Flags/32x32/flag_"+n+".png")}i++}0}}},a.send(null)}}))):isPublishWindow&&(debug&&console.info("====================> PUBLISH WINDOW <===================="),chrome.storage.sync.get(["feature_flags"],(function(e){if(null==e.feature_flags&&(e.feature_flags=!0),e.feature_flags){var t,a,n,r,o,s=document.getElementById("Languages").getElementsByTagName("label"),i=new XMLHttpRequest;i.overrideMimeType("application/json"),i.open("GET",chrome.runtime.getURL("data/languages.json"),!0),i.onreadystatechange=function(){if(4===i.readyState&&"200"==i.status){o=JSON.parse(i.responseText);for(let e of s){for(n in t=e.innerText,a=cleanCountryName(t),o)o.hasOwnProperty(n)&&a==o[n].language.toUpperCase()&&(a=o[n].flag);r=a.toLowerCase(),r=chrome.runtime.getURL("images/Flags/16x16/flag_"+r+".png"),e.insertAdjacentHTML("beforebegin",' <img id="scFlag" src="'+r+'" style="display: inline; vertical-align: middle; padding-right: 2px;" onerror="this.onerror=null;this.src=\'-/icon/Flags/16x16/flag_generic.png\';"/>')}}},i.send(null)}}))),chrome.storage.sync.get(["feature_darkmode"],(function(e){if(null==e.feature_darkmode&&(e.feature_darkmode=!1),e.feature_darkmode&&!isExperienceEditor&&!isAdminCache&&!isSecurityWindow&&!isContentHome&&!isLoginPage&&!isEditMode&&!isUserManager&&!isPersonalization&&!isRules){var t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href=chrome.runtime.getURL("css/dark/default-min.css"),document.getElementsByTagName("head")[0].appendChild(t),(t=document.createElement("link")).type="text/css",t.rel="stylesheet",t.href=chrome.runtime.getURL("css/dark/ribbon-min.css"),document.getElementsByTagName("head")[0].appendChild(t),(t=document.createElement("link")).type="text/css",t.rel="stylesheet",t.href=chrome.runtime.getURL("css/dark/contentmanager-min.css"),document.getElementsByTagName("head")[0].appendChild(t),(t=document.createElement("link")).type="text/css",t.rel="stylesheet",t.href=chrome.runtime.getURL("css/dark/dialogs-min.css"),document.getElementsByTagName("head")[0].appendChild(t),(t=document.createElement("link")).type="text/css",t.rel="stylesheet",t.href=chrome.runtime.getURL("css/dark/gallery-min.css"),document.getElementsByTagName("head")[0].appendChild(t),(t=document.createElement("link")).type="text/css",t.rel="stylesheet",t.href=chrome.runtime.getURL("css/dark/speak-min.css"),document.getElementsByTagName("head")[0].appendChild(t)}})),chrome.storage.sync.get(["feature_autoexpand"],(function(e){null==e.feature_autoexpand&&(e.feature_autoexpand=!0),e.feature_autoexpand&&(document.addEventListener("click",(function(e){if(!e.target.matches(".scContentTreeNodeGlyph"))return;let t=e.target.id;setTimeout((function(){let e=document.querySelector("#"+t).nextSibling.nextSibling.nextSibling;if(e){let t=e.querySelectorAll(".scContentTreeNode");1==t.length&&t[0].querySelector(".scContentTreeNodeGlyph").click()}}),175)}),!1),document.addEventListener("mousedown",(function(e){if(!e.target.matches(".glyph"))return;e.target.id}),!1))}));var MutationObserver=window.MutationObserver,elementObserver=new MutationObserver((function(e){debug&&console.info("%c *** Update UI *** ","font-size:14px; background: #ffce42; color: black; border-radius:5px; padding 3px;");var t=document.querySelector(".scEditorHeaderQuickInfoInput");if(t){var a=window.location.href.toLowerCase(),n=t.getAttribute("value"),r=document.getElementById("scLanguage").getAttribute("value").toLowerCase();if(document.querySelector(".scEditorHeaderVersionsVersion > span"))var o=document.querySelector(".scEditorHeaderVersionsVersion > span").innerText;var s=document.querySelectorAll(".scEditorQuickInfo"),i=(s[s.length-1],s.length),c=document.getElementsByClassName("scEditorHeaderTitle"),l=document.querySelectorAll(".scEditorHeaderQuickInfoInput"),d=l[l.length-2].getAttribute("value"),u=a.includes("&ro="),g=a.includes("&sc_ce_uri=");if(u||g||(window.location.hash=n),debug&&console.info("%c - Tabs opened: "+i+" ","font-size:12px; background: #7b3090; color: white; border-radius:5px; padding 3px;"),i>1&&!document.getElementById("showInContentTree"+i)){var m=window.location.href;m=m.split("#");var p=m[0]+"&reload#"+d;c[i-1].insertAdjacentHTML("afterend",'[<a id="showInContentTree'+i+'" href="" onclick="javascript:window.location.href=\''+p+"'; return false;\" />Show in content tree</a>]")}chrome.storage.sync.set({scItemID:n},(function(){debug&&console.info("%c [Storage Set] Item : "+n+" ","font-size:12px; background: #cdc4ba; color: black; border-radius:5px; padding 3px;")})),chrome.storage.sync.set({scLanguage:r},(function(){debug&&console.info("%c [Storage Set] Language : "+r+" ","font-size:12px; background: #cdc4ba; color: black; border-radius:5px; padding 3px;")})),chrome.storage.sync.set({scVersion:o},(function(){debug&&console.info("%c [Storage Set] Version : "+o+" ","font-size:12px; background: #cdc4ba; color: black; border-radius:5px; padding 3px;")}))}e.forEach((function(e){"attributes"==e.type&&sitecoreAuthorToolbox()}))})),element=document.getElementById("scLanguage");if(element){debug&&console.info("%c *** Reload *** ","font-size:14px; background: #ffce42; color: black; border-radius:5px; padding 3px;"),windowLocationHref=window.location.href.toLowerCase();var scLanguage=element.getAttribute("value").toLowerCase(),hash=window.location.hash.substr(1),hasRedirection=windowLocationHref.includes("&ro="),hasRedirectionOther=windowLocationHref.includes("&sc_ce_uri=");hasRedirection||hasRedirectionOther||chrome.storage.sync.get(["scItemID","scLanguage","scVersion","feature_reloadnode"],(function(e){if(!chrome.runtime.error&&null!=e.scItemID&&(null==e.feature_reloadnode&&(e.feature_reloadnode=!0),""!=hash&&(e.scItemID=hash,debug&&console.info("%c - Sitecore Hash : "+hash+" ","font-size:12px; background: #7b3090; color: white; border-radius:5px; padding 3px;")),e.scItemID&&1==e.feature_reloadnode)){var t='scForm.invoke("item:load(id='+e.scItemID+",language="+e.scLanguage+",version="+e.scVersion+')");';(script=document.createElement("script")).textContent=t,(document.head||document.documentElement).appendChild(script),script.remove(),debug&&console.info("%c [Storage Get] Item : "+e.scItemID+" ","font-size:12px; background: #cdc4ba; color: black; border-radius:5px; padding 3px;"),debug&&console.info("%c [Storage Get] Language : "+e.scLanguage+" ","font-size:12px; background: #cdc4ba; color: black; border-radius:5px; padding 3px;"),debug&&console.info("%c [Storage Get] Version : "+e.scVersion+" ","font-size:12px; background: #cdc4ba; color: black; border-radius:5px; padding 3px;")}})),sitecoreAuthorToolbox(),elementObserver.observe(element,{attributes:!0})}var elementObserver2=new MutationObserver((function(e){
chrome.storage.sync.get(["feature_notification"],(function(e){if(null==e.feature_notification&&(e.feature_notification=!0),e.feature_notification){element2.getElementsByClassName("DialogHeader").item(0).innerHTML;sendNotification(element2.getElementsByClassName("sc-text-largevalue").item(0).innerHTML,element2.getElementsByClassName("scFieldLabel").item(0).innerHTML)}})),debug&&console.info("%c *** Publish Done *** ","font-size:14px; background: #ffce42; color: black; border-radius:5px; padding 3px;")})),element2=document.getElementById("LastPage");element2&&(debug&&console.info("%c *** Open Dialog *** ","font-size:14px; background: #ffce42; color: black; border-radius:5px; padding 3px;"),elementObserver2.observe(element2,{attributes:!0}))}if(isEditMode&&!isLoginPage||isPreviewMode&&!isLoginPage){if(debug&&console.info("%c 🎨 Experience Editor detected ","font-size:14px; background: #f16100; color: black; border-radius:5px; padding 3px;"),(link=document.createElement("link")).type="text/css",link.rel="stylesheet",link.href=chrome.runtime.getURL("css/onload-min.css"),document.getElementsByTagName("head")[0].appendChild(link),(link=document.createElement("link")).type="text/css",link.rel="stylesheet",link.href=chrome.runtime.getURL("css/tooltip-min.css"),document.getElementsByTagName("head")[0].appendChild(link),(script=document.createElement("script")).src=chrome.runtime.getURL("js/inject-min.js"),(document.head||document.documentElement).appendChild(script),script.remove(),isGalleryLanguageExpEd&&(debug&&console.info("====================> LANGUAGES IN EXPERIENCE EDITOR <===================="),chrome.storage.sync.get(["feature_flags"],(function(e){if(null==e.feature_flags&&(e.feature_flags=!0),e.feature_flags){var t,a=new XMLHttpRequest;a.overrideMimeType("application/json"),a.open("GET",chrome.runtime.getURL("data/languages.json"),!0),a.onreadystatechange=function(){if(4===a.readyState&&"200"==a.status){t=JSON.parse(a.responseText);var e,n,r,o,s=document.querySelector(".sc-gallery-content").querySelectorAll(".sc-gallery-option-content,.sc-gallery-option-content-active");for(let a of s){for(o in e=a.closest(".sc-gallery-option-content,.sc-gallery-option-content-active"),n=a.querySelector(".sc-gallery-option-content-header > span").innerText,"0"!=(r=a.querySelector(".sc-gallery-option-content-description > span")).innerHTML.split(" ")[0]&&r.setAttribute("style","background-color: yellow; display: initial; padding: 0px 3px; color: #000000 !important"),n=cleanCountryName(n),t)t.hasOwnProperty(o)&&n==t[o].language.toUpperCase()&&(n=t[o].flag);e.setAttribute("style","padding-left:48px; background-image: url("+chrome.runtime.getURL("images/Flags/32x32/flag_"+n+".png")+"); background-repeat: no-repeat; background-position: 5px;")}}},a.send(null)}}))),isRibbon){debug&&console.info("====================> RIBBON <====================");var tdlanguage,temp,key,jsonData,scRibbonFlagIcons=document.querySelectorAll(".flag_generic_24"),rawFile=new XMLHttpRequest;rawFile.overrideMimeType("application/json"),rawFile.open("GET",chrome.runtime.getURL("data/languages.json"),!0),rawFile.onreadystatechange=function(){if(4===rawFile.readyState&&"200"==rawFile.status)for(var e of(jsonData=JSON.parse(rawFile.responseText),scRibbonFlagIcons)){for(key in tdlanguage=cleanCountryName(tdlanguage=e.nextSibling.innerText),jsonData)jsonData.hasOwnProperty(key)&&tdlanguage==jsonData[key].language.toUpperCase()&&(tdlanguage=jsonData[key].flag);e.setAttribute("style","background-image: url("+chrome.runtime.getURL("images/Flags/24x24/flag_"+tdlanguage+".png")+"); background-repeat: no-repeat; background-position: top left;")}},rawFile.send(null);var dataItemId=document.querySelector("[data-sc-itemid]");if(dataItemId){var sitecoreItemID=decodeURI(dataItemId.getAttribute("data-sc-itemid"));chrome.storage.sync.set({scItemID:sitecoreItemID},(function(){debug&&console.info("%c [Storage Set] Item : "+sitecoreItemID+" ","font-size:12px; background: #cdc4ba; color: black; border-radius:5px; padding 3px;")}))}}var observer=new MutationObserver((function(e){var t=document.querySelectorAll(".scChromeToolbar");for(var a of t){a.setAttribute("style","margin-left:50px");var n=a.querySelectorAll(".scChromeCommand");a.querySelector(".scChromeText"),a.querySelector(".scChromeCommandText");for(var r of n){var o=r.getAttribute("title");r.setAttribute("style","z-index:auto"),null!=o&&(r.setAttribute("data-tooltip",o),r.classList.add("t-bottom"),r.classList.add("t-sm"),r.removeAttribute("title"))}}})),target=document.querySelector(".scChromeControls");if(target){var config={attributes:!0,childList:!0,characterData:!0};observer.observe(target,config)}chrome.storage.sync.get(["feature_darkmode","feature_toggleribbon"],(function(e){var t=document.querySelector(".pagemode-edit");t||(t=document.querySelector(".on-page-editor")),t||(t=document.querySelector(".experience-editor")),t||(t=document.querySelector(".js-focus-visible"));var a=(windowLocationHref=window.location.href.toLowerCase()).includes("?"),n=windowLocationHref.includes("sc_mode=edit"),r=windowLocationHref.includes("sc_mode=preview");document.querySelector("#scCrossPiece"),document.querySelector("#scWebEditRibbon"),document.querySelector(".sc-messageBar");let o;if(null==e.feature_darkmode&&(e.feature_darkmode=!1),null==e.feature_toggleribbon&&(e.feature_toggleribbon=!0),e.feature_darkmode&&isRibbon||e.feature_darkmode&&isDialog||e.feature_darkmode&&isInsertPage){var s=document.createElement("link");s.type="text/css",s.rel="stylesheet",s.href=chrome.runtime.getURL("css/dark/experience-min.css"),document.getElementsByTagName("head")[0].appendChild(s)}e.feature_darkmode&&(o="dark");var i=new MutationObserver((function(e){for(var t of e)for(var a of t.addedNodes)if("scCrossPiece"==a.id){var n='<div class="scExpTab '+o+'"><span class="tabHandle"></span><span class="tabText" onclick="toggleRibbon()">▲ Hide<span></div>';a.insertAdjacentHTML("afterend",n),i.disconnect(),startDrag()}})),c=document.body;if(e.feature_toggleribbon&&c){i.observe(c,{attributes:!1,childList:!0,characterData:!1})}var l=chrome.runtime.getURL("images/sat.png");if(n?windowLocationHref=windowLocationHref.replace("sc_mode=edit","sc_mode=normal"):r?windowLocationHref=windowLocationHref.replace("sc_mode=preview","sc_mode=normal"):windowLocationHref+=a?"&sc_mode=normal":"?sc_mode=normal",e.feature_toggleribbon&&!isRibbon){var d='<div class="scNormalModeTab '+o+'"><span class="t-right t-sm" data-tooltip="Open in Normal Mode"><a href="'+windowLocationHref+'"><img src="'+l+'"/></a></span></div>';t.insertAdjacentHTML("afterend",d)}var u=chrome.runtime.getURL("images/ce.png");e.feature_toggleribbon&&!isRibbon&&(d='<div class="scContentEditorTab '+o+'"><span class="t-right t-sm" data-tooltip="Open in Content Editor"><a href="'+window.location.origin+'/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1"><img src="'+u+'"/></a></span></div>',t.insertAdjacentHTML("afterend",d))}))}