function Year(year) {
    this.year = year;
};

Year.prototype.isLeap = function () {
    var year = this.year;
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
            }
    } else {                    
        return false;
        }
};

module.exports = Year;