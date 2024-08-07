function pyramidPattern(size) {
    for (let i = 1; i <= size; i++) {
        let row = "";
        for (let j = size; j > i; j--) {
            row += " ";
        }
        for (let k = 1; k <= (2 * i - 1); k++) {
            row += "*";
        }
        console.log(row);
    }
}

pyramidPattern(6);
