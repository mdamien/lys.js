function render(node) {
	console.log('render', node)
	if (node === false) {
		return '';
	}

	return '<' + node.name + '>' + (node.children ? render(node.children) : '') + '</' + node.name + '>'
}

class Node {
  constructor(name, attrs) {
  	this.name = name;
  	this.children = false;
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


console.log(render(L.h1 / L.h2))
