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

3. Set TS module to CommonJs.
  - This is needed to allow use of `export` with classes.
  - Project properties, TypeScript Build, CommonJS
  - Also set the ECMAScript version to 6

4. Add `greeter.ts` file.

    ```typescript
    export class Greeter {
        constructor(public message: string) {
        }

        greet(): string {
            return "Hello " + this.message;
        }
    }
    ```

5. Install the **JasmineTest** NuGet package.

    ```
    install-package JasmineTest
    ```

6. Add jasmine typings.

    ```
    Install-Package jasmine.typescript.DefinitelyTyped
    ```

7. Add `greeter.spec.ts` file.
  - When running the jasmine tests in a browser,
    you'll get two errors: exports and require undefined.

    ```typescript
    /// <reference path="Scripts/typings/jasmine/jasmine.d.ts" />

    import {Greeter} from "./greeter";

    describe("Greeter", () => {

        describe("greet", () => {

            it("returns Hello World", () => {

                // Arrange
                let greeter = new Greeter("World");

                // Act
                let result = greeter.greet();

                // Assert
                expect(result).toEqual("Hello World");
            });
        });
    });
    ```

