// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

export function visualizerForSwappingAlgorithms (animations) {
    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isSwapped = animations[i][2];
        if (isSwapped !== 3) {
            const [barOneIdx, barTwoIdx, col] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = col === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
        } else {
            setTimeout(() => {
                const [barOneIdx, barTwoIdx, _] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const h1 = barOneStyle.height;
                const h2 = barTwoStyle.height;

                barOneStyle.height = h2;
                barTwoStyle.height = h1;
            }, i * ANIMATION_SPEED_MS);
        }
    }
}

export function visualizerForOverwritingAlgorithms (animations) {
    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isSwapped = animations[i][2];
        if (isSwapped !== 3) {
            const [barOneIdx, barTwoIdx, col] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = col === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
        } else {
            setTimeout(() => {
                const [barOneIdx, newHeight, _] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
        }
    }
}