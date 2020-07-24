L = {};

var flattenArray = function (array) {
  var is_flat = false
  while (!is_flat) {
    is_flat = true
    var flattened = []
    array.forEach(node => {
      if (node instanceof Array) {
        is_flat = false
        node.forEach(node2 => {
          flattened.push(node2)
        })
      } else {
        flattened.push(node)
      }
    })
    array = flattened
  }
  return array;
}

L.el = function (name, content, attrs) {
  var node = document.createElement(name)

  if (content instanceof Array) {
    content = flattenArray(content)
    content.forEach(node2 => {
      if (node2) {
        node.appendChild(L.span(node2).firstChild)
      }    
    })
  } else if (content instanceof HTMLElement) {
    node.appendChild(content)
  } else if (content) {
    var content_node = document.createTextNode(content)
    node.appendChild(content_node)
  }

  if (attrs) {
    for (var key in attrs) {
      var value = attrs[key];
      if (key == 'class_') {
        key = 'class';
      }
      node.setAttribute(key, value)
    }
  }

  return node
}

var html_elements = "a,abbr,address,area,article,aside,audio,b,base,bdi,bdo,blockquote,body,br,button,canvas,caption,cite,code,col,colgroup,data,datalist,dd,del,details,dfn,dialog,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,i,iframe,img,input,ins,kbd,label,legend,li,link,main,map,mark,menu,meta,meter,nav,noscript,object,ol,optgroup,option,output,p,param,picture,pre,progress,q,rp,rt,ruby,s,samp,script,section,select,slot,small,source,span,strong,style,sub,summary,sup,table,tbody,td,template,textarea,tfoot,th,thead,time,title,tr,track,u,ul,var,video,wbr"
html_elements =  html_elements.split(',')
html_elements.forEach(el => {
  L[el] = function (content, attrs) {
    return L.el(el, content, attrs)
  }
})

L.render = function (node) {
  return L.span(node).innerHTML
}