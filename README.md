# Angular 2 component wrapper for Ladda

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](http://opensource.org/licenses/MIT)

This is Angular 2 wrapper for [Ladda](https://github.com/hakimel/Ladda)

<a href="http://lab.hakim.se/ladda/" target_='blank'>Check out Ladda's demo</a>


## Useful links

- [Confluence doc](http://confluence.dev-team.com/display/DOC/AngularJS+2+version)
- [NPM](https://www.npmjs.com/package/ng2-ladda-preloader)

## Requirements
- [NPM](https://npmjs.org/) - Node package manager


## Installation

- run `npm install ng2-ladda-preloader --save`

- add `DtLaddaPreloader2Component` to your module's `declarations`:

```
// other imports
// ...
import { DtLaddaPreloader2Component } from 'ng2-ladda-preloader';
// ...

@NgModule({
    declarations: [
        // other declarations
        // ...
        DtLaddaPreloader2Component,
        // ...
    ]
})

```

- no additional css links or script imports needed, because they are included in component already


## Usage

Add `dt-ladda-preloader` to any html element that should contain ladda preloader button, e.g.:

```
<div dt-ladda-preloader [operation]="click()" label="click me"></div>
```

Component support the following attributes:
 - `operation`: Async operation that returns promise
 - `label`: Label that will be written on the button
 - `color`: Color of the spinner. Optional, default is 'white'
 - `style`: Style of the spinner appearance animation (see full list with examples at ladda's [demo](http://lab.hakim.se/ladda/)). Optional, default is 'zoom-in'


## Feedback

Please [leave your feedback](https://github.com/DevTeamHub/ladda-preloader2/issues) if you have noticed any issues or have a feature request.

## License

The repository code is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).