const name = {
  name: 'zhangsan',
  sayName() {
    console.log(this.name);
  }
};

const age = {
  age: 999
};

// module.exports = {
//   name,
//   age
// };

/* 或 */

exports.name = name;
exports.age = age;