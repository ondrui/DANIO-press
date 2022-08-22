const handlerColor = (str) => {
  const classes = ['red', 'green', 'yellow'];

  const colorCode = {
    green: 1,
    yellow: 2,
    red: 4,
  };
  const setColorClass = {
    4: 'red yellow',
    6: 'green',
    2: 'red',
    1: 'yellow',
  };

  const arrAll = str.split(' ');

  const badClasses = arrAll.filter((item) => !classes.includes(item)).join(' ');

  const uniqArrAll = arrAll.filter((element, index) => {
    return arrAll.indexOf(element) === index;
  });

  const arrClasses = uniqArrAll.filter((item) => classes.includes(item));

  const sum = arrClasses.reduce((prev, cur) => {
    if (colorCode[cur] !== undefined) {
      return prev += colorCode[cur];
    }
  }, 0);

  if (setColorClass[sum] !== undefined) {
    return `${setColorClass[sum]} ${badClasses || ''}`;
  } else {
    return `${setColorClass[1]} ${badClasses}`;
  }

};

module.exports = handlerColor;
