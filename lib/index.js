module.exports = {
    get Enums(){
        return require('./enums.js').Enums;
    },
    get EnumsBuilder(){
        return require('./enums.js').EnumsBuilder;
    },
    get StringEnums(){
        return require('./stringenums.js');
    },
    get SymbolEnums(){
        return require('./symbolenums.js');
    },
    get NumberEnums(){
        return require('./numberenums.js');
    }

}