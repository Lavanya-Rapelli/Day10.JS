function triangle(size) {
    for (let i = 1; i <= size; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += i;
        }
        console.log(row);
    }
}


triangle(4);
