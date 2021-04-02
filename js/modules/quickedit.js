export { showContextMenu, contextMenuClickHandler, launchEditUrl };

/**
 * Menu on right click
 */
const showContextMenu = (tab) => {
    if (tab.url != undefined) {
        var url = tab.url.split("?");
        url = url[0];

        var isSitecore = url.includes("/sitecore/");
        var isUrl = url.includes("http");
        var isEditMode = tab.url.includes("sc_mode=edit");
        var isPreviewMode = tab.url.includes("sc_mode=preview");
        var isViewSource = url.includes("view-source:");

        //Tab URL
        chrome.contextMenus.removeAll(function () {
            if (isUrl && !isViewSource && !isSitecore && !isEditMode && !isPreviewMode) {
                chrome.contextMenus.create(
                    {
                        title: "✏️ Edit in Experience Editor",
                        contexts: ["page"],
                        id: "editInExperienceEditor",
                    },
                    () => chrome.runtime.lastError
                );
                chrome.contextMenus.create(
                    {
                        title: "📑 Edit in Content Editor",
                        contexts: ["page"],
                        id: "editInContentEditor",
                    },
                    () => chrome.runtime.lastError
                );
                chrome.contextMenus.create(
                    {
                        title: "🗔  View in Preview",
                        contexts: ["page"],
                        id: "viewInPreview",
                    },
                    () => chrome.runtime.lastError
                );
            }
        });
    }
}

/**
 * Action on right-click
 */
const contextMenuClickHandler = (info, tabInfo) => {
    launchEditUrl(info.menuItemId, tabInfo);
}

const launchEditUrl = (action, tabInfo) => {
    if (tabInfo) {
        chrome.storage.sync.get(["site_manager"], async (storage) => {
            var cdUrl = new URL(tabInfo.url);
            var cmUrl = getCMUrl(storage.site_manager, cdUrl.origin);
            if (cmUrl) {
                switch (action) {
                    case "editInExperienceEditor":
                        var experienceEditorUrl = getEditUrl(cmUrl, cdUrl.pathname);
                        openInNewTab(experienceEditorUrl);
                        break;
                    case "viewInPreview":
                        var previewUrl = getPreviewUrl(cmUrl, cdUrl.pathname);
                        openInNewTab(previewUrl);
                        break;
                    case "editInContentEditor":
                        var associatedItem = await getAssociatedItemInfo(cmUrl, cdUrl.pathname);
                        var contentEditorUrl = `${cmUrl}/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo={${associatedItem.id}}&la=${associatedItem.language}`;
                        openInNewTab(contentEditorUrl);
                        break;
                }
            }
            else{
                if(confirm('CM Site is not configured for this site. \nDo you wish to configure it now?')){
                    const optionsPageUrl = chrome.runtime.getURL(`options/options.html?configure_domains=true&siteUrl=${cdUrl.origin}`)
                    window.open(optionsPageUrl);
                }
            }
        });
    }
}

const getCMUrl = (sitesInfo, cdUrl) => {
    for (var [cmUrl, sites] of Object.entries(sitesInfo)) {
        for (var [id, siteInfo] of Object.entries(sites)) {
            var siteUrl = Object.entries(siteInfo)[0][1];
            if (cdUrl.replace(/\/$/, "") === siteUrl.replace(/\/$/, ""))
                return cmUrl;
        }
    }
}

const getAssociatedItemInfo = async (cmOrigin, path) => {
    var previewUrl = getPreviewUrl(cmOrigin, path);
    const response = await fetch(previewUrl);
    const responseText = await response.text(); 
    var parser = new DOMParser();
    var htmlDocument = parser.parseFromString(responseText, 'text/html');
    var itemInfo = {
        id: parseGuid(htmlDocument.getElementById("scItemID")?.value),
        language: htmlDocument.getElementById("scLanguage")?.value  
    }
    return itemInfo
}

const getPreviewUrl = (cmOrigin, path) => {
    return cmOrigin + path + "?sc_mode=preview"
}

const getEditUrl = (cmOrigin, path) => {
    return cmOrigin + path + "?sc_mode=edit";
}

const openInNewTab = (url) => {
    if (url) chrome.tabs.create({ url: url });
}

const parseGuid = (guid) => {
    return guid.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/,"$1-$2-$3-$4-$5");
}
