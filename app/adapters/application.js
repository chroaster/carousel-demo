import DS from 'ember-data';

export default DS.Adapter.extend({
  findAll(store, type, sinceToken) {
    return new Promise((res, err) => {
      res(makeRandomItemActive(items));
    });
  },

  findRecord(store, type, id, snapshot) {
    return new Promise((res, err) => {
      let item = items.find((item) => {
        if (item.id === id) return item;
      });
      if (item) {
        res(item);
      } else {
        err(new Error("Item not found. Typo in URL?"));
      }
    });
  },

  query(store, query, options) {
    let res = [];
    items.forEach((item) => {
      if (item.tags.includes(options.tag)) {
        res.push(item);
      }
    });
    return res;
  }
});

function makeRandomItemActive(items) {
  let modifiedItems = items;
  modifiedItems.forEach((item) => {
    if ("active" in item) {
      delete item.active;
    }
  });

  let randomActiveItem = Math.floor((Math.random() * modifiedItems.length));
  modifiedItems[randomActiveItem].active = 'active';
  return modifiedItems;
}

const items = [{
    id: 'pen',
    title: 'Pen!',
    alt: 'image of a pen',
    img: '/assets/images/pen.png'
  }, {
    id: 'pineapple',
    title: 'Pineapple!',
    alt: 'image of a pineapple',
    img: '/assets/images/pineapple.png'
  }, {
    id: 'apple',
    title: 'Apple!',
    alt: 'image of a apple',
    img: '/assets/images/apple.png'
  }
];
