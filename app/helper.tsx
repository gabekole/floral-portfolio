interface LabDataItem {
    id: string;
    week: string;
    title: string;
    floralRecipe: string[];
    toolsUsed: string[];
    imagesUrl : string[];
    description: string;
}

const labData : LabDataItem[] = [
    {
        id: "lab1",
        week: "Week 1: January 21st",
        title: "Lab #1: Principles and Elements of Floral Design",
        floralRecipe: ["Limonium", "Carnations", "Bear Grass", "Wax Flower"],
        toolsUsed: ["Floral knife", "Bud Vase"],
        description: "In this introductory lab, I learned about the fundamental principles of floral design including balance, proportion, and harmony. The goal was to establish a visual line with the bear grass to establish the large pink carnation as a focal point. The minimal materials resulted in an airy and wild structure, with the form and shape being triangular due to the natrual spread of the flowers.",
        imagesUrl : ['week1Basic/7.png', 'week1Basic/9.png', 'week1Basic/18.jpg']
    },
    {
        id: "lab2",
        week: "Week 2: January 28th",
        title: "Lab #2: Basic Foam Arrangement",
        floralRecipe: ["Larkspur", "Leather Leaf", "Limonium", "Daisy pompoms", "Pittosporum", "Carnation"],
        toolsUsed: ["Floral foam", "Floral knife", "Floral Snips", "Mug (as container)"],
        description: "This arrangement was the most angular and geometrically strict I've made. The arrangement took on a triangular shape, with a focal point at the base. Working with floral foam was a new experience that allowed for precise stem placement and secure structural support.",
        imagesUrl : ['week2Foam/1.png', 'week2Foam/6.jpg', 'week2Foam/2.png']
    },
    {
        id: "lab3",
        week: "Week 3: February 4th",
        title: "Lab #3: All Foliage Arrangement & Floral Taping",
        floralRecipe: ["Leatherleaf", "Asparagus Fern", "Aralia Leaf", "Plumosa", "Leurothoe Rainbow", "Nagi", "Pittosporum", "Aspidistra", "Pandanus Leaf"],
        toolsUsed: ["Floral snips", "Clear floral tape", "Vase"],
        description: "This lab challenged me build an arrangement without relying on colorful blooms.The varying textures and shades of green created a surprisingly dynamic arrangement with depth and character. The shape was round with the bounds defined by the large aralia leaf. The arangment was designed to take an ovular form.",
        imagesUrl : ['week3Foliage/11.png', 'week3Foliage/8.png','week3Foliage/12.png']
    },
    {
        id: "lab4",
        week: "Week 4: February 11th",
        title: "Lab #4: Wild/Asymmetrical Arrangement",
        floralRecipe: ["Daffodil", "Asparagus Fern", "Leatherleaf", "Limonium", "Chrysanthemum", "Hemlock Pine"],
        toolsUsed: ["Floral snips", "Glass vase"],
        description: "Creating this asymmetrical arrangement allowed me to break away from traditional symmetrical design of the previous lab. I focused on creating movement through the placement of cascading elements and varying heights with a lot of negative space between the different elements of the piece. The placements resulted in a ovular form.",
        imagesUrl : ['week4WildAsymmetrical/7.png', 'week4WildAsymmetrical/6.png', 'week4WildAsymmetrical/8.jpg']
    },
    {
        id: "lab5",
        week: "Week 5: February 18th",
        title: "Lab #5: Long & Low Design",
        floralRecipe: ["Nagi", "Leatherleaf", "Salal", "Pom chrysanthemum", "Limonium", "Carnation", "Snap Dragon"],
        toolsUsed: ["Floral foam", "Clear floral tape", "Floral Snips", "Floral knife", "Low container"],
        description: "This arrangement focused on restricting the height of all elements of the arrangement. I particularly enjoyed creating visual flow along the length of the arrangement while maintaining a cohesive look from all viewing angles.",
        imagesUrl : ['week5LongAndLow/3.png', 'week5LongAndLow/5.png', 'week5LongAndLow/1.jpg']
    },
    {
        id: "lab6a",
        week: "Week 6: February 25th",
        title: "Lab #6a: Wristlet Corsage",
        floralRecipe: ["Spray roses", "Limonium", "Leatherleaf"],
        toolsUsed: ["Corsage wristlet", "Cold floral glue"],
        description: "We created wristlet corsages designed for ease of wear and comfort. I learned how to securely attach flowers to a wristlet base using floral adhesive and tape, ensuring durability without sacrificing elegance. Balancing the design to sit comfortably on the wrist was key.",
        imagesUrl: ['week6Wearable/17.png', 'week6Wearable/14.png', 'week6Wearable/15.png']
        },
        {
        id: "lab6b",
        week: "Week 6: February 25th",
        title: "Lab #6b: Boutonniere",
        floralRecipe: ["Carnation", "Baby's breath", "Gunni Eucalyptus"],
        toolsUsed: ["Floral tape"],
        description: "For the boutonniere, simplicity and neatness were essential. I practiced precise wiring of individual flowers and foliage, keeping the design compact and clean. Proper floral taping was critical to ensure both durability and a polished look.",
        imagesUrl: ['week6Wearable/1.png', 'week6Wearable/8.png', 'week6Wearable/6.png',]
        },
        {
        id: "lab6c",
        week: "Week 6: February 25th",
        title: "Lab #6c: Corsage",
        floralRecipe: ["Spray roses", "Carnation", "Baby's breath", "Leatherleaf", "Limonium", "Gunni Eucalyptus"],
        toolsUsed: ["Floral tape"],
        description: "The traditional corsage allowed for a slightly larger and more layered design compared to the boutonniere. I experimented with combining different textures and layering flowers to create depth while ensuring the structure remained lightweight and secure.",
        imagesUrl: ['week6Wearable/9.png','week6Wearable/10.png','week6Wearable/11.png']
        },
    {
        id: "lab8",
        week: "Week 8: March 11th",
        title: "Lab #8: Ikebana",
        floralRecipe: ["Rose", "Salal", "Israeli Ruscus", "Pittosporum", "Solidago"],
        toolsUsed: ["Kenzan (pin frog)", "Shallow container", "Floral snips", "Floral foam", "Hot glue"],
        description: "Ikebana introduced me to the Japanese art of flower arrangement with its emphasis on minimalism, asymmetry, and the beauty of negative space. The discipline required for this style was challenging but rewarding. I appreciated learning about the significance of the three main lines representing heaven, earth, and humanity, and how their proper placement creates harmony in the arrangement.",
        imagesUrl : ['week8Ikebana/13.png', 'week8Ikebana/10.png', 'week8Ikebana/5.png', 'week8Ikebana/1.png', 'week8Ikebana/4.png']
    },
    {
        id: "lab9",
        week: "Week 10: March 25th",
        title: "Lab #9: Basic Hand-tied Bouquet",
        floralRecipe: ["Salal", "Babys Breath", "Carnation", "Leatherleaf", "Daisy Chrysanthemum", "Pittosporum"],
        toolsUsed: ["Floral snips", "Bindwire", "Floral tape", "Ribbon"],
        description: "The hand-tied bouquet technique creates a gathered, natural look that's perfect for weddings and special events. I learned the importance of stem placement and the spiral technique to create structure. The most challenging aspect was maintaining consistent tension while adding stems, but the final result was a professional-looking bouquet with a natural, gathered appearance.",
        imagesUrl : ['week10HandBouquet/5.jpg', 'week10HandBouquet/1.jpg', 'week10HandBouquet/3.jpg']
    },
    {
        id: "lab10",
        week: "Week 11: April 1st",
        title: "Lab #10: Wild Bouquet",
        floralRecipe: ["Salal", "Pittosporum", "Leatherleaf", "Veronica", "Kangaroo Paw", "Spray Roses", "Daffodils", "Globe thistle", "Clematis"],
        toolsUsed: ["Floral snips", "Floral Tape", "Ribbon", "Bindwire", "Pins"],
        description: "Building on the hand-tied technique from the previous lab, this wild bouquet incorporated foraged elements to create a more organic, garden-inspired look. The challenge was balancing the structured technique with the wild, unruly nature of the foraged materials. I enjoyed the freedom this style provided while still maintaining a cohesive design.",
        imagesUrl : ['Week11WildBouquet/6.png', 'Week11WildBouquet/3.png', 'Week11WildBouquet/4.png']
    },
    {
        id: "lab11",
        week: "Week 12: April 8th",
        title: "Lab #11: Floral Crown",
        floralRecipe: ["Spray roses", "Gunni Eucalyptus", "Baby's breath"],
        toolsUsed: ["Floral snips", "Floral tape"],
        description: "Creating a floral crown required precise measurement and careful consideration of weight distribution. Each floral element needed to be securely anchored while maintaining a delicate appearance. The crown needed to be both beautiful and functional – comfortable enough to wear for extended periods. This final project brought together many of the techniques learned throughout the course.",
        imagesUrl : ['week12floralCrown/3.png', 'week12floralCrown/5.jpg', 'week12floralCrown/1.png']
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
