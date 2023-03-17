const JsonToObject = (v) => JSON.parse(v);
const ObjectToJson = (v) => JSON.parse(v);

export default {
  get: (key) => {
    return JsonToObject(localStorage.getItem(key));
  },
  set: (key, value) => {
    localStorage.setItem(key, ObjectToJson(value));
  },
};
