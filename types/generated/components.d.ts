import type { Schema, Struct } from '@strapi/strapi';

export interface AssistantPageAssistantContent extends Struct.ComponentSchema {
  collectionName: 'components_assistant_page_assistant_contents';
  info: {
    displayName: 'AssistantContent';
  };
  attributes: {
    flexCards: Schema.Attribute.Component<'landing-page.array', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    key: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'landing-page.array', true>;
    title: Schema.Attribute.String;
  };
}

export interface AssistantPageAssistantHeroItem extends Struct.ComponentSchema {
  collectionName: 'components_assistant_page_assistant_hero_items';
  info: {
    displayName: 'AssistantHeroItem';
  };
  attributes: {
    description: Schema.Attribute.String;
    key: Schema.Attribute.String;
    leftImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    leftImageAlt: Schema.Attribute.String;
    mainImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mainImageAlt: Schema.Attribute.String;
    rightImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    rightImageAlt: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AssistantPageAssistantWork extends Struct.ComponentSchema {
  collectionName: 'components_assistant_page_assistant_works';
  info: {
    displayName: 'AssistantWork';
  };
  attributes: {
    cards: Schema.Attribute.Component<'assistant-page.work-card', true>;
    description: Schema.Attribute.Text;
    headingHighlight: Schema.Attribute.String;
    headingPost: Schema.Attribute.String;
    headingPre: Schema.Attribute.String;
    key: Schema.Attribute.String;
  };
}

export interface AssistantPageImageCard extends Struct.ComponentSchema {
  collectionName: 'components_assistant_page_image_cards';
  info: {
    displayName: 'ImageCard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    key: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AssistantPageSmartSupport extends Struct.ComponentSchema {
  collectionName: 'components_assistant_page_smart_supports';
  info: {
    displayName: 'SmartSupport';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'assistant-page.work-flow-item', true>;
    headingHighlight: Schema.Attribute.String;
    headingPost: Schema.Attribute.String;
    headingPre: Schema.Attribute.String;
    key: Schema.Attribute.String;
  };
}

export interface AssistantPageWorkCard extends Struct.ComponentSchema {
  collectionName: 'components_assistant_page_work_cards';
  info: {
    displayName: 'WorkCard';
  };
  attributes: {
    content: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface AssistantPageWorkFlow extends Struct.ComponentSchema {
  collectionName: 'components_assistant_page_work_flows';
  info: {
    displayName: 'WorkFlow';
  };
  attributes: {
    key: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    workflow: Schema.Attribute.Component<'assistant-page.work-flow-item', true>;
  };
}

export interface AssistantPageWorkFlowItem extends Struct.ComponentSchema {
  collectionName: 'components_assistant_page_work_flow_items';
  info: {
    displayName: 'WorkFlowItem';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Text;
  };
}

export interface AuthenticationSideComponent extends Struct.ComponentSchema {
  collectionName: 'components_authentication_side_components';
  info: {
    displayName: 'SideComponent';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    brandIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    brandTitle: Schema.Attribute.String;
    slides: Schema.Attribute.Component<'authentication.slides', true>;
  };
}

export interface AuthenticationSlides extends Struct.ComponentSchema {
  collectionName: 'components_authentication_slides';
  info: {
    displayName: 'slides';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlogPageBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_blog_sections';
  info: {
    displayName: 'BlogSection';
  };
  attributes: {
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.Text;
    posts: Schema.Attribute.Component<'blog-page.post', true>;
  };
}

export interface BlogPagePost extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_posts';
  info: {
    displayName: 'post';
  };
  attributes: {
    conclusion: Schema.Attribute.Text;
    contentAfterQuote: Schema.Attribute.Text;
    contentFinal: Schema.Attribute.Text;
    contentIntro: Schema.Attribute.Text;
    contentResources: Schema.Attribute.Text;
    contentResourcesList: Schema.Attribute.Component<
      'landing-page.array',
      true
    >;
    date: Schema.Attribute.Date;
    excerpt: Schema.Attribute.Text;
    featuredImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    image1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image1Reference: Schema.Attribute.String;
    image2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image2Reference: Schema.Attribute.String;
    imageHeader: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    link: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    quoteReference: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactPageForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    contactImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    emailLabel: Schema.Attribute.String;
    emailPlaceholder: Schema.Attribute.String;
    failureMessage: Schema.Attribute.String;
    firstNameLabel: Schema.Attribute.String;
    firstNamePlaceholder: Schema.Attribute.String;
    formTitle: Schema.Attribute.String;
    lastNameLabel: Schema.Attribute.String;
    lastNamePlaceholder: Schema.Attribute.String;
    messageLabel: Schema.Attribute.String;
    messagePlaceholder: Schema.Attribute.String;
    submitButtonLabel: Schema.Attribute.String;
    successMessage: Schema.Attribute.String;
  };
}

export interface FooterFooterSections extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_sections';
  info: {
    displayName: 'FooterSections';
  };
  attributes: {
    links: Schema.Attribute.Component<'footer.links', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface FooterSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'SocialLinks';
  };
  attributes: {
    alt: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface GlobalFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_global_faq_items';
  info: {
    displayName: 'FAQItem';
  };
  attributes: {
    answer: Schema.Attribute.String;
    question: Schema.Attribute.String;
  };
}

export interface GlobalFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_global_faq_sections';
  info: {
    displayName: 'FAQSection';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'global.faq-item', true>;
    key: Schema.Attribute.Enumeration<
      [
        'landing',
        'pricing',
        'contactUs',
        'imageCreation',
        'videoCreation',
        'brandDesigner',
        'contentWriter',
        'ui_ux',
        'seo',
        'strategyAssistant',
      ]
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageArray extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_arrays';
  info: {
    displayName: 'array';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface LandingPageAssistantItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_assistant_items';
  info: {
    displayName: 'AssistantItem';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    group: Schema.Attribute.Enumeration<['top', 'bottom', 'middle']>;
    name: Schema.Attribute.String;
  };
}

export interface LandingPageAssistantSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_assistant_sections';
  info: {
    displayName: 'AssistantSection';
  };
  attributes: {
    assistants: Schema.Attribute.Component<'landing-page.assistant-item', true>;
    headingHighlight: Schema.Attribute.String;
    headingPost: Schema.Attribute.String;
    headingPre: Schema.Attribute.String;
  };
}

export interface LandingPageCardItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_card_items';
  info: {
    displayName: 'CardItem';
  };
  attributes: {
    borderImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageCarousal extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_carousals';
  info: {
    displayName: 'Carousal';
  };
  attributes: {
    images1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    images2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface LandingPageDownloadSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_download_sections';
  info: {
    displayName: 'DownloadSection';
  };
  attributes: {
    appStoreImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    appStoreUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    googlePlayImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    googlePlayUrl: Schema.Attribute.String;
    phoneImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    preTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageHero extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    announcementIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    announcementText: Schema.Attribute.String;
    ctaButtonText: Schema.Attribute.String;
    ctaInputPlaceholder: Schema.Attribute.Text;
    ctaLink: Schema.Attribute.String;
    ctaSecondaryText: Schema.Attribute.String;
    earlyAccessLink: Schema.Attribute.String;
    earlyAccessText: Schema.Attribute.String;
    mainDescription: Schema.Attribute.String;
    mainHeading: Schema.Attribute.String;
    showAnnouncement: Schema.Attribute.Boolean;
  };
}

export interface LandingPageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {};
}

export interface LandingPagePlanItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_plan_items';
  info: {
    displayName: 'PlanItem';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'landing-page.array', true>;
    buttonLabel: Schema.Attribute.String;
    link: Schema.Attribute.String;
    plan: Schema.Attribute.String;
    price: Schema.Attribute.String;
  };
}

export interface LandingPageStackCard extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_stack_cards';
  info: {
    displayName: 'StackCard';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    num: Schema.Attribute.String;
    para: Schema.Attribute.Text;
    type: Schema.Attribute.String;
  };
}

export interface LandingPageStackSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_stack_sections';
  info: {
    displayName: 'StackSection';
  };
  attributes: {
    card: Schema.Attribute.Component<'landing-page.stack-card', true>;
    subtitle: Schema.Attribute.Text;
    titleline1: Schema.Attribute.String;
    titleline2: Schema.Attribute.String;
  };
}

export interface LandingPageTemplateItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_template_items';
  info: {
    displayName: 'TemplateItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    layout: Schema.Attribute.Enumeration<
      ['website', 'lummi', 'brands', 'social ', 'slides']
    >;
    slides: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    layoutVariant: Schema.Attribute.Enumeration<
      ['variant-1', 'variant-2', 'variant-3']
    >;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    role: Schema.Attribute.String;
  };
}

export interface LandingPageTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_testimonials_sections';
  info: {
    displayName: 'TestimonialsSection';
  };
  attributes: {
    headingMain: Schema.Attribute.String;
    headingPre: Schema.Attribute.String;
    testimonial: Schema.Attribute.Component<'landing-page.testimonials', true>;
  };
}

export interface LandingPageWorkCard extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_work_cards';
  info: {
    displayName: 'WorkCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    desktopManualImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    desktopProImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    mobileManualImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    mobileProImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface MediaPageCreationCard extends Struct.ComponentSchema {
  collectionName: 'components_media_page_creation_cards';
  info: {
    displayName: 'CreationCard';
  };
  attributes: {
    button_text: Schema.Attribute.Component<'landing-page.array', true>;
    id_number: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface MediaPageCreationSection extends Struct.ComponentSchema {
  collectionName: 'components_media_page_creation_sections';
  info: {
    displayName: 'CreationSection';
  };
  attributes: {
    cards: Schema.Attribute.Component<'media-page.creation-card', true>;
    cta_label: Schema.Attribute.String;
    cta_secondary_label: Schema.Attribute.String;
    key: Schema.Attribute.String;
    stats_heading: Schema.Attribute.String;
    stats_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    stats_paragraph: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title_highlight: Schema.Attribute.String;
    title_post: Schema.Attribute.String;
    title_pre: Schema.Attribute.String;
  };
}

export interface MediaPageDownloadSection extends Struct.ComponentSchema {
  collectionName: 'components_media_page_download_sections';
  info: {
    displayName: 'DownloadSection';
  };
  attributes: {
    arrow_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    cta_label: Schema.Attribute.String;
    cta_link: Schema.Attribute.String;
    hero_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    key: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MediaPageHero extends Struct.ComponentSchema {
  collectionName: 'components_media_page_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String;
    key: Schema.Attribute.String;
    leftImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mainImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    placeholderPrompt: Schema.Attribute.Text;
    rightImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface MediaPageScrollCard extends Struct.ComponentSchema {
  collectionName: 'components_media_page_scroll_cards';
  info: {
    displayName: 'ScrollCard';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    id_number: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    side: Schema.Attribute.Enumeration<['left', 'right']>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MediaPageScrollSection extends Struct.ComponentSchema {
  collectionName: 'components_media_page_scroll_sections';
  info: {
    displayName: 'ScrollSection';
  };
  attributes: {
    cards: Schema.Attribute.Component<'media-page.scroll-card', true>;
    key: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MediaPageToolkitSection extends Struct.ComponentSchema {
  collectionName: 'components_media_page_toolkit_sections';
  info: {
    displayName: 'ToolkitSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    key: Schema.Attribute.String;
    tabs: Schema.Attribute.Component<'media-page.toolkit-tab', true>;
  };
}

export interface MediaPageToolkitTab extends Struct.ComponentSchema {
  collectionName: 'components_media_page_toolkit_tabs';
  info: {
    displayName: 'ToolkitTab';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'landing-page.array', true>;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PricingPageFeatureRow extends Struct.ComponentSchema {
  collectionName: 'components_pricing_page_feature_rows';
  info: {
    displayName: 'feature_row';
  };
  attributes: {
    creator_plan: Schema.Attribute.String;
    creatorplan_icon: Schema.Attribute.Enumeration<['none', 'tick', 'cross']>;
    enterprise_plan: Schema.Attribute.String;
    enterpriseplan_icon: Schema.Attribute.Enumeration<
      ['none', 'tick', 'cross']
    >;
    feature_name: Schema.Attribute.String;
    free_plan: Schema.Attribute.String;
    freeplan_icon: Schema.Attribute.Enumeration<['none', 'tick', 'cross']>;
    icon_type: Schema.Attribute.Enumeration<
      [
        'none',
        'tick',
        'cross',
        'info',
        'play',
        'info_cross',
        'info_tick',
        'play_cross',
        'play_tick',
      ]
    >;
    is_highlighted: Schema.Attribute.Boolean;
    starter_plan: Schema.Attribute.String;
    starterplan_icon: Schema.Attribute.Enumeration<['none', 'tick', 'cross']>;
  };
}

export interface PricingPageHero extends Struct.ComponentSchema {
  collectionName: 'components_pricing_page_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PricingPagePlanHeader extends Struct.ComponentSchema {
  collectionName: 'components_pricing_page_plan_headers';
  info: {
    displayName: 'plan_header';
  };
  attributes: {
    is_highlighted: Schema.Attribute.Boolean;
    plan_name: Schema.Attribute.String;
  };
}

export interface PricingPagePlansPage extends Struct.ComponentSchema {
  collectionName: 'components_pricing_page_plans_pages';
  info: {
    displayName: 'plans_page';
  };
  attributes: {
    plan_header: Schema.Attribute.Component<'pricing-page.plan-header', true>;
    plan_sections: Schema.Attribute.Component<
      'pricing-page.plans-section',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface PricingPagePlansSection extends Struct.ComponentSchema {
  collectionName: 'components_pricing_page_plans_sections';
  info: {
    displayName: 'plans_section';
  };
  attributes: {
    features: Schema.Attribute.Component<'pricing-page.feature-row', true>;
    title: Schema.Attribute.String;
  };
}

export interface SignupButtonConfig extends Struct.ComponentSchema {
  collectionName: 'components_signup_button_configs';
  info: {
    displayName: 'ButtonConfig';
  };
  attributes: {
    loadingText: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SignupFormField extends Struct.ComponentSchema {
  collectionName: 'components_signup_form_fields';
  info: {
    displayName: 'FormField';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
    type: Schema.Attribute.String;
  };
}

export interface SignupLinkConfig extends Struct.ComponentSchema {
  collectionName: 'components_signup_link_configs';
  info: {
    displayName: 'LinkConfig';
  };
  attributes: {
    linkText: Schema.Attribute.String;
    preText: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'assistant-page.assistant-content': AssistantPageAssistantContent;
      'assistant-page.assistant-hero-item': AssistantPageAssistantHeroItem;
      'assistant-page.assistant-work': AssistantPageAssistantWork;
      'assistant-page.image-card': AssistantPageImageCard;
      'assistant-page.smart-support': AssistantPageSmartSupport;
      'assistant-page.work-card': AssistantPageWorkCard;
      'assistant-page.work-flow': AssistantPageWorkFlow;
      'assistant-page.work-flow-item': AssistantPageWorkFlowItem;
      'authentication.side-component': AuthenticationSideComponent;
      'authentication.slides': AuthenticationSlides;
      'blog-page.blog-section': BlogPageBlogSection;
      'blog-page.post': BlogPagePost;
      'contact-page.form': ContactPageForm;
      'footer.footer-sections': FooterFooterSections;
      'footer.links': FooterLinks;
      'footer.social-links': FooterSocialLinks;
      'global.faq-item': GlobalFaqItem;
      'global.faq-section': GlobalFaqSection;
      'landing-page.array': LandingPageArray;
      'landing-page.assistant-item': LandingPageAssistantItem;
      'landing-page.assistant-section': LandingPageAssistantSection;
      'landing-page.card-item': LandingPageCardItem;
      'landing-page.carousal': LandingPageCarousal;
      'landing-page.download-section': LandingPageDownloadSection;
      'landing-page.hero': LandingPageHero;
      'landing-page.hero-section': LandingPageHeroSection;
      'landing-page.plan-item': LandingPagePlanItem;
      'landing-page.stack-card': LandingPageStackCard;
      'landing-page.stack-section': LandingPageStackSection;
      'landing-page.template-item': LandingPageTemplateItem;
      'landing-page.testimonials': LandingPageTestimonials;
      'landing-page.testimonials-section': LandingPageTestimonialsSection;
      'landing-page.work-card': LandingPageWorkCard;
      'media-page.creation-card': MediaPageCreationCard;
      'media-page.creation-section': MediaPageCreationSection;
      'media-page.download-section': MediaPageDownloadSection;
      'media-page.hero': MediaPageHero;
      'media-page.scroll-card': MediaPageScrollCard;
      'media-page.scroll-section': MediaPageScrollSection;
      'media-page.toolkit-section': MediaPageToolkitSection;
      'media-page.toolkit-tab': MediaPageToolkitTab;
      'pricing-page.feature-row': PricingPageFeatureRow;
      'pricing-page.hero': PricingPageHero;
      'pricing-page.plan-header': PricingPagePlanHeader;
      'pricing-page.plans-page': PricingPagePlansPage;
      'pricing-page.plans-section': PricingPagePlansSection;
      'signup.button-config': SignupButtonConfig;
      'signup.form-field': SignupFormField;
      'signup.link-config': SignupLinkConfig;
    }
  }
}
