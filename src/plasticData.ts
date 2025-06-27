type PlasticType = {
    id: number;
    title: string;
    type: string;
    description: string;
    commonItems: string;
    recycle: string[];
    harms: string[];
    image: string;
};

export const plasticData: PlasticType[] = [
    {
        id: 0,
        title: "Plastic Water/Soda Bottles",
        type: "PET",
        description: "Transparent, lightweight, and strong thermoplastic used for single-serve drink bottles and food trays; widely recycled yet notorious for ending up as ocean microplastics when littered or landfilled.",
        commonItems: "Water bottles, Soda bottles, Juice bottles, Food containers, Salad dressing bottles, Oil bottles, Microwave food trays, Clear takeout containers",
        image: "/plastic-bottle.png",
        recycle: [
            "Rinse out to remove any liquids or residue.",
            "Remove the cap (♷ – usually a different plastic).",
            "Flatten to save space.",
            "Put in blue bin or take to local recycling center.",
            "Some areas have bottle return schemes."
        ],
        harms: [
            "Easily enters oceans and breaks into microplastics that pollute the environment.",
            "Microplastics may enter drinking water and food, inducing cell injury, apoptosis, and genotoxic effects.",
            "Releases antimony during long storage in heat, which is a toxic substance."
        ]
    },
    {
        id: 1,
        title: "Milk Jugs, Shampoo Bottles",
        type: "HDPE",
        description: "Tough, opaque plastic for household liquids—milk, detergents, shampoos—valued for chemical resistance; highly recyclable but, when discarded improperly, persists for centuries and clogs waterways and landfills.",
        commonItems: "Milk jugs, Shampoo bottles, Detergent bottles, Toiletry containers, Juice bottles, Bleach bottles, Cleaning product bottles, Ice cream tubs",
        image: "/shampoo.png",
        recycle: [
            "Clean and dry the containers.",
            "Leave labels on (machines handle it).",
            "Place in curbside recycling or drop-off center."
        ],
        harms: [
            "Persists for centuries in nature, contributing to landfill overflow.",
            "Can release harmful gases when burned.",
            "May entangle or choke wildlife if improperly disposed."
        ]
    },
    {
        id: 2,
        title: "Pipes, Medical Tubing, Cling Film",
        type: "PVC",
        image: "/pipe.png",
        description: "Versatile plastic available in rigid pipes and flexible films; contains chlorine and additives that complicate recycling and release hazardous dioxins and heavy-metal residues when incinerated or burned.",
        commonItems: "Plumbing pipes, Credit cards, Medical tubing, Wire insulation, Cling wrap, IV bags, Vinyl flooring, Blister packs",
        recycle: [
            "Avoid use when possible; choose safer alternatives like foil or silicone wrap.",
            "Donate leftover pipes to reuse or construction centers.",
            "Do not burn; releases extremely toxic dioxins.",
            "Rarely recycled curbside—requires specialized centers."
        ],
        harms: [
            "Releases highly toxic dioxins when burned.",
            "Contains phthalates and heavy metals, disrupting hormones.",
            "Linked to cancer, liver damage, and reproductive issues."
        ]
    },
    {
        id: 3,
        title: "Plastic Bags, Wrappers",
        type: "LDPE",
        description: "Thin, flexible film used for grocery bags and bread wraps; lightweight nature lets it blow long distances, litter landscapes, and suffocate marine creatures if not captured for recycling.",
        image: "/plastic_bag.png",
        commonItems: "Grocery bags, Bread bags, Packaging film, Frozen food bags, Squeeze bottles, Bubble wrap, Newspaper sleeves, Garbage bin liners",
        recycle: [
            "Collect clean bags separately.",
            "Reuse for storage or bin liners.",
            "Drop at supermarket plastic-bag return points."
        ],
        harms: [
            "Easily enters rivers and oceans, suffocating marine life.",
            "Can block animal digestive systems causing death.",
            "Breaks into microplastics that remain in soil and water."
        ]
    },
    {
        id: 4,
        title: "Yogurt Containers, Bottle Caps, Straws",
        type: "PP",
        description: "Lightweight, heat-resistant polymer common in food tubs, medicine bottles, and straws; relatively safe but slowly fragments into microplastics that accumulate in soil, water, and human bodies.",
        commonItems: "Yogurt cups, Bottle caps, Straws, Takeout food containers, Medicine bottles, Ice cream tubs, Chip bags, Hinged lids",
        recycle: [
            "Wash thoroughly to remove food.",
            "Some local facilities accept them—check before disposing.",
            "Keep separate from PET and HDPE."
        ],
        image: "/bottlecap.png",
        harms: [
            "Kills marine life through ingestion.",
            "Microplastics from PP have been found in soil, food, and human stool.",
            "Can leach chemicals when exposed to heat or sunlight."
        ]
    },
    {
        id: 5,
        title: "Disposable Cups, Foam Packaging",
        type: "PS",
        image: "/disposablecup.png",
        description: "Foamed or rigid polystyrene—better known as Styrofoam—provides cheap insulation and takeaway packaging, yet shatters into persistent fragments and rarely finds a viable recycling pathway.",
        commonItems: "Disposable foam cups, Foam plates, Takeout food boxes, Packing peanuts, Egg cartons, Foam trays, Instant noodle cups",
        recycle: [
            "Avoid use—difficult to recycle.",
            "Use alternatives like paper or steel.",
            "Check for rare specialized drop-off centers."
        ],
        harms: [
            "Degrades slowly and breaks into toxic microfragments.",
            "Can leach styrene into food—a possible human carcinogen.",
            "Harms marine species when ingested."
        ]
    },
    {
        id: 6,
        title: "Baby Bottles (Old), Electronics, CDs",
        type: "Other",
        image: "/babybottle.png",
        description: "Catch-all category for mixed or specialty plastics—polycarbonate, acrylics, bioplastics—often containing BPA; difficult to sort and recycle, frequently ending life in landfills or incinerators.",
        commonItems: "Old baby bottles, Reusable water bottles, CDs and DVDs, Eyeglass lenses, Electronics housings, Car parts, Food can linings, Luggage shells",
        recycle: [
            "Avoid BPA-based plastics when possible.",
            "Check for recycling codes and drop-off facilities.",
            "Do not burn—may release dangerous fumes."
        ],
        harms: [
            "Often contains BPA, linked to hormone disruption and infertility.",
            "Releases toxic particles when degraded or incinerated.",
            "Ends up in landfills, rarely recycled."
        ]
    }
];
