/// <reference path="../libs/jquery-1.8.2.vsdoc.js" />
/// <reference path="../libs/jquery-ui-1.9.1.custom.js" />
/// <reference path="../libs/knockout-2.2.0.debug.js" />

var $featured = $('#featured');

var _albums = ko.observableArray([
    {
        name: 'One',
        cover: { src: "/img/gallery/one/1.png" },
        imgs: [
            { src: "/img/gallery/one/1.png" },
            { src: "/img/gallery/one/2.png" },
            { src: "/img/gallery/one/3.png" },
            { src: "/img/gallery/one/4.png" },
        ]
    },
    {
        name: 'Two',
        cover: { src: "/img/gallery/one/2.png" },
        imgs: [
            { src: "/img/gallery/one/1.png" },
            { src: "/img/gallery/one/2.png" },
            { src: "/img/gallery/one/3.png" },
            { src: "/img/gallery/one/4.png" },
        ]
    },
    {
        name: 'Three',
        cover: { src: "/img/gallery/one/3.png" },
        imgs: [
            { src: "/img/gallery/one/1.png" },
            { src: "/img/gallery/one/2.png" },
            { src: "/img/gallery/one/3.png" },
            { src: "/img/gallery/one/4.png" },
        ]
    },
    {
        name: 'Four',
        cover: { src: "/img/gallery/one/4.png" },
        imgs: [
            { src: "/img/gallery/one/1.png" },
            { src: "/img/gallery/one/2.png" },
            { src: "/img/gallery/one/3.png" },
            { src: "/img/gallery/one/4.png" },
        ]
    }
]);

var _featured = [
    { src: "/img/gallery/one/1.png" },
    { src: "/img/gallery/one/2.png" },
    { src: "/img/gallery/one/3.png" },
    { src: "/img/gallery/one/4.png" }
];

    var _setFeatured = function (data, e) {
        console.log(data);
        var toAdd = "";
        for (var i = 0; i < data.imgs.length; i++) {
            toAdd += '<img class="gone" src="' + data.imgs[i].src + '" />';
        }
        $featured.html(toAdd);
        //$featured.orbit();
    };

var vm = function () {
    return {
        featured: _featured,
        setFeatured: _setFeatured,
        albums: _albums  
    }
} ();

$(function () {
    ko.applyBindings(vm);
    _setFeatured({ imgs: _featured });
});