const nums = [29, 10, 23, 6, 17, 5, 9]

const bubbleSort = (arr) => {
    const n = arr.length
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

console.log(bubbleSort(nums))