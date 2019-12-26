function hourglassSum(arr) {
  let result = [];
  arr.forEach((x, index_1, array_x) => {
    if (index_1 > 3) return;
    x.forEach((y, index_2, array_y) => {
      if (index_2 > 3) return;
      let acu = 0;
      acu += array_y[index_2] + array_y[index_2 + 1] + array_y[index_2 + 2];
      acu += array_x[index_1 + 1][index_2 + 1];
      acu +=
        array_x[index_1 + 2][index_1] +
        array_x[index_1 + 2][index_1 + 1] +
        array_x[index_1 + 2][index_1 + 2];
      result.push(acu);
    });
  });
  return Math.max(result);
}
