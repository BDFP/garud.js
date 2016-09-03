Garud.Data = function () {
    this.memDB = {};
    this.varObservable = {};
};

Garud.Data.prototype.saveToMemory = function (key, value) {
    memDB[key] = value;
    // for (var changeFunc of this.varObservable[key]) {
    //     changeFunc(value);
    // }
}

Garud.Data.prototype.observe = function (key, onChangeCb) {
    varObservable[key] = varObservable[key] || [];
    varObservable[key].push(onChangeCb);
}

Garud.Data.prototype.getFromMemory = function (key) {
    return memDB[key];
}
