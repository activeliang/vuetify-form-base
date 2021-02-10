const deepCopy = (data) => JSON.parse(JSON.stringify(data))
const handleValue = (data, path, key, obj, callback, callback2) => {
  if (data && callback(data, key, obj)) {
    callback2(path.concat(key))
  }
}
const findField = (obj, callback) => {
  const result = []
  const findKey = (obj, path = []) => {
    if (!(obj instanceof Array) && !(obj instanceof Object)) {
      return []
    }

    if (obj instanceof Array) {
      for (var i = 0; i < obj.length; ++i) {
        handleValue(obj[i], path, i, obj, callback, v => result.push(v))
        if (obj[i] instanceof Object) {
          const newPath = deepCopy(path)
          newPath.push(i)
          findKey(obj[i], newPath);
        }
      }
    } else {
      for (var key in obj) {
        handleValue(obj[key], path, key, obj, callback, v => result.push(v))
        if (obj[key] instanceof Object) {
          const newPath = deepCopy(path)
          newPath.push(key)
          findKey(obj[key], newPath);
        }
      }
    }
  }
  findKey(obj)
  return result
}

export default findField
