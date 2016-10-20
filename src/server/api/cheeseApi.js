const fb = require('node-fieldbook');

const cheeseBook = new fb({
  username: 'key-1',
  password: 'b71zaPTCbEpW_mZjg7rE',
  book: '5804e218e5581403002d0eec'
});

const getCheese = function() {
  return cheeseBook.getSheet('cheese');
}

module.exports = {
    getCheese: getCheese,
};
