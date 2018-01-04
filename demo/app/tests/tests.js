var ImageZoom = require("nativescript-image-zoom").ImageZoom;
var imageZoom = new ImageZoom();

describe("greet function", function() {
    it("exists", function() {
        expect(imageZoom.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(imageZoom.greet()).toEqual("Hello, NS");
    });
});