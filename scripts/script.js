    $(document).ready(function () {
        $('tr').on('input', function (e) {
            const inputs = Array.from($(this).find('input'));
            const lastInput = inputs.pop();
            if (this === lastInput) {
                return e.preventDefault();
            }

            const result = getResultFromElems(inputs);

            lastInput.value = getFormatedResult(result);

        });

    });

    function getResultFromElems(elems) {
        return elems
            .map(elem => elem.value)
            .reduce((sum, current) => parseFloat(sum) * parseFloat(current));
    };

    function getFormatedResult(result) {
        return Number.isNaN(result) ? '' : Number(Number(result).toFixed(2));
    };