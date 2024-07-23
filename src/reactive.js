export default reactiveHandler = {
    set(target, property, value) {
      target[property] = value;
      console.log('>>> ', value);
    },
    get(target, property) {
      return target[property];
    }
};