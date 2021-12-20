export function getHeapSortAnimations (array) {
    const animations = [];

    heapSort(array, animations);

    return animations;
};


function heapify(array, n, i, animations){

    let largest = i; 
    let l = 2 * i + 1; 
    let r = 2 * i + 2;

    if(l < n){
        animations.push([l, largest, 1]);
        animations.push([l, largest, 2]);

        if(array[l] > array[largest])
            largest = l;
    }
        
    if(r < n){
        animations.push([r, largest, 1]);
        animations.push([r, largest, 2]);

        if(array[r] > array[largest])
            largest = r;
    }

    if (largest !== i) {
        animations.push([i, largest, 3]);

        let temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;

        heapify(array, n, largest, animations);
    }
};

function heapSort(array, animations){

    const n = array.length;

    for (let i = n / 2 - 1; i >= 0; i--)
        heapify(array, n, i, animations);

    for (let i = n - 1; i > 0; i--) {
        animations.push([i, 0, 3]);

        let temp = array[i];
        array[i] = array[0];
        array[0] = temp;

        heapify(array, i, 0, animations);
    }
};