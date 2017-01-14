'use strict';

{
  class RedStone {
    constructor() {

    }

    create(type  = 'div', props = {}, ...children) {
      return { type, props, children }
    }

    createElement(node) {
      if (typeof node === 'string') {
        return document.createTextNode(node);
      }

      const $el = document.createElement(node.type);
      
      for (let key in node.props) {
        $el.setAttribute(key, node.props[key]);
      }

      node.children
        .map(this.createElement.bind(this))
        .forEach($el.appendChild.bind($el));
      return $el;
    }

    render(node, root) {
      root.appendChild(this.createElement(node));
    }
  }

  window.RedStone = new RedStone();
  window.RS = window.RedStone;
}
