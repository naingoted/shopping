const { forwardTo } = require('prisma-binding');

const Query = {
// default add custom logic later\
items: forwardTo('db'),
item: forwardTo('db'),

};

module.exports = Query;
