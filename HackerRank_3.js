function hourglassSum(arr) {
  let result = [];
  arr.forEach((x, index_x, array_x) => {
    if (index_x > 3) return;
    x.forEach((y, index_y, array_y) => {
      if (index_y > 3) return;
      let acu = 0;
      acu += array_y[index_y] + array_y[index_y + 1] + array_y[index_y + 2];
      acu += array_x[index_x + 1][index_y + 1];
      acu +=
        array_x[index_x + 2][index_y] +
        array_x[index_x + 2][index_y + 1] +
        array_x[index_x + 2][index_y + 2];
      result.push(acu);
    });
  });
  return Math.max(result);
}
