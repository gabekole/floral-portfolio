interface LabDataItem {
    id: string;
    week: string;
    title: string;
    floralRecipe: string[];
    toolsUsed: string[];
    imagesUrl : string[];
    description: string;
}

const labData: LabDataItem[] = [
    {
        id: "lab1",
        week: "Week 1: January 21st",
        title: "Lab #1: Principles and Elements of Floral Design",
        floralRecipe: ["Limonium", "Carnations", "Bear Grass"],
        toolsUsed: ["Floral knife", "Floral tape", "Sticky dots"],
        description: "This introductory design emphasized creating clean lines using bear grass and developing form through rounded groupings of carnations. Negative space was intentionally left between materials to establish balance and rhythm, while the textured surfaces of limonium contrasted smoothly against the glossy bear grass. A complementary color scheme enhanced unity, and careful proportioning between elements helped establish a strong focal point. Techniques such as precise knife cuts and subtle taping ensured smooth transitions and durability."
        , imagesUrl : ['week1Basic/7.png', 'week1Basic/9.png', 'week1Basic/18.jpg']
    },
    {
        id: "lab2",
        week: "Week 2: January 28th",
        title: "Lab #2: Basic Foam Arrangement",
        floralRecipe: ["Roses", "Baby's breath", "Eucalyptus", "Daisy pompoms"],
        toolsUsed: ["Floral foam", "Floral knife", "Floral shears", "Mug (as container)"],
        description: "Using floral foam allowed for deliberate line placement and control over positive and negative space. The rounded form created harmony with the mug container, while variations in flower size contributed to visual depth and rhythm. A subtle transition of textures from delicate baby's breath to more solid roses encouraged smooth eye movement through the design. Color was kept soft and analogous to maintain unity, and the overall scale was appropriate for an intimate table setting."
        , imagesUrl : ['week2Foam/1.png', 'week2Foam/6.jpg', 'week2Foam/2.png']
    },
    {
        id: "lab3",
        week: "Week 3: February 4th",
        title: "Lab #3: All Foliage Arrangement & Floral Taping",
        floralRecipe: ["Silver dollar eucalyptus", "Italian ruscus", "Leatherleaf fern", "Salal", "Pittosporum"],
        toolsUsed: ["Floral knife", "Floral tape", "Floral shears", "Floral wire"],
        description: "This all-foliage design explored the use of diverse textures and forms to create dynamic rhythm and depth without relying on flowers. Careful grouping of coarse and smooth foliage established pattern, while negative space was preserved to maintain visual clarity. Asymmetrical balance was achieved by contrasting larger ferns with lighter, airy eucalyptus. Floral taping techniques ensured durability, and the transitions between materials were softened by overlapping textures, leading to a unified and cohesive design."
        , imagesUrl : ['week3Foliage/11.png', 'week3Foliage/8.png','week3Foliage/12.png']
    },
    {
        id: "lab4",
        week: "Week 4: February 11th",
        title: "Lab #4: Wild/Asymmetrical Arrangement",
        floralRecipe: ["Queen Anne's lace", "Ranunculus", "Protea", "Astilbe", "Eucalyptus", "Ruscus"],
        toolsUsed: ["Floral knife", "Floral shears", "Chicken wire", "Ceramic vessel"],
        description: "This asymmetrical arrangement emphasized dynamic line movement through directional flower placement and cascading materials. The form remained open and airy, using negative space to highlight focal flowers and create depth. Textures from smooth ranunculus and rugged protea introduced contrast, while repeating shapes established rhythm. Harmony between the natural materials and the neutral ceramic vessel supported unity, and chicken wire provided internal structure for stable yet flexible stem positioning."
        , imagesUrl : ['week4WildAsymmetrical/7.png', 'week4WildAsymmetrical/6.png', 'week4WildAsymmetrical/8.jpg']
    },
    {
        id: "lab5",
        week: "Week 5: February 18th",
        title: "Lab #5: Long & Low Design",
        floralRecipe: ["Garden roses", "Spray roses", "Stock", "Lisianthus", "Seeded eucalyptus", "Italian ruscus"],
        toolsUsed: ["Chicken wire", "Floral foam", "Floral shears", "Floral knife", "Low ceramic container"],
        description: "The long and low composition emphasized horizontal line and negative space to maintain visual flow across the entire piece. Groupings of different textures enhanced rhythm, while the gentle curve of seeded eucalyptus established transitional movement. The design achieved symmetrical balance when viewed from either end, with a central focal point framed by progressively smaller blooms. Proportions were adjusted to ensure the arrangement fit the low container appropriately without overwhelming its setting."
        , imagesUrl : ['week5LongAndLow/3.png', 'week5LongAndLow/5.png', 'week5LongAndLow/1.jpg']
    },
    {
        id: "lab6a",
        week: "Week 6: February 25th",
        title: "Lab #6a: Wristlet Corsage",
        floralRecipe: ["Spray roses", "Waxflower", "Baby's breath", "Heather", "Variegated pittosporum"],
        toolsUsed: ["Floral tape", "Floral wire", "Corsage wristlet", "Floral adhesive", "Ribbon"],
        description: "The wristlet corsage design required careful management of small-scale forms and transitions between textural materials. A curved line was created across the wristlet for natural movement, with balance achieved by layering heavier blooms centrally and lighter accents toward the edges. Smooth adhesive and taping techniques ensured a durable structure without visible mechanics. Unity was achieved through a soft, analogous color palette and repeated use of delicate textures."
        , imagesUrl: ['week6Wearable/17.png', 'week6Wearable/14.png', 'week6Wearable/15.png']
    },
    {
        id: "lab6b",
        week: "Week 6: February 25th",
        title: "Lab #6b: Boutonniere",
        floralRecipe: ["Spray roses", "Waxflower", "Baby's breath", "Heather", "Variegated pittosporum"],
        toolsUsed: ["Floral tape", "Floral wire", "Boutonniere pins"],
        description: "The boutonniere design emphasized compact form and precise transitions between materials. A strong vertical line was established through the central flower, supported by minimal negative space to retain simplicity. Symmetrical balance was maintained by evenly tapering foliage on either side. Textures varied subtly to create interest without overwhelming scale. Wiring and taping techniques were essential for durability and a polished finish."
        , imagesUrl: ['week6Wearable/1.png', 'week6Wearable/8.png', 'week6Wearable/6.png']
    },
    {
        id: "lab6c",
        week: "Week 6: February 25th",
        title: "Lab #6c: Corsage",
        floralRecipe: ["Spray roses", "Waxflower", "Baby's breath", "Heather", "Variegated pittosporum"],
        toolsUsed: ["Floral tape", "Floral wire", "Corsage wristlet", "Floral adhesive", "Ribbon"],
        description: "This corsage design built on previous wearable techniques by emphasizing layers and textural rhythm. Rounded forms established an organized shape with negative space between clusters for breathability. Balance was achieved asymmetrically by placing heavier blooms slightly off-center, leading to a natural focal point. Transitional layering of materials helped create depth, while cohesive color selection reinforced unity across the design."
        , imagesUrl: ['week6Wearable/9.png','week6Wearable/10.png','week6Wearable/11.png']
    },
    {
        id: "lab8",
        week: "Week 8: March 11th",
        title: "Lab #8: Ikebana",
        floralRecipe: ["Calla lily", "Orchid", "Bird of paradise", "Cherry blossom branches", "Horsetail"],
        toolsUsed: ["Kenzan (pin frog)", "Shallow container", "Floral scissors", "Floral knife"],
        description: "The Ikebana design emphasized minimal line movement, focusing on the relationship between positive and negative space. Vertical and diagonal lines were used to guide visual rhythm while maintaining simplicity. Form and shape were closely managed to express elegance and asymmetry, with each material occupying a clearly defined role in proportion and balance. Careful transitions in height and angle created unity within the open structure."
        , imagesUrl : ['week8Ikebana/13.png', 'week8Ikebana/10.png', 'week8Ikebana/5.png', 'week8Ikebana/1.png', 'week8Ikebana/4.png']
    },
    {
        id: "lab9",
        week: "Week 10: March 25th",
        title: "Lab #9: Basic Hand-tied Bouquet",
        floralRecipe: ["Roses", "Ranunculus", "Tulips", "Lisianthus", "Eucalyptus", "Italian ruscus"],
        toolsUsed: ["Floral shears", "Floral knife", "Floral tape", "Ribbon", "Straight pins"],
        description: "The hand-tied bouquet involved careful spiral stem placement to establish dynamic circular rhythm and continuous visual flow. Rounded shapes dominated the form, while careful size graduation maintained proportion and scale. Focal depth was created by strategically layering larger blooms in front with smaller accents supporting in the background. Textural variety added richness without disrupting unity. Techniques such as tension control and stem binding were essential for structural integrity."
        , imagesUrl : ['week10HandBouquet/5.jpg', 'week10HandBouquet/1.jpg', 'week10HandBouquet/3.jpg']
    },
    {
        id: "lab10",
        week: "Week 11: April 1st",
        title: "Lab #10: Wild Bouquet",
        floralRecipe: ["Garden roses", "Poppies", "Butterfly ranunculus", "Flowering branches", "Foraged grasses", "Foraged berries", "Eucalyptus"],
        toolsUsed: ["Floral shears", "Floral knife", "Natural twine", "Garden scissors"],
        description: "The wild bouquet balanced freeform natural textures with structured spiral binding techniques. An organic line was achieved through the varied directionality of foraged materials, leading the eye through the bouquet. The asymmetrical form created dynamic visual rhythm while maintaining intentional transitions between large blooms and delicate grasses. The piece achieved unity through a restrained color palette and cohesive textural interplay."
        , imagesUrl : ['Week11WildBouquet/6.png', 'Week11WildBouquet/3.png', 'Week11WildBouquet/4.png']
    },
    {
        id: "lab11",
        week: "Week 12: April 8th",
        title: "Lab #11: Floral Crown",
        floralRecipe: ["Spray roses", "Waxflower", "Baby's breath", "Jasmine vine", "Seeded eucalyptus", "Italian ruscus"],
        toolsUsed: ["Floral wire", "Floral tape", "Measuring tape", "Floral scissors", "Ribbon"],
        description: "The floral crown required precise measurement and weight distribution to ensure comfortable wear. A continuous, circular line was formed using delicate materials to create rhythm and movement across the piece. Rounded flower groupings provided focal points without overpowering the overall form. Smooth transitions between flowers and foliage were achieved with careful taping and wiring techniques, enhancing depth, balance, and unity across the design."
        , imagesUrl : ['week12floralCrown/3.png', 'week12floralCrown/5.jpg', 'week12floralCrown/1.png']
    }
];


interface LabShortNames {
    [id: string]: string;
}

// Navigation shortname mapping
const labShortNames: LabShortNames = {
    "lab1": "Principles & Elements",
    "lab2": "Foam Arrangement",
    "lab3": "Foliage & Taping",
    "lab4": "Asymmetrical",
    "lab5": "Long & Low",
    "lab6a": "Wristlet Corsage",
    "lab6b": "Boutonniere",
    "lab6c": "Corsage",
    "lab8": "Ikebana",
    "lab9": "Hand-tied Bouquet",
    "lab10": "Wild Bouquet",
    "lab11": "Floral Crown"
};  

export { labShortNames, labData }
export type { LabShortNames, LabDataItem }
