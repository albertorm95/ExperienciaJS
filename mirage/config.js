export default function() {
  this.namespace = '/api';

  this.get('/spaces', function() {
    return {
      data: [{
        type: 'spaces',
        id: 'grand-old-mansion',
        attributes: {
          title: 'Grand Old Mansion',
          owner: 'Veruca Salt',
          city: 'San Francisco',
          type: 'Estate',
          area: 15,
          price: 2000
        }
      }, {
        type: 'spaces',
        id: 'urban-living',
        attributes: {
          title: 'Urban Living',
          owner: 'Mike Teavee',
          city: 'Seattle',
          type: 'Condo',
          area: 1,
          price: 3000
        }
      }, {
        type: 'spaces',
        id: 'downtown-charm',
        attributes: {
          title: 'Downtown Charm',
          owner: 'Violet Beauregarde',
          city: 'Portland',
          type: 'Apartment',
          area: 3,
          price: 8000
        }
      }]
    };
  });
}