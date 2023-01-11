function doubleNumberFildes(object){
    for(let key in object){
        if (typeof object[key] ==  "number"){
            object[key] = object[key] * 2;
        }
    }

    return object;
}

console.log(doubleNumberFildes({"id": 3, "first name": "Almog", "last name": "oz"}));

function cropArrays(object){
    let newObject = {};
    for (let key in object){
        if (Array.isArray(object[key])){
            newObject[key] = object[key];
        }
    }

    return newObject;
}

console.log(cropArrays({"id": 3, "first name": "Almog", "last name": "oz", "someArray":[1,2,3,4,5]}));