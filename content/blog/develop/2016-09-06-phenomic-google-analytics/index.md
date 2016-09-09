---
layout: Post
type: blog
category: develop
id: ee1cc83d-abf3-4a60-b1bd-7d1d87c9410d
title: How To Use Google Analytics With Phenomic (Static Site Generator)
date: 2016-09-06T20:40:00+02:00
tags: [phenomic, google-analytics, ga, static-site-generator, webpack, react, javascript, random-tip, develop]
route: "blog/develop/how-to-use-google-analytics-with-phenomic"
---

[Phenomic](http://phenomic.io) is a great new 
[Static Site Generator](http://www.staticgen.com/), based on 
[React](https://facebook.github.io/react/) and [Webpack](https://webpack.github.io/).

I recently rebuilt this very blog using Phenomic. The development speed
and productivity is really amazing, thanks to Webpacks hot code reloading.

While the docs are well-written, they don't mention a way to embed 
Google Analytics tracking.

Turns out it is really easy, can be done in four simple steps,
and won't take you more than 5 minutes. The approach will *disable 
tracking if not in production*, and is easily configurable.

Here we go:


### Step 1: Install react-ga package

To make integration of Googlye Analytics code into React easier, we will use [react-ga](https://github.com/react-ga/react-ga),
a package written and used by Mozilla.

```bash
npm install --save react-ga
```
<br/>

### Step 2: Add your GA tracking code to package.json

We will store the Google Analytics tracking code in `package.json`, the
preferred place for all configuration in Phenomic.

*my_app/package.json*:
```json
{
  ...
  "googleAnalytics": "UA-xxxxxxx-1",
  ...
}

```
<br/>

### Step 3: GoogleAnalyticsTracker component

We will wrap our whole application inside of a special component, which will
use react-ga to track each page transition.

I largely borrowed the component used by the official 
[Phenomic documentation](https://github.com/MoOx/phenomic/tree/master/docs).

my_app/web_modules/GoogleAnalyticsTracker.jsx
```javascript
import React, { Component, PropTypes } from "react";

import ga from "react-google-analytics";
const GoogleAnalyticsInitiailizer = ga.Initializer;

const isProduction = process.env.NODE_ENV === "production";
const isClient = typeof window !== "undefined";

export default class GoogleAnalyticsTracker extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    params: PropTypes.object.isRequired,
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  componentWillMount() {
    if (isClient) {
      const { pkg } = this.context.metadata;
      if (isProduction) {
        ga("create", pkg.googleAnalytics, "auto");
      }
      else {
        console.info("ga.create", pkg.googleAnalytics);
      }
      this.logPageview();
    }
  }

  componentWillReceiveProps(props) {
    if (props.params.splat !== this.props.params.splat) {
      this.logPageview();
    }
  }

  logPageview() {
    if (isClient) {
      if (isProduction) {
        ga("set", "page", window.location.pathname);
        ga("send", "pageview");
      }
      else {
        console.info("New pageview", window.location.href);
      }
    }
  }

  render() {
    return (
      <div>
        { this.props.children }
        <GoogleAnalyticsInitiailizer />
      </div>
    )
  }
}
```

Simple enough.  
This component will wrap our app, and persist each route change to Google Analytics.  
Note that tracking is disabled when not running in the browser, and for development.

<br>


### Step 4: Start using the wrapper

Now we only have to wrap our app with the tracker.

The place to do this is in your *root component* used for react-router.  
If you did not change the default setup, the root component is found at 
`my_app/web_modules/LayoutContainer/index.js`.


```javascript

import GATracker from "..//GoogleAnalyticsTracker"

...

  render() {
    ...
    return (
      <GATracker params={this.props.params}>
        ...
      </GATracker> 
    );
  }

...
```

Take care not to remove anything else. Just add the import, and wrap the 
content returned by render in the <GATracker> component.

<br/>

### Test

That's it, we're done.  
You can test your changes in development mode by checking the console.  
The component will log  "New pageview..." when not in production.

If all works well, you can now upload your site and enjoy your obessions with 
page views and visitors.