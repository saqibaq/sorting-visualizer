export function getSelectionSortAnimations (array) {
    const n = array.length;
    const animations = [];

    for(let i=0; i<n-1; i++){
        let j=i,k=i;

        for(; j<n; j++){
            animations.push([k, j, 1]);
            animations.push([k, j, 2]);

            if(array[j] < array[k])
                k = j;
        }

        animations.push([i, k, 3]);

        let temp = array[i];
        array[i] = array[k];
        array[k] = temp;
    }

    return animations;
};

