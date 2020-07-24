
it('shoudl render hello world', () => {
  chai.assert.equal(L.render(L.h1("hello world")), "<h1>hello world</h1>")
})

it('should render attributes', () => {
  chai.assert.equal(L.render(
  	L.h1('world', {class:'hello'})),
    '<h1 class="hello">world</h1>'
  )
  chai.assert.equal(L.render(
  	L.input('hello', {id: 'hello', value:'world'})),
    '<input id="hello" value="world">'
  )

  chai.assert.equal(L.render(
  	L.input({what: null})),
    '<input>'
  )

  /* not supported yet
  chai.assert.equal(L.render(
  	L.input('hello', {what: null})),
    '<input what>'
  )
  */

  chai.assert.equal(L.render(
  	L.input({"data-trigger": 666})),
    '<input data-trigger="666">'
  )
})

it('should support attributes first', () => {
  chai.assert.equal(L.render(L.h1({class:'hello'}, 'world')),
    '<h1 class="hello">world</h1>')
})

// TODO: continue by taking inspiration from lys python version tests