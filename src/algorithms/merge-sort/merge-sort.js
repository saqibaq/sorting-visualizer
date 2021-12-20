export function getMergeSortAnimations(array) {
    const animations = [];

    if (array.length <= 1) return array;

    const auxiliaryArray = array.slice();

    mergeSort(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  };
  
  function mergeSort(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;

    const middleIdx = Math.floor((startIdx + endIdx) / 2);

    mergeSort(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSort(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  };
  
  function merge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j, 1]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j, 2]);

      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i], 3]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j], 3]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      animations.push([i, i, 1]);

      animations.push([i, i, 2]);
     
      animations.push([k, auxiliaryArray[i], 3]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j, 1]);

      animations.push([j, j, 2]);

      animations.push([k, auxiliaryArray[j], 3]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  };