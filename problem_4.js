function pyramid(size) {
    for (let i = 1; i <= size; i++) {
        let row = "";
        for (let j = size; j > i; j--) {
            row += " ";
        }
        for (let k = 1; k <= i; k++) {
            row += k;
        }
        for (let l = i - 1; l > 0; l--) {
            row += l;
        }
        console.log(row);
    }
}

pyramid(4);
