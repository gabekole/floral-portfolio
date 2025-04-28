import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, ArrowLeft, ArrowRight } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { labShortNames, labData} from '../helper'
import type {LabShortNames, LabDataItem } from '../helper'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Floral Art Portfolio" },
    { name: "description", content: "A collection of floral designs and techniques" },
  ];
}

// Header component with improved styling
const Header = () => (
  <header className="bg-gradient-to-r from-rose-700 to-rose-900 text-white text-center py-16">
    <h1 className="text-6xl font-bold mb-6">My Floral Art Portfolio</h1>
    <h3 className="text-2xl font-semibold mb-2">Gabe Koleszar</h3>
    <h3 className="text-xl font-medium mb-6 opacity-90">SPSS 2520: Floral Art – University of Connecticut</h3>
    <p className="text-lg max-w-3xl mx-auto px-6 opacity-80">
      A collection of designs and techniques learned throughout the course.
    </p>
  </header>
);

// Improved Navigation component with auto-scrolling on click
const Navigation = ({ activeLab, setActiveLab } : { activeLab: string; setActiveLab: (id: string) => void }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Check if arrows should be shown
  const checkScroll = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Auto-scroll to center the active button
  const scrollToActiveButton = (labId: string) => {
    if (navRef.current && buttonRefs.current.has(labId)) {
      const button = buttonRefs.current.get(labId);
      if (button) {
        const navElement = navRef.current;
        const navRect = navElement.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();
        
        // Calculate the scroll position to center the button
        const scrollLeft = buttonRect.left - navRect.left - navRect.width / 2 + buttonRect.width / 2 + navElement.scrollLeft;
        
        navElement.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  // Initialize refs and scroll positions
  useEffect(() => {
    const navElement = navRef.current;
    if (navElement) {
      navElement.addEventListener('scroll', checkScroll);
      checkScroll();
      
      // Initial scroll to make active button visible
      scrollToActiveButton(activeLab);
    }
    
    return () => {
      if (navElement) {
        navElement.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  // Update scroll position when active lab changes
  useEffect(() => {
    scrollToActiveButton(activeLab);
  }, [activeLab]);

  const scrollLeft = () => {
    if (navRef.current) navRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };
  
  const scrollRight = () => {
    if (navRef.current) navRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };
  
  // Handle button click - set active lab
  const handleLabSelect = (labId: string) => {
    setActiveLab(labId);
  };
  
  return (
    <nav className="sticky top-0 bg-white shadow-md z-10">
      <div className="relative max-w-6xl mx-auto">
        {showLeftArrow && (
          <button 
            onClick={scrollLeft} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-20 hover:bg-gray-100 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} className="text-rose-700" />
          </button>
        )}
        
        <div 
          className="flex overflow-x-auto py-3 px-10 scrollbar-hide scroll-smooth" 
          ref={navRef}
          onScroll={checkScroll}
        >
          {labData.map(lab => (
            <button
              key={lab.id}
              ref={(el) => {
                if (el) buttonRefs.current.set(lab.id, el);
              }}
              onClick={() => handleLabSelect(lab.id)}
              className={`px-5 py-3 whitespace-nowrap font-medium transition-all duration-300 mx-1 rounded-full ${
                activeLab === lab.id 
                  ? 'bg-rose-600 text-white shadow-md scale-105' 
                  : 'text-rose-800 hover:bg-rose-100'
              }`}
            >
              {labShortNames[lab.id]}
            </button>
          ))}
        </div>
        
        {showRightArrow && (
          <button 
            onClick={scrollRight} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-20 hover:bg-gray-100 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} className="text-rose-700" />
          </button>
        )}
      </div>
    </nav>
  );
};



const PhotoGallery = ({ lab }: { lab: LabDataItem }) => {
  const [index, setIndex] = useState<number>(-1);

  const slides = lab.imagesUrl.map((url) => ({ src: url }));

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {lab.imagesUrl.map((imageUrl, num) => {
          // Split folder and filename
          const parts = imageUrl.split('/');
          const folder = parts[0]; // e.g., "week10HandBouquet"
          const filename = parts[1].replace(/\.(png|jpe?g|webp)$/i, ''); // e.g., "1"

          return (
            <div
              key={num}
              className="h-64 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              onClick={() => setIndex(num)}
            >
              <img
                src={`/resized/${folder}/800_${filename}.jpg`}
                alt={`${lab.title} - view ${num}`}
                className="w-full h-full object-cover"
                srcSet={`
                  /resized/${folder}/400_${filename}.jpg 400w,
                  /resized/${folder}/800_${filename}.jpg 800w,
                  /resized/${folder}/1200_${filename}.jpg 1200w
                `}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          );
        })}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides.map((slide) => {
          const parts = slide.src.split('/');
          const folder = parts[0];
          const filename = parts[1].replace(/\.(png|jpe?g|webp)$/i, '');
          return { src: `/resized/${folder}/1200_${filename}.jpg` };
        })}
        index={index}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </>
  );
};



// InfoCard component with improved styling
const InfoCard = ({ title, items } : {
  title: string;
  items: string[];
}) => (
  <div className="bg-rose-50 rounded-lg p-6 border-l-4 border-rose-400 shadow-sm hover:shadow transition-shadow duration-300">
    <h3 className="text-xl font-semibold mb-4 text-rose-800">{title}</h3>
    <ul className="ml-5 list-disc">
      {items.map((item, index) => (
        <li key={index} className="mb-2 text-gray-700">{item}</li>
      ))}
    </ul>
  </div>
);

// Lab Section component with previous/next navigation
const LabSection = ({ lab, isActive, onPrevious, onNext, isPrevious, isNext } : {
  lab: LabDataItem, 
  isActive: boolean,
  onPrevious: () => void,
  onNext: () => void,
  isPrevious: boolean,
  isNext: boolean
}) => {
  return (
    <section 
      id={lab.id}
      className={`mb-12 bg-white rounded-xl shadow-md overflow-hidden transition-opacity duration-500 ${
        isActive 
          ? 'opacity-100' 
          : 'hidden opacity-0'
      }`}
    >
      <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white p-8">
        <div className="text-sm opacity-90 mb-1">{lab.week}</div>
        <h2 className="text-3xl font-bold">{lab.title}</h2>
      </div>
      
      <div className="p-6 md:p-8">
        <PhotoGallery lab={lab} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <InfoCard title="Floral Recipe" items={lab.floralRecipe} />
          <InfoCard title="Tools Used" items={lab.toolsUsed} />
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 shadow-sm border-t border-gray-100">
          <h3 className="text-xl font-semibold mb-4 text-rose-800">Design Description</h3>
          <p className="text-gray-700 leading-relaxed">{lab.description}</p>
        </div>
        
        <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-100">
          {isPrevious ? (
            <button 
              onClick={onPrevious}
              className="flex items-center text-rose-700 hover:text-rose-900 transition-colors px-4 py-2 rounded-md hover:bg-rose-50"
            >
              <ArrowLeft size={18} className="mr-2" />
              <span>Previous Lab</span>
            </button>
          ) : (
            <div></div>
          )}
          
          {isNext && (
            <button 
              onClick={onNext}
              className="flex items-center text-rose-700 hover:text-rose-900 transition-colors px-4 py-2 rounded-md hover:bg-rose-50"
            >
              <span>Next Lab</span>
              <ArrowRight size={18} className="ml-2" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

// Footer component with improved styling
const Footer = () => (
  <footer className="bg-gradient-to-r from-rose-800 to-rose-900 text-white text-center py-8 mt-12">
    <div className="max-w-6xl mx-auto px-4">
      <p className="mb-2">Floral Art Portfolio &copy; 2025</p>
      <p className="text-sm opacity-75">Created with passion for floral artistry</p>
    </div>
  </footer>
);

// Main App component with next/previous navigation
export default function FloralPortfolio() {
  const [activeLab, setActiveLab] = useState('lab1');
  
  // Find current lab index
  const currentIndex = labData.findIndex(lab => lab.id === activeLab);
  
  // Navigate to previous lab
  const navigatePrevious = () => {
    if (currentIndex > 0) {
      setActiveLab(labData[currentIndex - 1].id);
    }
  };
  
  // Navigate to next lab
  const navigateNext = () => {
    if (currentIndex < labData.length - 1) {
      setActiveLab(labData[currentIndex + 1].id);
    }
  };
  
  // Scroll to top when changing labs with smooth scrolling
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeLab]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Navigation activeLab={activeLab} setActiveLab={setActiveLab} />
      
      <main className="max-w-6xl mx-auto w-full px-4 py-10 flex-grow">
        {labData.map((lab, index) => (
          <LabSection 
            key={lab.id}
            lab={lab} 
            isActive={activeLab === lab.id}
            onPrevious={navigatePrevious}
            onNext={navigateNext}
            isPrevious={index > 0}
            isNext={index < labData.length - 1}
          />
        ))}
      </main>
      
      <Footer />
    </div>
  );
}