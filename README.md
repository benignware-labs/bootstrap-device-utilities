# bootstrap-device-utilities
> Bootstrap Responsive Utilities based on device resolution

This bootstrap css-extension lets you control visibility of elements based on device screen dimensions by adding `visible-device-*` and `hidden-device-*` helpers.

Displaying content dependent on device resolution is especially useful for optimizing large background-images.
While image elements cannot be prevented from loading once they're added to the document, css-background-images wrapped in an hidden element will [not load in most commonly used browsers](http://timkadlec.com/2012/04/media-query-asset-downloading-results/).
Being fully aware of the client's resolution and also because of being pure css, which offers the best possible performance, this technique is preferred over server-side- or javascript-solutions.

Making use of standard viewport-based helpers would force different images to be loaded on window-resize which is not suitable for the purpose of optimization.
For example, with standard bootstrap breakpoints applied at `768px`, `992px` and `1200px`, an ipad of `768x1024` will be `sm` in portrait-, but `md` in landscape-orientation.

In contrast to viewport, device dimensions are fixed at the maximum resolution.
In order to always match the entire screen, bootstrap-device-utilities also take device-height into account. This way, images can be easily delivered at individual, screen-fitting sizes. 

The package contains a less and a sass-version as well as a compiled css-distribution.

## Basic Usage

Display content based on device resolution:
```html
<div class="visible-device-lg">Large screen</div>
<div class="visible-device-md">Medium screen</div>
<div class="visible-device-sm">Small screen</div>
<div class="visible-device-xs">Extra small screen</div>
```

Hide content based on device resolution:
```html
<div class="hidden-device-lg">Not a large screen</div>
<div class="hidden-device-md">Not a medium screen</div>
<div class="hidden-device-sm">Not a small screen</div>
<div class="hidden-device-xs">Not an extra small screen</div>
```


## Advanced Usage

Deliver background-images dependent on device resolution:
```html
<div class="background">
  <div class="visible-device-lg visible-device-md visible-device-sm">
    <div style="background-image: url('images/flowers_lg.jpg');"> </div>
  </div>
  <div class="visible-device-xs">
    <div style="background-image: url('images/flowers_xs.jpg');"> </div>
  </div>
</div>
```

```css
body, html {
  width: 100%;
  height: 100%;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background > div > div {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
```
