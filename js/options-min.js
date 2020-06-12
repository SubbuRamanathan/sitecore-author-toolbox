const preferesColorScheme=()=>{let e="light";return e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",e};chrome.storage.sync.get(["feature_darkmode","feature_darkmode_auto"],(function(e){if(e.feature_darkmode&&e.feature_darkmode_auto){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{window.location.reload()})}})),document.body.onload=function(){var e=chrome.runtime.getManifest();document.getElementById("scVersion").innerHTML=e.version;var t=new URL(window.location.href),r=t.searchParams.get("launchpad"),n=t.searchParams.get("url"),o=t.searchParams.get("configure_domains");r&&(document.getElementById("set").innerHTML="Save your preferences",document.getElementById("scHeader").style.display="inherit",document.getElementById("scBack").href=n,document.getElementById("banner").style.top="50px",document.getElementById("bannerTitle").style.opacity="1",document.getElementById("intro").style.marginTop="50px",document.getElementById("video").style.display="inherit"),"true"==o&&(document.querySelector("#settings").click(),document.querySelector("#video").setAttribute("style","display:none")),chrome.storage.sync.get(["domain_manager"],(function(e){var t=void 0;if(!chrome.runtime.error){null!=e.domain_manager&&(t=Object.keys(e.domain_manager));for(var r,n="",o="",c=0;c<6;c++)1==Array.isArray(t)&&null!=t[c]?(r=t[c],o=e.domain_manager[r]):(r="",o=""),n+='\x3c!-- loop start --\x3e\n              <div class="cm_url">\n                \x3c!-- <label for="cm['+c+']">CM<b>*</b>:</label> --\x3e\n                <input name="cm['+c+']" type="url" placeholder="CM URL" pattern="https?://.*" value="'+r+'">\n              </div>\n\n              <div id="arrow">&nbsp;</div>\n\n              <div class="cd_url">\n                \x3c!-- <label for="cd['+c+']">Live or CD<b>*</b>:</label> --\x3e\n                <input name="cd['+c+']" type="url" placeholder="CD or Live URL" pattern="https?://.*" value="'+o+'">\n              </div>\n            \n              <div id="clear"></div>\n              \x3c!-- loop end --\x3e';document.querySelector("#load").innerHTML=n}})),chrome.storage.sync.get(["feature_urls"],(function(e){(chrome.runtime.error||null==e.feature_urls||e.feature_urls)&&(document.getElementById("feature_urls").checked=!0)})),chrome.storage.sync.get(["feature_flags"],(function(e){(chrome.runtime.error||null==e.feature_flags||e.feature_flags)&&(document.getElementById("feature_flags").checked=!0)})),chrome.storage.sync.get(["feature_errors"],(function(e){(chrome.runtime.error||null==e.feature_errors||e.feature_errors)&&(document.getElementById("feature_errors").checked=!0)})),chrome.storage.sync.get(["feature_dragdrop"],(function(e){(chrome.runtime.error||null==e.feature_dragdrop||e.feature_dragdrop)&&(document.getElementById("feature_dragdrop").checked=!0)})),chrome.storage.sync.get(["feature_notification"],(function(e){(chrome.runtime.error||null==e.feature_notification||e.feature_notification)&&(document.getElementById("feature_notification").checked=!0)}));var c=preferesColorScheme();chrome.storage.sync.get(["feature_darkmode","feature_darkmode_auto"],(function(e){e.feature_darkmode&&!e.feature_darkmode_auto||e.feature_darkmode&&e.feature_darkmode_auto&&"dark"==c?(document.getElementById("feature_darkmode").checked=!0,document.querySelector("html").classList.add("dark")):e.feature_darkmode&&e.feature_darkmode_auto&&"light"==c?(document.getElementById("feature_darkmode").checked=!0,document.querySelector("html").classList.add("light")):(document.getElementById("feature_darkmode").checked=!1,document.getElementById("feature_darkmode_auto").disabled=!0)})),chrome.storage.sync.get(["feature_darkmode_auto"],(function(e){e.feature_darkmode_auto&&(document.getElementById("feature_darkmode_auto").checked=!0)})),chrome.storage.sync.get(["feature_favorites"],(function(e){(chrome.runtime.error||null==e.feature_favorites||e.feature_favorites)&&(document.getElementById("feature_favorites").checked=!0)})),chrome.storage.sync.get(["feature_reloadnode"],(function(e){(chrome.runtime.error||null==e.feature_reloadnode||e.feature_reloadnode)&&(document.getElementById("feature_reloadnode").checked=!0)})),chrome.storage.sync.get(["feature_launchpad"],(function(e){(chrome.runtime.error||null==e.feature_launchpad||e.feature_launchpad)&&(document.getElementById("feature_launchpad").checked=!0)})),chrome.storage.sync.get(["feature_rtl"],(function(e){(chrome.runtime.error||null==e.feature_rtl||e.feature_rtl)&&(document.getElementById("feature_rtl").checked=!0)})),chrome.storage.sync.get(["feature_charscount"],(function(e){(chrome.runtime.error||null==e.feature_charscount||e.feature_charscount)&&(document.getElementById("feature_charscount").checked=!0)})),chrome.storage.sync.get(["feature_autoexpand"],(function(e){(chrome.runtime.error||null==e.feature_autoexpand||e.feature_autoexpand)&&(document.getElementById("feature_autoexpand").checked=!0)})),chrome.storage.sync.get(["feature_translatemode"],(function(e){(chrome.runtime.error||null==e.feature_translatemode||e.feature_translatemode)&&(document.getElementById("feature_translatemode").checked=!0)})),chrome.storage.sync.get(["feature_contenteditor"],(function(e){(chrome.runtime.error||null==e.feature_contenteditor||e.feature_contenteditor)&&(document.getElementById("feature_contenteditor").checked=!0)})),chrome.storage.sync.get(["feature_experienceeditor"],(function(e){(chrome.runtime.error||null==e.feature_experienceeditor||e.feature_experienceeditor)&&(document.getElementById("feature_experienceeditor").checked=!0)})),chrome.storage.sync.get(["feature_cetabs"],(function(e){chrome.runtime.error||null==e.feature_cetabs?document.getElementById("feature_cetabs").checked=!1:e.feature_cetabs&&(document.getElementById("feature_cetabs").checked=!0)})),chrome.storage.sync.get(["feature_rtecolor"],(function(e){(chrome.runtime.error||null==e.feature_rtecolor||e.feature_rtecolor)&&(document.getElementById("feature_rtecolor").checked=!0)})),chrome.storage.sync.get(["feature_messagebar"],(function(e){(chrome.runtime.error||null==e.feature_messagebar||e.feature_messagebar)&&(document.getElementById("feature_messagebar").checked=!0)})),chrome.storage.sync.get(["feature_workbox"],(function(e){(chrome.runtime.error||null==e.feature_workbox||e.feature_workbox)&&(document.getElementById("feature_workbox").checked=!0)})),chrome.storage.sync.get(["feature_urlstatus"],(function(e){(chrome.runtime.error||null==e.feature_urlstatus||e.feature_urlstatus)&&(document.getElementById("feature_urlstatus").checked=!0)})),chrome.storage.sync.get(["feature_contextmenu"],(function(e){(chrome.runtime.error||null==e.feature_contextmenu||e.feature_contextmenu)&&(document.getElementById("feature_contextmenu").checked=!0)})),chrome.storage.sync.get(["feature_gravatarimage"],(function(e){(chrome.runtime.error||null==e.feature_gravatarimage||e.feature_gravatarimage)&&(document.getElementById("feature_gravatarimage").checked=!0)})),chrome.storage.sync.get(["feature_helplink"],(function(e){(chrome.runtime.error||null==e.feature_helplink||e.feature_helplink)&&(document.getElementById("feature_helplink").checked=!0)})),chrome.storage.sync.get(["feature_instantsearch"],(function(e){(chrome.runtime.error||null==e.feature_instantsearch||e.feature_instantsearch)&&(document.getElementById("feature_instantsearch").checked=!0)})),chrome.storage.sync.get(["feature_experimentalui"],(function(e){chrome.runtime.error||null==e.feature_experimentalui?document.getElementById("feature_experimentalui").checked=!1:e.feature_experimentalui&&(document.getElementById("feature_experimentalui").checked=!0)}))},chrome.storage.sync.get(["feature_contrast_icons"],(function(e){null!=e.feature_contrast_icons?e.feature_contrast_icons&&(document.querySelector("#feature_contrast_icons").checked=!0):document.querySelector("#feature_contrast_icons").checked=!0})),chrome.storage.sync.get(["feature_launchpad_tiles"],(function(e){null!=e.feature_contrast_icons?e.feature_contrast_icons&&(document.querySelector("#feature_launchpad_tiles").checked=!0):document.querySelector("#feature_launchpad_tiles").checked=!1})),document.getElementById("feature_experimentalui").onclick=function(){1==document.getElementById("feature_experimentalui").checked&&(document.getElementById("feature_cetabs").checked=!0)},document.getElementById("feature_darkmode").onclick=function(){0==document.getElementById("feature_darkmode").checked?(document.getElementById("feature_darkmode_auto").disabled=!0,document.getElementById("feature_darkmode_auto").checked=!1):(document.getElementById("feature_darkmode_auto").disabled=!1,document.getElementById("feature_darkmode_auto").checked=!1)},document.querySelector("#settings").onclick=function(){document.querySelector("#main").setAttribute("style","display:none"),document.querySelector("#domains").setAttribute("style","display:block"),document.querySelector("#save").setAttribute("style","display:none")},document.querySelector("#back").onclick=function(){event.preventDefault();var e=new URL(window.location.href),t=e.searchParams.get("configure_domains"),r=e.searchParams.get("url");"true"==t?(window.open(r+"&sc_bw=1"),window.close()):(document.querySelector("#main").setAttribute("style","display:block"),document.querySelector("#domains").setAttribute("style","display:none"),document.querySelector("#save").setAttribute("style","display:block"))},document.querySelector("#set_domains").onclick=function(e){e.preventDefault();var t,r,n,o=document.querySelectorAll("form#domains input"),c=1,a="{",u=!1,d=!0;for(var m of o){var l="";if(m.setAttribute("style",""),t=parseInt(m.name.split("[")[1].replace("]","")),r=document.querySelector("input[name='cm["+t+"]']"),n=document.querySelector("input[name='cd["+t+"]']"),c%2==1){if(""!=r.value&&""==n.value)n.setAttribute("style","border-color:red"),alert("CD #"+parseInt(t+1)+" is missing"),u=!0;else if(""!=m.value){d=!1;try{l=new URL(m.value)}catch(e){r.setAttribute("style","border-color:red"),alert("CM #"+parseInt(t+1)+" is not a valid URL"),u=!0}}null!=l.origin&&(r.value=l.origin)}else{if(""==r.value&&""!=n.value)alert("CM #"+parseInt(t+1)+" is missing"),u=!0;else if(""!=m.value){d=!1;try{l=new URL(m.value)}catch(e){n.setAttribute("style","border-color:red"),alert("CD #"+parseInt(t+1)+" is not a valid URL"),u=!0}}if(null!=l.origin){n.value=l.origin;let e=new URL(r.value),o=new URL(n.value);"https:"==e.protocol&&"http:"==o.protocol?(alert("Warning!\nLive status might not work as expected. You will probably face a mixed-content issue as your CM and CD are using a different protocol (https vs http) \n\n"+e.origin+"\n"+o.origin),u=!0):r.value==n.value?(alert("CM #"+parseInt(t+1)+" and CD #"+parseInt(t+1)+" are the exact same URL, please verify."),u=!0):a+='"'+r.value+'":"'+n.value+'",'}}c++}if("undefined"!=(a=(a+="}").replace(",}","}").replace("{}",void 0))){var s=JSON.parse(a);console.log(s)}1==d&&(s=""),0==u&&chrome.storage.sync.set({domain_manager:s},(function(){document.querySelector("#set_domains").innerHTML="Saving...",setTimeout((function(){document.querySelector("#set_domains").innerHTML="OK!"}),1e3),setTimeout((function(){document.querySelector("#set_domains").innerHTML="Save your domains"}),1500),console.info("--\x3e Domain manager: Saved!")}))},document.querySelector("#set").onclick=function(e){e.preventDefault(),chrome.storage.sync.set({feature_urls:document.getElementById("feature_urls").checked},(function(){console.info("--\x3e Urls: "+document.getElementById("feature_urls").checked)})),chrome.storage.sync.set({feature_flags:document.getElementById("feature_flags").checked},(function(){console.info("--\x3e Flags: "+document.getElementById("feature_flags").checked)})),chrome.storage.sync.set({feature_errors:document.getElementById("feature_errors").checked},(function(){console.info("--\x3e Errors: "+document.getElementById("feature_errors").checked)})),chrome.storage.sync.set({feature_dragdrop:document.getElementById("feature_dragdrop").checked},(function(){console.info("--\x3e Drag and drop: "+document.getElementById("feature_dragdrop").checked)})),chrome.storage.sync.set({feature_notification:document.getElementById("feature_notification").checked},(function(){console.info("--\x3e Notifications: "+document.getElementById("feature_notification").checked)})),chrome.storage.sync.set({feature_darkmode:document.getElementById("feature_darkmode").checked},(function(){console.info("--\x3e Dark mode:"+document.getElementById("feature_darkmode").checked),document.getElementById("feature_darkmode").checked?(document.querySelector("html").classList.remove("light"),document.querySelector("html").classList.add("dark")):(document.querySelector("html").classList.remove("dark"),document.querySelector("html").classList.add("light"))})),chrome.storage.sync.set({feature_darkmode_auto:document.getElementById("feature_darkmode_auto").checked},(function(){console.info("--\x3e Dark Mode Auto: "+document.getElementById("feature_darkmode_auto").checked)})),chrome.storage.sync.set({feature_favorites:document.getElementById("feature_favorites").checked},(function(){console.info("--\x3e Favorites: "+document.getElementById("feature_favorites").checked)})),chrome.storage.sync.set({feature_reloadnode:document.getElementById("feature_reloadnode").checked},(function(){console.info("--\x3e Reload: "+document.getElementById("feature_reloadnode").checked)})),chrome.storage.sync.set({feature_launchpad:document.getElementById("feature_launchpad").checked},(function(){console.info("--\x3e Launchpad: "+document.getElementById("feature_launchpad").checked)})),chrome.storage.sync.set({feature_rtl:document.getElementById("feature_rtl").checked},(function(){console.info("--\x3e RTL: "+document.getElementById("feature_rtl").checked)})),chrome.storage.sync.set({feature_charscount:document.getElementById("feature_charscount").checked},(function(){console.info("--\x3e Character counter: "+document.getElementById("feature_charscount").checked)})),chrome.storage.sync.set({feature_autoexpand:document.getElementById("feature_autoexpand").checked},(function(){console.info("--\x3e Auto Expand: "+document.getElementById("feature_autoexpand").checked)})),chrome.storage.sync.set({feature_translatemode:document.getElementById("feature_translatemode").checked},(function(){console.info("--\x3e Translation Mode: "+document.getElementById("feature_translatemode").checked)})),chrome.storage.sync.set({feature_contenteditor:document.getElementById("feature_contenteditor").checked},(function(){console.info("--\x3e Content Editor: "+document.getElementById("feature_contenteditor").checked)})),chrome.storage.sync.set({feature_experienceeditor:document.getElementById("feature_experienceeditor").checked},(function(){console.info("--\x3e Experience Editor "+document.getElementById("feature_experienceeditor").checked)})),chrome.storage.sync.set({feature_cetabs:document.getElementById("feature_cetabs").checked},(function(){console.info("--\x3e CE Tabs: "+document.getElementById("feature_cetabs").checked)})),chrome.storage.sync.set({feature_rtecolor:document.getElementById("feature_rtecolor").checked},(function(){console.info("--\x3e RTE Color: "+document.getElementById("feature_rtecolor").checked)})),chrome.storage.sync.set({feature_messagebar:document.getElementById("feature_messagebar").checked},(function(){console.info("--\x3e Fancy message bar: "+document.getElementById("feature_messagebar").checked)})),chrome.storage.sync.set({feature_workbox:document.getElementById("feature_workbox").checked},(function(){console.info("--\x3e Workflow notifications: "+document.getElementById("feature_workbox").checked)})),chrome.storage.sync.set({feature_urlstatus:document.getElementById("feature_urlstatus").checked},(function(){console.info("--\x3e Live Urls Status: "+document.getElementById("feature_urlstatus").checked)})),chrome.storage.sync.set({feature_contextmenu:document.getElementById("feature_contextmenu").checked},(function(){console.info("--\x3e Right click menu: "+document.getElementById("feature_contextmenu").checked)})),chrome.storage.sync.set({feature_gravatarimage:document.getElementById("feature_gravatarimage").checked},(function(){console.info("--\x3e Experience Profile: "+document.getElementById("feature_gravatarimage").checked)})),chrome.storage.sync.set({feature_helplink:document.getElementById("feature_helplink").checked},(function(){console.info("--\x3e Help link: "+document.getElementById("feature_helplink").checked)})),chrome.storage.sync.set({feature_instantsearch:document.getElementById("feature_instantsearch").checked},(function(){console.info("--\x3e Instant Search: "+document.getElementById("feature_instantsearch").checked)})),chrome.storage.sync.set({feature_launchpad_tiles:document.getElementById("feature_launchpad_tiles").checked},(function(){console.info("--\x3e Launchpad tiles: "+document.getElementById("feature_launchpad_tiles").checked)})),chrome.storage.sync.set({feature_experimentalui:document.getElementById("feature_experimentalui").checked},(function(){console.info("--\x3e Experimental UI: "+document.getElementById("feature_experimentalui").checked)})),chrome.storage.sync.set({feature_contrast_icons:document.getElementById("feature_contrast_icons").checked},(function(){console.info("--\x3e Contrasted icons: "+document.getElementById("feature_contrast_icons").checked)}));var t=new URL(window.location.href).searchParams.get("launchpad");console.log("Launchpad: "+t),t?(document.querySelector("#set").innerHTML="Saving...",setTimeout((function(){document.querySelector("#set").innerHTML="OK!"}),1e3),setTimeout((function(){document.querySelector("#set").innerHTML="Save your preferences"}),1500)):chrome.tabs.query({active:!0,currentWindow:!0},(function(e){chrome.tabs.executeScript(e[0].id,{code:"window.location.reload();"}),document.querySelector("#set").innerHTML="Saving...",setTimeout((function(){document.querySelector("#set").innerHTML="Save and reload sitecore"}),1e3)}))};let last_known_scroll_position=0,ticking=!1;function doSomething(e){var t=document.getElementById("banner");e>=90?t.classList.add("animate"):t.classList.remove("animate")}window.addEventListener("scroll",(function(e){last_known_scroll_position=window.scrollY;var t=new URL(window.location.href).searchParams.get("launchpad");ticking||t||(window.requestAnimationFrame((function(){doSomething(last_known_scroll_position),ticking=!1})),ticking=!0)}));