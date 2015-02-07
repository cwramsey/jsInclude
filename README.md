# jsInclude
Dynamically include Javascript files

jsInclude is a super simple way to include JS files into both your header and the end of the body tag.

And it's super easy to use.

```javascript
JsInclude.header({
    folder: "demoJS",
    files: [
        "demo.js",
        "demo2.js"
    ]
}, function () {
    alert("loaded ok");
});
```

To load it to the footer, all you need to do is run the footer function instead.

```javascript
JsInclude.footer({
    folder: "demoJS",
    files: [
        "demo.js",
        "demo2.js"
    ]
}, function () {
    alert("loaded ok");
});
```

They're identical except that one loads up top, the other down below.
