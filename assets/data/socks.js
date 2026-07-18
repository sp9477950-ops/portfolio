const socksProjects = [
  {
    cat: "vton",
    catLabel: "Campus Socks",
    title: "Black Low-Cut (Toe Branding)",
    short: "Pixel-perfect CAMPUS logo locked to the toe panel using Gemini spatial anchor logic.",
    desc: "A high-precision branding pipeline built for Campus Socks. This style — the Black Low-Cut — features the logo on the curved toe area, one of the hardest zones to brand consistently. Our Gemini vision model performs real-time garment analysis to inject exact anatomical coordinates, eliminating hallucinations.",
    img: "assets/img/socks_1.jpg",
    isSocks: true,
    feat: [
      "Logo locked to toe panel with zero drift",
      "Real-time Gemini vision garment analysis",
      "Handles extreme curve distortion at the toe",
      "100% text fidelity on dark fabric backgrounds"
    ],
    tags: ["Gemini Vision", "Stable Diffusion", "Spatial Constraints", "Brand Integrity"]
  },
  {
    cat: "vton",
    catLabel: "Campus Socks",
    title: "White/Green Collar (Cuff Branding)",
    short: "CAMPUS branding anchored to the back cuff/heel-tab on a white & green low-cut style.",
    desc: "The White/Green Collar style places the CAMPUS logo on the back cuff heel-tab — a narrow, cylindrical surface that causes most diffusion models to wrap or skew text. This pipeline enforces exact bounding box constraints for clean output every time.",
    img: "assets/img/socks_2.jpg",
    isSocks: true,
    feat: [
      "Back cuff heel-tab logo placement",
      "Handles cylindrical surface distortion",
      "Prevents text wrapping & skewing",
      "Multi-color fabric contrast maintained"
    ],
    tags: ["Gemini Vision", "Stable Diffusion", "Spatial Constraints", "Brand Integrity"]
  },
  {
    cat: "vton",
    catLabel: "Campus Socks",
    title: "Blue Striped Crew (Side Branding)",
    short: "Logo precisely placed on the lateral side panel of a blue striped crew-length sock.",
    desc: "Striped patterns are especially challenging — the model must distinguish between stripe boundaries and treat them as non-logo zones. Our dynamic prompt injection identifies the stripe-free side panel and locks the CAMPUS logo there with pixel-level accuracy.",
    img: "assets/img/socks_3.jpg",
    isSocks: true,
    feat: [
      "Stripe-aware logo zone detection",
      "Side panel logo placement on crew length",
      "Pattern boundary recognition via Gemini",
      "Zero interference with stripe design"
    ],
    tags: ["Gemini Vision", "Stable Diffusion", "Pattern Recognition", "Brand Integrity"]
  },
  {
    cat: "vton",
    catLabel: "Campus Socks",
    title: "Yellow Striped Collar (Heel Branding)",
    short: "CAMPUS logo anchored to the heel area on a bold yellow & white striped ankle sock.",
    desc: "Bold yellow striping creates high visual noise that confuses standard diffusion models into placing logos on stripe lines. Our Gemini spatial pipeline identifies the heel's unstriped zone and enforces logo placement there — clean, precise, repeatable.",
    img: "assets/img/socks_4.jpg",
    isSocks: true,
    feat: [
      "High-contrast yellow stripe handling",
      "Heel area logo anchor enforcement",
      "Noise-resistant prompt injection",
      "Consistent output across all angles"
    ],
    tags: ["Gemini Vision", "Stable Diffusion", "High Contrast", "Brand Integrity"]
  },
  {
    cat: "vton",
    catLabel: "Campus Socks",
    title: "Black Crew Ribbed (Cuff Branding)",
    short: "Ribbed texture logo placement — CAMPUS brand locked to the cuff band of a black crew sock.",
    desc: "Ribbed textures create vertical shadow lines that cause AI to misread surface depth, leading to warped or fragmented text. This pipeline uses texture-aware constraint logic to flatten the branding zone virtually before logo injection — achieving perfect legibility.",
    img: "assets/img/socks_5.jpg",
    isSocks: true,
    feat: [
      "Ribbed texture surface flattening logic",
      "Cuff band logo placement accuracy",
      "Shadow-line artifact prevention",
      "Legible output on textured dark fabric"
    ],
    tags: ["Gemini Vision", "Texture Analysis", "Stable Diffusion", "Brand Integrity"]
  },
  {
    cat: "vton",
    catLabel: "Campus Socks",
    title: "Blue Striped Cuff (Back-Cuff Branding)",
    short: "Back-cuff CAMPUS placement on a premium blue & white striped sock with precise heel-tab lock.",
    desc: "The Blue Striped Cuff style demands branding at the back-cuff heel-tab while navigating bold contrasting stripes. Our pipeline dynamically identifies the clear zone between stripes, computes the optimal bounding box, and injects the logo constraint — zero hallucinations guaranteed.",
    img: "assets/img/socks_6.jpg",
    isSocks: true,
    feat: [
      "Back-cuff heel-tab logo lock",
      "Stripe gap detection & exploitation",
      "Dynamic bounding box computation",
      "Repeatable across all product colorways"
    ],
    tags: ["Gemini Vision", "Stable Diffusion", "Stripe Detection", "Brand Integrity"]
  },
  {
    cat: "vton",
    catLabel: "Campus Socks",
    title: "White/Pink Collar (Arch Branding)",
    short: "CAMPUS logo placed on the arch zone of a white & pink ankle collar sock.",
    desc: "The arch of a sock is a rarely targeted branding zone — curved in two axes simultaneously. Standard models fail here completely. Our pipeline maps both curvature vectors via Gemini spatial analysis and injects corrected perspective transforms before diffusion runs.",
    img: "assets/img/socks_7.jpg",
    isSocks: true,
    feat: [
      "Dual-axis curvature compensation",
      "Arch zone branding — rare, precision placement",
      "Perspective transform injection",
      "Clean output on light pastel fabric"
    ],
    tags: ["Gemini Vision", "Perspective Mapping", "Stable Diffusion", "Brand Integrity"]
  },
  {
    cat: "vton",
    catLabel: "Campus Socks",
    title: "Pink Side Stripe (Lateral Branding)",
    short: "Lateral side branding with CAMPUS logo locked between pink stripe boundaries.",
    desc: "A vibrant pink side-stripe style where the logo must land precisely between two bold stripes without touching either. The Gemini vision model measures inter-stripe spacing in real-time and computes the exact injection zone — output is always centered, always clean.",
    img: "assets/img/socks_8.jpg",
    isSocks: true,
    feat: [
      "Inter-stripe spacing measurement",
      "Centered logo injection between boundaries",
      "Pink high-saturation fabric handling",
      "Zero logo-stripe overlap artifacts"
    ],
    tags: ["Gemini Vision", "Spatial Measurement", "Stable Diffusion", "Brand Integrity"]
  },
  {
    cat: "vton",
    catLabel: "Campus Socks",
    title: "Black Side Stripe (Lateral Branding)",
    short: "CAMPUS logo cleanly placed on the dark side panel of a black & white striped sock.",
    desc: "The dark side-stripe variant poses a contrast challenge — logo legibility drops on dark fabric with adjacent bright stripes. Our pipeline applies dynamic contrast adjustment alongside spatial anchoring, ensuring the CAMPUS text remains crisp and fully legible at all times.",
    img: "assets/img/socks_9.jpg",
    isSocks: true,
    feat: [
      "Dark fabric contrast enhancement",
      "Adjacent bright stripe isolation",
      "Logo legibility enforcement on black",
      "Automated contrast-aware prompt tuning"
    ],
    tags: ["Gemini Vision", "Contrast Logic", "Stable Diffusion", "Brand Integrity"]
  },
  {
    cat: "vton",
    catLabel: "Campus Socks",
    title: "Black Striped Cuff (Premium Crew)",
    short: "Full cuff-band CAMPUS branding on a premium black striped crew sock — the flagship SKU.",
    desc: "The Black Striped Cuff is the flagship Campus Sock — complex ribbing, multiple stripe widths, and a demanding cuff branding zone all in one product. This pipeline handles all three constraints simultaneously: ribbing, stripe boundaries, and cuff curvature — delivering the brand's premium catalog hero shot reliably.",
    img: "assets/img/socks_10.jpg",
    isSocks: true,
    feat: [
      "Triple-constraint handling: ribs + stripes + cuff",
      "Flagship SKU hero shot generation",
      "Full cuff-band logo lock",
      "Scales across entire Campus catalog"
    ],
    tags: ["Gemini Vision", "Multi-Constraint", "Stable Diffusion", "Brand Integrity"]
  }
];
