import Ember from 'ember';

const { Helper } = Ember;

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([type]/* , hash */) {
  if (communityPropertyTypes.includes(type)) {
    return 'Community';
  }

  return 'Standalone';
}

export default Helper.helper(rentalPropertyType);
