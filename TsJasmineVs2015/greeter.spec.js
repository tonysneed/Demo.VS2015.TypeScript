/// <reference path="greeter.ts"/>
/// <reference path="Scripts/typings/jasmine/jasmine.d.ts" />
describe("Greeter", function () {
    describe("greet", function () {
        it("returns Hello World", function () {
            // Arrange
            var greeter = new Greeter("World");
            // Act
            var result = greeter.greet();
            // Assert
            expect(result).toEqual("Hello World");
        });
    });
});
//# sourceMappingURL=greeter.spec.js.map