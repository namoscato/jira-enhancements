(() => {
    const oldIssueViewParam = 'oldIssueView=true';
    const queryParams = window.location.search.substring(1).split('&').filter(val => val);

    for (const param of queryParams) { // eslint-disable-line no-restricted-syntax
        if (oldIssueViewParam === param) {
            return;
        }
    }

    queryParams.push(oldIssueViewParam);

    window.location.href = `${window.location.pathname}?${queryParams.join('&')}`;
})();
