var { EnumsBuilder } = require('./enums.js');


class SymbolEnums extends EnumsBuilder{
    constructor(...keys){
        super(keys, {valueFn: SymbolEnums.valueFn});
    }

    static valueFn(key, value, index){
        return Symbol(value);
    }

    static new(){
        return new SymbolEnums(...arguments);
    }
}


module.exports = SymbolEnums;