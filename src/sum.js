exports.sum = (array) => {
    let minIndex = 0
    let maxIndex = 0
    let sum = 0
    let avg = 0

    for(let i = 0; i<array.length; i++){
        if(array[i] < array[minIndex]){
            minIndex = i
        }
        if(array[i] > array[maxIndex]){
            maxIndex = i
        }

        sum += array[i]
    }

    avg = sum/array.length

    return {
        max: array[maxIndex],
        min: array[minIndex],
        sum,
        avg,
    }
}