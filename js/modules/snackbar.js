/* eslint no-console: ["error", { allow: ["warn", "error", "log", "info", "table", "time", "timeEnd"] }] */

import * as global from './global.js';

export { showSnackbar };

/**
 * Show Materialize-style message bar from bottom-right
 */
const showSnackbar = (version) => {

    //Snackbar settings
    let snackbarHtml = `
    <b>Sitecore Author Toolbox ` + global.extensionVersion + `</b><br />
    Have you tried the new Experimental UI?<br />Click "Feedback" and tell me how it was.`;
    let html = `<div class="snackbar">` + snackbarHtml + `<button onclick="window.open('https://forms.gle/vWbp8w9Z1zETyvKd9')">FEEDBACK</button><button id="sbDismiss">DISMISS</button></div>`;

    //Show Snackbar
    document.querySelector('body').insertAdjacentHTML('beforeend', html);


    //Add listener on click #sbDismiss
    document.querySelector("#sbDismiss").addEventListener("click", function() {
        localStorage.setItem("sbDismiss", version);
        document.querySelector('.snackbar').setAttribute('style', 'display: none');
    });
}