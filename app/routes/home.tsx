import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useRef } from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

interface LabDataItem {
  id: string;
  week: string;
  title: string;
  floralRecipe: string[];
  toolsUsed: string[];
  description: string;
}

interface NavigationProps {
  activeLab: string;
  setActiveLab: (id: string) => void;
}


const labData : LabDataItem[] = [
  {
    id: "lab1",
    week: "Week 1: January 21st",
    title: "Lab #1: Principles and Elements of Floral Design",
    floralRecipe: ["Limonium", "Carnations", "Bear Grass"],
    toolsUsed: ["Floral knife", "Floral tape", "Sticky dots"],
    description: "In this introductory lab, I learned about the fundamental principles of floral design including balance, proportion, and harmony. I particularly enjoyed working with the contrasting textures of carnations and bear grass. The lesson on proper cutting techniques with the floral knife was challenging but essential for clean stems and prolonged flower life."
  },
  {
    id: "lab2",
    week: "Week 2: January 28th",
    title: "Lab #2: Basic Foam Arrangement",
    floralRecipe: ["Roses", "Baby's breath", "Eucalyptus", "Daisy pompoms"],
    toolsUsed: ["Floral foam", "Floral knife", "Floral shears", "Mug (as container)"],
    description: "Working with floral foam was a new experience that allowed for precise stem placement and secure structural support. I experimented with varying heights to create visual interest within the mug container. Next time, I would like to incorporate more varied foliage to add depth to the arrangement."
  },
  {
    id: "lab3",
    week: "Week 3: February 4th",
    title: "Lab #3: All Foliage Arrangement & Floral Taping",
    floralRecipe: ["Silver dollar eucalyptus", "Italian ruscus", "Leatherleaf fern", "Salal", "Pittosporum"],
    toolsUsed: ["Floral knife", "Floral tape", "Floral shears", "Floral wire"],
    description: "This lab challenged me to appreciate the beauty and versatility of foliage without relying on colorful blooms. Learning floral taping techniques was particularly valuable as it provides the foundation for future wearable designs. The varying textures and shades of green created a surprisingly dynamic arrangement with depth and character."
  },
  {
    id: "lab4",
    week: "Week 4: February 11th",
    title: "Lab #4: Wild/Asymmetrical Arrangement",
    floralRecipe: ["Queen Anne's lace", "Ranunculus", "Protea", "Astilbe", "Eucalyptus", "Ruscus"],
    toolsUsed: ["Floral knife", "Floral shears", "Chicken wire", "Ceramic vessel"],
    description: "Creating this asymmetrical arrangement allowed me to break away from traditional symmetrical designs and embrace a more organic aesthetic. I focused on creating movement through the placement of cascading elements and varying heights. The challenge was maintaining visual balance while intentionally creating asymmetry – a paradox that taught me much about composition."
  },
  {
    id: "lab5",
    week: "Week 5: February 18th",
    title: "Lab #5: Long & Low Design",
    floralRecipe: ["Garden roses", "Spray roses", "Stock", "Lisianthus", "Seeded eucalyptus", "Italian ruscus"],
    toolsUsed: ["Chicken wire", "Floral foam", "Floral shears", "Floral knife", "Low ceramic container"],
    description: "The long and low arrangement is perfect for table centerpieces as it allows for conversation over the top. Working with the horizontal emphasis taught me to think differently about space and proportion. I particularly enjoyed creating visual flow along the length of the arrangement while maintaining a cohesive look from all viewing angles."
  },
  {
    id: "lab6",
    week: "Week 6: February 25th",
    title: "Lab #6: Boutonnieres and Corsages",
    floralRecipe: ["Spray roses", "Waxflower", "Baby's breath", "Heather", "Variegated pittosporum"],
    toolsUsed: ["Floral tape", "Floral wire", "Boutonniere pins", "Corsage wristlet", "Floral adhesive", "Ribbon"],
    description: "Creating wearable flower designs required precision and attention to durability. The boutonniere demanded simplicity while the corsage allowed for more elaborate design. I learned the importance of properly wiring each element and securing with floral tape for longevity. The technique of using contrast in textures helped create visual interest despite the small scale."
  },
  {
    id: "lab8",
    week: "Week 8: March 11th",
    title: "Lab #8: Ikebana",
    floralRecipe: ["Calla lily", "Orchid", "Bird of paradise", "Cherry blossom branches", "Horsetail"],
    toolsUsed: ["Kenzan (pin frog)", "Shallow container", "Floral scissors", "Floral knife"],
    description: "Ikebana introduced me to the Japanese art of flower arrangement with its emphasis on minimalism, asymmetry, and the beauty of negative space. The discipline required for this style was challenging but rewarding. I appreciated learning about the significance of the three main lines representing heaven, earth, and humanity, and how their proper placement creates harmony in the arrangement."
  },
  {
    id: "lab9",
    week: "Week 10: March 25th",
    title: "Lab #9: Basic Hand-tied Bouquet",
    floralRecipe: ["Roses", "Ranunculus", "Tulips", "Lisianthus", "Eucalyptus", "Italian ruscus"],
    toolsUsed: ["Floral shears", "Floral knife", "Floral tape", "Ribbon", "Straight pins"],
    description: "The hand-tied bouquet technique creates a gathered, natural look that's perfect for weddings and special events. I learned the importance of stem placement and the spiral technique to create structure. The most challenging aspect was maintaining consistent tension while adding stems, but the final result was a professional-looking bouquet with a natural, gathered appearance."
  },
  {
    id: "lab10",
    week: "Week 11: April 1st",
    title: "Lab #10: Wild Bouquet",
    floralRecipe: ["Garden roses", "Poppies", "Butterfly ranunculus", "Flowering branches", "Foraged grasses", "Foraged berries", "Eucalyptus"],
    toolsUsed: ["Floral shears", "Floral knife", "Natural twine", "Garden scissors"],
    description: "Building on the hand-tied technique from the previous lab, this wild bouquet incorporated foraged elements to create a more organic, garden-inspired look. The challenge was balancing the structured technique with the wild, unruly nature of the foraged materials. I enjoyed the freedom this style provided while still maintaining a cohesive design."
  },
  {
    id: "lab11",
    week: "Week 12: April 8th",
    title: "Lab #11: Floral Crown",
    floralRecipe: ["Spray roses", "Waxflower", "Baby's breath", "Jasmine vine", "Seeded eucalyptus", "Italian ruscus"],
    toolsUsed: ["Floral wire", "Floral tape", "Measuring tape", "Floral scissors", "Ribbon"],
    description: "Creating a floral crown required precise measurement and careful consideration of weight distribution. Each floral element needed to be securely anchored while maintaining a delicate appearance. The crown needed to be both beautiful and functional – comfortable enough to wear for extended periods. This final project brought together many of the techniques learned throughout the course."
  }
];

interface LabShortNames {
  [id: string]: string;
}

// Navigation shortname mapping
const labShortNames : LabShortNames = {
  "lab1": "Principles & Elements",
  "lab2": "Foam Arrangement",
  "lab3": "Foliage & Taping",
  "lab4": "Asymmetrical",
  "lab5": "Long & Low",
  "lab6": "Boutonnieres & Corsages",
  "lab8": "Ikebana",
  "lab9": "Hand-tied Bouquet",
  "lab10": "Wild Bouquet",
  "lab11": "Floral Crown"
};

// Header component
const Header = () => (
  <header className="bg-rose-800 text-white text-center py-8">
    <h1 className="text-4xl font-bold mb-4">My Floral Art Portfolio</h1>
    <p className="text-xl max-w-3xl mx-auto px-4">
      A collection of designs and techniques learned throughout my floral art class
    </p>
  </header>
);

// Navigation component with horizontal scrolling
const Navigation = ({ activeLab, setActiveLab} : { activeLab: string; setActiveLab: (id: string) => void }) => {
  const navRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (navRef.current) navRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };
  
  const scrollRight = () => {
    if (navRef.current) navRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };
  
  return (
    <nav className="sticky top-0 bg-white shadow-md z-10">
      <div className="relative max-w-6xl mx-auto">
        <button 
          onClick={scrollLeft} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md z-20"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div 
          className="flex overflow-x-auto py-1 px-8 scrollbar-hide scroll-smooth" 
          ref={navRef}
        >
          {labData.map(lab => (
            <button
              key={lab.id}
              onClick={() => setActiveLab(lab.id)}
              className={`px-4 py-3 whitespace-nowrap font-medium transition-colors duration-300 mx-1 rounded-md ${
                activeLab === lab.id 
                  ? 'bg-green-600 text-white' 
                  : 'text-rose-800 hover:bg-green-100'
              }`}
            >
              Lab {lab.id.replace('lab', '')}: {labShortNames[lab.id]}
            </button>
          ))}
        </div>
        
        <button 
          onClick={scrollRight} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md z-20"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </nav>
  );
};

// Photo Gallery component
const PhotoGallery = ({ labId } : { labId : string }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
    {[1, 2, 3].map(num => (
      <div key={num} className="h-64 rounded-lg overflow-hidden shadow-sm">
        <img 
          src="/api/placeholder/400/320" 
          alt={`${labId} design - view ${num}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
);

// InfoCard component for reusable info sections
const InfoCard = ({ title, items } : {
  title: string;
  items: string[];
}) => (
  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-rose-300">
    <h3 className="text-xl font-semibold mb-4 text-rose-800">{title}</h3>
    <ul className="ml-5">
      {items.map((item, index) => (
        <li key={index} className="mb-2">{item}</li>
      ))}
    </ul>
  </div>
);

// Lab Section component
const LabSection = ({ lab, isActive } : {lab : LabDataItem, isActive : boolean}) => {
  return (
    <section 
      id={lab.id}
      className={`mb-12 bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-500 ${
        isActive 
          ? 'opacity-100 max-h-full' 
          : 'opacity-0 max-h-0 pointer-events-none'
      }`}
    >
      <div className="bg-green-600 text-white p-6">
        <div className="text-sm opacity-90 mb-1">{lab.week}</div>
        <h2 className="text-2xl font-bold">{lab.title}</h2>
      </div>
      
      <div className="p-6 md:p-8">
        <PhotoGallery labId={lab.id} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <InfoCard title="Floral Recipe" items={lab.floralRecipe} />
          <InfoCard title="Tools Used" items={lab.toolsUsed} />
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-rose-800">Design Description</h3>
          <p>{lab.description}</p>
        </div>
      </div>
    </section>
  );
};

// Footer component
const Footer = () => (
  <footer className="bg-rose-800 text-white text-center py-8 mt-12">
    <p>Floral Art Portfolio &copy; 2025</p>
  </footer>
);

// Main App component
export default function FloralPortfolio() {
  const [activeLab, setActiveLab] = useState('lab1');
  
  // Scroll to top when changing labs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeLab]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Navigation activeLab={activeLab} setActiveLab={setActiveLab} />
      
      <main className="max-w-6xl mx-auto w-full px-4 py-8 flex-grow">
        {labData.map(lab => (
          <LabSection 
            key={lab.id}
            lab={lab} 
            isActive={activeLab === lab.id}
          />
        ))}
      </main>
      
      <Footer />
    </div>
  );
}