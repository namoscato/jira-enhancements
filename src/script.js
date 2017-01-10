(() => {
    const elementModeTools = document.getElementById('ghx-modes-tools');
    const elementOutput = document.createElement('div');

    elementOutput.style.float = 'right';
    elementOutput.style.padding = '4px 0';

    elementModeTools.parentNode.insertBefore(elementOutput, elementModeTools.nextSibling);

    document.addEventListener('mouseup', (e) => {
        if (!e.shiftKey) {
            elementOutput.textContent = '';
            return;
        }

        window.setTimeout(() => {
            const selectedCards = Array.prototype.slice.call(document.getElementsByClassName('ghx-backlog-card ghx-selected'));

            if (selectedCards.length < 2) {
                elementOutput.textContent = '';
                return;
            }

            let points = 0;

            selectedCards.forEach((card) => {
                const point = Number(card.querySelector('.ghx-statistic-badge').textContent);

                if (isNaN(point)) {
                    return;
                }

                points += point;
            });

            elementOutput.textContent = `${points} points selected`;
        }, 200);
    }, false);
})();
