const getTheTitles = function (titles) {
  let titleArray = [];
  for (i = 0; i < titles.length; i++) {
    titleArray.push(titles[i].title);
  }
  return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
