import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonCategory extends Schema.Component {
  collectionName: 'components_common_categories';
  info: {
    displayName: 'Category';
    icon: 'folder';
    description: '';
  };
  attributes: {
    Category: Attribute.Enumeration<
      ['Hot Chocolate', 'Coffee', 'Cold Drinks', 'Sweat Items', 'Savoury Items']
    > &
      Attribute.Required;
  };
}

export interface CommonChocolateCategory extends Schema.Component {
  collectionName: 'components_common_chocolate_categories';
  info: {
    displayName: 'Chocolate-Category';
  };
  attributes: {
    ChocolateCategory: Attribute.Enumeration<['Dark', 'Milk', 'White']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.category': CommonCategory;
      'common.chocolate-category': CommonChocolateCategory;
    }
  }
}
