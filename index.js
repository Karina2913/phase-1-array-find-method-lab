const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

// If there was a win that occured, will return the year. If not, returns undefined
  function superbowlWin(record) {
    let outcome = record.find(record => record.result === 'W');
    if (outcome) {
        return outcome.year;
    } else {
        return undefined;
    }
}