var Faker = require('../lib');
var faker = new Faker({ locale: 'Book', localeFallback: 'en' });
faker.locales['Book'] = require('../lib/locales/Book');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
