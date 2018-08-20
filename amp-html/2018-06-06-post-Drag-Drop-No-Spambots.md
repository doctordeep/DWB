---
layout: single
title: Drag Drop Spambots
name: Drag Drop Spambots
read_time: true
comments: true
share: false
web-intents: true
tweet_id: 145116818707714048
social-share: twitter --twitter-hashtags facebook
sidenav: true
toc: 
toc_label: "Page Contents"
search: true
author: Donald Boulton
author_profile: true
adds: true
dragula: true
cookies: true
reviews: true
anchor: true
date: 2018-06-06 16:16:01 -0600
last_modified_at: 2018-06-06T10:42:38-04:00
event_date: 2018-06-06
tags:
  - Jekyll
  - Spam
  - dragula
category:
  - Jekyll
permalink: 2018-06-06-post-Drag-Drop-No-Spambots.html
image:
  cover: true
  path: &image /assets/images/pages/stop-spam.jpg
  feature: *image
  thumbnail: /assets/images/pages/stop-spam-320.jpg
header:
  image: /assets/images/pages/stop-spam.jpg
  teaser: /assets/images/pages/stop-spam-320.jpg
locations:
  - OKC, Oklahoma

excerpt: "This is a simple 13kb with .js its init.js and .scss a lightweight flawless way to defeat spambots. Use a submit button that has to be dragged using dragula to its posting position, In the Form, to post any form."

support: [adds, cookies, dragula]
folder: _posts
product: drag-drop-no-spambots
slug: drag-drop-no-spambots
github_editme_path: donaldboulton/DWB/blob/gh-pages/_posts/2018-06-06-post-Drag-Drop-No-Spambots.md
lcb: "{"
---

{% include octo-arm.html %}

{% include page-intro.html %}

# Defeat Spambots with dragula

![Drag and Drop with Drgaula](/assets/images/pages/dragula-logo.png){:class="align-center"}

This is a simple 13kb .js its init.js and .scss using a lightweight flawless way to defeat spambots.

Use a submit button that has to be dragged using dragula to its posting position into the form, dragging to the left to post that form.

No bot or computer can figure this out so spam is defeated, except by the jerks comments or reviews based on non-sense. Then I just blacklist them in CloudFlair and that blocks them from CloudFlare servers, that will really make there day.

Yea! Goodby recaptcha and honeypots.

## The draggable button

Download [dragula](https://github.com/bevacqua/dragula) from is dist folder in draguala Github Repo.
Or follow its npm installation instructions.

Note in using this I noticed dragula uses some of the .js files from the node-modules/dragula,  So the best case normally would be to use the CDN for dragula

```html
<div class="parent"> // All movable items with class="parent"
   <div class="wrapper"> // Then all items need to be in a wrapper
     <form>
        <div class="form-group">
           <label for="name">Full Name</label>
           <input type="text" name="fields[name]" id="name" placeholder="Enter your name..." required autofocus>
        </div>
        // Other inputs email, title, message...
        <div class="form-group"> // Button moved upon the on form
           <div id="left-defaults" class="container">
           <div class="">Moving the button here</div>
        </div>
      </form> // The button is placed anywhere outside of the form to be dragged to the form
        <div id="right-defaults" class="container">
            Move this button to submit the contact form.
          <div><input type="submit" value="Send Message" class="btn btn--primary"></div>
        </div>
    </div>
</div>
```

### Add javascript

Adding dragula to my scripts.html

```html
{{ page.lcb }}% if page.support contains 'dragula' %}
<script src="{{ page.lcb }}{ '/assets/js/vendor/dragula/dragula.min.js' | relative_url }}"></script>
<script>
dragula([document.getElementById(left-defaults), document.getElementById(right-defaults)])
  .on('drag', function (el) {
    el.className = el.className.replace('ex-moved', '');
  }).on('drop', function (el) {
    el.className += ' ex-moved';
  }).on('over', function (el, container) {
    container.className += ' ex-over';
  }).on('out', function (el, container) {
    container.className = container.className.replace('ex-over', '');
});
</script>
{{ page.lcb }}% endif %}
```

### Page frontmatter

Add the below to any page you want to use dragula on.

```html
support: [dragula]
```

### The Sass or css

Adding everything to make this work its scripts, scss, frontmatter and dragula.js = less than 13kb.

```css
.gu-mirror {
position: fixed !important;
margin: 0 !important;
z-index: 9999 !important;
opacity: 0.8;
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
filter: alpha(opacity=80);
}
.gu-hide {
display: none !important;
}
.gu-unselectable {
-webkit-user-select: none !important;
-moz-user-select: none !important;
-ms-user-select: none !important;
user-select: none !important;
}
.gu-transit {
opacity: 0.2;
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";
filter: alpha(opacity=20);
}
```

### Dragula Example

> Drag any of the contents below within its class .parent and class .wrapper div's.

{% include dragula-example.html %}