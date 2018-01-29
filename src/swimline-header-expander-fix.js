(() => {
    setTimeout(() => {
        const swimlaneHeaders = document.querySelectorAll('.adg3 .ghx-swimlane-header');

        for (let swimlaneHeader of swimlaneHeaders) {
            swimlaneHeader.style.marginLeft = '10px';
            swimlaneHeader.style.marginRight = '10px';
        }
    }, 1000);
})();
