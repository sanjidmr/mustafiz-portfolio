import { Project, CaseStudy, ExpertiseItem, ServiceItem, ToolItem, ProcessStep, Testimonial } from '../types';

export const EXPERTISE_LIST: ExpertiseItem[] = [
  {
    id: 'exp-1',
    number: '01',
    title: 'Brand Identity',
    description: 'Constructing enduring visual identities that reflect core brand DNA, establish recognition, and forge instant emotional affinity.',
    deliverables: ['Logo Systems', 'Brand Guidelines', 'Typography Hierarchy', 'Color Chemistry'],
    iconName: 'Sparkles',
  },
  {
    id: 'exp-2',
    number: '02',
    title: 'Graphic Design',
    description: 'Precision layout craft, print collateral, typography treatments, and visual compositions designed with meticulous editorial balance.',
    deliverables: ['Editorial Design', 'Packaging & Labels', 'Brochures & Decks', 'Poster Art'],
    iconName: 'Layout',
  },
  {
    id: 'exp-3',
    number: '03',
    title: 'Social Media Design',
    description: 'Thumb-stopping feed layouts, carousel storytelling systems, and high-impact reels assets built for maximum engagement.',
    deliverables: ['Instagram Systems', 'Carousel Guides', 'Banner Suites', 'Motion Graphics Assets'],
    iconName: 'Share2',
  },
  {
    id: 'exp-4',
    number: '04',
    title: 'Marketing Creative',
    description: 'Translating strategic value propositions into compelling visual narratives that nurture prospects down the conversion funnel.',
    deliverables: ['Campaign Collateral', 'Sales Enablement', 'Visual Pitch Decks', 'Product One-Pagers'],
    iconName: 'Target',
  },
  {
    id: 'exp-5',
    number: '05',
    title: 'Advertising Design',
    description: 'High-conversion visual creative for Meta, Google, and display networks engineered to slash CPA and scale ROI.',
    deliverables: ['Direct-Response Ads', 'A/B Test Variations', 'Retargeting Creative', 'Interactive Ad Units'],
    iconName: 'Megaphone',
  },
  {
    id: 'exp-6',
    number: '06',
    title: 'Content Design',
    description: 'Structured visual information, infographic storytelling, and educational assets designed for effortless comprehension.',
    deliverables: ['Data Visualizations', 'Infographics', 'Explainer Visuals', 'Micro-Content Assets'],
    iconName: 'FileText',
  },
  {
    id: 'exp-7',
    number: '07',
    title: 'Digital Marketing',
    description: 'Multi-channel acquisition strategies combining audience persona research, paid media placement, and continuous growth analytics.',
    deliverables: ['Meta Ads Funnels', 'Audience Segmentation', 'Conversion Architecture', 'ROAS Optimization'],
    iconName: 'TrendingUp',
  },
  {
    id: 'exp-8',
    number: '08',
    title: 'Campaign Creative',
    description: 'Holistic seasonal and product launch visual frameworks that synchronize storytelling seamlessly across digital touchpoints.',
    deliverables: ['Launch Key Visuals', 'Multi-Platform Toolkits', 'Teaser Sequences', 'Event Creative'],
    iconName: 'Flame',
  },
  {
    id: 'exp-9',
    number: '09',
    title: 'Visual Communication',
    description: 'Distilling intricate ideas, product mechanics, and enterprise messages into clear, punchy, memorable visual metaphors.',
    deliverables: ['Concept Diagrams', 'Brand Iconography', 'Storyboards', 'Executive Presentations'],
    iconName: 'Eye',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Brand Identity Design',
    shortDesc: 'Complete foundational brand systems from scratch or full brand refreshes that command attention.',
    deliverables: ['Master Logo & Variations', 'Primary & Secondary Palette', 'Typography Pairing Guide', 'Comprehensive Brand Manual', 'Stationery Suite'],
    typicalTimeline: '2–3 Weeks',
    iconName: 'Compass',
  },
  {
    id: 'srv-2',
    title: 'Logo Design',
    shortDesc: 'Distinctive, memorable mark and wordmark architecture tailored to your unique positioning.',
    deliverables: ['3 Unique Concept Directions', 'Vector Master Files (SVG, EPS, AI)', 'Monochrome & Reversed Specs', 'Favicon & Social App Icons'],
    typicalTimeline: '1–2 Weeks',
    iconName: 'Feather',
  },
  {
    id: 'srv-3',
    title: 'Social Media Creative',
    shortDesc: 'Aesthetic, high-velocity social templates and monthly content suites calibrated for your niche.',
    deliverables: ['Grid Planning Aesthetic', 'Figma & Canva Template Library', 'Carousel Templates (10+ slides)', 'Story & Reel Cover Systems'],
    typicalTimeline: '1–2 Weeks',
    iconName: 'Instagram',
  },
  {
    id: 'srv-4',
    title: 'Social Media Marketing',
    shortDesc: 'Data-informed organic growth strategy, content calendar orchestration, and community resonance.',
    deliverables: ['Channel Growth Audit', 'Monthly Content Calendar', 'Hashtag & Keyword Blueprint', 'Community Growth Playbook'],
    typicalTimeline: 'Ongoing / Monthly',
    iconName: 'Activity',
  },
  {
    id: 'srv-5',
    title: 'Advertising Creative',
    shortDesc: 'High-performing ad banners and motion clips designed strictly to hook viewers and boost click-through.',
    deliverables: ['Meta & TikTok Ready Aspect Ratios', 'Hook Variation Testing Matrix', 'Static & Animated Variations', 'Conversion-Optimized Copy Prompts'],
    typicalTimeline: '3–5 Days',
    iconName: 'Zap',
  },
  {
    id: 'srv-6',
    title: 'Marketing Campaign Design',
    shortDesc: 'End-to-end creative direction and digital assets for seasonal promotions, product drops, and brand activations.',
    deliverables: ['Master Campaign Key Visual', 'Omnichannel Asset Kit', 'Landing Page Creative Direction', 'Promotional Banner Suite'],
    typicalTimeline: '2–3 Weeks',
    iconName: 'Layers',
  },
  {
    id: 'srv-7',
    title: 'Content Design',
    shortDesc: 'Educational visual assets, infographics, and editorial whitepapers that establish undeniable domain authority.',
    deliverables: ['Infographic Storytelling', 'Lead Magnet E-Books', 'Case Study Decks', 'Carousel Breakdown Cards'],
    typicalTimeline: '1–2 Weeks',
    iconName: 'BookOpen',
  },
  {
    id: 'srv-8',
    title: 'Digital Marketing Strategy',
    shortDesc: 'Comprehensive acquisition architecture merging creative testing, budget allocation, and conversion tracking.',
    deliverables: ['Funnel Architecture Blueprint', 'Target Audience Persona Matrix', 'Campaign KPI Projections', 'Paid Media Media Plan'],
    typicalTimeline: '1–2 Weeks',
    iconName: 'BarChart3',
  },
  {
    id: 'srv-9',
    title: 'Promotional Graphics',
    shortDesc: 'Polished promotional material for sales, seasonal discounts, flash events, and partner announcements.',
    deliverables: ['Web Banners (All IAB Sizes)', 'Email Header Graphics', 'Digital Posters & Flyers', 'Partner Co-branding Kits'],
    typicalTimeline: '3–5 Days',
    iconName: 'Percent',
  },
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Lumina Artisanal Roastery',
    category: 'Branding',
    client: 'Lumina Coffee Roasters',
    year: '2025',
    shortDescription: 'Modern minimalist identity and premium eco-friendly packaging system for a specialty roastery.',
    coverImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=80&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&q=80&auto=format&fit=crop'
    ],
    overview: 'Lumina required an overhaul to pivot from a local cafe into an upscale direct-to-consumer subscription brand. The identity needed to embody Scandinavian minimalism, warm artisanal craftsmanship, and modern shelf-appeal.',
    challenge: 'Specialty coffee is saturated with kraft-paper cliches. The challenge was creating a sophisticated typographic language that conveyed single-origin provenance while remaining accessible to young urban coffee enthusiasts.',
    creativeDirection: 'Utilized warm stone neutrals with high-contrast obsidian typography and an intentional terracotta/orange seal accent that reflects bean roast intensity. Custom geometric glyphs represent flavor notes.',
    marketingGoal: 'Increase online subscription conversion rate and elevate retail shelf visibility in boutique grocers.',
    finalSolution: 'A comprehensive brand identity kit with master wordmark, custom iconography for origin flavor profiles, tactile foiled coffee bag packaging, and a modular digital design system.',
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    metrics: [
      { label: 'E-commerce Conversion', value: '+42%' },
      { label: 'Retail Shelf Pick-rate', value: '+65%' },
      { label: 'Subscription Signups', value: '3,200+' }
    ],
    tags: ['Brand Identity', 'Packaging Design', 'Typography', 'DTC']
  },
  {
    id: 'proj-2',
    title: 'Aura Skincare Launch Campaign',
    category: 'Social Media',
    client: 'Aura Botanica',
    year: '2025',
    shortDescription: 'High-aesthetic 30-day Instagram launch sequence driving organic engagement and waitlist subscriptions.',
    coverImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1200&q=80&auto=format&fit=crop'
    ],
    overview: 'Aura Botanica launched a 4-piece bio-peptide serum line. We engineered an editorial social media visual system combining clean ingredient macro photography, educational carousels, and aesthetic typography.',
    challenge: 'Building pre-launch anticipation with zero paid ad budget in the first 14 days, relying solely on organic shareability, save-rates, and visual curiosity.',
    creativeDirection: 'Clean clinical editorial with organic warmth: spacious cream canvases, subtle orange light leaks, ultra-crisp typography, and ingredient transparency breakdown cards.',
    marketingGoal: 'Generate 5,000 pre-launch waitlist signups and exceed a 4.5% organic save-rate on educational carousel assets.',
    finalSolution: 'A 36-post Instagram rollout grid, 8 high-density educational carousels, animated story countdown templates, and influencer PR unboxing box graphics.',
    toolsUsed: ['Figma', 'Adobe Photoshop', 'Canva', 'ChatGPT'],
    metrics: [
      { label: 'Waitlist Subscribers', value: '7,450' },
      { label: 'Average Carousel Save Rate', value: '6.8%' },
      { label: 'Total Launch Reach', value: '280K+' }
    ],
    tags: ['Social Media Design', 'Content Strategy', 'Canva Systems', 'Editorial Layout']
  },
  {
    id: 'proj-3',
    title: 'Vanguard SaaS Performance Ad Suite',
    category: 'Advertising',
    client: 'Vanguard Systems',
    year: '2025',
    shortDescription: 'Direct-response Meta & LinkedIn ad campaign generating high-intent demo requests for enterprise software.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80&auto=format&fit=crop'
    ],
    overview: 'Vanguard provides AI-driven inventory analytics. Their existing ads looked like generic stock photos and generated high cost-per-lead. We overhauled their creative strategy with high-contrast data visualizers.',
    challenge: 'B2B enterprise decision-makers scroll past generic software screenshots. We needed visual hooks that instantly dramatized the financial cost of inventory stockouts.',
    creativeDirection: 'Bold dark-and-light contrasting UI snippets, neon orange urgency callouts, punchy single-sentence hooks, and authentic side-by-side comparison tables.',
    marketingGoal: 'Cut Customer Acquisition Cost (CAC) by 25% and boost qualified demo bookings from CTOs and supply chain leaders.',
    finalSolution: 'A matrix of 24 ad variations categorized by buyer pain points (accuracy, speed, cost). Implemented rapid creative A/B testing on Meta Ads & Google Display.',
    toolsUsed: ['Figma', 'Meta Ads Manager', 'Adobe Illustrator', 'Google Ads'],
    metrics: [
      { label: 'Cost Per Acquisition', value: '-34%' },
      { label: 'Click-Through Rate (CTR)', value: '3.6%' },
      { label: 'Demo Bookings Closed', value: '142' }
    ],
    tags: ['Advertising Creative', 'Meta Ads', 'B2B Performance', 'A/B Creative Testing']
  },
  {
    id: 'proj-4',
    title: 'Next Solution MYM Agency Rebrand',
    category: 'Marketing',
    client: 'Next Solution MYM',
    year: '2024–2025',
    shortDescription: 'Comprehensive marketing identity and client pitch visual ecosystem for Next Solution MYM.',
    coverImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop'
    ],
    overview: 'As Chief Architect at Next Solution MYM, led the internal brand repositioning towards an agile full-service digital growth firm serving international clients.',
    challenge: 'Bridging the divide between high-end aesthetic design agencies and data-driven performance marketing shops into one coherent value proposition.',
    creativeDirection: 'High-contrast monochrome typography framed by signature Next Solution electric orange accents. Clean grid layouts, brutalist editorial touches, and bold kinetic statements.',
    marketingGoal: 'Elevate average deal size by 2x and establish high perceived agency authority across digital channels.',
    finalSolution: 'Complete corporate identity manual, proposal deck template system, social campaign design system, and multi-channel marketing collateral.',
    toolsUsed: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'ChatGPT'],
    metrics: [
      { label: 'Client Inbound Volume', value: '+85%' },
      { label: 'Average Retainer Value', value: '2.4x' },
      { label: 'Proposal Close Rate', value: '71%' }
    ],
    tags: ['Marketing Strategy', 'Agency Identity', 'Pitch Decks', 'Creative Direction']
  },
  {
    id: 'proj-5',
    title: 'Apex Athletics Summer Drop',
    category: 'Graphic Design',
    client: 'Apex Performance Wear',
    year: '2025',
    shortDescription: 'Bold kinetic typography and apparel graphics for a limited-run technical sportswear capsule.',
    coverImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200&q=80&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1483721074573-586540da5703?w=1200&q=80&auto=format&fit=crop'
    ],
    overview: 'Apex required a striking graphic language for their summer technical running collection, including garment typography, hangtags, retail store posters, and digital launch flyers.',
    challenge: 'Designing graphics that balanced high-energy athletic dynamism without looking like generic gym apparel brands.',
    creativeDirection: 'Futuristic technical typography, coordinate stamps, isometric grids, and orange safety reflective accents inspired by endurance ultra-marathons.',
    marketingGoal: 'Drive urgency for a 48-hour flash drop and sell out the 1,500-unit limited batch.',
    finalSolution: '5 apparel chest/back graphic lockups, technical hangtag system, print posters, and digital countdown promotional flyers.',
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop'],
    metrics: [
      { label: 'Drop Sell-Out Time', value: '38 Hours' },
      { label: 'Organic Shares', value: '4,100+' },
      { label: 'Revenue Generated', value: '$84,000' }
    ],
    tags: ['Graphic Design', 'Apparel Graphics', 'Print Collateral', 'Typography']
  },
  {
    id: 'proj-6',
    title: 'Solstice Botanical Drinks Identity',
    category: 'Branding',
    client: 'Solstice Beverage Co.',
    year: '2024',
    shortDescription: 'Refined zero-sugar functional beverage identity with vibrant color systems and can packaging.',
    coverImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200&q=80&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=1200&q=80&auto=format&fit=crop'
    ],
    overview: 'Solstice creates botanical-infused sparkling tonics for wellness-minded individuals. We created a brand identity that highlights organic purity while standing out on competitive supermarket shelves.',
    challenge: 'Differentiating from legacy sodas while looking sophisticated enough for evening non-alcoholic mocktails.',
    creativeDirection: 'Editorial serif wordmark paired with vibrant citrus orange and sage green hues, minimalist botanical outlines, and clean matte packaging finishes.',
    marketingGoal: 'Position as the go-to mindful beverage for Gen Z and millennial tastemakers.',
    finalSolution: 'Can label series for 3 SKUs, wholesale retail sell-sheets, direct-to-consumer unboxing shipper boxes, and Instagram reveal graphics.',
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    metrics: [
      { label: 'Distributor Pickups', value: '45 Outlets' },
      { label: 'Launch Day Engagement', value: '11.4%' },
      { label: 'Press Features', value: '8 Publications' }
    ],
    tags: ['Branding', 'Packaging', 'Label Design', 'Visual Communication']
  },
  {
    id: 'proj-7',
    title: 'FinTech Pulse Social Content Kit',
    category: 'Social Media',
    client: 'Pulse Finance',
    year: '2025',
    shortDescription: 'Engaging financial literacy infographics and carousel framework for young professionals.',
    coverImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80&auto=format&fit=crop'
    ],
    overview: 'Pulse Finance needed to turn boring personal finance topics (compound interest, tax optimization, index funds) into viral, high-value visual cards on LinkedIn and Instagram.',
    challenge: 'Financial topics are notoriously complex and dry. Our design had to simplify formulas into instant visual diagrams readable in under 5 seconds.',
    creativeDirection: 'Swiss grid clarity, subtle warm paper background, deep charcoal fonts, and high-impact orange pointer highlights to guide the eye.',
    marketingGoal: 'Build organic thought leadership and attract mobile app downloads without paid ads.',
    finalSolution: 'A reusable 50-slide Canva and Figma design library, 12 breakdown carousels, and LinkedIn thought leader banners for the founding team.',
    toolsUsed: ['Figma', 'Canva', 'Adobe Illustrator', 'Gemini'],
    metrics: [
      { label: 'LinkedIn Follower Growth', value: '+320%' },
      { label: 'App Install Attribution', value: '4,100+' },
      { label: 'Post Reshares', value: '18,500+' }
    ],
    tags: ['Social Media Design', 'Infographics', 'Canva Systems', 'Content Design']
  },
  {
    id: 'proj-8',
    title: 'OmniGrowth Global Conference Campaign',
    category: 'Advertising',
    client: 'OmniGrowth Summit',
    year: '2024',
    shortDescription: 'Multi-platform paid campaign and speaker announcement creative for an international marketing conference.',
    coverImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80&auto=format&fit=crop'
    ],
    overview: 'OmniGrowth Summit gathered 2,000+ digital marketers and founders. We led the digital advertising creative strategy to sell out early-bird and VIP tier tickets.',
    challenge: 'Short 8-week promotional runway with fierce competition from virtual webinars and other business summits.',
    creativeDirection: 'Editorial speaker portrait treatments with high-contrast monochrome tones and dynamic orange typography overlays that signaled exclusive authority.',
    marketingGoal: 'Sell out all 2,000 conference tickets and generate 10,000+ livestream registrations.',
    finalSolution: 'Over 40 dynamic ad units across Meta, LinkedIn, and Twitter, including animated speaker reveal carousels, early-bird countdown banners, and VIP pass collateral.',
    toolsUsed: ['Adobe Photoshop', 'Figma', 'Meta Ads', 'Google Ads'],
    metrics: [
      { label: 'Ticket Revenue', value: '$340K+' },
      { label: 'Ad Blended ROAS', value: '4.8x' },
      { label: 'Sold Out Ahead', value: '12 Days Early' }
    ],
    tags: ['Advertising Creative', 'Campaign Creative', 'Event Marketing', 'Meta Ads']
  }
];

export const EDITABLE_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'Brand Identity & Market Repositioning',
    subtitle: 'From Local Cafe to High-Growth DTC Coffee Subscription',
    category: 'Brand Identity',
    client: 'Lumina Artisanal Roastery',
    duration: '6 Weeks',
    overview: 'Lumina Coffee Roasters was an esteemed local specialty shop that struggled to scale its direct-to-consumer packaged coffee sales online. Mustafizur Rahman was tapped to reconstruct their brand identity, packaging system, and digital presence to compete with venture-backed international coffee brands.',
    challenge: 'The specialty coffee market is heavily saturated. Most competitors relied on indistinguishable kraft pouches or loud novelty caricatures. Lumina needed a quiet, authoritative editorial presence that highlighted single-origin traceability while appealing to discerning young professionals willing to pay a premium.',
    creativeDirection: 'Minimalist Nordic editorial aesthetic. Warm oat-milk neutral backgrounds paired with stark obsidian serif typography, accented by a precision electric-orange seal inspired by bean crack temperature. Custom iconography was designed to categorize roast profiles (floral, chocolate, citrus, fermented) at a glance.',
    marketingGoal: 'Transform one-off online buyers into loyal recurring monthly subscribers, cut bounce rates on the product page, and earn prime shelf placement in premium independent retailers.',
    finalSolution: 'Developed a comprehensive 48-page brand guideline, bespoke logo marks, tactile foiled pouch packaging for 6 single-origins, an e-commerce subscription box design, and launch campaign assets for social & email channels.',
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'ChatGPT'],
    results: [
      { metric: '+42%', label: 'Online Store Conversion' },
      { metric: '3,200+', label: 'Active Monthly Subscribers' },
      { metric: '2.4x', label: 'Average Customer LTV' },
      { metric: '45+', label: 'Retail Outlets Stocking' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=80&auto=format&fit=crop',
    tags: ['Brand Identity', 'Packaging System', 'Typography Architecture', 'DTC Growth']
  },
  {
    id: 'cs-2',
    title: 'Social Media Organic & Paid Growth Campaign',
    subtitle: '30-Day Omnichannel Product Drop & Community Engine',
    category: 'Social Media Campaign',
    client: 'Aura Botanica Skincare',
    duration: '4 Weeks',
    overview: 'Aura Botanica, an indie bio-peptide beauty startup, prepared to unveil their signature facial recovery elixir. Working in synergy with Next Solution MYM, Mustafizur orchestrated a cohesive 30-day visual and paid media campaign to ignite viral word-of-mouth and convert social traffic into immediate pre-orders.',
    challenge: 'Indie beauty brands face intense ad fatigue on Instagram and TikTok. Stock-style product photography was yielding low click-through rates. The brand required authentic, educational visual storytelling that broke down complex biochemical peptide terminology into visually irresistible carousels.',
    creativeDirection: 'Elevated clean-girl editorial aesthetic. Macro texture photography showcasing dew and serum viscosity, combined with delicate typography, crisp scientific infographic overlays, and warm sunset-orange highlights that emphasized radiant skin rejuvenation.',
    marketingGoal: 'Surpass 5,000 email waitlist signups in 2 weeks and build a foundation of high-save organic content that lowered customer acquisition costs on paid channels.',
    finalSolution: 'Crafted 28 cohesive Instagram feed assets, 8 multi-slide educational carousels, 12 Meta ad video overlays, branded email launch templates, and unboxing card collateral for top micro-influencers.',
    toolsUsed: ['Figma', 'Adobe Photoshop', 'Meta Ads', 'Canva'],
    results: [
      { metric: '7,450', label: 'Pre-Order Waitlist Leads' },
      { metric: '6.8%', label: 'Average Carousel Save Rate' },
      { metric: '$0.84', label: 'Lead Cost on Meta Ads' },
      { metric: '280K+', label: 'Total Campaign Reach' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80&auto=format&fit=crop',
    tags: ['Social Media Design', 'Meta Ads Creative', 'Content Marketing', 'Canva Architecture']
  },
  {
    id: 'cs-3',
    title: 'B2B Performance Marketing Creative Suite',
    subtitle: 'Scaling High-Intent Demo Conversions for Enterprise SaaS',
    category: 'Marketing Creative',
    client: 'Vanguard Systems',
    duration: '8 Weeks',
    overview: 'Vanguard provides intelligent enterprise supply chain software. Their marketing team was spending heavily on Google and Meta Ads but facing escalating cost-per-lead due to cookie-cutter software screenshots that failed to stop busy supply chain directors from scrolling.',
    challenge: 'Software buyers are immune to generic dashboards. We needed creative assets that translated dry database analytics into high-stakes financial pain points—making the cost of software inaction visibly shocking within the first 1.5 seconds of viewing.',
    creativeDirection: 'Data-driven editorial urgency. High-contrast dark backgrounds with neon orange focal points highlighting real dollar losses and inventory bottlenecks. Clear, uncrowded side-by-side comparison graphics with bold typography that commanded executive attention.',
    marketingGoal: 'Reduce Cost-Per-Acquisition (CPA) by at least 25% while lifting demo qualification rates among companies with over $20M in inventory.',
    finalSolution: 'Developed an extensive creative testing matrix of 24 static and animated ads covering 3 primary psychological triggers (fear of stockout, speed to delivery, executive reporting). Provided turnkey assets optimized for LinkedIn In-Feed, Meta Story, and Google Display.',
    toolsUsed: ['Figma', 'Adobe Illustrator', 'Meta Ads Manager', 'Google Ads'],
    results: [
      { metric: '-34%', label: 'Reduction in Cost Per Lead' },
      { metric: '3.6%', label: 'Average Meta Ads CTR' },
      { metric: '142', label: 'Qualified Enterprise Demos' },
      { metric: '5.1x', label: 'Campaign Pipeline ROI' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop',
    tags: ['Advertising Creative', 'Performance Marketing', 'B2B SaaS', 'A/B Testing']
  },
  {
    id: 'cs-4',
    title: 'Digital Brand Launch & Omnichannel Activation',
    subtitle: 'Global Rollout for Next Solution MYM Growth Agency',
    category: 'Digital Brand Launch',
    client: 'Next Solution MYM',
    duration: 'Ongoing',
    overview: 'As Chief Architect at Next Solution MYM, Mustafizur directed the complete digital brand launch to expand the agency footprint into North American, European, and regional enterprise client networks.',
    challenge: 'Communicating the dual competitive advantage of deep artistic design craft combined with analytical digital marketing performance under one seamless identity.',
    creativeDirection: 'Precision Swiss-inspired grid layout, stark monochrome typography, and energetic brand-orange accents. Clean, honest layouts that allow real client campaign metrics to speak alongside bespoke graphic artistry.',
    marketingGoal: 'Establish authoritative brand positioning, generate inbound prospective client inquiries, and double average monthly client retainer value.',
    finalSolution: 'Created the master brand guidelines, modular pitch deck systems in Figma and Canva, social proof case study templates, and automated inbound funnel creative assets.',
    toolsUsed: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Gemini'],
    results: [
      { metric: '+85%', label: 'Inbound Project Inquiries' },
      { metric: '2.4x', label: 'Average Retainer Scale' },
      { metric: '71%', label: 'Proposal Win Rate' },
      { metric: '40+', label: 'Delivered Brand Projects' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80&auto=format&fit=crop',
    tags: ['Brand Strategy', 'Agency Launch', 'Omnichannel Strategy', 'Visual System']
  }
];

export const TOOLS_LIST: ToolItem[] = [
  {
    name: 'Adobe Photoshop',
    category: 'Design & Visual',
    roleInWorkflow: 'High-end raster manipulation, photo grading, product mockups, texture blending, and advanced visual compositing.',
    proficiency: 95,
    iconName: 'Image',
  },
  {
    name: 'Adobe Illustrator',
    category: 'Design & Visual',
    roleInWorkflow: 'Vector precision logo design, brand mark construction, custom typography glyphs, packaging dielines, and iconography.',
    proficiency: 94,
    iconName: 'PenTool',
  },
  {
    name: 'Figma',
    category: 'Design & Visual',
    roleInWorkflow: 'Modular marketing design systems, responsive UI components, social ad template libraries, and client presentation decks.',
    proficiency: 96,
    iconName: 'Figma',
  },
  {
    name: 'Canva',
    category: 'Design & Visual',
    roleInWorkflow: 'Client-empowerment design templates, rapid social media batching, brand kit handoffs, and agile marketing collateral.',
    proficiency: 92,
    iconName: 'Sparkles',
  },
  {
    name: 'Meta Ads',
    category: 'Advertising & Marketing',
    roleInWorkflow: 'Campaign structure design, creative A/B testing, custom audience retargeting, pixel setup, and ROAS budget optimization.',
    proficiency: 90,
    iconName: 'Target',
  },
  {
    name: 'Google Ads',
    category: 'Advertising & Marketing',
    roleInWorkflow: 'Display network responsive graphics, search campaign intent alignment, conversion tracking, and high-CTR ad copy pairing.',
    proficiency: 86,
    iconName: 'Search',
  },
  {
    name: 'ChatGPT',
    category: 'AI & Strategy',
    roleInWorkflow: 'Buyer persona ideation, creative angle brainstorming, ad copy hook variation generation, and market research synthesis.',
    proficiency: 93,
    iconName: 'Cpu',
  },
  {
    name: 'Gemini',
    category: 'AI & Strategy',
    roleInWorkflow: 'Visual creative concept expansion, trend analysis, multi-lingual marketing copy drafting, and campaign strategic scaffolding.',
    proficiency: 91,
    iconName: 'Bot',
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    summary: 'Deep immersion into brand DNA, business goals, and audience psychology.',
    actionItems: [
      'Conduct stakeholder interview & business audit',
      'Analyze target audience pain points & aspirations',
      'Define clear marketing KPIs (CTR, leads, brand recall)',
      'Review existing brand equity & past campaign data'
    ]
  },
  {
    step: '02',
    title: 'Research',
    summary: 'Competitive landscape mapping, visual benchmarking, and market positioning.',
    actionItems: [
      'Comprehensive competitor visual & messaging audit',
      'Identify whitespace opportunities in your industry',
      'Examine top-performing creative trends across platforms',
      'Formulate strategic creative brief & hypotheses'
    ]
  },
  {
    step: '03',
    title: 'Concept',
    summary: 'Translating strategy into distinct visual directions and narrative themes.',
    actionItems: [
      'Develop 2–3 unique moodboards and aesthetic directions',
      'Draft core headline hooks and visual metaphors',
      'Explore logo sketches and typography pairings',
      'Collaborative review & direction alignment'
    ]
  },
  {
    step: '04',
    title: 'Design',
    summary: 'Meticulous asset craft, vector precision, and cohesive system construction.',
    actionItems: [
      'Vector logo generation and comprehensive brand guidelines',
      'Multi-channel ad creative production (all aspect ratios)',
      'Packaging, collateral, and marketing asset development',
      'Refinement rounds based on optical and functional balance'
    ]
  },
  {
    step: '05',
    title: 'Launch',
    summary: 'Frictionless deployment across digital channels and print production.',
    actionItems: [
      'Preparation of organized master production files (SVG, EPS, PDF)',
      'Campaign setup on Meta Ads and ad networks',
      'Social rollout scheduling and template handoff',
      'Print prepress verification and dieline checking'
    ]
  },
  {
    step: '06',
    title: 'Optimize',
    summary: 'Data-guided iteration to maximize engagement, retention, and conversions.',
    actionItems: [
      'Monitor creative fatigue and click-through rates',
      'A/B test winning visual variants against new hooks',
      'Gather audience feedback and qualitative sentiment',
      'Deliver performance recap and phase-two growth recommendations'
    ]
  }
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Mustafizur is that rare creative unicorn who doesn\'t just make things look gorgeous—he obsessively cares about whether the design actually converts. Our Meta ad CTR doubled in under three weeks with his creative direction.',
    author: 'Tanvir Hossain',
    role: 'Founder & CEO',
    company: 'Next Wave E-commerce',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80&auto=format&fit=crop',
    highlightTag: 'Doubled Meta CTR'
  },
  {
    id: 't-2',
    quote: 'Working alongside Mustafizur at Next Solution MYM has been exceptional. His branding work for Lumina completely redefined how our target audience perceives the company. Clean, timeless, and strategically sound.',
    author: 'Shafique Ahmed',
    role: 'Managing Director',
    company: 'Next Solution MYM',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80&auto=format&fit=crop',
    highlightTag: 'Agency Leadership'
  },
  {
    id: 't-3',
    quote: 'The attention to detail is unmatched. From vector precision in Illustrator to understanding the exact visual psychology that stops people from scrolling on Instagram, Mustafizur delivers world-class creative work.',
    author: 'Elena Vance',
    role: 'Growth Marketing Lead',
    company: 'Aura Botanicals',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80&auto=format&fit=crop',
    highlightTag: '7.4K Pre-Orders'
  }
];
