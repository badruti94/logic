exports.search = (array, search) => {
    let indexFind = 0
    for(let i = 0; i<array.length; i++){
        if(array[i] === search){
            indexFind = i; 
            break;
        }
    }

    return indexFind
}