const arr = [1, 2, 3, 4, 5, 6];

export const dump1 = () => {
  console.log('For in');
  for (const key in arr) {
    if (arr.hasOwnProperty(key)) {
      const element = arr[key];
      console.log(element);
    }
  }
};

export const dump2 = () => {
  console.log('For each');
  arr.forEach((el) => {
    console.log(el);
  });
};

export const dump3 = () => {
  console.log('For of');
  for (const item of arr) {
    console.log(item);
  }
};

export const dump4 = () => {
  console.log(
    arr.reduce((acc, val, idx, ar) => {
      return (acc += val);
    }),
  );
};

export const dump5 = () => {
  let ar1 = [1, 2, [8, 9, 0]];

  // Método 1 - Não faz deep clone
  let ar2 = [...ar1];
  ar2.push(4);
  ar2[2].push(6);

  // Método 2 - Não faz deep clone
  let ar3 = Array.from(ar1);
  ar3[2].push(7);

  // Método 3 - Não faz deep clone
  let ar4 = Object.assign([], ar1);
  ar4[2].push(5);

  // Método 4 - Faz deep clone
  let ar5 = JSON.parse(JSON.stringify(ar1));
  ar5[2].push(4);

  console.dir(ar1);
  console.dir(ar2);
  console.dir(ar3);
  console.dir(ar4);
  console.dir(ar5);
};
