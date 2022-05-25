var { EnumsBuilder } = require('./enums.js');


class NumberEnums extends EnumsBuilder{
    constructor(...keys){
        super(keys, { valueFn: NumberEnums.valueFn, valideFn: NumberEnums.valideFn });
    }

    static valueFn(key, value, index){
        if(key == value) return (this[this[this.length -1]] ?? -1) + 1;
        if(typeof value === 'string') return value.split('').reduce((n,c)=> n+c.charCodeAt(0), 0);
        return Number(value);
    }
    
    static valideFn(k, v, key, value, index){
        return ((this[this[this.length -1]] ?? -Infinity) < v);
    }

    static new(){
        return new NumberEnums(...arguments);
    }
}