for (let i:number = 0; i < 8; i++) {
    let line:string = '';
    for (let j:number = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
            line += '  ';
        } else {
            line += '██';
        }
    }
    console.log(line);
    line = '';
};
