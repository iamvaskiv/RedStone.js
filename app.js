'use strict';

{
  let div = RedStone.create('div', {'class': 'container'},
    RedStone.create('h1', {'class': 'pewpew', 'data-pew': 'yey'}, 'Hello world!'),
    RedStone.create('p', {}, 'it really works')
  );

  console.log(div);

  RedStone.render(div, document.getElementById('root'));
}
