export const range = (start = 1, end = 4) => {
    let result = [];

    for (let i = start; i <= end; i++) {
       result.push(i);
    }

    return result;
};
