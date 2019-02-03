import { Component } from '@angular/core';

@Component({
    selector: 'app-welcome-page',
    template: `
        <h1>Welcome!<h1>
        Welcome to the welcome page
    `,
    styles: ['h1{color: red;}']
})
export class WelcomePageComponent {

    // Static variables - "belong to the class itself" -----------------------------------------

    private static staticVar = 'static value';

    // Instance variables - meaning that they "belong to an instance of this class" ------------

    private normalString = '                    \
                                                \
        here is an old fasioned literal string  \
    ';

    private intValue1 = 7;

    private templateLiteralString = `
        Here is a template literal String
        the value of intValue1 is ${this.intValue1}
        the value of the static variable staticVar is ${WelcomePageComponent.staticVar}
    `;

    // Constructor -----------------------------------------------------------------------------

    public constructor() {
        // {const, let, var} comp: WelcomePageComponent = new WelcomePageComponent(...)
    }

    // Static methods --------------------------------------------------------------------------

    // public before private
    public static staticMethod1(): String {
        //
        return null;
    }

    // private after all public
    private static staticMethod2(): number {
        //
        return 0;
    }

    // instance methods ------------------------------------------------------------------------

    public method1(): Array<String> {
        //
        return [];
    }

    private method2(): String[] {
        //
        return [];
    }
}
