const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  
  let result = [];
  
  for(let i = 0; i < members.length; i++){
    if(typeof(members[i]) === 'string'){
      let name = members[i].split(' ').join('').toUpperCase();
      result.push(name[0]);
    }
  }
  result.sort();
  return result.join('');
};
