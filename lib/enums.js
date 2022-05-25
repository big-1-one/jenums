class EnumsBuilder extends Array {
    constructor(
        keys,
        {
            keyValueFn = Enums.keyValueFn,
            keyFn = Enums.keyFn,
            valueFn = Enums.valueFn,
            pushFn = Enums.pushFn,
            valideFn = Enums.valideFn
        },
    ){
        super();
        keys.forEach((item, i)=>{
            var [key, value] = keyValueFn.call(this, item, i);
            var k = keyFn.call(this, key, value, i);
            var v = valueFn.call(this, key, value, i);
            var p = pushFn.call(this, k, v, i);
            if(!valideFn.call(this, k, v, key, value, i)) return;
            this.push(p);
            this[k] = v;
        });
        Object.freeze(this);
    }

    static valideFn(k, v, key, value, index){
        return true;
    }

    static keyValueFn(item, index){
        if(Array.isArray(item))
            return [item[0], item[1] ?? item[0]];
        if(typeof item == 'object' && item != null)
            return [item.key, item.value ?? item.key];
        return [item, item];
    }

    static keyFn(key, value, index){
        return key;
    }

    static valueFn(key, value, index){
        return value;
    }

    static pushFn(key, value, index){
        return key;
    }

    static new(){
        return new EnumsBuilder(...arguments);
    }

    static create(){
        return new EnumsBuilder(...arguments);
    }
};

class Enums extends EnumsBuilder{
    constructor(...keys){
        super(keys);
    }

    static new(){
        return new Enums(...arguments);
    }

    static create(){
        return new Enums(...arguments);
    }
}


module.exports = {
    EnumsBuilder,
    Enums
}