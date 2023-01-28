function sumOverlap(array1, array2) {
    let set1 = new Set(array1);
    let set2 = new Set(array2);
    let overlap = [...set1].filter(x => set2.has(x));
    let sum = overlap.reduce((acc, val) => acc + val, 0);
    return sum;
  }