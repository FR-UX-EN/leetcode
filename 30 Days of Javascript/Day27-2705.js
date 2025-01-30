/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */


/*
    using recursive dfs problem.
    I couldn't solve this problem at the first time because I didn't understand the problem.
    I kept thinking of [] would be falsy value. but it's not.
*/
var compactObject = function (obj) {
    function dfs(obj) {
        if (!obj) return false;
        if (typeof obj !== 'object') return obj;

        if (Array.isArray(obj)) {
            const arr = []
            for (let i = 0; i < obj.length; i++) {
                const el = obj[i]
                const subRes = dfs(el);

                if (subRes) {
                    arr.push(subRes)
                }
            }

            return arr;
        }

        const newObj = {}

        for (const key in obj) {
            const subRes = dfs(obj[key]);
            if (subRes) {
                newObj[key] = subRes;
            }
        }

        return newObj;
    }

    return dfs(obj);
};