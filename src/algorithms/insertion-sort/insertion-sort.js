export function getInsertionSortAnimations(array) {
    const n = array.length;
    const animations = [];
    
    for(let i = 1; i < n; i++){
        let j = 0;
        let x = array[i];

        for(j = i-1; j > -1; j--){
            animations.push([i, j, 1]);
            animations.push([i, j, 2]);

            if(array[j] > x){
                animations.push([j+1, array[j], 3]);

                array[j+1] = array[j];
            }
            else{
                break;
            } 
        }
        animations.push([j+1, x, 3]);

        array[j+1] = x;
    }

    return animations;
};
