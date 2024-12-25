import type { Schema, Struct } from '@strapi/strapi';

export interface FeaturedItemsFeaturedItem extends Struct.ComponentSchema {
  collectionName: 'components_featured_items_featured_items';
  info: {
    displayName: 'Featured Item';
    icon: 'arrowRight';
  };
  attributes: {
    featureBackImg: Schema.Attribute.Media<'images'>;
    featureBtn: Schema.Attribute.String;
    featureContent: Schema.Attribute.Text;
    featureImg: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    featureLink: Schema.Attribute.String;
    featureTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListsItemsListItems extends Struct.ComponentSchema {
  collectionName: 'components_lists_items_list_items';
  info: {
    displayName: 'List Items';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

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

export interface SlidersItemsSliderItems extends Struct.ComponentSchema {
  collectionName: 'components_sliders_items_slider_items';
  info: {
    description: '';
    displayName: 'Slider Items';
    icon: 'arrowRight';
  };
  attributes: {
    content: Schema.Attribute.Text;
    sliderImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
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

export interface TestimonialItemDemoTest extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_item_demo_tests';
  info: {
    displayName: 'demoTest';
    icon: 'brush';
  };
  attributes: {
    test: Schema.Attribute.String;
  };
}

export interface TestimonialItemTestimonialItems
  extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_item_testimonial_items';
  info: {
    displayName: 'TestimonialItems';
    icon: 'cloud';
  };
  attributes: {
    company: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'featured-items.featured-item': FeaturedItemsFeaturedItem;
      'lists-items.list-items': ListsItemsListItems;
      'partner-items.partner-item': PartnerItemsPartnerItem;
      'sliders-items.slider-items': SlidersItemsSliderItems;
      'tab-items.tab-item': TabItemsTabItem;
      'testimonial-item.demo-test': TestimonialItemDemoTest;
      'testimonial-item.testimonial-items': TestimonialItemTestimonialItems;
    }
  }
}
