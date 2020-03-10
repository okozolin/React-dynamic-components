export const parseElementsFrom = (uiGrid) => {
    //remove any white spaces at the start and split to rows
    const elements = [];
    const elemArr =
        uiGrid.replace(/^\s*$(?:\r\n?|\n)/gm,'')
            .trim()
            .split('\n')
    //split data in line
    for (const elm of elemArr ) {
        elements.push(elm.split(';'))
    }

    // sort the array by row (first element) in ascending order
    elements.sort((a, b) => {
        return a[0] - b[0];
    });

    return elements.map(block => ({
            row: +block[0],
            col: +block[1],
            label: block[2],
            type: block[3],
            value: block[4]
    }))
}
