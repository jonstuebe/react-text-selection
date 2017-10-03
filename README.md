# React Text Selection

Render prop callback function to provide text selection for text inputs, textarea's, etc.

## Install

```shell
npm i -s @jonstuebe/react-text-selection
```

## Usage

```javascript
import React from "react";
import TextSelection from "@jonstuebe/react-text-selection";

const App = () => (
  <div>
    <TextSelection>
      {({ eventProps, selectionStart, selectionEnd }) => (
        <div>
          <p>
            {selectionStart}/{selectionEnd}
          </p>
          <textarea className="form-control" {...eventProps} />
        </div>
      )}
    </TextSelection>
  </div>
)
```

## Browser support

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 4 versions| last 4 versions| last 4 versions