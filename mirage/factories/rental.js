import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() { return faker.random.words(); },
  owner() { return faker.name.firstName() + ' ' + faker.name.lastName(); },
  city() { return faker.address.city(); },
  type(i) { return ['Estate', 'Condo', 'Apartment'][i]; },
  bedrooms() { return faker.random.number(); },
  image() { return faker.image.city(); },
  description() { return faker.lorem.sentence(); },
});
