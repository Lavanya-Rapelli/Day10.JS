function invertedPyramid(size) {
    for (let i = 0; i < size; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += " ";
        }
        for (let k = size - i; k > 0; k--) {
            row += k;
        }
        console.log(row);
    }
}

invertedPyramid(5);
