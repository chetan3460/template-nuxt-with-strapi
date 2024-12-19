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

export interface TabItemsTabItem extends Struct.ComponentSchema {
  collectionName: 'components_tab_items_tab_items';
  info: {
    description: '';
    displayName: 'tab-item';
    icon: 'apps';
  };
  attributes: {
    btnLink: Schema.Attribute.String;
    btnText: Schema.Attribute.String;
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    videoUrl: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'partner-items.partner-item': PartnerItemsPartnerItem;
      'tab-items.tab-item': TabItemsTabItem;
    }
  }
}
