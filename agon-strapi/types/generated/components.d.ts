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

export interface HeroComponentHeroComponent extends Struct.ComponentSchema {
  collectionName: 'components_hero_component_hero_components';
  info: {
    description: '';
    displayName: 'Hero Component';
    icon: 'arrowRight';
  };
  attributes: {
    btnLink: Schema.Attribute.String;
    btnText: Schema.Attribute.String;
    ContactBtnLink: Schema.Attribute.String;
    ContactBtnText: Schema.Attribute.String;
    content: Schema.Attribute.Text;
    imageLeft: Schema.Attribute.Media<'images'>;
    imageRight: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface PageBlocksCardBlockLayoutTwo extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_card_block_layout_twos';
  info: {
    description: '';
    displayName: 'Card Block Layout Two';
    icon: 'apps';
  };
  attributes: {
    CardLayoutItems: Schema.Attribute.Component<
      'share-component.cards-repeater-items',
      true
    >;
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface PageBlocksCardsBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_cards_blocks';
  info: {
    description: '';
    displayName: 'Cards Block';
    icon: 'bold';
  };
  attributes: {
    content: Schema.Attribute.Text;
    ItemRepeater: Schema.Attribute.Component<
      'share-component.cards-repeater-items',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface PageBlocksContactUs extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_contact_uses';
  info: {
    displayName: 'Contact Us';
    icon: 'apps';
  };
  attributes: {
    Content: Schema.Attribute.Text;
    FormTitle: Schema.Attribute.String;
    SectionTitle: Schema.Attribute.Text;
    ShowPattern: Schema.Attribute.Boolean;
  };
}

export interface PageBlocksContentImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_content_image_block_s';
  info: {
    displayName: 'Content Image Block ';
    icon: 'code';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface PageBlocksFaqBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_faq_blocks';
  info: {
    description: '';
    displayName: 'Faq Block';
    icon: 'apps';
  };
  attributes: {
    ApproachRepeater: Schema.Attribute.Component<
      'share-component.title-description-faq',
      true
    >;
    FaqRepeater: Schema.Attribute.Component<
      'share-component.title-description-faq',
      true
    >;
    HeadingBlock: Schema.Attribute.Component<
      'share-component.title-content-block',
      false
    >;
  };
}

export interface PageBlocksHeroAboutBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_hero_about_blocks';
  info: {
    displayName: 'Hero About Block';
  };
  attributes: {
    BtnLink: Schema.Attribute.String;
    btnText: Schema.Attribute.String;
    ContactBtnLink: Schema.Attribute.String;
    ContactBtnText: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    imageLeft: Schema.Attribute.Media<'images'>;
    imageRight: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PageBlocksPartnerBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_partner_blocks';
  info: {
    description: '';
    displayName: 'Partner Block';
    icon: 'apps';
  };
  attributes: {
    HeadingBlock: Schema.Attribute.Component<
      'share-component.title-content-block',
      false
    >;
    ImageRepeater: Schema.Attribute.Component<
      'share-component.image-repeater',
      true
    >;
  };
}

export interface PageBlocksProcessBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_process_blocks';
  info: {
    description: '';
    displayName: 'Process Block';
    icon: 'apps';
  };
  attributes: {
    HeadingBlock: Schema.Attribute.Component<
      'share-component.title-content-block',
      false
    >;
    ProcessRepeater: Schema.Attribute.Component<
      'share-component.cards-repeater-items',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface PageBlocksServicePageBannerBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_service_page_banner_blocks';
  info: {
    description: '';
    displayName: 'Service Page Banner Block';
    icon: 'apps';
  };
  attributes: {
    btnLink: Schema.Attribute.String;
    btnLink2: Schema.Attribute.String;
    btnText: Schema.Attribute.String;
    btnText2: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    TitleContentItem: Schema.Attribute.Component<
      'share-component.title-content-block',
      false
    >;
  };
}

export interface PageBlocksTwoColImageContentBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks_two_col_image_content_blocks';
  info: {
    displayName: 'Two Col Image Content Block';
    icon: 'apps';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    TwoCardsReapeater: Schema.Attribute.Component<
      'share-component.cards-repeater-items',
      true
    >;
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

export interface ShareComponentCardsRepeaterItems
  extends Struct.ComponentSchema {
  collectionName: 'components_share_component_cards_repeater_items';
  info: {
    description: '';
    displayName: 'Cards Repeater';
    icon: 'bold';
  };
  attributes: {
    content: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    shapeImg: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ShareComponentImageRepeater extends Struct.ComponentSchema {
  collectionName: 'components_share_component_image_repeaters';
  info: {
    description: '';
    displayName: 'Image Repeater';
    icon: 'picture';
  };
  attributes: {
    images: Schema.Attribute.Media<'images'>;
  };
}

export interface ShareComponentSeo extends Struct.ComponentSchema {
  collectionName: 'components_share_component_seos';
  info: {
    displayName: 'Seo';
    icon: 'bulletList';
  };
  attributes: {
    keywords: Schema.Attribute.RichText;
    metaDescription: Schema.Attribute.RichText;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String;
  };
}

export interface ShareComponentTitleContentBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_share_component_title_content_blocks';
  info: {
    description: '';
    displayName: 'Title Content Block';
    icon: 'grid';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
  };
}

export interface ShareComponentTitleDescriptionFaq
  extends Struct.ComponentSchema {
  collectionName: 'components_share_component_title_description_faqs';
  info: {
    description: '';
    displayName: 'Title Description Repeater';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
    title: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    og_description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    og_image: Schema.Attribute.Media<'images'>;
    og_title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    og_type: Schema.Attribute.String;
    og_url: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
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
      'hero-component.hero-component': HeroComponentHeroComponent;
      'lists-items.list-items': ListsItemsListItems;
      'page-blocks.card-block-layout-two': PageBlocksCardBlockLayoutTwo;
      'page-blocks.cards-block': PageBlocksCardsBlock;
      'page-blocks.contact-us': PageBlocksContactUs;
      'page-blocks.content-image-block': PageBlocksContentImageBlock;
      'page-blocks.faq-block': PageBlocksFaqBlock;
      'page-blocks.hero-about-block': PageBlocksHeroAboutBlock;
      'page-blocks.partner-block': PageBlocksPartnerBlock;
      'page-blocks.process-block': PageBlocksProcessBlock;
      'page-blocks.service-page-banner-block': PageBlocksServicePageBannerBlock;
      'page-blocks.two-col-image-content-block': PageBlocksTwoColImageContentBlock;
      'partner-items.partner-item': PartnerItemsPartnerItem;
      'share-component.cards-repeater-items': ShareComponentCardsRepeaterItems;
      'share-component.image-repeater': ShareComponentImageRepeater;
      'share-component.seo': ShareComponentSeo;
      'share-component.title-content-block': ShareComponentTitleContentBlock;
      'share-component.title-description-faq': ShareComponentTitleDescriptionFaq;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
      'sliders-items.slider-items': SlidersItemsSliderItems;
      'tab-items.tab-item': TabItemsTabItem;
      'testimonial-item.testimonial-items': TestimonialItemTestimonialItems;
    }
  }
}
