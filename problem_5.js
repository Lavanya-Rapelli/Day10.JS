function hollowDia(size) {
    for (let i = 1; i <= size; i++) {
        let row = "";
        for (let j = size; j > i; j--) {
            row += " ";
        }
        for (let k = 1; k <= (2 * i - 1); k++) {
            if (k === 1 || k === (2 * i - 1)) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
    for (let i = size - 1; i >= 1; i--) {
        let row = "";
        for (let j = size; j > i; j--) {
            row += " ";
        }
        for (let k = 1; k <= (2 * i - 1); k++) {
            if (k === 1 || k === (2 * i - 1)) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}

hollowDia(5);
