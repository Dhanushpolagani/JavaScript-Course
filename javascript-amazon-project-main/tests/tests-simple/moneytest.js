import {formatCurrency} from '../../scripts/utils/money.js';

console.log('test suite : formatCurrency');     

console.log('converts cents into dollars');

if(formatCurrency(2095) === '20.95'){
    console.log('Test passed');
} else{
    console.log('failed');
}

console.log('works with 0');

if(formatCurrency(0)==='0.00'){
    console.log('test passed');

} else{
    console.log('failed');
}

console.log('rounds to the nearest cent');

if( formatCurrency(20.91)){
    console.log('passed');
} else{
    console.log('failed');
}