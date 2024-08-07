function hollowRightTriangle(size) {
    for (let i = 1; i <= size; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            if (i === size || j === 1 || j === i) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}

hollowRightTriangle(5);
