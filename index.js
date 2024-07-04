// Code your solution here
const findMatching = (arr, driver) => {
  return arr.filter((item) => item.toLowerCase() === driver.toLowerCase());
};

const fuzzyMatch = (arr, l) => {
  return arr.filter((item) => item.toLowerCase().startsWith(l.toLowerCase()));
};

const matchName = (arr, name) => {
  return arr.filter((item) => item.name === name);
};
