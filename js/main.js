"use strict";


function main() {
    // Your main function code here
    console.log("Main function executed!");
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main);
} else {
    main()
};