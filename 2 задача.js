function deepCopy(obj) {
    const seen = new WeakMap();

    function copy(value) {
        if (value === null || typeof value !== 'object') {
            return value;
        }

      
        if (seen.has(value)) {
            return seen.get(value);
        }

      
        if (value instanceof Date) {
            return new Date(value);
        }

      
        if (value instanceof Map) {
            const copyMap = new Map();
            seen.set(value, copyMap);
            value.forEach((val, key) => {
                copyMap.set(copy(key), copy(val));
            });
            return copyMap;
        }

      
        if (value instanceof Set) {
            const copySet = new Set();
            seen.set(value, copySet);
            value.forEach((val) => {
                copySet.add(copy(val));
            });
            return copySet;
        }

      
        if (Array.isArray(value)) {
            const copyArr = [];
            seen.set(value, copyArr);
            for (let i = 0; i < value.length; i++) {
                copyArr[i] = copy(value[i]);
            }
            return copyArr;
        }

      
        const copyObj = Object.create(Object.getPrototypeOf(value));
        seen.set(value, copyObj);
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                copyObj[key] = copy(value[key]);
            }
        }

      
        const symbols = Object.getOwnPropertySymbols(value);
        for (const sym of symbols) {
            copyObj[sym] = copy(value[sym]);
        }

        return copyObj;
    }

    return copy(obj);
}
