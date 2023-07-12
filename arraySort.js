var array1 = [[5, "fff"], [14, "ggg"], [12, "aaa"], [25, "ddd"], [13, "eee"]];

function search(arr, searchIndex) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == searchIndex) {
            console.log(arr[i][1])
        }
    }
}

//Time Complexity: Ω(n log(n)) Θ(n log(n)) O(n^2)  Auxiliary Space: O(log(n))
function quickSort(arr) {

    if (arr.length <= 1)
        return arr;

    let left = [], right = [], pivot = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i][0] > pivot[0])
            left.push(arr[i])
        else
            right.push(arr[i])
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

search(array1,12)
console.log(quickSort(array1))