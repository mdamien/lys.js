## lys.js
** A simple way to render HTML in JavaScript**

```javascript
html = L.render([
  L.h2("Nodes"),
  L.hr(),
  L.ul(nodes.map(node => 
    L.li(L.a(node.label, {href: '#'+node.id}))
  ))
])
```