const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/tim.kelly/Documents/Other/master-gatsby/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/tim.kelly/Documents/Other/master-gatsby/gatsby/src/pages/404.js"))),
  "component---src-pages-beer-js": hot(preferDefault(require("/Users/tim.kelly/Documents/Other/master-gatsby/gatsby/src/pages/beer.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/tim.kelly/Documents/Other/master-gatsby/gatsby/src/pages/index.js"))),
  "component---src-pages-order-js": hot(preferDefault(require("/Users/tim.kelly/Documents/Other/master-gatsby/gatsby/src/pages/order.js"))),
  "component---src-pages-pizza-js": hot(preferDefault(require("/Users/tim.kelly/Documents/Other/master-gatsby/gatsby/src/pages/pizza.js"))),
  "component---src-pages-slicemaster-js": hot(preferDefault(require("/Users/tim.kelly/Documents/Other/master-gatsby/gatsby/src/pages/slicemaster.js")))
}

