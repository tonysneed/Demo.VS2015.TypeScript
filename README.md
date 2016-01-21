# TypeScript with Jasmine in Visual Studio 2015

Setting up a TypeScript project and Jasmine tests in Visual Studio 2015
Based on: http://kearon.blogspot.sk/2014/08/testing-typescript-with-jasmine-in.html

1. Create a new **TypeScript** project in VS 2015.
  - Remove the index.html, app.css and app.js files.

2. Add the ASP.NET MVC NuGet package.
  - Follow these steps to set up a bare bones Mvc project:
    http://aspnetguru.com/step-by-step-bare-bones-asp-net-mvc-5-project/

    ```
    Install-Package Microsoft.AspNet.Mvc
    ```

3. Add `greeter.ts` file.

    ```typescript
    class Greeter {
        constructor(public message: string) {
        }

        greet(): string {
            return "Hello " + this.message;
        }
    }
    ```

4. Install the **JasmineTest** NuGet package.

    ```
    install-package JasmineTest
    ```

5. Add jasmine typings.

    ```
    Install-Package jasmine.typescript.DefinitelyTyped
    ```

6. Add `greeter.spec.ts` file.

    ```typescript
    /// <reference path="greeter.ts"/>
    /// <reference path="Scripts/typings/jasmine/jasmine.d.ts" />

    describe("Greeter", () => {

        describe("greet", () => {

            it("returns Hello World", () => {

                // Arrange
                var greeter = new Greeter("World");

                // Act
                var result = greeter.greet();

                // Assert
                expect(result).toEqual("Hello World");
            });
        });
    });
    ```
