function filterObjectProperties(obj,minlen){
    let result = {};
    for(let key in obj){
        if(typeof obj[key]==='string' && obj[key].length >= minlen){
            result[key] = obj[key];
        }
    }
    return result;
}
const obj = {
    a: "short", 
    b: "longer string", 
    c: 123, 
    d: "very long string indeed",
}

const filter=filterObjectProperties(obj, 7);
console.log(filter);