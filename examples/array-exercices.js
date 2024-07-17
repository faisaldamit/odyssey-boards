// NB: the only array method/property you can use is array.push() and array.length
// Tip: don't start the exercice by thinking about the code you will write,
// start by thinking about the steps you will take to solve the problem,
// formulate the steps in darija, then translate them to code.

// exercice 1:
{
  const flattenArray = (array) => {
    newarray = [];
    for (i = 0; i < array.length; i++) {
      for (j = 0; j < array[i].length; j++) {
        newarray.push(array[i][j]);
      }
    }
    return newarray;
  };
  const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const output = flattenArray(input);
  console.log("Exercice 1:");
  console.log(output); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
}
// exercice 2:
{
  const findMostFrequent = (array) => {
    let mostFrequent = array[0];
    let maxFrequency = 0;
    for (let i = 0; i < array.length; i++) {
      let newFrequency = 0;
      for (let j = 0; j < array.length; j++) {
        if (array[j] === array[i]) {
          newFrequency++;
        }
        if (newFrequency > maxFrequency) {
          maxFrequency = newFrequency;
          mostFrequent = array[i];
        }
      }
    }
    return `the most frequent is ${mostFrequent} , it appears ${maxFrequency} times`;
  };

  const input = [9, 5, 3, 6, 7, 0, 9, 8, 4, 2, 1];
  const output = findMostFrequent(input);
  console.log("Exercice 2:");
  console.log(output); // The most frequent number is 5, it appears 4 times
}
// exercice 3:
{
  const joinArray = (array) => {
    newString = "";
    for (let i = 0; i < array.length; i++) {
      newString += array[i];
    }
    return newString;
  };

  const input = ["f", "a", "i", "c", "a", "l"];
  const output = joinArray(input);
  console.log("Exercice 3:");
  console.log(output); // 'faical'
}

// exercice 4:
{
  const findMissingNumber = (array) => {
    let missingNumber;
    for (let index = 0; index < array.length; index++) {
      if (index + 1 !== array[index]) {
        missingNumber = index + 1;
        break;
      }
    }

    return `${missingNumber}`;
  };

  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17];
  const output = findMissingNumber(input);
  console.log("Exercice 4:");
  console.log(output); // The missing number is 12
}

// exercice 5:
{
  const findDuplicate = (array) => {
    const duplicate = [];
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
          count++;
          if (count > 1) {
            duplicate.push(array[j]);
          }
        }
      }
    }
    let mostFrequent = duplicate[0];
    let maxFrequency = 0;
    for (let i = 0; i < duplicate.length; i++) {
      let newFrequency = 0;
      for (let j = 0; j < duplicate.length; j++) {
        if (duplicate[j] === duplicate[i]) {
          newFrequency++;
        }
        if (newFrequency > maxFrequency) {
          maxFrequency = newFrequency;
          mostFrequent = duplicate[i];
        }
      }
    }

    if (maxFrequency <= 2) {
      return `thre's no duplicate`;
    }
    return `the duplicate is ${mostFrequent}`;
  };

  const input = [4, 3, 9, 8, 5, 4, 2, 1, 0];
  const output = findDuplicate(input);
  console.log("Exercice 5:");
  console.log(output); // The duplicate is 4
}

// exercice 6:
{
  const findDuplicates = (array) => {
    const duplicates = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          duplicates.push(array[i]);
          break;
        }
      }
    }
    return duplicates;
  };

  const input = [4, 3, 5, 4, 9, 8, 5, 2, 0, 1, 0];
  const output = findDuplicates(input);
  console.log("Exercice 6:");
  console.log(output); // The duplicates are [4, 5, 0]
}

// exercice 7:
{
  const removeDuplicates = (array) => {
    const arrayWithoutDuplicates = [];
    const duplicates = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          duplicates.push(array[i]);
          break;
        }
      }
    }
    for (let index = 0; index < duplicates.length; index++) {
      for (let newIndex = 0; newIndex < array.length; newIndex++) {
        if (array[newIndex] === duplicates[index]) {
          array[newIndex] = 0;
        }
      }
    }
    for (let k = 0; k < array.length; k++) {
      if (array[k] !== 0) {
        arrayWithoutDuplicates.push(array[k]);
      }
    }
    return arrayWithoutDuplicates;
  };

  const input = [4, 3, 5, 4, 9, 8, 5, 2, 0, 1, 0];
  const output = removeDuplicates(input);
  console.log("Exercice 7:");
  console.log(output); // [3, 9, 8, 2, 1]
}
