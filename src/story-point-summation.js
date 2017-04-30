(() => {
    const elementModeTools = document.getElementById('ghx-modes-tools');
    const elementOutput = document.createElement('div');

    elementOutput.style.color = '#707070';
    elementOutput.style.float = 'right';
    elementOutput.style.marginRight = '10px';
    elementOutput.style.padding = '4px 0';

    elementModeTools.parentNode.insertBefore(elementOutput, elementModeTools.nextSibling);

    function renderPointsText(points) {
        elementOutput.textContent = points === false ? '' : `${points} points selected`;
    }

    document.addEventListener('mouseup', () => {
        window.setTimeout(() => {
            let points = 0;
            let selectedCards = document.getElementsByClassName('ghx-backlog-card ghx-selected');

            if (selectedCards.length < 2) {
                renderPointsText(false);
                return;
            }

            selectedCards = Array.prototype.slice.call(selectedCards);

            selectedCards.forEach((card) => {
                const point = Number(card.querySelector('.ghx-statistic-badge').textContent);

                if (isNaN(point)) {
                    return;
                }

                points += point;
            });

            renderPointsText(points);
        }, 200);
    }, false);
})();
