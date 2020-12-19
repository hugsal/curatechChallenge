const io = require('console-read-write');

const countingValleys = async () => {
    let nm = 0;
    let valley = false;
    let result =0;
    const n = parseInt( await io.read());
    let arr = await io.read();
    arr = arr.toString().trim().split('');
    if(n === arr.length){
        arr.forEach(step => {
            step === 'U' ? nm++ : step === 'D' ? nm-- : null;
            (nm === 0 && valley === true) ? result++ : null;
            valley = nm < 0 ? true : false;
        });
        console.log('result===>', nm === 0 ? result : 'No termina al nivel del mar');
    }else{
        console.log('Error, la cantidad de pasos no coinciden');
    }
}

countingValleys();