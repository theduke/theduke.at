+++
category = "develop"
title = "Prevent Adblock from Blocking Fontawesome Icons"
date = 2016-09-05
tags = ["adblock", "blocking", "fontawesome", "icons", "html", "css", "develop"]
path = "blog/develop/prevent-adblock-from-blocking-fontawesome-icons"

[extra]
id = "1a6a226e-cf19-47fa-b951-27b2f984cfbe"
+++

The [Adblock Plus](https://adblockplus.org) Chrome extension has started 
to block some of the beloved [FontAwesome](http://fontawesome.io/) icons, when
the user enables the "Remove Social Media Buttons" setting.

To circument this, there are several approches.

The one I found most convenient is to just define a custom class for the 
affected icon.  
Here is how you do it:

FontAwesome works by adding a CSS `content: "\fXX"` directive with the `:before`
pseudo selector. It's trivial to create a custom icon class. Let's try it for 
the [Twitter icon](http://fontawesome.io/icon/twitter/).

<p>
<div class="row">
  <style type="text/css">.fa-custom-twtr:before {content: "\f099"; }</style>
  <div class="col-md-6">
    <pre><code class="hljs language-css">
      .fa-custom-twtr:before {
        content: "\f099"; 
      }
    </code></pre>
    <pre><code class="hljs language-html">
      &lt;i class="fa fa-custom-twtr">&lt;/i>
    </code></pre>
  </div>
  <div class="col-md-6">
    <i class="fa fa-custom-twtr fa-5x"></i>  
  </div>
</div>
</p>

To extend it to other icons, just add additional classes and change the 
`content: "\fXX"` value to the *unicode* value of the icon, which can be
found on the individual icon pages just under the header.

The icon list is here: [FontAwesome Icons](http://fontawesome.io/icons/).
