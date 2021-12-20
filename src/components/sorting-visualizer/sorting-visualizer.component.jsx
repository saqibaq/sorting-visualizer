import React from 'react';
import { getMergeSortAnimations } from '../../algorithms/merge-sort/merge-sort';
import { getBubbleSortAnimations } from '../../algorithms/bubble-sort/bubble-sort';
import { getQuickSortAnimations } from '../../algorithms/quick-sort/quick-sort';
import { getHeapSortAnimations } from '../../algorithms/heap-sort/heap-sort';
import { getInsertionSortAnimations } from '../../algorithms/insertion-sort/insertion-sort';
import { getSelectionSortAnimations } from '../../algorithms/selection-sort/selection-sort';

import { visualizerForSwappingAlgorithms, visualizerForOverwritingAlgorithms } from './sorting-visualizer.utils';

import './sorting-visualizer.styles.css';

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 550));
        }
        this.setState({ array });
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        visualizerForOverwritingAlgorithms(animations);
    }

    quickSort() {
        const animations = getQuickSortAnimations(this.state.array);
        visualizerForSwappingAlgorithms(animations);
    }

    heapSort() {
        const animations = getHeapSortAnimations(this.state.array);
        visualizerForSwappingAlgorithms(animations);
    }

    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        visualizerForSwappingAlgorithms(animations);
    }

    insertionSort() {
        const animations = getInsertionSortAnimations(this.state.array);
        visualizerForOverwritingAlgorithms(animations);
    }

    selectionSort() {
        const animations = getSelectionSortAnimations(this.state.array);
        visualizerForSwappingAlgorithms(animations);
    }

    // NOTE: This method will only work if your sorting algorithms actually return
    // the sorted arrays; if they return the animations (as they currently do), then
    // this method will be broken.
    testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
            const array = [];
            const length = randomIntFromInterval(1, 1000);
            for (let i = 0; i < length; i++) {
                array.push(randomIntFromInterval(-1000, 1000));
            }
            
            const mergeSortedArray = getMergeSortAnimations(array.slice());

            let i = 0;
            for(; i < length-1; i++){
                if(mergeSortedArray[i] > mergeSortedArray[i+1]){
                    console.log(false);
                    break;
                }
            }

            if(i === length-1){
                console.log(true);
            }
        }
    }

    render() {
        const { array } = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`,
                        }}></div>
                ))}

                <div className='button-container'>
                    <button type="button" className="btn btn-secondary" onClick={() => this.resetArray()}>Generate New Array</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => this.quickSort()}>Quick Sort</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => this.heapSort()}>Heap Sort</button>
                    <button type="button" className="btn btn-primary" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button type="button" className="btn btn-primary" onClick={() => this.insertionSort()}>Insertion Sort</button>
                    <button type="button" className="btn btn-primary" onClick={() => this.selectionSort()}>Selection Sort</button>
                    {/* <button type="button" class="btn btn-secondary" onClick={() => this.testSortingAlgorithms()}>
                        Test Sorting Algorithms (BROKEN)
                    </button> */}
                </div>
                
            </div>
        );
    }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
