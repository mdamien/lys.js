function render(node) {
    if (node === false) {
        return '';
    } else if (node instanceof Node) {
        return '<' + node.name + '>' + render(node.children) + '</' + node.name + '>'
    } else if (node instanceof Array) {
        output = '';
        for (child in node) {
            output += render(node[child]);
        }
        return output;
    } else {
        return node;
    }
}

class Node {
  constructor(name, attrs, children) {
    this.name = name;
    this.attrs = attrs;
    this.children = attrs;
  }

  toString() {
    return render(this);
  }

  [Symbol.for('/')] (other) {
    this.children = other;
    return this;
  }
}

let handler = {
  get(target, name) {
    return new Node(name)
  }
}

let L = new Proxy({}, handler);


console.log(render(L.h1 / [
        L.h2 / 'hello',
        L.h2 / 'world'
    ]
))
