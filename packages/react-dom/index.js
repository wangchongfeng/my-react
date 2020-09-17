import {TEXT} from '../react/const'

function render(vnode, container) {
  const node = createNode(vnode)
  container.appendChild(node)
}
function createNode(vnode) {
  let node = null
  const {type, children} = vnode
  if (type === TEXT) {
    createTextNode(vnode)
  } else if (typeof type === 'string') {
    node = document.createElement(type)
  }
  reconcileChildren(children, node)
  return node
}

function reconcileChildren(childVnode, parentNode) {
  for(let child of childVnode) {
    render(child, parentNode)
  }
}

function createTextNode(vnode) {
  
}

export default { render };