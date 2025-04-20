import { useState, useEffect } from 'react';
import { Sun, Home, LineChart, FileCheck, User, MapPin, Plug, BatteryCharging, Search, File, Files } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import TESTHOME from "/images/TESTHOME.jpg";
import TESTSLD from "/images/TESTSLD.jpg";
import placeholderImage from "/images/placeholder-image.png";

// Definir tipos para evitar errores de TypeScript
type RequirementCategory = 'basic' | 'photovoltaic' | 'roofMount' | 'groundMount' | 'electrical' | 'storage' | 'siteplan';

type RequirementItem = {
  title: string;
  icon: JSX.Element;
  items: string[];
}

type RequirementMap = {
  [key in RequirementCategory]: RequirementItem;
}

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState([false, false]);
  // Asegúrate de que activeTab siempre tenga un valor válido
  const [activeTab, setActiveTab] = useState<RequirementCategory>('basic');

  useEffect(() => {
    setIsVisible(true);
    
    const timer1 = setTimeout(() => {
      setImagesLoaded(prev => [true, prev[1]]);
    }, 300);
    
    const timer2 = setTimeout(() => {
      setImagesLoaded(prev => [prev[0], true]);
    }, 600);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const services = [
    {
      icon: <Files className="h-12 w-12 text-yellow-500" />,
      title: "Solar Permit Packages",
      description: "Complete solar permit packages including site plans, electrical diagrams, structural analysis, and all required documentation."
    },
    {
      icon: <File className="h-12 w-12 text-yellow-500" />,
      title: "Plan Sets & Documentation",
      description: "Professional plan sets compliant with local jurisdiction requirements and designed for rapid approval."
    },
    {
      icon: <Search className="h-12 w-12 text-yellow-500" />,
      title: "Compliance Review",
      description: "Thorough review of designs to ensure compliance with local building codes, fire codes, and electrical regulations."
    },
    {
      icon: <LineChart className="h-12 w-12 text-yellow-500" />,
      title: "Expedited Processing",
      description: "Accelerated permit processing options for time-sensitive projects with dedicated tracking and follow-up."
    }
  ];

  const permitImages = [
    { 
      src: TESTHOME, 
      alt: "Solar Permit Plan Example - Site Design",
      title: "Site Design & Panel Layout",
      description: "Detailed site plans showing optimal solar panel placement for maximum efficiency"
    },
    { 
      src: TESTSLD, 
      alt: "Solar Permit Plan Example - Electrical Diagram", 
      title: "Electrical Diagrams",
      description: "Professional electrical diagrams meeting all local code requirements"
    }
  ];




  const detailedRequirements: RequirementMap = {
    basic: {
      title: "Basic Project Information",
      icon: <User className="h-6 w-6 text-yellow-500" />,
      items: [
        "Person placing the order: Name, company, phone, email",
        "Billing contact: Name, email",
        "Contractor information: Name, company, phone, email",
        "Installation location: Property owner name, project address, building department, utility company",
        "Utility bill (if choosing interconnection processing)"
      ]
    },
    photovoltaic: {
      title: "Photovoltaic Product Specifications",
      icon: <Sun className="h-6 w-6 text-yellow-500" />,
      items: [
        "PV module brand/model/quantity",
        "Inverter brand/model/quantity",
        "Rapid shutdown brand/model/quantity",
        "Racking system brand/model",
        "Roof or ground mount?"
      ]
    },
    roofMount: {
      title: "Roof Mount Specifications",
      icon: <Home className="h-6 w-6 text-yellow-500" />,
      items: [
        "Roof attachment brand/model",
        "Roof material (asphalt shingles, concrete tiles, metal panel, etc.)",
        "Waterproofing method",
        "Attachment pattern (48″ non-staggered, 72″ staggered, etc.)",
        "Beam or truss structure",
        "Beam/truss size (2×4, 2×6, 2×8, etc.)",
        "Beam/truss spacing (16″, 24″, etc.)",
        "Beam/truss orientation (attachment to hip trusses?)",
        "Roof pitch"
      ]
    },
    groundMount: {
      title: "Ground Mount Specifications",
      icon: <MapPin className="h-6 w-6 text-yellow-500" />,
      items: [
        "Structure specifications: Pier spacing, tilt angle, ground slope",
        "Structure manufacturer",
        "Geotechnical report required for all ground mount projects (PPS can provide for additional fee)"
      ]
    },
    electrical: {
      title: "Electrical Specifications",
      icon: <Plug className="h-6 w-6 text-yellow-500" />,
      items: [
        "Electrical service type (120/240, 208 three-phase, etc.)",
        "Underground electrical service entry",
        "Point of interconnection: backfed breaker, line side, load side, meter socket adapter",
        "Electrical panel(s): Information required for ALL PANEL BOARDS",
        "New or existing panels, brand/model, bus bar rating, main breaker size, connection diagram"
      ]
    },
    storage: {
      title: "Energy Storage or Generator",
      icon: <BatteryCharging className="h-6 w-6 text-yellow-500" />,
      items: [
        "Battery system brand/model",
        "Description and wiring diagram between battery, MID, backup load setup of battery system installation",
        "Generator, transfer switch: brand/model, sketch of desired wiring configuration"
      ]
    },
    siteplan: {
      title: "Site Plan & Photos",
      icon: <FileCheck className="h-6 w-6 text-yellow-500" />,
      items: [
        "Site plan with equipment location diagram (MANDATORY)",
        "OPTIONAL: Design generated by PPS ($25 for 10kW and less)",
        "Photos: roof, attic, service panel, subpanel, meter, and design layout"
      ]
    }
  };

  // Asegurarse de que todas las claves del objeto son de tipo RequirementCategory
  const requirementKeys = Object.keys(detailedRequirements) as RequirementCategory[];

  return (
    <>
      <SeoHead 
        title="Professional Solar Installation Services | IR Solar Designs" 
        description="Our solar services include PV system design, installation, maintenance and energy efficiency consulting. Expert solutions for homes and businesses."
        image="/src/assets/services-image.jpg"
      />
      
      {/* Hero section with gradient background */}
      <div className="bg-gradient-to-r from-yellow-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl mx-auto text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Professional Solar Permit Services
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              At <span className="font-bold text-yellow-600">IR Solar Designs</span>, we specialize in creating professional permit plan sets for residential and commercial solar installations, ensuring rapid approval and compliance.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Service boxes */}
          <div className="mb-20">
            <h2 className={`text-3xl font-bold text-center mb-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 transform transition-all duration-700 hover:shadow-md hover:-translate-y-1 ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${100 * index}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Permit Plan Details */}
            <div className={`max-w-4xl mx-auto mt-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
              <h3 className="text-2xl font-semibold text-center mb-8">
                What's Included in Our Permit Plans
              </h3>
              
              <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-xl p-8 shadow-sm">
                <p className="text-center text-gray-700 mb-8">
                  Every permit plan we create includes comprehensive documentation to ensure smooth approval:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ol className="list-none space-y-3">
                    {[
                      "Title Sheet", 
                      "Roof/Site Plan", 
                      "Electrical Line Diagram", 
                      "Equipment Labels", 
                      "Placard", 
                      "Attachment Plan"
                    ].map((item, index) => (
                      <li 
                        key={index}
                        className={`transform transition-all duration-500 ${
                          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 70}ms` }}
                      >
                        <div className="flex items-center">
                          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 mr-3 font-semibold text-sm">
                            {index + 1}
                          </span>
                          <span className="text-gray-800">{item}</span>
                        </div>
                      </li>
                    ))}
                  </ol>
                  
                  <ol className="list-none space-y-3" start={7}>
                    {[
                      "Structural Components", 
                      "Property Lines", 
                      "Optimizer Tracking", 
                      "Job Hazard Analysis", 
                      "BOM Sheet", 
                      { name: "Elevation View", isAdditional: true }
                    ].map((item, index) => {
                      const itemName = typeof item === 'string' ? item : item.name;
                      const isAdditional = typeof item === 'object' && item.isAdditional;
                      
                      return (
                        <li 
                          key={index}
                          className={`transform transition-all duration-500 ${
                            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                          }`}
                          style={{ transitionDelay: `${(index + 6) * 70}ms` }}
                        >
                          <div className="flex items-center">
                            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 mr-3 font-semibold text-sm">
                              {index + 7}
                            </span>
                            <span className={`${isAdditional ? 'text-yellow-600' : 'text-gray-800'}`}>
                              {itemName}
                              {isAdditional && (
                                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                                  Additional
                                </span>
                              )}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600 italic">
                    Our documentation exceeds industry standards to minimize approval delays and inspection issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Example permit plans - 2 images with animation */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">
              Example Permit Plans
            </h2>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {permitImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-1000 hover:scale-105 ${
                    imagesLoaded[idx] 
                      ? 'opacity-100' 
                      : 'opacity-0'
                  }`}
                >
                  <div className="h-80">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover" 
                      onError={(e) => {
                        e.currentTarget.src = placeholderImage;
                      }}
                    />
                    {/* Overlay con texto */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {img.title}
                        </h3>
                        <p className="text-white/90 text-sm">
                          {img.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Detailed Requirements section with tabs */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">
              What We Need From You
            </h2>
            <p className="text-center text-gray-600 mb-12">
              To provide you with the most accurate and efficient permit designs, we need the following information:
            </p>
            
            {/* Tabs navigation - versión corregida */}
            <div className="flex flex-wrap justify-center mb-8 border-b overflow-x-auto">
              {requirementKeys.map((key) => (
                <button
                  key={key}
                  className={`px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
                    activeTab === key 
                      ? 'border-yellow-500 text-yellow-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab(key)}
                >
                  <div className="flex items-center">
                    <span className="mr-2">{detailedRequirements[key].icon}</span>
                    <span>{detailedRequirements[key].title}</span>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Tab content - versión corregida */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                {detailedRequirements[activeTab].icon}
                <h3 className="text-xl font-semibold ml-3 text-gray-900">
                  {detailedRequirements[activeTab].title}
                </h3>
              </div>
              <ul className="space-y-4">
                {detailedRequirements[activeTab].items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <FileCheck className="h-5 w-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Not sure about some of these details? Don't worry! Our team can help guide you through the process. 
                  <a href="/contact" className="text-yellow-600 hover:text-yellow-700 ml-1 font-medium">
                    Contact us for assistance.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;