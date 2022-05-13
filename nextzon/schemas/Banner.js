export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
      {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
              hotspot: true,
          }
      },
      {
          name: 'name',
          title: 'Name',
          type: 'string'
      },
      {
          name: 'description',
          title: 'Description',
          type: 'string'
      },
      {
          name: 'category',
          title: 'Category',
          type: 'string'
      },
      {
        name: 'saleTime',
        title: 'SaleTime',
        type: 'string'
    },
      {
          name: 'discount',
          title: 'Discount',
          type: 'string'
      },
      {
          name: 'discountDate',
          title: 'DiscountDate',
          type: 'string'
      }
  ],
};