(() => {
    setTimeout(() => {
        const issueStatuses = document.querySelectorAll('.ghx-agile .aui-lozenge');
        
        for (let issueStatus of issueStatuses) {
            issueStatus.style.maxWidth = 'initial';
        }
    }, 1000);
})();
