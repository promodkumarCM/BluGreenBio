import type { ContentCardProps, TeamMember, ServiceItem } from "./shared/types";
import type { PillarIconName } from "./shared/PillarIcon";
import teamPlaceholder from "../../assets/team/placeholder.svg";

export const technologyTags = [
  "Microalgal biotechnology",
  "Fungal biotechnology",
  "Circular bioeconomy",
  "Digital intelligence",
];

export const systemStages = ["Biology", "Sensors", "Data", "Analytics", "Decisions"];
export const wastewaterFlow = ["Wastewater", "Biology", "Nutrients", "Water", "Biomass"];
// TODO: placeholder URLs — replace with BluGreen's real profile links before going live.
export const socialLinks = [
  { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/blugreen-bioventures" },
  { platform: "instagram", label: "Instagram", href: "https://www.instagram.com/blugreenbio" },
  { platform: "facebook", label: "Facebook", href: "https://www.facebook.com/blugreenbio" },
  { platform: "youtube", label: "YouTube", href: "https://www.youtube.com/@blugreenbio" },
] as const;

export const enquiryTopics = [
  "Project & technology development",
  "Wastewater & phycoremediation",
  "Carbon capture & utilisation",
  "Product development",
  "Research collaboration",
  "Digital monitoring",
];
export const enquiryInterests = [
  "Carbon Capture & Utilisation",
  "Wastewater & Phycoremediation",
  "Biomass & Circular Bioeconomy",
  "Product Development",
  "Digital Monitoring",
  "Research Collaboration",
  "General Enquiry",
];

/** The four pillars from the company poster, shown under the hero. */
export const heroPillars: { icon: PillarIconName; title: string; text: string }[] = [
  { icon: "planet", title: "Cleaner planet", text: "Carbon capture, utilisation and climate action" },
  { icon: "water", title: "Healthier water", text: "Wastewater treatment, phycoremediation and nutrient recovery" },
  { icon: "biomass", title: "Valuable biomass", text: "Microalgae, fungi and biomass valorisation" },
  { icon: "women", title: "Women-led initiative", text: "Empowering women, building a sustainable future" },
];

export const signals = [
  "Cleaner planet",
  "Healthier water",
  "Valuable biomass",
  "Women-led initiative",
  "Responsible innovation",
];

export const values: ContentCardProps[] = [
  { title: "Science before assumption", text: "We build from biological evidence, process understanding, and validation." },
  { title: "Application before abstraction", text: "Technology creates value when it addresses a real requirement." },
  { title: "Circularity by design", text: "We look for pathways that recover and reuse biological resources." },
  { title: "Validation before scale", text: "Commercial positioning follows evidence and measured performance." },
  { title: "Responsible innovation", text: "We distinguish potential from what has been demonstrated." },
  { title: "Collaboration", text: "Complex challenges need scientific, technical, and commercial partners." },
];

export const divisions: ContentCardProps[] = [
  {
    index: "01 · R&D & CLIMATE BIOTECHNOLOGY",
    title: "Environmental & climate technology",
    text: "Carbon capture and utilisation, Liquid Tree systems, wastewater treatment, nutrient recovery, biomass utilisation, and intelligent monitoring.",
  },
  {
    index: "02 · PRODUCTS & TECHNOLOGY",
    title: "Biological products & cultivation",
    text: "Biological products, cultivation technologies, media, consumables, biomass-derived products, and future biotechnology opportunities.",
  },
];

export const challenges: ContentCardProps[] = [
  { index: "01", title: "Capture", text: "Use biological processes to utilise carbon where appropriate." },
  { index: "02", title: "Treat", text: "Apply microalgal and microbial systems to wastewater and nutrient recovery." },
  { index: "03", title: "Recover", text: "Generate useful biomass and recover value from resource streams." },
  { index: "04", title: "Convert", text: "Develop biomass into ingredients, products, and value-added pathways." },
  { index: "05", title: "Commercialise", text: "Translate validated technologies into deployable systems and products." },
];

export const solutions = [
  {
    title: "Carbon Capture & Utilisation",
    text: "Microalgal systems for carbon utilisation, biological fixation, and emerging Liquid Tree applications.",
    detail: "We develop microalgal systems that use photosynthetic biology as a pathway for carbon utilisation and biomass generation. Our approach combines biological science with engineering and application-specific development.",
    facts: ["Microalgal systems", "Photobioreactor concepts", "Monitoring + biomass use"],
  },
  {
    title: "Wastewater Bioremediation & Nutrient Recovery",
    text: "Biological approaches for treatment, nutrient uptake, water quality, and biomass recovery.",
    detail: "Microalgal and microalgal-bacterial approaches support wastewater treatment, nutrient uptake, water-quality improvement, and biomass recovery, with reuse pathways assessed for each application.",
    facts: ["Microalgae + bacteria", "Water quality", "Biomass recovery"],
  },
  {
    title: "Biomass Valorisation & Circular Bioeconomy",
    text: "Pathways to transform biological biomass into useful ingredients, products, and inputs.",
    detail: "We explore applications across proteins, functional foods, nutraceuticals, cosmetics, pigments, and agricultural inputs while developing circular use for biological resources.",
    facts: ["Microalgae + fungi", "Ingredients + products", "Circular pathways"],
  },
  {
    title: "Digital Algae Monitoring & Intelligence",
    text: "Connect biological systems, sensors, data, analytics, and decision support.",
    detail: "Digital monitoring turns operational data into readable insights, trends, and alerts. Predictive capabilities can be considered as sufficient validated datasets become available.",
    facts: ["Sensors + data", "Trends + anomalies", "Progressive analytics"],
  },
];

export const technologyItems: ContentCardProps[] = [
  { title: "Microalgal biotechnology", label: "Biology", text: "Biological systems for carbon utilisation, wastewater treatment, biomass generation, and product development." },
  { title: "Phycoremediation", label: "Water", text: "Microalgal-bacterial approaches to biological treatment, nutrient uptake, and biomass recovery." },
  { title: "Photobioreactors", label: "Engineering", text: "Controlled cultivation systems for selected environmental and product-development applications." },
  { title: "Carbon capture & utilisation", label: "Climate", text: "Biological CCU concepts using microalgae, including Liquid Tree systems." },
  { title: "Biomass valorisation", label: "Circularity", text: "Explore pathways for biomass into ingredients, pigments, functional products, and biological inputs." },
  { title: "Sensors, IoT & analytics", label: "Digital", text: "Connect measurement and operational visibility with structured data and progressively intelligent support." },
];

export const environments = [
  {
    title: "Algal Liquid Tree",
    description: "Track environmental conditions, photosynthetic system health, and biomass-related indicators.",
    measures: ["Temperature", "pH", "Dissolved oxygen", "CO₂", "Light", "Biomass", "Equipment status", "Operating conditions"],
  },
  {
    title: "Algae-based phycoremediation",
    description: "Extend monitoring across influent, treatment conditions, biological response, and effluent quality.",
    measures: ["Influent conditions", "Process conditions", "Nutrients", "Biological response", "Effluent quality", "Flow", "Biomass recovery", "Water reuse"],
  },
];

export const architectureLayers = [
  { title: "Biological system", text: "The physical Liquid Tree or phycoremediation system generates measurable conditions.", output: "Measured conditions" },
  { title: "Sensors & instruments", text: "Sensors capture physical, environmental, chemical, and biological variables.", output: "Selected variables" },
  { title: "Data acquisition & infrastructure", text: "Measurements are collected, timestamped, validated, and organised.", output: "Structured history" },
  { title: "Analytics & intelligence", text: "Analytics identify trends, anomalies, and patterns; future models require sufficient data.", output: "Patterns + anomalies" },
  { title: "User & decision layer", text: "Dashboards turn complex information into readable indicators and decision support.", output: "Readable insights" },
];

export const developmentPath: ContentCardProps[] = [
  { index: "01", title: "Feasibility", text: "Assess site, operating environment, and technical requirements." },
  { index: "02", title: "Design", text: "Plan around the intended application." },
  { index: "03", title: "Fabrication", text: "Translate the design into an engineered system." },
  { index: "04", title: "Installation", text: "Integrate the system into its operating environment." },
  { index: "05", title: "Inoculation", text: "Establish biological cultures and initiate operation." },
  { index: "06", title: "Monitoring", text: "Track environmental, biological, and operational parameters." },
  { index: "07", title: "Maintenance", text: "Maintain the biological and physical system." },
  { index: "08", title: "Biomass utilisation", text: "Evaluate biomass recovery and utilisation pathways." },
];

export const wastewaterSteps: ContentCardProps[] = [
  { index: "01", title: "Characterisation", text: "Understand wastewater profile, nutrient load, and process conditions." },
  { index: "02", title: "Consortium development", text: "Identify suitable microalgal-bacterial combinations." },
  { index: "03", title: "System development", text: "Select an appropriate cultivation environment." },
  { index: "04", title: "Pilot validation", text: "Assess biological behaviour under representative conditions." },
  { index: "05", title: "Monitor & recover", text: "Track nutrient uptake, water quality, and biomass recovery." },
];

export const services: ServiceItem[] = [
  { icon: "assessment", title: "Feasibility & technical assessment", text: "Assess application requirements, biological conditions, and technology pathways." },
  { icon: "design", title: "System design & engineering", text: "Develop application-specific processes, cultivation systems, and monitoring." },
  { icon: "pilot", title: "Pilot & validation", text: "Evaluate biological concepts in representative operating environments." },
  { icon: "installation", title: "Installation & start-up", text: "Plan suitable system integration, inoculation, and start-up." },
  { icon: "monitoring", title: "Monitoring & maintenance", text: "Support biological and operational monitoring and routine maintenance." },
  { icon: "wastewater", title: "Wastewater & phycoremediation", text: "Develop characterisation, cultivation, nutrient monitoring, and biomass-use pathways." },
  { icon: "product", title: "Product development", text: "Support formulation, process development, testing, and commercialisation planning." },
  { icon: "digital", title: "Digital monitoring & MRV", text: "Connect sensor data, performance information, and reporting frameworks." },
];

export const industries = [
  {
    title: "Industrial & manufacturing",
    challenges: ["Carbon emissions", "Wastewater", "Resource loss", "Process monitoring"],
    approach: "Explore CCU, wastewater biotechnology, biomass recovery, and intelligent monitoring pathways for industrial environments.",
  },
  {
    title: "Water & wastewater",
    challenges: ["Nutrient-rich wastewater", "Water quality", "Resource loss", "Treatment optimisation"],
    approach: "Develop application-specific biological treatment using microalgae, beneficial bacteria, nutrient uptake, and monitoring.",
  },
  {
    title: "Agriculture & agri-processing",
    challenges: ["Nutrient-rich streams", "Biomass residues", "Resource efficiency", "Biological inputs"],
    approach: "Explore wastewater treatment, biomass utilisation, and future biofertiliser or soil-amendment pathways.",
  },
  {
    title: "Urban & built environment",
    challenges: ["Air quality", "Limited green space", "Visible infrastructure", "Environmental measurement"],
    approach: "Explore modular biological systems for urban, institutional, and commercial environments.",
  },
  {
    title: "Commercial & institutional",
    challenges: ["Sustainability programmes", "System deployment", "Application fit", "Environmental technology"],
    approach: "Develop visible, modular biological technologies suited to commercial and institutional settings.",
  },
  {
    title: "Food, nutrition & personal care",
    challenges: ["Microalgal biomass", "Fungal biomass", "Functional ingredients", "Bioactive resources"],
    approach: "Develop applications using biological biomass and ingredients for food, nutraceutical, and cosmetic products.",
  },
];

export const researchAreas: ContentCardProps[] = [
  { title: "Environmental biotechnology", text: "Wastewater treatment, phycoremediation, nutrient uptake, and biomass recovery." },
  { title: "Climate biotechnology", text: "Carbon capture, utilisation, Liquid Tree systems, and microalgal CCU." },
  { title: "Biological products", text: "Functional foods, nutraceuticals, cosmetics, pigments, and biomass-derived products." },
  { title: "Cultivation technology", text: "Photobioreactors and biological cultivation systems." },
  { title: "Digital intelligence", text: "Sensor integration, structured datasets, analytics, and progressive AI development." },
];

export const leadership: TeamMember[] = [
  { role: "Founder & CEO", name: "Dr. Syama Prabha", photo: teamPlaceholder, bio: "Focuses on microalgal protein research, circular biorefinery, and wastewater remediation." },
  { role: "Founder & Managing Director", name: "Dr. Anugraha A C", photo: teamPlaceholder, bio: "Focuses on fungi and mushroom biotechnology, cosmetics, and nutraceutical production." },
  { role: "Founder & Chairman", name: "Dr. Aravind K Vijay", photo: teamPlaceholder, bio: "Contributes expertise in microalgal biotechnology, CCU, phycoremediation, and photobioreactors." },
];

export const approachSteps: ContentCardProps[] = [
  { index: "01", title: "Understand", text: "Define the biological, technical, and application context." },
  { index: "02", title: "Design", text: "Plan the process, cultivation, monitoring, or product architecture." },
  { index: "03", title: "Develop", text: "Create candidate biological systems, formulations, or technologies." },
  { index: "04", title: "Validate", text: "Test performance under controlled and representative conditions." },
  { index: "05", title: "Pilot", text: "Move the selected approach into a realistic operating environment." },
  { index: "06", title: "Scale", text: "Plan deployment based on validated evidence." },
];

export const impactAreas: ContentCardProps[] = [
  { title: "Water", text: "Biological treatment, nutrient recovery, and water reuse pathways." },
  { title: "Climate", text: "Carbon capture, carbon utilisation, and climate biotechnology." },
  { title: "Resources", text: "Biomass recovery and biological resource utilisation." },
  { title: "Circularity", text: "Convert residual biological streams into additional value." },
  { title: "Innovation", text: "Build technologies that become more measurable and adaptable." },
  { title: "Responsible communication", text: "Distinguish what is possible, in development, validated, and market-ready." },
];

export const biomassPanels: ContentCardProps[] = [
  { label: "Microalgal biomass", title: "Potential value streams", text: "Biomass powders · Protein-rich materials · Pigments · Bioactive compounds · Functional ingredients" },
  { label: "Fungal biomass", title: "Development activities", text: "Mushroom-based products · Functional ingredients · Nutrition products · Product-development applications" },
  { label: "Future direction", title: "Higher-value cultivation", text: "BluGreen is exploring Haematococcus for astaxanthin and Dunaliella for beta-carotene as strategic development areas." },
];

export const products: ContentCardProps[] = [
  { index: "01", title: "Environmental biotechnology systems", text: "Microalgal systems for carbon capture, environmental monitoring, and biological resource recovery.", label: "System development" },
  { index: "02", title: "Biological media & consumables", text: "Application-specific culture media and biological inputs for selected cultivation environments.", label: "In development" },
  { index: "03", title: "Functional biotechnology products", text: "Product development across microalgal, mushroom, and combined biological ingredients.", label: "Development stage" },
  { index: "04", title: "Biomass & bioactive products", text: "Development areas include biomass, natural pigments, nutraceuticals, and functional ingredients.", label: "Development portfolio" },
];

export const futureWork: ContentCardProps[] = [
  { label: "Strategic pipeline", title: "High-value microalgal cultivation", text: "Exploring Haematococcus cultivation for astaxanthin and Dunaliella for beta-carotene." },
  { label: "Future exploration", title: "Space biotechnology", text: "Exploring microalgae- and fungi-derived life-support, nutrition, and closed-loop systems." },
  { label: "Circularity", title: "Complete biomass valorisation", text: "Connecting biomass production, products, residual biomass, and biological agricultural inputs." },
];

export const sdgs: ContentCardProps[] = [
  { index: "SDG 5", title: "Gender equality", text: "Women-owned and women-led leadership." },
  { index: "SDG 6", title: "Clean water", text: "Treatment, nutrient recovery, and reuse." },
  { index: "SDG 9", title: "Industry & innovation", text: "Biotechnology, engineering, and digital systems." },
  { index: "SDG 11", title: "Sustainable cities", text: "Urban environmental biotechnology." },
  { index: "SDG 12", title: "Responsible production", text: "Circular biomass and resource recovery." },
  { index: "SDG 13", title: "Climate action", text: "Carbon capture and utilisation." },
];

/** Separate pages, shown under the "What we do" menu. */
export const pageLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Technology", href: "/technology" },
  { label: "Products", href: "/products" },
  { label: "Research & impact", href: "/research" },
];

export const exploreLinks = [
  { label: "About", href: "/about" },
  ...pageLinks,
];

export const connectLinks = [
  { label: "Services", href: "/#services" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Contact", href: "/#contact" },
  { label: "info@blugreenbio.com", href: "mailto:info@blugreenbio.com" },
];

export const footerGroups = [
  { title: "Explore", links: exploreLinks },
  { title: "Connect", links: connectLinks },
];
