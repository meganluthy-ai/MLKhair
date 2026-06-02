/**
 * Seed the MLK Hair blog with Megan as author, the three categories, and the
 * five launch posts from the build brief (in Megan's voice: science-first,
 * warm, plain-spoken, no em-dashes).
 *
 * Run once after the Sanity project + token are set in .env.local:
 *   npx tsx scripts/seed-blog.ts
 *
 * Re-running is safe: documents use fixed _id values and createOrReplace.
 */
import { writeClient } from "../sanity/lib/client";

type Line = { h2: string } | { p: string } | { ul: string[] };

function blocks(lines: Line[]) {
  return lines.map((line, i) => {
    if ("h2" in line) {
      return {
        _type: "block",
        _key: `b${i}`,
        style: "h2",
        markDefs: [],
        children: [{ _type: "span", _key: `b${i}s`, text: line.h2, marks: [] }],
      };
    }
    if ("ul" in line) {
      return line.ul.map((item, j) => ({
        _type: "block",
        _key: `b${i}l${j}`,
        style: "normal",
        listItem: "bullet",
        level: 1,
        markDefs: [],
        children: [{ _type: "span", _key: `b${i}l${j}s`, text: item, marks: [] }],
      }));
    }
    return {
      _type: "block",
      _key: `b${i}`,
      style: "normal",
      markDefs: [],
      children: [{ _type: "span", _key: `b${i}s`, text: line.p, marks: [] }],
    };
  }).flat();
}

const AUTHOR_ID = "author-megan-luthy";

const categories = [
  { _id: "category-hair-loss", title: "Hair Loss", slug: "hair-loss", description: "Thinning, shedding, and what actually causes it." },
  { _id: "category-scalp-health", title: "Scalp Health", slug: "scalp-health", description: "The foundation healthy hair grows from." },
  { _id: "category-products", title: "Products & At-Home Care", slug: "products", description: "What to use, and what to skip." },
];

const posts = [
  {
    _id: "post-trichologist-vs-dermatologist",
    title: "Trichologist vs. Dermatologist: Which One Do You Actually Need?",
    slug: "trichologist-vs-dermatologist",
    category: "category-hair-loss",
    readTime: 5,
    publishedAt: "2025-10-14T16:00:00Z",
    excerpt:
      "They are not the same job, and they are not in competition. Here is how to tell which one your hair actually needs, and why the answer is often both.",
    body: [
      { p: "When your hair starts thinning, the first question is usually who to even call. A dermatologist? A stylist? Someone you saw on the internet? The word trichologist gets thrown around too, and most people have no idea what it means. So let me make it simple." },
      { h2: "What a dermatologist does" },
      { p: "A dermatologist is a medical doctor who treats the skin, hair, and nails. They can order bloodwork, diagnose medical conditions, prescribe medication like minoxidil or finasteride, and perform procedures. If your hair loss is driven by a medical issue, a dermatologist is exactly who you want, and nothing here replaces that." },
      { h2: "What a trichologist does" },
      { p: "A trichologist studies the hair and scalp specifically. We look at your scalp under magnification, take a full health and lifestyle history, and work to find the cause of what is happening rather than reaching for one product. A trichologist does not prescribe drugs. We focus on identifying the root cause and combining the therapies that address it, and we collaborate with your doctor when something medical is involved." },
      { h2: "So which one do you need?" },
      { p: "Often the honest answer is both, working together. A dermatologist handles the medical side. A trichologist spends the time mapping the whole picture of your hair and scalp and builds the day-to-day plan around it. The two are not competing. They cover different ground." },
      { p: "If you have a sudden rash, sores, or a condition that looks medical, start with a dermatologist. If you are dealing with thinning, shedding, a widening part, or a scalp that never feels right, and you want someone to actually find the why, that is the work a trichologist does." },
      { h2: "The bottom line" },
      { p: "You do not have to choose a side. You need the cause found and a plan that treats it. Sometimes that is a prescription. Often it is more than one thing working together. A scalp analysis is the place to start sorting out which." },
    ] as Line[],
  },
  {
    _id: "post-why-hair-thinning",
    title: "Why Your Hair Is Thinning, and Why It Is Rarely About Shampoo",
    slug: "why-your-hair-is-thinning",
    category: "category-hair-loss",
    readTime: 6,
    image: "https://static.wixstatic.com/media/260431_79ed4cd12fc047beb996de88ed4a154a~mv2.png",
    publishedAt: "2025-10-14T17:00:00Z",
    excerpt:
      "If you have switched shampoos five times and nothing changed, that is because shampoo was rarely the problem. Here is what usually is.",
    body: [
      { p: "Almost everyone who comes to me has already tried to fix their thinning with a bottle. A new shampoo, a serum, an oil somebody swore by. And when it does not work, they assume they just have not found the right product yet. Let me save you some money. The product was rarely the problem." },
      { h2: "Hair loss is a symptom, not the disease" },
      { p: "Thinning is your body telling you something. The real question is what. The most common drivers I see are not on a store shelf:" },
      { ul: [
        "Hormones, including thyroid shifts, postpartum changes, and perimenopause",
        "Nutrition and deficiencies, especially iron and protein",
        "Stress and major life events, which can trigger heavy shedding months later",
        "Genetics, which set the pattern but not always the timeline",
        "The scalp environment itself, when inflammation or buildup gets in the way",
      ] },
      { p: "Notice that none of those are fixed by lather. A shampoo can support a healthy scalp, and the right one matters, but it cannot correct a thyroid issue or an iron deficiency." },
      { h2: "Why the guessing game keeps failing" },
      { p: "When you treat thinning by trying products one at a time, you are aiming at a single piece of a problem that usually has several pieces. Even if one product helps a little, the cause is still running in the background. That is why people feel like they have tried everything and nothing works. They have tried everything except finding the cause." },
      { h2: "What actually moves the needle" },
      { p: "Finding the why. That means looking at your scalp closely and taking an honest history of your health and your life. Once we know what is driving your loss, the plan can address it directly, often from more than one angle at once. That is the difference between hoping a bottle works and knowing what you are treating." },
      { p: "Your shampoo was always made for your scalp. Use a good one. But if your hair is thinning, the answer is almost never in the next bottle. It is in the reason." },
    ] as Line[],
  },
  {
    _id: "post-what-happens-scalp-analysis",
    title: "What Actually Happens in a Scalp Analysis",
    slug: "what-happens-in-a-scalp-analysis",
    category: "category-scalp-health",
    readTime: 4,
    image: "https://static.wixstatic.com/media/260431_c61a1e3e6e644c34946652b0f99ea737~mv2.png",
    publishedAt: "2025-10-14T18:00:00Z",
    excerpt:
      "It is not scary, and it is not a sales pitch. Here is exactly what a comprehensive scalp analysis looks like, step by step.",
    body: [
      { p: "A scalp analysis sounds clinical, and for a lot of people that word brings nerves. So here is precisely what happens, start to finish, so you know what you are walking into." },
      { h2: "We talk first" },
      { p: "Before I look at anything, we talk. Your health history, your stress, your medications, how your hair has changed and when. This part matters more than people expect, because the cause of hair loss is often hiding in the timeline of your life, not just on your head." },
      { h2: "We look under magnification" },
      { p: "Then I examine your scalp and follicles under magnification. This shows me things you cannot see in a mirror: the condition of your scalp, the health and density of your follicles, signs of inflammation or miniaturization, and clues about what is actually going on." },
      { h2: "We make sense of it together" },
      { p: "I walk you through what I am seeing in plain language. No jargon walls, no scare tactics. The goal is for you to leave understanding your own hair instead of guessing about it." },
      { h2: "We make a plan" },
      { p: "Finally, we talk about what to do. Depending on what we found, that might be professional scalp treatments, low-light therapy, growth support, nutrition, a conversation with your doctor, or a combination. You decide what to take on. There is no pressure." },
      { p: "That is the whole thing. It is private, it is calm, and it is the single most useful step you can take if you are tired of not knowing why." },
    ] as Line[],
  },
  {
    _id: "post-rosemary-oil-science",
    title: "Does Rosemary Oil Regrow Hair? What the Science Says",
    slug: "does-rosemary-oil-regrow-hair",
    category: "category-products",
    readTime: 5,
    publishedAt: "2025-10-14T19:00:00Z",
    excerpt:
      "Rosemary oil went viral for a reason, but the internet skipped the fine print. Here is the honest, science-based version.",
    body: [
      { p: "Rosemary oil is everywhere right now. The story goes that it regrows hair as well as minoxidil, and people are dumping it on their scalps by the bottle. As a trichologist, I want to give you the honest version, because the truth is more useful than the hype." },
      { h2: "Where the claim comes from" },
      { p: "There is a small study that compared rosemary oil to minoxidil and found similar results over several months for one specific type of hair loss. That is a real study, and rosemary oil does have properties that can support circulation and a healthier scalp. So it is not nothing." },
      { h2: "Where the hype goes wrong" },
      { p: "Here is the fine print the viral videos skip. It was one small study, on one cause of hair loss, over a limited time. It does not mean rosemary oil regrows everyone's hair, and it definitely does not mean it treats whatever is causing your thinning. If your loss is driven by a thyroid issue, an iron deficiency, or stress shedding, no oil is going to fix that, because the oil is not aimed at the cause." },
      { h2: "The real lesson" },
      { p: "This is the whole problem with hair advice online. A single product gets crowned the answer for everyone, when hair loss almost never has a single cause. Rosemary oil can be a fine part of a plan for the right person. It is not a cure, and it is not a substitute for finding out what is actually going on." },
      { p: "If you want to know whether rosemary oil would even help your situation, that question gets answered the same way every real question about your hair does. By finding the cause first." },
    ] as Line[],
  },
  {
    _id: "post-regrowth-timeline",
    title: "The Real Timeline of Hair Regrowth (Why Month 3 Feels Like Nothing Is Working)",
    slug: "real-timeline-of-hair-regrowth",
    category: "category-hair-loss",
    readTime: 5,
    image: "https://static.wixstatic.com/media/260431_6b53052423f746f8a09a1e9551389b54~mv2.png",
    publishedAt: "2025-10-14T20:00:00Z",
    excerpt:
      "Most people quit right before it starts working. Here is what regrowth actually looks like month by month, so you do not give up at the hardest part.",
    body: [
      { p: "If I could tell every client one thing before they start, it would be this. Hair is slow, and the moment it feels like nothing is happening is usually the moment it is starting to work. Here is the real timeline, so you are ready for it." },
      { h2: "Months one and two: the quiet start" },
      { p: "Early on, the work is happening below the surface. We are calming the scalp, supporting the follicle, and addressing whatever the cause turned out to be. You probably will not see new hair yet, and that is completely normal. This is the groundwork." },
      { h2: "Month three: the hard part" },
      { p: "Month three is where people want to quit. The old shedding may still be finishing, new growth is too short to notice, and it can feel like you are doing all this for nothing. This is exactly when most people give up, right before the turn. Do not. This is normal, and it is temporary." },
      { h2: "Months four to six: it starts showing" },
      { p: "This is usually when you start to see it. Baby hairs along the part, a little more density, less coming out in the brush. It is gradual, which is why the photos matter more than the mirror. Your eyes adjust day to day and miss the progress. The pictures do not." },
      { h2: "Months nine to twelve: the payoff" },
      { p: "By here, the change is real and visible, assuming we found the right cause and stuck with the plan. This is the part that makes the slow middle worth it." },
      { h2: "Why I photograph everything" },
      { p: "I document progress at months one, three, six, nine, and twelve for exactly this reason. Hair grows too slowly to trust your memory or your mirror. The photos keep you honest about how far you have actually come, and they keep you going through month three." },
    ] as Line[],
  },
];

// All documents to seed, shared by the token writer (this file) and the
// NDJSON exporter (scripts/export-ndjson.ts) used for `sanity dataset import`.
export const seedDocuments = [
  {
    _id: AUTHOR_ID,
    _type: "author",
    name: "Megan Luthy",
    slug: { _type: "slug", current: "megan-luthy" },
    bio: "Megan Luthy is an AMCA-certified clinical trichologist and licensed cosmetologist with 17+ years of experience, serving Idaho Falls and Rexburg, Idaho.",
  },
  ...categories.map((c) => ({
    _id: c._id,
    _type: "category",
    title: c.title,
    slug: { _type: "slug", current: c.slug },
    description: c.description,
  })),
  ...posts.map((p) => ({
    _id: p._id,
    _type: "post",
    title: p.title,
    slug: { _type: "slug", current: p.slug },
    publishedAt: p.publishedAt,
    excerpt: p.excerpt,
    readTime: p.readTime,
    author: { _type: "reference", _ref: AUTHOR_ID },
    categories: [{ _type: "reference", _ref: p.category, _key: "cat0" }],
    body: blocks(p.body),
    // _sanityAsset tells `sanity dataset import` to fetch the URL and host it
    // as a Sanity image asset, so we are not hotlinking Wix.
    ...((p as { image?: string }).image
      ? { mainImage: { _type: "image", _sanityAsset: `image@${(p as { image?: string }).image}` } }
      : {}),
  })),
];

async function run() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.SANITY_API_TOKEN) {
    console.error(
      "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN. Set them in .env.local first.",
    );
    process.exit(1);
  }

  for (const doc of seedDocuments) {
    await writeClient.createOrReplace(doc);
    console.log("  ✓", doc._type, "-", (doc as { title?: string; name?: string }).title || (doc as { name?: string }).name);
  }

  console.log("Done. Add a main image to each post in the Studio when photos are ready.");
}

// Only write when run directly (not when imported by the NDJSON exporter).
if (process.argv[1] && /seed-blog\.ts$/.test(process.argv[1])) {
  run().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
