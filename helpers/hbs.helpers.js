module.exports = {
  ifeq: function (a, b, options) {
    if (a === b) return options.fn(this);
    return options.inverse(this);
  },
  formatDate: function (date) {
    return new Date(date).toLocaleDateString();
  },
  json: function (context) {
    return JSON.stringify(context);
  },
};
