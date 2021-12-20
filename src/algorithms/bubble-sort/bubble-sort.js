export function getBubbleSortAnimations (array){
    let flag=0;
    const n = array.length;
    const animations = [];

    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-i-1; j++){

            animations.push([j, j+1, 1]);
            animations.push([j, j+1, 2]);

            if(array[j] > array[j+1]){
                animations.push([j, j+1, 3]);
                
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                
                flag=1;
            }
        }
        if(flag===0) break;
        flag=0;
    }
    
    return animations;
};