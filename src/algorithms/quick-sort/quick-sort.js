export function getQuickSortAnimations(array) {
    const animations = [];
    const n=array.length;
    
    QuickSort(array,0,n-1,animations);

    return animations;
};

function QuickSort(array, l, h, animations){
    let j=0;
    if(l<h){        
        j=partition(array,l,h,animations);       
        QuickSort(array,l,j-1,animations);        
        QuickSort(array,j+1,h,animations);    
    }
};

function partition(array, l, h, animations){
    const pivot = array[l];
    let i=l;
    let j=l+1;
    for(; j<=h; j++){
        animations.push([j, l, 1]);
        animations.push([j, l, 2]);

        if(array[j] <= pivot){
            i++;

            animations.push([i, j, 3]);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            
        }
    }  
    
    animations.push([i, l, 3]);
    let temp = array[i];
    array[i] = array[l];
    array[l] = temp;
    return i;
};