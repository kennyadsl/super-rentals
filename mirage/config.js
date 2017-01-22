export default function() {
  this.namespace = '/api';

  // Here we define what happens when '/rentals' is called in the browser.
  // Basically we are stubbing the return value of this API call.
  this.get('/rentals', (schema, request) => {
    let { rentals } = schema; // same as: `let rentals = schema.rentals;`

    if (request.queryParams.city !== undefined) {
      // If the request is received with a query param 'city' (&city='value')
      // we need to filter our results. We are actually emulating what
      // will be done server side by our API.
      return rentals.where({ id: 1 });
    }

    return rentals.all();
  });

  this.get('/rentals/:id', (schema, request) => {
    return schema.rentals.find(request.params.id);
  });
}
