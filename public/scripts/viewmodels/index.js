/// <reference path=../libs/"knockout-2.1.0.debug.js" />

var party = function (args) {
    if (this === window)
        return new party(args);
    if (!args)
        args = {};
    var self = this;
    self.name = ko.observable(args.name || '');
    self.size = ko.observable(args.size || 0);
    self.quote = ko.observable(args.quote || 0);
};

var _partys = ko.observableArray([]);
var _newParty = new party();

var _addParty = function () {
    socket.emit('newParty', JSON.parse(ko.toJSON(_newParty)));
};

var vm = function () {
    return {
        partys: _partys,
        newParty: _newParty,
        addParty: _addParty
    }
} ();

ko.applyBindings(vm);

var socket = io.connect();
socket.on('connection', function(data) {
    console.log('connected');
});

socket.on('newParty', function (data) {
    _partys.push(new party(data));
});

socket.on('partys', function (data) {
    $.each(data, function (key, val) {
        
    });
});

