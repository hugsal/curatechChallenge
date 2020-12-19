const io = require('console-read-write');

const MilkMerchant = async () => {
    let result = 0;
    let c = 0;
    const n = parseInt( await io.read());
    let arr = await io.read();
    arr = arr.toString().trim().split(' ').sort();
    if(n === arr.length){
        for(let i = 0; i < n; i += c){
            if(arr[i] === arr[i+1]){
                result++;
                c = 2;
            }else{
                c = 1;
            }
        }
        console.log('result ====>', result);
    }else{
        console.log('Error, no coincide la longitud del arreglo');
    }    
}
MilkMerchant();