var { EnumsBuilder } = require('./enums.js');


class StringEnums extends EnumsBuilder{
    constructor(...keys){
        super(keys, {valueFn: StringEnums.valueFn});
    }

    static valueFn(key, value, index){
        return `${value}`;
    }

    static new(){
        return new StringEnums(...arguments);
    }
}


module.exports = StringEnums;