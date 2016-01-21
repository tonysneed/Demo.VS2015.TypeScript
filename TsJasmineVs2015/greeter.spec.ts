/// <reference path="Scripts/typings/jasmine/jasmine.d.ts" />

//import {Greeter} from "./greeter";

describe("Greeter", () => {

    describe("greet", () => {

        it("returns Hello World", () => {

            // Arrange
            //let greeter = new Greeter1.Greeter("World");
            var greeter = {
                greet() {
                    return "Hello World";
                }
            };

            // Act
            let result = greeter.greet();

            // Assert
            expect(result).toEqual("Hello World");
        });
    });
});
