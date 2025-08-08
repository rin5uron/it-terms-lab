document.addEventListener('DOMContentLoaded', () => {
    const labs = document.querySelectorAll('.circuit-box');

    labs.forEach(lab => {
        const switches = lab.querySelectorAll('.switch');
        const gateType = switches[0].dataset.gate;
        const light = document.getElementById(`${gateType}-light`);

        function updateLight() {
            const inputs = Array.from(switches).map(s => s.classList.contains('on'));
            let output = false;

            switch (gateType) {
                case 'and':
                    output = inputs.every(i => i);
                    break;
                case 'or':
                    output = inputs.some(i => i);
                    break;
                case 'not':
                    output = !inputs[0];
                    break;
                case 'nand':
                    output = !inputs.every(i => i);
                    break;
                case 'nor':
                    output = !inputs.some(i => i);
                    break;
                case 'xor':
                    output = (inputs[0] && !inputs[1]) || (!inputs[0] && inputs[1]);
                    break;
            }

            if (output) {
                light.classList.add('on');
                light.textContent = 'ON';
            } else {
                light.classList.remove('on');
                light.textContent = 'OFF';
            }
        }

        switches.forEach(s => {
            s.addEventListener('click', () => {
                s.classList.toggle('on');
                updateLight();
            });
        });

        // Initialize
        updateLight();
    });
});