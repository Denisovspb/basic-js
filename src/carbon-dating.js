const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (Number.isNaN(sampleActivity) == false || typeof(sampleActivity) != 'string') return false;
    let k = 0.693 / HALF_LIFE_PERIOD;;
    return res = Math.ceil(Math.log(MODERN_ACTIVITY / (+sampleActivity)) / k);
};
