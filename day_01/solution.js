/**
 * Pase this code-snippets into the browser console of the following site:
 * https://adventofcode.com/2020/day/1/input
 */

// For 2 numbers
document
    .getElementsByTagName("pre")[0]
    .innerHTML.split("\n")
    .map((i) => parseInt(i))
    .forEach((el1, i, arr1) =>
        arr1
            .filter((el2, j) => j > i && el1 + el2 <= 2020)
            .forEach((el2) => (el1 + el2 === 2020 ? console.log(el1 * el2) : void 0))
    );

// For 3 numbers
document
    .getElementsByTagName("pre")[0]
    .innerHTML.split("\n")
    .map((i) => parseInt(i))
    .forEach((el1, i, arr) =>
        arr
            .filter((el2, j) => j > i && el1 + el2 <= 2020)
            .forEach((el2, j, arr2) =>
                arr2
                    .filter((el3, k) => k > j && el1 && el2 && el3 <= 2020)
                    .forEach((el3) => (el1 + el2 + el3 === 2020 ? console.log(el1 * el2 * el3) : void 0))
            )
    );
