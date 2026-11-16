export type MarketSegment = 'Corporate' | 'SME' | 'Retail / Personal';

export type RiskCategory =
  | 'Agriculture'
  | 'Engineering'
  | 'Liability'
  | 'Marine'
  | 'Motor'
  | 'Financial Protection'
  | 'Personal Accident & Health'
  | 'Property'
  | 'Travel';

export interface Product {
  id: string;
  name: string;
  code: string;
  riskCategory: RiskCategory;
  marketSegments: MarketSegment[];
  description: string;
  targetAudience: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
}

export interface MarketSegmentInfo {
  id: MarketSegment;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  iconName: string;
  accentColor: string;
  productCount: number;
  heroImage: string;
}

export interface RiskCategoryInfo {
  id: RiskCategory;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accentColor: string;
  productCount: number;
  heroImage: string;
}

export const MARKET_SEGMENTS_INFO: MarketSegmentInfo[] = [
  {
    id: 'Corporate',
    title: 'Corporate Portfolio',
    subtitle: 'Institutional & Enterprise Scale Protection',
    description: 'High-capacity, tailored risk transfer solutions engineered for industrial conglomerates, multinational entities, financial institutions, and large-scale commercial organizations.',
    badge: '31 Products',
    iconName: 'Building2',
    accentColor: 'emerald',
    productCount: 31,
    heroImage: '/images/heroes/corporate-hero.jpg',
  },
  {
    id: 'SME',
    title: 'SME Portfolio',
    subtitle: 'Small & Medium Enterprises Commercial Coverage',
    description: 'Agile, comprehensive commercial coverage protecting manufacturing workshops, supply chain distributors, agro-processors, trading houses, and commercial service enterprises.',
    badge: '34 Products',
    iconName: 'Briefcase',
    accentColor: 'blue',
    productCount: 34,
    heroImage: '/images/heroes/sme-hero.jpg',
  },
  {
    id: 'Retail / Personal',
    title: 'Retail / Personal Portfolio',
    subtitle: 'Individual, Family & Grassroots Safeguards',
    description: 'Accessible, consumer-centric insurance safeguarding personal automobiles, private dwellings, women entrepreneurs, international students, families, and grassroots communities.',
    badge: '21 Products',
    iconName: 'UserCheck',
    accentColor: 'amber',
    productCount: 21,
    heroImage: '/images/heroes/retail-hero.jpg',
  },
];

export const RISK_CATEGORIES_INFO: RiskCategoryInfo[] = [
  {
    id: 'Agriculture',
    title: 'Agriculture',
    subtitle: 'Crops, Livestock & Plantation Security',
    description: 'Specialized parametric weather index, rubber estate, and cattle insurance shielding rural producers and commercial agribusinesses against climate disruption and mortality.',
    iconName: 'Sprout',
    accentColor: 'green',
    productCount: 3,
    heroImage: '/images/heroes/agriculture-hero.jpg',
  },
  {
    id: 'Engineering',
    title: 'Engineering',
    subtitle: 'Construction, Machinery & Technical Plant',
    description: 'Specialized technical insurance covering civil infrastructure construction, mechanical machinery installation, pressure plants, electrical equipment, and operational plant breakdown.',
    iconName: 'Cog',
    accentColor: 'indigo',
    productCount: 8,
    heroImage: '/images/heroes/engineering-hero.jpg',
  },
  {
    id: 'Liability',
    title: 'Liability',
    subtitle: 'Statutory, Public & Export Compliance',
    description: 'Legal defense and financial indemnification against statutory and common-law liabilities arising from workplace accidents, defective export products, premises injuries, and clinical research.',
    iconName: 'ShieldAlert',
    accentColor: 'rose',
    productCount: 5,
    heroImage: '/images/heroes/liability-hero.jpg',
  },
  {
    id: 'Marine',
    title: 'Marine',
    subtitle: 'Cargo Transit & Vessel Hull Protection',
    description: 'Transit and maritime vessel protection covering commercial cargo movements (import/export/inland) and physical hulls of ocean, coastal, riverine, and pleasure crafts.',
    iconName: 'Ship',
    accentColor: 'cyan',
    productCount: 2,
    heroImage: '/images/heroes/marine-hero.jpg',
  },
  {
    id: 'Motor',
    title: 'Motor',
    subtitle: 'Fleet, Private Automobile & Third-Party Liability',
    description: 'Comprehensive commercial fleet, private passenger automobile, and statutory third-party liability insurance protecting against vehicular accidents, total loss, and legal liabilities.',
    iconName: 'Car',
    accentColor: 'amber',
    productCount: 3,
    heroImage: '/images/heroes/motor-hero.jpg',
  },
  {
    id: 'Financial Protection',
    title: 'Financial Protection',
    subtitle: 'Banking Crimes, Cash In Transit & Fiduciary Fidelity',
    description: 'Specialized financial crime, cash-in-transit, and operational security insurance designed for banking institutions, microfinance networks, corporate treasuries, and commercial retail agents.',
    iconName: 'Landmark',
    accentColor: 'emerald',
    productCount: 5,
    heroImage: '/images/heroes/financial-protection-hero.jpg',
  },
  {
    id: 'Personal Accident & Health',
    title: 'Personal Accident & Health',
    subtitle: 'Women Empowerment, Workforce & Community Well-being',
    description: 'Individual, women-specific, group workforce, and micro-scale accidental death, permanent disablement, trauma, and clinical hospitalization expense reimbursements.',
    iconName: 'HeartPulse',
    accentColor: 'pink',
    productCount: 8,
    heroImage: '/images/heroes/health-hero.jpg',
  },
  {
    id: 'Property',
    title: 'Property',
    subtitle: 'Industrial All Risks, Commercial Fire & Assets',
    description: 'Material damage and business interruption insurance for physical commercial, industrial, institutional, and residential real estate assets against fire, natural perils, burglary, and broad all-risk perils.',
    iconName: 'Home',
    accentColor: 'orange',
    productCount: 8,
    heroImage: '/images/heroes/property-hero.jpg',
  },
  {
    id: 'Travel',
    title: 'Travel',
    subtitle: 'Corporate Executive, Holiday & Overseas Education',
    description: 'International travel insurance solutions for holidaymakers, expatriate workers, international students, and corporate executive frequent travelers.',
    iconName: 'Plane',
    accentColor: 'sky',
    productCount: 3,
    heroImage: '/images/heroes/travel-hero.jpg',
  },
];

export const PRODUCTS: Product[] = [
  // --- Agriculture (3) ---
  {
    id: 'crop-insurance',
    name: 'Crop Insurance',
    code: 'WII',
    riskCategory: 'Agriculture',
    marketSegments: ['SME', 'Retail / Personal'],
    description: 'Weather Index-based Insurance (WII) designed to protect smallholder farmers, agribusinesses, and farming cooperatives against agricultural yield losses caused by weather anomalies, including prolonged drought, excess precipitation, unseasonal temperature spikes, and localized flooding.',
    targetAudience: 'Individual farmers, agricultural SMEs, contract farming enterprises, and microfinance agrarian borrowers.',
    features: [
      'Parametric index triggering automated payouts based on satellite and weather station data',
      'Shields seasonal agricultural investments against drought, flood, and temperature anomalies',
      'Customized crop cycles covering Aman/Boro rice, potatoes, maize, and vegetable crops',
      'Integrated with microfinance institutions and rural farmer cooperatives'
    ],
    imageUrl: '/images/products/crop-insurance.jpg',
    imageAlt: 'Lush green agricultural crop fields and healthy harvest landscape',
  },
  {
    id: 'rubber-plantation-insurance',
    name: 'Rubber Plantation Insurance',
    code: 'RPI',
    riskCategory: 'Agriculture',
    marketSegments: ['Corporate', 'SME'],
    description: 'Specialized perennial crop insurance indemnifying commercial plantation owners against tree mortality, plantation destruction, and latex yield loss caused by natural catastrophes (cyclones, windstorms, lightning, flood) and fire hazards.',
    targetAudience: 'Commercial rubber plantation corporations, agro-forestry estates, state agricultural enterprises, and medium-scale growers.',
    features: [
      'Comprehensive tree valuation based on age cohorts (immature vs. tapping maturity)',
      'Covers natural catastrophes including severe windstorms, lightning strikes, and flash floods',
      'Protects seasonal latex yields and capital investment in plantation rootstock',
      'Structured salvage options and replanting cost subsidies'
    ],
    imageUrl: '/images/products/rubber-plantation-insurance.jpg',
    imageAlt: 'Symmetrical rows of tall trees in a commercial rubber plantation estate',
  },
  {
    id: 'cattle-insurance',
    name: 'Cattle Insurance',
    code: 'LCI',
    riskCategory: 'Agriculture',
    marketSegments: ['SME', 'Retail / Personal'],
    description: 'Livestock and Cattle Insurance (LCI) covering financial capital loss resulting from the accidental death, terminal illness, disease epidemics, calving mortality, or permanent incapacity of dairy cows, breeding stock, and beef fattening cattle.',
    targetAudience: 'Smallholder dairy farmers, commercial livestock feedlots, rural cattle owners, and microcredit-financed cattle rearing projects.',
    features: [
      'Comprehensive mortality coverage for dairy cows, stud bulls, and beef fattening herds',
      'Protection against infectious disease epidemics, calving complications, and transit injuries',
      'RFID ear-tagging and digital microchip identification for fraudulent claim prevention',
      'Fast-track veterinary certification and digital claims processing'
    ],
    imageUrl: '/images/products/cattle-insurance.jpg',
    imageAlt: 'Healthy dairy cattle grazing on lush green open pasture pastureland',
  },

  // --- Engineering (8) ---
  {
    id: 'boiler-pressure-vessel',
    name: 'Boiler Pressure Vessel',
    code: 'BPV',
    riskCategory: 'Engineering',
    marketSegments: ['Corporate', 'SME'],
    description: 'Covers sudden physical explosion or collapse of industrial steam boilers, pressure plant vessels, and piping networks during active operation, extending indemnity to surrounding property damage and third-party legal liabilities.',
    targetAudience: 'Textile & RMG manufacturing mills, chemical plants, pharmaceutical manufacturers, food processing factories, and thermal utilities.',
    features: [
      'Indemnifies catastrophic explosion and collapse of steam vessels and auxiliary piping',
      'Surrounding property damage coverage directly owned by the insured enterprise',
      'Third-party bodily injury and property damage legal liability indemnification',
      'Covers flue gas explosion hazards and structural pressure testing exposures'
    ],
    imageUrl: '/images/products/boiler-pressure-vessel.jpg',
    imageAlt: 'Industrial boiler pressure valves, steam pipes, and factory engineering systems',
  },
  {
    id: 'contractors-all-risks',
    name: "Contractor's All Risks",
    code: 'CAR',
    riskCategory: 'Engineering',
    marketSegments: ['Corporate', 'SME'],
    description: 'Comprehensive all-risk insurance for civil construction works (commercial buildings, highway infrastructure, bridges, drainage networks) against accidental physical damage, natural calamities, collapse, and third-party property/bodily injury liabilities.',
    targetAudience: 'General building contractors, civil engineering firms, property developers, infrastructure consortia, and government project authorities.',
    features: [
      'All-risk contract works protection against flood, cyclone, subsidence, and fire',
      'Integrated Section II coverage for third-party legal liability (bodily injury & property)',
      'Includes extended maintenance defect liability periods up to 24 months post-handover',
      'Covers construction materials in temporary storage, clearance of debris, and professional fees'
    ],
    imageUrl: '/images/products/contractors-all-risks.jpg',
    imageAlt: 'High-rise modern building construction site with cranes and civil engineering structures',
  },
  {
    id: 'contractors-plant-machinery',
    name: "Contractor's Plant & Machinery Insurance",
    code: 'CPM',
    riskCategory: 'Engineering',
    marketSegments: ['Corporate', 'SME'],
    description: 'Protects heavy civil contractor mobile equipment, stationary plant, excavators, tower cranes, earth-moving machinery, and concrete batching units against accidental overturning, collision, site collapse, fire, theft, and malicious damage.',
    targetAudience: 'Equipment leasing companies, civil construction contractors, earthworks operators, and mining/quarry enterprises.',
    features: [
      'Comprehensive coverage on working sites, during transit, and in temporary storage',
      'Indemnifies machine overturning, rockfalls, mechanical collision, and operator errors',
      'Theft, burglary, and malicious sabotage protection for high-value mobile equipment',
      'Flexible replacement-cost or market-value settlement provisions'
    ],
    imageUrl: '/images/products/contractors-plant-machinery.jpg',
    imageAlt: 'Heavy hydraulic crawler excavator on a large civil construction project',
  },
  {
    id: 'deterioration-of-stock',
    name: 'Deterioration of Stock',
    code: 'DOS',
    riskCategory: 'Engineering',
    marketSegments: ['Corporate', 'SME'],
    description: 'Specialized consequential loss cover insuring refrigerated perishable inventories (potatoes, seed stock, fresh produce, frozen fish, poultry, pharmaceuticals) against spoilage or decay caused by sudden mechanical breakdown of refrigeration plant.',
    targetAudience: 'Cold storage operators, agricultural warehousing hubs, seafood/meat processors, and temperature-controlled pharmaceutical warehouses.',
    features: [
      'Covers spoilage or contamination resulting from refrigeration machinery breakdown',
      'Protects against sudden refrigerant gas escape or sudden temperature rise in cold rooms',
      'Complements operational Machinery Breakdown (MBD) insurance policies',
      'Tailored for potato seed cold stores, frozen shrimp exporters, and vaccine vaults'
    ],
    imageUrl: '/images/products/deterioration-of-stock.jpg',
    imageAlt: 'Large industrial climate-controlled cold storage warehouse and inventory racks',
  },
  {
    id: 'erection-all-risks',
    name: 'Erection All Risks',
    code: 'EAR',
    riskCategory: 'Engineering',
    marketSegments: ['Corporate', 'SME'],
    description: 'All-risk project cover for the mechanical, electrical, and structural installation, erection, alignment, testing, and commissioning of heavy industrial machinery, manufacturing lines, substations, and industrial manufacturing plants.',
    targetAudience: 'EPC contractors, industrial plant developers, mechanical & electrical engineering firms, power plant constructors, and equipment vendors.',
    features: [
      'Covers equipment during unloading, site positioning, erection, and dry/hot commissioning',
      'Includes testing and load trial risks up to 4-8 weeks prior to commercial handover',
      'Third-party liabilities resulting from erection accidents, structural collapse, or fire',
      'Protection for construction plant, temporary works, and test consumables'
    ],
    imageUrl: '/images/products/erection-all-risks.jpg',
    imageAlt: 'Industrial engineers assembling heavy electrical turbine equipment inside a power facility',
  },
  {
    id: 'electronic-equipment-insurance',
    name: 'Electronic Equipment Insurance',
    code: 'EEI',
    riskCategory: 'Engineering',
    marketSegments: ['Corporate', 'SME'],
    description: 'All-risk policy for delicate electronic hardware (enterprise servers, mainframe computers, medical diagnostic scanners, telecommunications gear, broadcasting equipment) against sudden electrical breakdown, voltage surges, user error, and water ingress.',
    targetAudience: 'IT & software companies, corporate data centers, telecommunication service providers, diagnostic clinics, hospitals, and media houses.',
    features: [
      'Protection against electrical overvoltage surges, short-circuits, and induction spikes',
      'Covers external data media (disks, tapes) and costs of reconstructing lost operational data',
      'Increased cost of working (ICOW) coverage to hire emergency backup computing capacity',
      'Covers sensitive medical MRI/CT equipment, telecom towers, and data center servers'
    ],
    imageUrl: '/images/products/electronic-equipment-insurance.jpg',
    imageAlt: 'High-tech server room data center with glowing LED indicators on server racks',
  },
  {
    id: 'machinery-breakdown-insurance',
    name: 'Machinery Breakdown Insurance',
    code: 'MBD',
    riskCategory: 'Engineering',
    marketSegments: ['Corporate', 'SME'],
    description: 'Indemnifies industrial enterprises against unforeseen and sudden mechanical or electrical breakdown of operational plant machinery, turbines, compressors, transformers, and automated factory lines while working or at rest.',
    targetAudience: 'Industrial factories, textile spinning mills, printing presses, plastic molding units, packaging plants, and heavy manufacturing.',
    features: [
      'Indemnifies sudden mechanical failure, centrifugal force tear, and electrical burnout',
      'Covers operator error, lack of lubrication, physical jamming, and foreign body entry',
      'Pays full repair, reconditioning, freight, and replacement parts costs',
      'Essential operational backbone for continuous-production industrial plants'
    ],
    imageUrl: '/images/products/machinery-breakdown-insurance.jpg',
    imageAlt: 'High-precision automated manufacturing equipment and industrial factory production machinery',
  },
  {
    id: 'lift-insurance',
    name: 'Lift Insurance',
    code: 'LFT',
    riskCategory: 'Engineering',
    marketSegments: ['Corporate', 'SME'],
    description: 'Covers passenger elevators, service hoists, and escalators against catastrophic mechanical/electrical breakdown, structural damage, and third-party legal liability arising from passenger bodily injury or property damage due to lift failure.',
    targetAudience: 'Commercial high-rises, corporate headquarters, shopping complexes, private hospitals, and residential apartment associations.',
    features: [
      'Comprehensive mechanical and electrical breakdown cover for lift motors, cables, and carriages',
      'Third-party passenger bodily injury and accidental fatality legal liability compensation',
      'Covers passenger panic entrapment damage, drop-stop emergency braking, and electrical failure',
      'Applies to passenger elevators, hospital stretcher lifts, freight hoists, and moving escalators'
    ],
    imageUrl: '/images/products/lift-insurance.jpg',
    imageAlt: 'Modern architectural glass passenger elevator shafts inside a commercial high-rise atrium',
  },

  // --- Liability (5) ---
  {
    id: 'public-liability',
    name: 'Public Liability',
    code: 'PLI',
    riskCategory: 'Liability',
    marketSegments: ['Corporate', 'SME'],
    description: 'Indemnifies the insured enterprise against statutory or common-law liabilities for accidental third-party bodily injury, accidental death, or third-party property damage occurring on premises or caused by business operations.',
    targetAudience: 'Commercial shopping centers, restaurants, educational institutions, light industrial plants, leisure facilities, and office complexes.',
    features: [
      'Comprehensive premises slip-and-fall and customer accident legal indemnification',
      'Covers operational hazards during installation, loading/unloading, and on-site servicing',
      'Full legal defense costs, solicitor fees, and court litigation expense reimbursement',
      'Tailored limits of indemnity with flexible Any One Accident (AOA) and Any One Period (AOP) ratios'
    ],
    imageUrl: '/images/products/public-liability.jpg',
    imageAlt: 'Modern commercial shopping mall atrium with visitors and active commercial retail premises',
  },
  {
    id: 'workmens-compensation',
    name: "Workmen's Compensation",
    code: 'WCA',
    riskCategory: 'Liability',
    marketSegments: ['Corporate', 'SME'],
    description: 'Protects employers against mandatory statutory liabilities under the Bangladesh Labour Act to compensate employees and factory workers for employment-related bodily injuries, occupational diseases, permanent total/partial disability, or fatal workplace accidents.',
    targetAudience: 'Ready-Made Garment (RMG) factories, manufacturing plants, civil construction firms, freight handling companies, and industrial employers.',
    features: [
      'Statutory compliance under Bangladesh Labour Act 2006 (and subsequent amendments)',
      'Compensates accidental workplace death, permanent total/partial disablement, and temporary incapacity',
      'Reimbursement of medical hospital treatment expenses resulting from workplace accidents',
      'Protects factory management against employee worker compensation legal suits'
    ],
    imageUrl: '/images/products/workmens-compensation.jpg',
    imageAlt: 'Industrial safety engineers wearing yellow hardhats and safety gear in manufacturing environment',
  },
  {
    id: 'clinical-trial-insurance',
    name: 'Clinical Trial Insurance',
    code: 'CTI',
    riskCategory: 'Liability',
    marketSegments: ['Corporate'],
    description: 'Bespoke corporate liability cover protecting clinical trial sponsors, Contract Research Organizations (CROs), principal clinical investigators, and review boards against medical claims, bodily injury, illness, or death suffered by human research trial subjects.',
    targetAudience: 'Pharmaceutical corporations, clinical research laboratories, biotechnology innovators, and university medical research hospitals.',
    features: [
      'No-fault participant injury compensation in compliance with GCP and bioethics standards',
      'Indemnifies protocol-related medical complications, chronic disabilities, and fatal reactions',
      'Covers Sponsor, Investigator, Institutional Review Board (IRB), and CRO liabilities',
      'Mandatory prerequisite for regulatory clinical drug trial approval and international research partnerships'
    ],
    imageUrl: '/images/products/clinical-trial-insurance.jpg',
    imageAlt: 'Medical laboratory researcher conducting controlled clinical pharmaceutical research trials',
  },
  {
    id: 'comprehensive-general-liability',
    name: 'Comprehensive General Liability',
    code: 'CGL',
    riskCategory: 'Liability',
    marketSegments: ['Corporate', 'SME'],
    description: 'Broad-spectrum commercial umbrella liability policy synthesizing premises & operations liability, products & completed operations, contractual liabilities, independent contractors liability, and personal/advertising injury under unified limits.',
    targetAudience: 'Multinational corporations, large export conglomerates, hospitality chains, tier-1 industrial producers, and nationwide distribution networks.',
    features: [
      'Global multi-peril umbrella combining premises, products, and operations under one policy',
      'Satisfies stringent contractual compliance demanded by international retail buyers',
      'Personal and advertising injury coverage including defamation and copyright infringement',
      'Worldwide jurisdiction options for international trade and multinational operations'
    ],
    imageUrl: '/images/products/comprehensive-general-liability.jpg',
    imageAlt: 'Striking modern glass corporate skyscraper headquarters architecture reflecting sky',
  },
  {
    id: 'product-liability',
    name: 'Product Liability',
    code: 'PRL',
    riskCategory: 'Liability',
    marketSegments: ['Corporate', 'SME'],
    description: 'Defends and indemnifies manufacturers, processors, and commercial exporters against legal damages arising from bodily harm, illness, toxicity, or property destruction caused by defects, faulty design, or warning failures in goods manufactured or sold.',
    targetAudience: 'RMG export manufacturers, processed food & beverage companies, pharmaceutical firms, consumer chemical producers, and electronic vendors.',
    features: [
      'Protects against product defect lawsuits from international global buyers and consumers',
      'Covers manufacturing defects, design flaws, packaging failures, and inadequate warning labels',
      'Cross-border international legal defense costs and settlement indemnification',
      'Essential for apparel exporters, packaged food distributors, and pharmaceutical suppliers'
    ],
    imageUrl: '/images/products/product-liability.jpg',
    imageAlt: 'Quality assurance inspector carefully verifying product specifications in manufacturing plant',
  },

  // --- Marine (2) ---
  {
    id: 'marine-hull',
    name: 'Marine Hull',
    code: 'MAH',
    riskCategory: 'Marine',
    marketSegments: ['Corporate', 'SME', 'Retail / Personal'],
    description: 'All-risk marine vessel insurance indemnifying against physical damage or constructive total loss to the ship hull, main engines, navigational systems, and deck fittings for ocean vessels, coastal coasters, inland cargo ships, and private pleasure crafts.',
    targetAudience: 'Commercial shipping fleet owners, riverine transport operators, deep-sea fishing trawlers, dredging contractors, and private yacht/boat owners.',
    features: [
      'Institute Time Clauses (Hulls) covering total loss, salvage charges, and particular average',
      'Collision liability (3/4ths or 4/4ths collision clause) for damage to third-party vessels',
      'Protects machinery, propellers, auxiliary generators, and navigating electronics',
      'Applies to ocean cargo vessels, oil tankers, riverine barges, and private speedboats'
    ],
    imageUrl: '/images/products/marine-hull.jpg',
    imageAlt: 'Large commercial ocean cargo ship cutting through open blue waters',
  },
  {
    id: 'marine-cargo',
    name: 'Marine Cargo',
    code: 'MAR',
    riskCategory: 'Marine',
    marketSegments: ['Corporate', 'SME', 'Retail / Personal'],
    description: 'Comprehensive cargo transport cover securing commercial import/export shipments and domestic cargo in transit by sea, air, rail, or road against maritime perils, collision, sinking, jettison, theft, non-delivery, and handling damage under Institute Cargo Clauses.',
    targetAudience: 'International import/export corporations, industrial raw material importers, trading houses, freight forwarders, and individuals shipping personal cargo.',
    features: [
      'Institute Cargo Clauses (A) [All-Risk], (B), and (C) coverage terms',
      'Seamless warehouse-to-warehouse door-to-door transit protection across multimodal routes',
      'Specialized coverage for general merchandise, capital machinery, and refrigerated containers',
      'War and Strikes, Riots & Civil Commotion (SRCC) international transit endorsements'
    ],
    imageUrl: '/images/products/marine-cargo.jpg',
    imageAlt: 'Deepwater container seaport terminal stacked high with colorful shipping containers',
  },

  // --- Motor (3) ---
  {
    id: 'motor-insurance',
    name: 'Motor Insurance',
    code: 'MTR',
    riskCategory: 'Motor',
    marketSegments: ['Corporate', 'SME', 'Retail / Personal'],
    description: 'Comprehensive commercial and private motor insurance protecting commercial vehicle fleets, corporate pool cars, delivery vans, and private vehicles against accidental collision, overturning, fire, lightning, theft, and third-party liabilities.',
    targetAudience: 'Corporate transport fleets, SME delivery & transport vehicles, rideshare operators, and individual motor vehicle owners.',
    features: [
      'Complete own-damage protection against collision, overturning, fire, and malicious damage',
      'Burglary, theft, and total loss compensation based on vehicle Insured Declared Value (IDV)',
      'Statutory third-party property damage and bodily injury legal liability protection',
      'Fleet discount structures and flexible driver personal accident extensions'
    ],
    imageUrl: '/images/products/motor-insurance.jpg',
    imageAlt: 'Fleet of modern vehicles traveling smoothly along a multi-lane open highway',
  },
  {
    id: 'nirapod-private-car-insurance',
    name: 'Nirapod Private Car Insurance Policy',
    code: 'MTR',
    riskCategory: 'Motor',
    marketSegments: ['Retail / Personal'],
    description: 'Green Delta’s flagship branded comprehensive insurance product engineered exclusively for private passenger cars, bundling accidental damage, total loss, third-party liability, passenger personal accident, and specialized roadside assistance.',
    targetAudience: 'Private automobile owners, affluent individual car owners, and families seeking personalized premium private car protection.',
    features: [
      'Green Delta proprietary flagship private car product with expedited VIP claims lane',
      'Free 24/7 nationwide emergency roadside assistance, towing, and flat-tire support',
      'Personal accident compensation for driver and up to 4 passenger family members',
      'Specialized zero-depreciation and cashless network garage repair partnerships'
    ],
    imageUrl: '/images/products/nirapod-private-car-insurance.jpg',
    imageAlt: 'Sleek luxury private passenger automobile parked on modern paved urban driveway',
  },
  {
    id: 'motor-insurance-liability',
    name: 'Motor Insurance Liability',
    code: 'MTR',
    riskCategory: 'Motor',
    marketSegments: ['Corporate', 'SME', 'Retail / Personal'],
    description: 'Mandatory statutory third-party liability coverage indemnifying vehicle owners against legally mandated financial liabilities resulting from accidental death, bodily injury to third-party individuals, or damage to third-party property.',
    targetAudience: 'All registered motor vehicle owners across corporate, commercial, SME, and personal domains requiring statutory motor compliance.',
    features: [
      'Statutory Act-only compliance under national Road Transport Act regulations',
      'Uncapped statutory indemnity for third-party bodily injury and accidental fatality',
      'Covers third-party property damage caused by vehicle operation',
      'Immediate digital policy certificate issuance for road transport registry renewal'
    ],
    imageUrl: '/images/products/motor-insurance-liability.jpg',
    imageAlt: 'High-end automobile on city street highlighting safety, compliance, and legal mobility',
  },

  // --- Financial Protection (5) ---
  {
    id: 'cash-in-transit',
    name: 'Cash in Transit',
    code: 'CIT',
    riskCategory: 'Financial Protection',
    marketSegments: ['Corporate', 'SME'],
    description: 'Covers physical loss, hold-up, armed robbery, or disappearance of physical currency, bullion, payrolls, and negotiable financial instruments during armed or secured transport between financial institutions, corporate offices, and bank branches.',
    targetAudience: 'Commercial banks, Cash-in-Transit (CIT) security logistics firms, supermarket chains, payroll handlers, and large corporate treasury operations.',
    features: [
      'Comprehensive armed robbery, hold-up, and hijacking protection during cash conveyance',
      'Applies to bank messengers, security vans, and executive couriers carrying liquid funds',
      'Covers cash collections from corporate clients, ATM replenishments, and branch transits',
      'Fidelity extension for accompanied courier and armed escort personnel'
    ],
    imageUrl: '/images/products/cash-in-transit.jpg',
    imageAlt: 'Secured currency banknotes and armored banking financial transit protection concept',
  },
  {
    id: 'fidelity-guarantee-insurance',
    name: 'Fidelity Guarantee Insurance',
    code: 'FGI',
    riskCategory: 'Financial Protection',
    marketSegments: ['Corporate', 'SME'],
    description: 'Protects employers against direct financial losses of cash, securities, or company assets resulting from fraudulent acts, theft, embezzlement, or criminal dishonesty committed by identified salaried employees or fiduciary staff.',
    targetAudience: 'Commercial corporations, retail distribution networks, financial institutions, micro-lenders, and SMEs with cash-handling cashiers or accountants.',
    features: [
      'Reimburses direct pecuniary losses resulting from employee fraud, forgery, or theft',
      'Flexible policy structures: Individual Named, Floater, or Position-based schedules',
      'Covers cashiers, storekeepers, accountants, and procurement officers handling assets',
      'Crucial risk transfer requirement for corporate audit and internal control governance'
    ],
    imageUrl: '/images/products/fidelity-guarantee-insurance.jpg',
    imageAlt: 'Corporate finance audit team reviewing financial ledgers and ensuring institutional integrity',
  },
  {
    id: 'money-insurance-policy',
    name: 'Money Insurance Policy',
    code: 'MIP',
    riskCategory: 'Financial Protection',
    marketSegments: ['Corporate', 'SME'],
    description: 'Integrated money security package covering physical currency, cheques, postal orders, and stamps while retained on business premises during business hours, secured in locked safe/strongroom vaults overnight, and during counter transactions.',
    targetAudience: 'Retail stores, commercial offices, manufacturing administrative centers, fuel stations, utility collection booths, and commercial enterprises.',
    features: [
      'Covers cash on premises during business hours against armed robbery and hold-up',
      'Protects funds locked inside fireproof steel safes and vaults outside business hours',
      'Covers cash in cash drawers, point-of-sale tills, and cashier counter desks',
      'Extends to key-loss replacement and physical safe damage repair costs'
    ],
    imageUrl: '/images/products/money-insurance-policy.jpg',
    imageAlt: 'Massive circular steel vault door safeguarding financial assets and monetary reserves',
  },
  {
    id: 'agent-banking-insurance',
    name: 'Agent Banking Insurance',
    code: 'ABI',
    riskCategory: 'Financial Protection',
    marketSegments: ['Corporate', 'SME'],
    description: 'Specialized financial inclusion protection package tailored for bank agent outlets, covering cash at agent counters, cash stored in agent fireproof safes overnight, cash in transit between link branches and agent points, and agent fidelity guarantee.',
    targetAudience: 'Commercial banks operating agent banking networks, rural financial inclusion providers, and authorized SME retail banking agents.',
    features: [
      'Bundled 4-in-1 protection: Cash-at-Counter, Cash-in-Safe, Cash-in-Transit, and Fidelity',
      'Tailored for rural and semi-urban banking agent booths and grocery-point banking kiosks',
      'Scalable master-policy framework issued to banks covering thousands of agent franchisees',
      'Promotes national financial inclusion by removing credit and theft anxieties for agents'
    ],
    imageUrl: '/images/products/agent-banking-insurance.jpg',
    imageAlt: 'Retail digital payment terminal and modern agent banking counter serving customers',
  },
  {
    id: 'bankers-blanket-bond',
    name: 'Bankers Blanket Bond',
    code: 'BBB',
    riskCategory: 'Financial Protection',
    marketSegments: ['Corporate'],
    description: 'Enterprise-grade comprehensive financial institution crime bond synthesizing employee dishonesty/infidelity, on-premises robbery/burglary, in-transit armed heist, forged checks/securities, counterfeit currency, and electronic fund transfer fraud.',
    targetAudience: 'Commercial banks, scheduled financial institutions, central bank clearing agents, and non-bank financial institutions (NBFIs).',
    features: [
      'Standard Clauses 1 through 7 covering Fidelity, On Premises, In Transit, and Forgery',
      'Indemnifies counterfeit currency acceptance, forged securities, and electronic crime',
      'Tailored institutional limits protecting multi-branch banking networks nationwide',
      'Mandatory corporate governance policy required by central banking regulatory authorities'
    ],
    imageUrl: '/images/products/bankers-blanket-bond.jpg',
    imageAlt: 'Monumental neoclassical stone columns of a premier central banking institution',
  },

  // --- Personal Accident & Health (8) ---
  {
    id: 'nibedita-eco',
    name: 'Nibedita ECO',
    code: 'NIB',
    riskCategory: 'Personal Accident & Health',
    marketSegments: ['Retail / Personal'],
    description: 'Budget-tier package of Green Delta’s renowned Nibedita women’s comprehensive insurance program, delivering essential accidental death, trauma support, disability protection, and basic healthcare allowances for female policyholders.',
    targetAudience: 'Entry-level working women, female university students, rural female artisans, and microfinance female members.',
    features: [
      'Green Delta pioneer women’s empowerment insurance product at nominal premium',
      'Accidental death, permanent disability, and sudden trauma support for women',
      'Basic hospitalization cash allowances and emergency accidental medical aid',
      'Free access to women’s health advisory helpline and wellness education'
    ],
    imageUrl: '/images/products/nibedita-eco.jpg',
    imageAlt: 'Young professional South Asian woman smiling confidently in a modern workspace',
  },
  {
    id: 'nibedita-plus',
    name: 'Nibedita Plus',
    code: 'NIB',
    riskCategory: 'Personal Accident & Health',
    marketSegments: ['Retail / Personal'],
    description: 'Mid-tier Nibedita comprehensive women’s insurance plan featuring enhanced accidental death compensation, permanent disability benefits, maternity-linked trauma cover, female-specific cancer support, and expanded hospital cash benefits.',
    targetAudience: 'Mid-career professional women, female entrepreneurs, educators, and homemakers seeking robust personal financial security.',
    features: [
      'Elevated accidental death and permanent total disability capital sum insured',
      'Specialized coverage for female-specific health crises and trauma contingencies',
      'Daily hospitalization cash allowances during medical inpatient admission',
      'Maternity complication assistance and legal consultation subsidy support'
    ],
    imageUrl: '/images/products/nibedita-plus.jpg',
    imageAlt: 'Empowered female executive businesswoman leading a modern boardroom strategic meeting',
  },
  {
    id: 'nibedita-regular',
    name: 'Nibedita Regular',
    code: 'NIB',
    riskCategory: 'Personal Accident & Health',
    marketSegments: ['Retail / Personal'],
    description: 'The foundational flagship tier of the Nibedita insurance program for women, offering well-balanced accidental death indemnities, total/partial disability support, loss of job compensation during prolonged disability, and clinical hospitalization coverage.',
    targetAudience: 'Urban and suburban working women, corporate female employees, and female heads of households.',
    features: [
      'The benchmark tier of Green Delta’s internationally recognized Nibedita scheme',
      'Comprehensive accidental death, permanent total/partial disability compensation',
      'Temporary income substitution allowance during post-accident rehabilitation',
      'Coverage for burns, road accidents, domestic trauma, and reconstructive surgery'
    ],
    imageUrl: '/images/products/nibedita-regular.jpg',
    imageAlt: 'Confident female entrepreneur professional standing proudly in front of glass building',
  },
  {
    id: 'personal-accident-insurance',
    name: 'Personal Accident Insurance',
    code: 'PAC',
    riskCategory: 'Personal Accident & Health',
    marketSegments: ['SME', 'Retail / Personal'],
    description: 'Worldwide 24/7 personal accident indemnity compensating the insured or beneficiaries for accidental death, Permanent Total Disablement (PTD), Permanent Partial Disablement (PPD), Temporary Total Disablement (TTD), and accidental medical costs.',
    targetAudience: 'Individual professionals, self-employed business owners, families, and SME sole proprietors.',
    features: [
      'Worldwide 24 hours a day, 365 days a year accidental injury protection',
      '100% capital sum insured for accidental death or Permanent Total Disablement',
      'Continental scale benefits for loss of limbs, eyesight, hearing, or speech',
      'Optional weekly indemnity for Temporary Total Disablement to replace lost earnings'
    ],
    imageUrl: '/images/products/personal-accident-insurance.jpg',
    imageAlt: 'Individual enjoying a healthy, active outdoor wellness lifestyle representing personal safety',
  },
  {
    id: 'people-personal-accident',
    name: 'People Personal Accident',
    code: 'PPA',
    riskCategory: 'Personal Accident & Health',
    marketSegments: ['SME', 'Retail / Personal'],
    description: 'High-volume community and workforce group personal accident insurance delivering affordable, structured accidental death and disability benefits for organized employee pools, labor groups, and community associations.',
    targetAudience: 'SME employee groups, trade associations, cooperative societies, factory employee pools, and transport unions.',
    features: [
      'Cost-effective collective group protection tailored for small workforces and unions',
      'Seamless non-medical underwriting with simple group member roll enrollment',
      'Lump-sum death and permanent disability financial relief for grieving families',
      'Ideal for transport worker cooperatives, SME retail clerks, and artisanal guilds'
    ],
    imageUrl: '/images/products/people-personal-accident.jpg',
    imageAlt: 'United and diverse workforce team collaborating in a positive corporate team atmosphere',
  },
  {
    id: 'gd-health',
    name: 'GD Health',
    code: 'GHI',
    riskCategory: 'Personal Accident & Health',
    marketSegments: ['SME', 'Retail / Personal'],
    description: 'Green Delta’s premier individual and family health insurance scheme, reimbursing inpatient hospitalization expenses, surgical procedures, ICU fees, specialist consultations, and emergency clinical medical expenditures.',
    targetAudience: 'Individual citizens, nuclear and extended families, SME partners, and boutique enterprise employees without large corporate group health plans.',
    features: [
      'Inpatient hospitalization coverage including room rent, ICU, and surgeon fees',
      'Pre- and post-hospitalization diagnostic testing and pharmaceutical reimbursement',
      'Cashless hospital admission across GDIC nationwide network of accredited hospitals',
      'Family floater options covering policyholder, spouse, and dependent children'
    ],
    imageUrl: '/images/products/gd-health.jpg',
    imageAlt: 'Caring medical doctor with stethoscope consulting with a patient in modern hospital room',
  },
  {
    id: 'group-health-insurance',
    name: 'Group Health Insurance',
    code: 'GHI',
    riskCategory: 'Personal Accident & Health',
    marketSegments: ['Corporate', 'SME'],
    description: 'Institutional employee health benefits scheme providing structured inpatient hospitalization, Outpatient Department (OPD) reimbursement, maternity care, specialized diagnostic testing, and critical illness indemnity for corporate staff and dependents.',
    targetAudience: 'Corporate enterprises, multinational corporations, medium-to-large business institutions, NGOs, and educational establishments.',
    features: [
      'Tailored corporate benefit tiers for senior executives, mid-management, and staff',
      'Cashless medical admission across top-tier national hospitals and overseas partner clinics',
      'Customizable outpatient (OPD), maternity care, dental, and optical riders',
      'Dedicated corporate relationship manager and automated digital claim submission portal'
    ],
    imageUrl: '/images/products/group-health-insurance.jpg',
    imageAlt: 'Team of healthcare medical professionals reviewing clinical data in a hospital setting',
  },
  {
    id: 'micro-insurance',
    name: 'Micro Insurance',
    code: 'MIC',
    riskCategory: 'Personal Accident & Health',
    marketSegments: ['SME', 'Retail / Personal'],
    description: 'Pro-poor microinsurance schemes offering low-premium, high-impact bundled health and accident micro-coverage designed to shield low-income households, micro-borrowers, and marginalized wage earners from poverty traps caused by health emergencies.',
    targetAudience: 'Low-income households, microfinance institutions (MFIs), NGO-sponsored target groups, rural laborers, and informal sector workers.',
    features: [
      'Ultra-affordable micro-premiums payable weekly or monthly via mobile banking',
      'Shields marginalized families from catastrophic debt caused by health emergencies',
      'Simple paperless claims authenticated via local partner MFI field officers',
      'Covers hospital cash daily allowance, accidental death, and funeral assistance'
    ],
    imageUrl: '/images/products/micro-insurance.jpg',
    imageAlt: 'Rural community micro-entrepreneurs and artisans working together in cooperative workshop',
  },

  // --- Property (8) ---
  {
    id: 'fire-insurance',
    name: 'Fire',
    code: 'FIR',
    riskCategory: 'Property',
    marketSegments: ['Corporate', 'SME', 'Retail / Personal'],
    description: 'Standard Fire & Allied Perils policy covering physical structures, buildings, machinery, equipment, raw materials, and finished stocks against fire, lightning, and domestic gas explosions, extendable to earthquake, flood, and cyclone perils.',
    targetAudience: 'Industrial factories, commercial complexes, retail shopping stores, warehouses, and private homeowners.',
    features: [
      'Standard Fire & Lightning perils covering physical property, buildings, and inventory',
      'Special Allied Perils endorsements for Earthquake, Flood, Cyclone, and Storm surge',
      'Riot & Strike Damage (RSD) and Malicious Damage (MD) policy extensions',
      'Foundational property insurance requirement across commercial and residential sectors'
    ],
    imageUrl: '/images/products/fire-insurance.jpg',
    imageAlt: 'Modern commercial building safety and fire prevention infrastructure with alarm systems',
  },
  {
    id: 'industrial-all-risks',
    name: 'Industrial All Risks',
    code: 'IAR',
    riskCategory: 'Property',
    marketSegments: ['Corporate', 'SME'],
    description: 'Comprehensive all-risk industrial package policy combining material damage cover for all physical property (fire, natural hazards, accidental damage, machinery breakdown) with Business Interruption (FLOP/MLOP) coverage.',
    targetAudience: 'Major industrial complexes, export processing factories, spinning mills, steel/cement conglomerates, and large manufacturing plants.',
    features: [
      'All-inclusive property damage cover for buildings, plant machinery, and warehouse stock',
      'Business Interruption / Consequential Loss (FLOP and MLOP) protecting operating profit',
      'Coverage for Machinery Breakdown (MBD) built directly into the core industrial policy',
      'Reinsurance treaty backed with international capacity for high-sum-insured industrial plants'
    ],
    imageUrl: '/images/products/industrial-all-risks.jpg',
    imageAlt: 'Expansive modern industrial manufacturing refinery and heavy plant facility',
  },
  {
    id: 'operational-power-insurance',
    name: 'Operational Power Insurance',
    code: 'OPI',
    riskCategory: 'Property',
    marketSegments: ['Corporate', 'SME'],
    description: 'Specialized operational all-risk policy for operating electric power generation plants (gas turbine, heavy fuel oil, solar PV, hydro, and captive power facilities), protecting plant machinery, civil structures, and business interruption losses.',
    targetAudience: 'Independent Power Producers (IPPs), rental power plants, captive industrial power generation facilities, and national grid utility providers.',
    features: [
      'All-risk operational coverage for turbines, generators, transformers, and switchyards',
      'Protects against electrical short-circuit burnouts, boiler explosions, and turbine trips',
      'Business Interruption loss of revenue coverage during plant shutdown repairs',
      'Engineered specifically for renewable solar PV arrays, HFO thermal, and gas turbine plants'
    ],
    imageUrl: '/images/products/operational-power-insurance.jpg',
    imageAlt: 'Utility-scale renewable solar power farm panels reflecting natural daylight',
  },
  {
    id: 'hotel-owners-all-risks',
    name: 'Hotel Owners All Risks',
    code: 'HOA',
    riskCategory: 'Property',
    marketSegments: ['Corporate', 'SME'],
    description: 'Comprehensive hospitality package insurance bundling hotel structural and interior decor property cover, furniture/fixtures, kitchen and refrigeration plant breakdown, business interruption, and hotel public liability.',
    targetAudience: 'Hotels, luxury resorts, serviced apartments, banquet and convention centers, and tourism hospitality operators.',
    features: [
      'All-in-one policy covering building, luxurious decor, chandeliers, and guest furniture',
      'Guest property theft and safe deposit box loss indemnity',
      'Food & beverage poisoning liability and guest premises public liability insurance',
      'Business Interruption protection shielding room revenue and banquet cancellation losses'
    ],
    imageUrl: '/images/products/hotel-owners-all-risks.jpg',
    imageAlt: 'Luxury five-star hotel resort swimming pool and elegant hospitality architecture',
  },
  {
    id: 'householders-comprehensive-insurance',
    name: "Householder's Comprehensive Insurance",
    code: 'CRC',
    riskCategory: 'Property',
    marketSegments: ['Retail / Personal'],
    description: 'All-in-one residential property policy covering private homes, apartments, and personal household contents (furniture, electronics, appliances, valuables) against fire, lightning, burglary, housebreaking, explosion, and domestic public liability.',
    targetAudience: 'Private homeowners, residential apartment owners, tenants, and residential property occupants.',
    features: [
      'Comprehensive dwelling structure and residential household contents protection',
      'Covers fire, lightning, storm, burst water pipes, and forcible burglary',
      'Indemnifies accidental loss or breakdown of home appliances and consumer electronics',
      'Includes domestic staff compensation and occupier’s domestic public liability'
    ],
    imageUrl: '/images/products/householders-comprehensive-insurance.jpg',
    imageAlt: 'Beautifully designed modern contemporary family living room interior with tasteful decor',
  },
  {
    id: 'burglary-insurance',
    name: 'Burglary',
    code: 'BGI',
    riskCategory: 'Property',
    marketSegments: ['Corporate', 'SME', 'Retail / Personal'],
    description: 'Indemnifies businesses and property owners against physical loss or damage to insured premises contents, retail inventory, tools, equipment, and raw materials caused by burglary, housebreaking, forcible entry, armed robbery, or holdup.',
    targetAudience: 'Commercial retailers, wholesalers, industrial warehouses, corporate offices, and private residential properties.',
    features: [
      'Protection against theft involving actual, forcible, and violent entry or exit',
      'Armed robbery and daylight holdup coverage for retail and wholesale merchants',
      'Damage to premises doors, locks, security grilles, and windows during burglary attempts',
      'Flexible full-value or first-loss declaration basis for large warehouse inventories'
    ],
    imageUrl: '/images/products/burglary-insurance.jpg',
    imageAlt: 'Commercial smart security electronic camera and surveillance monitoring system',
  },
  {
    id: 'bank-locker-policy',
    name: 'Bank Locker Policy',
    code: 'BLP',
    riskCategory: 'Property',
    marketSegments: ['Retail / Personal'],
    description: 'Protects individual bank safe deposit locker hirers against physical loss or damage to deposited valuables (gold jewelry, precious gemstones, bearer bonds, legal deeds, and property documents) resulting from bank vault burglary, fire, or safe breaking.',
    targetAudience: 'Individual bank customers and families renting safe deposit lockers in commercial banking branches.',
    features: [
      'Protects gold jewelry, precious stones, heirloom ornaments, and legal documents in lockers',
      'Indemnifies vault burglary, safe robbery, fire, and structural building collapse',
      'No complex itemized proof of purchase required up to specified policy sum insured',
      'Low annual premium providing complete peace of mind for family treasure security'
    ],
    imageUrl: '/images/products/bank-locker-policy.jpg',
    imageAlt: 'Bank safe deposit locker boxes inside an ultra-secure reinforced bank vault',
  },
  {
    id: 'all-risk-insurance',
    name: 'All Risk Insurance',
    code: 'ARI',
    riskCategory: 'Property',
    marketSegments: ['Corporate', 'SME', 'Retail / Personal'],
    description: 'Worldwide all-peril indemnity covering portable, high-value personal or professional equipment (laptops, mobile smartphones, executive tablets, professional cameras, medical diagnostic kits, jewelry) against accidental loss, physical damage, and theft.',
    targetAudience: 'Corporate mobile executives, SME professionals, creative photographers, medical specialists, and affluent individuals.',
    features: [
      'Worldwide 24/7 all-peril accidental damage, drops, liquid spills, and loss protection',
      'Covers executive laptops, digital cameras, specialized medical kits, and luxury watches',
      'Covers equipment while carried in transit, on overseas business trips, or in office premises',
      'Agreed value settlement with simplified digital claim documentation'
    ],
    imageUrl: '/images/products/all-risk-insurance.jpg',
    imageAlt: 'High-value executive laptop, smartphone, and smart devices laid out on modern desk',
  },

  // --- Travel (3) ---
  {
    id: 'business-and-holidays',
    name: 'Business & Holidays',
    code: 'B&H',
    riskCategory: 'Travel',
    marketSegments: ['Retail / Personal'],
    description: 'Overseas Mediclaim and Travel Insurance covering individual travelers and vacationing families traveling abroad against emergency sickness hospitalization, accidental injury, baggage loss, passport theft, flight delays, and personal liability.',
    targetAudience: 'Holiday vacationers, tourist families, individual business tourists, and outbound international leisure travelers.',
    features: [
      'Worldwide emergency cashless medical sickness and accident hospitalization coverage',
      'Checked-in baggage delay, baggage loss, and passport theft reimbursement',
      'Trip cancellation, trip curtailment, and missed flight connection compensations',
      'Meets all Schengen visa, North American, UK, and Asian consular insurance mandates'
    ],
    imageUrl: '/images/products/business-and-holidays.jpg',
    imageAlt: 'International traveler suitcase and holiday passport ready for overseas flight',
  },
  {
    id: 'employment-and-studies',
    name: 'Employment & Studies',
    code: 'E&S',
    riskCategory: 'Travel',
    marketSegments: ['Retail / Personal'],
    description: 'Tailored long-stay international travel insurance designed for Bangladeshi students traveling overseas for higher education and migrant workers going abroad for employment, covering emergency medical care, sponsor protection, and emergency repatriation.',
    targetAudience: 'International students, higher-education scholars, overseas employment migrants, and long-term expatriates.',
    features: [
      'Long-term continuous coverage tailored for academic semesters and overseas employment contracts',
      'Emergency medical illness, hospitalization, and accidental emergency treatment abroad',
      'Sponsor protection: covers remaining university tuition fees if sponsoring parent passes away',
      'Emergency compassionate family visit allowances and repatriation of mortal remains'
    ],
    imageUrl: '/images/products/employment-and-studies.jpg',
    imageAlt: 'Diverse group of university students smiling together on an overseas international campus',
  },
  {
    id: 'corporate-frequent-travel',
    name: 'Corporate Frequent Travel',
    code: 'CFT',
    riskCategory: 'Travel',
    marketSegments: ['Corporate'],
    description: 'Annual multi-trip enterprise travel insurance scheme covering corporate executives, managing directors, and company delegates on all overseas business trips throughout the policy year with seamless automatic coverage per trip.',
    targetAudience: 'Corporate conglomerates, multinational companies, export-import enterprises, trade delegations, and executive travelers.',
    features: [
      'Annual multi-trip policy with unlimited international business departures per policy year',
      'Automated coverage for any named executive without needing per-trip policy issuance',
      'Elevated medical limits, business equipment/laptop protection, and emergency executive replacement',
      'VIP concierge assistance, international flight disruption allowances, and rental car excess waiver'
    ],
    imageUrl: '/images/products/corporate-frequent-travel.jpg',
    imageAlt: 'Commercial passenger airliner jet flying high above clouds on international corporate business flight',
  },
];

export function getProductsBySegment(segment: MarketSegment): Product[] {
  return PRODUCTS.filter((product) => product.marketSegments.includes(segment));
}

export function getProductsByRiskCategory(category: RiskCategory): Product[] {
  return PRODUCTS.filter((product) => product.riskCategory === category);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((product) => product.id === id);
}

export const TOTAL_PRODUCTS_COUNT = PRODUCTS.length;
export const TOTAL_MARKET_ALLOCATIONS = PRODUCTS.reduce(
  (acc, p) => acc + p.marketSegments.length,
  0
);
