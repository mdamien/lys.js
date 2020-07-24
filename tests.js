
it('shoudl render hello world', () => {
  chai.assert.equal(L.render(L.h1("hello world")), "<h1>hello world</h1>");
});

it('should render attributes', () => {
  chai.assert.equal(L.render(L.h1('world', {class:'hello'})),
    '<h1 class="hello">world</h1>')
});