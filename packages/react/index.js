import { TEXT} from './const'

function createElement(type, config = {}, ...children) {
  const props = {
    children: children.map(child => typeof child === 'object' ? child : createTextVnode(child)),
    ...config
  }
  return {
    props,
    type
  }
};

function createTextVnode(text) {
  return {
    type: TEXT,
    props: {
      children: [],
      nodeValue: text
    }
  }
}
export default { createElement }