import type { Schema, Struct } from '@strapi/strapi';

export interface PartnerItemsPartnerItem extends Struct.ComponentSchema {
  collectionName: 'components_partner_items_partner_items';
  info: {
    description: '';
    displayName: 'partner-item';
    icon: 'arrowRight';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'partner-items.partner-item': PartnerItemsPartnerItem;
    }
  }
}
