import { defineCollection, z } from 'astro:content';

const sectionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    microcopy: z.string().optional(),
    description: z.string().optional(),
    // Hero specific
    cta: z.string().optional(),
    imageAlt: z.string().optional(),
    // For who / Problem / Upcoming items
    items: z
      .array(
        z.object({
          title: z.string().optional(),
          text: z.string().optional(),
          description: z.string().optional(),
          icon: z.string().optional(),
        })
      )
      .optional(),
    // Solution features
    features: z
      .array(
        z.object({
          microcopy: z.string(),
          title: z.string(),
          description: z.string(),
          image: z.string(),
          mobileImage: z.string(),
        })
      )
      .optional(),
    // Upcoming badge
    badge: z.string().optional(),
    // Newsletter specific
    namePlaceholder: z.string().optional(),
    emailPlaceholder: z.string().optional(),
    professionPlaceholder: z.string().optional(),
    note: z.string().optional(),
    privacyLabel: z.string().optional(),
    benefitsTitle: z.string().optional(),
    benefits: z
      .array(
        z.object({
          text: z.string(),
          icon: z.string(),
        })
      )
      .optional(),
    // FAQ items
    faqItems: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional(),
  }),
});

const metaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    siteUrl: z.string(),
    title: z.string(),
    description: z.string(),
    ogImage: z.string(),
    keywords: z.string(),
    nav: z.object({
      items: z.array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      ),
      signup: z.string(),
    }),
    footer: z.object({
      brand: z.string(),
    }),
  }),
});

export const collections = {
  sections: sectionsCollection,
  meta: metaCollection,
};
