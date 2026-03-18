export type Category = "All" | "Product" | "Lifestyle" | "Company" | "Style Guide";

export interface BlogPost {
  slug: string;
  category: Exclude<Category, "All">;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: number;
  content: { heading?: string; body: string }[];
}

export const CATEGORIES: Category[] = ["All", "Product", "Lifestyle", "Company", "Style Guide"];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "organic-cotton-collection",
    category: "Product",
    title: "Introducing Our Organic Cotton Collection: Comfort Meets Sustainability",
    excerpt: "Our new organic cotton line combines premium softness with eco-conscious manufacturing, giving you comfort you can feel good about.",
    author: "Elif Yilmaz",
    authorRole: "Product Designer",
    date: "2025-03-10",
    readTime: 8,
    content: [
      {
        heading: "Why Organic Cotton?",
        body: "Conventional cotton farming uses significant amounts of pesticides and water. Organic cotton is grown without harmful chemicals, uses less water, and is better for the farmers who grow it. We wanted to bring this quality to everyday comfort wear.",
      },
      {
        heading: "The YOGII Difference",
        body: "Our organic cotton is GOTS-certified and sourced from trusted farms. Each piece is pre-washed for extra softness and designed to get better with every wash. The result is a fabric that feels incredible from day one.",
      },
      {
        heading: "What's in the Collection",
        body: "The collection includes oversized tees, relaxed joggers, hoodies, and crew-neck sweatshirts. Available in our signature neutral palette plus three seasonal colors. Every piece is designed to mix and match effortlessly.",
      },
    ],
  },
  {
    slug: "fabric-technology-explained",
    category: "Product",
    title: "Inside Our Fabric Technology: What Makes YOGII Different",
    excerpt: "We've invested in advanced fabric blends that balance stretch, breathability, and durability. Here's how we engineered the perfect everyday fabric.",
    author: "Mert Kaya",
    authorRole: "Textile Engineer",
    date: "2025-03-05",
    readTime: 10,
    content: [
      {
        heading: "The Science of Comfort",
        body: "Comfort isn't just about softness — it's about how fabric moves, breathes, and holds its shape over time. We spent months testing different blends to find the perfect balance of cotton, modal, and elastane.",
      },
      {
        heading: "Four-Way Stretch",
        body: "Our signature blend includes 5% elastane for four-way stretch that moves with your body without losing shape. Whether you're lounging or on the move, the fabric adapts to you.",
      },
      {
        heading: "Built to Last",
        body: "We pre-shrink all fabrics and test for 50+ wash cycles. Our pieces are designed to maintain their color, shape, and softness long after purchase. Quality you can count on, season after season.",
      },
    ],
  },
  {
    slug: "building-a-comfort-brand",
    category: "Company",
    title: "Building YOGII: Our Journey from Idea to 50,000 Customers",
    excerpt: "How a simple idea about better everyday wear grew into a brand loved by tens of thousands of customers across Turkey.",
    author: "Ahmet Demir",
    authorRole: "Co-Founder",
    date: "2025-02-28",
    readTime: 12,
    content: [
      {
        heading: "The Problem We Saw",
        body: "We noticed that comfortable clothes often looked sloppy, and stylish clothes were rarely comfortable. We set out to prove that you don't have to choose between the two.",
      },
      {
        heading: "Starting Small",
        body: "YOGII started with just five essential pieces — a tee, hoodie, joggers, shorts, and a crew-neck. We focused on getting the fit and fabric absolutely right before expanding the line.",
      },
      {
        heading: "Growing with Our Community",
        body: "Every new product we launch is informed by customer feedback. Our community tells us what they want, and we build it. That's why our return rate stays under 3% — we make what people actually want to wear.",
      },
    ],
  },
  {
    slug: "sustainable-packaging",
    category: "Company",
    title: "Our Commitment to Sustainable Packaging",
    excerpt: "How we eliminated plastic from our packaging and what we're doing next to reduce our environmental footprint.",
    author: "Zeynep Arslan",
    authorRole: "Sustainability Lead",
    date: "2025-02-20",
    readTime: 9,
    content: [
      {
        heading: "No More Plastic",
        body: "As of 2025, every YOGII order ships in 100% recycled and recyclable packaging. We replaced plastic poly bags with compostable garment bags and switched to soy-based inks for all printing.",
      },
      {
        heading: "The Numbers",
        body: "This change has eliminated over 2 tonnes of single-use plastic from our supply chain annually. Our packaging now costs slightly more, but it's a cost we're happy to absorb for the environment.",
      },
      {
        heading: "What's Next",
        body: "We're working toward carbon-neutral shipping by end of 2025 and exploring take-back programs for worn garments. Sustainability isn't a destination — it's a journey we're committed to.",
      },
    ],
  },
  {
    slug: "capsule-wardrobe-guide",
    category: "Style Guide",
    title: "How to Build a Capsule Wardrobe with YOGII Essentials",
    excerpt: "Simplify your wardrobe with 15 versatile pieces that cover every occasion. Our guide to effortless everyday style.",
    author: "Selin Ozturk",
    authorRole: "Creative Director",
    date: "2025-02-15",
    readTime: 7,
    content: [
      {
        heading: "The 15-Piece Formula",
        body: "A capsule wardrobe isn't about having less — it's about having the right pieces. Start with 5 tops (mix of tees and long sleeves), 4 bottoms (joggers, shorts, chinos), 3 layers (hoodie, zip-up, light jacket), and 3 accessories.",
      },
      {
        heading: "Color Coordination",
        body: "Stick to a neutral base of black, white, grey, and navy. Add 1-2 accent colors that work with everything. Our seasonal palettes are designed to mix and match across the entire YOGII range.",
      },
      {
        heading: "Dress It Up or Down",
        body: "The beauty of well-made basics is versatility. Pair our premium tee with joggers for a relaxed look, or tuck it into chinos with clean sneakers for a more polished outfit. Same pieces, different energy.",
      },
    ],
  },
  {
    slug: "seasonal-color-trends",
    category: "Lifestyle",
    title: "Spring 2025 Color Trends: What We're Wearing This Season",
    excerpt: "An inside look at the colors defining this season and how we incorporated them into the YOGII spring collection.",
    author: "Can Yildiz",
    authorRole: "Design Lead",
    date: "2025-02-08",
    readTime: 6,
    content: [
      {
        heading: "Earthy Tones Are Here to Stay",
        body: "Terracotta, sage green, and warm beige continue to dominate. These grounded colors pair beautifully with neutrals and feel effortlessly put-together without trying too hard.",
      },
      {
        heading: "The Return of Soft Pastels",
        body: "Dusty lavender, pale blue, and blush pink are making a comeback in menswear and womenswear alike. We've introduced these across our tee and hoodie range for spring.",
      },
      {
        heading: "How to Wear Color",
        body: "If you're new to color, start with one colored piece and keep everything else neutral. A sage hoodie with black joggers and white sneakers is an easy, elevated look anyone can pull off.",
      },
    ],
  },
  {
    slug: "getting-started-with-yogii",
    category: "Style Guide",
    title: "Getting Started with YOGII: A Complete Guide",
    excerpt: "New to YOGII? This guide walks you through everything you need to know — from finding your size to building your first outfit.",
    author: "Deniz Celik",
    authorRole: "Brand Ambassador",
    date: "2025-02-01",
    readTime: 6,
    content: [
      {
        heading: "Step 1: Find Your Fit",
        body: "Check our size guide on the product page. We recommend measuring your favorite tee and comparing it to our charts. When in doubt, size up — our relaxed fit is designed with room to move.",
      },
      {
        heading: "Step 2: Start with the Essentials",
        body: "If you're new, start with our Essentials Bundle — a tee, hoodie, and joggers in matching tones. It's the easiest way to experience the YOGII quality and build your first outfit.",
      },
      {
        heading: "Step 3: Mix and Match",
        body: "All YOGII pieces are designed to work together. Our neutral palette means everything coordinates. Layer a zip-up over a tee, pair shorts with a crew-neck — the combinations are endless.",
      },
      {
        heading: "Step 4: Care for Your Pieces",
        body: "Wash cold, air dry, and your YOGII pieces will last for years. Check the care label in each garment for specific instructions. Proper care keeps the fabric soft and colors vibrant.",
      },
      {
        heading: "Tips for Your First Order",
        body: "Orders over 500 TL ship free. We offer hassle-free returns within 30 days. Follow us on social media for early access to drops and exclusive discounts. Welcome to the YOGII community!",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: Category): BlogPost[] {
  if (category === "All") return BLOG_POSTS;
  return BLOG_POSTS.filter((post) => post.category === category);
}
