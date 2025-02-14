import React from 'react';
import { 
  Globe, 
  BrainCircuit, 
  Calculator, 
  LineChart,
  ChevronRight,
  LucideIcon // Import LucideIcon for typing the icon prop
} from 'lucide-react';

// Define the props for the Features component
interface FeaturesProps {
  icon: LucideIcon; // Use LucideIcon for the icon prop
  title: string;
  description: string;
  delay: number;
}

const Features: React.FC<FeaturesProps> = ({ icon: Icon, title, description, delay }) => {
  return (
    <div 
      className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-blue-500/10"
      style={{ 
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity blur-lg"></div>
      
      <div className="relative">
        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-300 group-hover:text-blue-200 transition-colors">
          <Icon className="w-6 h-6" />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-slate-300 text-sm mb-4">{description}</p>
        
        <div className="flex items-center text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
          <span>Learn more</span>
          <ChevronRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Access",
      description: "24/7 trading across 40 markets worldwide with real-time execution and multi-currency support."
    },
    {
      icon: BrainCircuit,
      title: "Smart Automation",
      description: "AI-driven portfolio management tailored to your goals, with continuous optimization and rebalancing."
    },
    {
      icon: Calculator,
      title: "Tax Efficiency",
      description: "Sophisticated tax optimization strategies to maximize your after-tax returns and minimize liabilities."
    },
    {
      icon: LineChart,
      title: "Research Power",
      description: "Institutional-grade analysis tools and insights at your fingertips for informed decision making."
    }
  ];

  return (
    <div className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powered by Advanced Technology
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Our platform combines cutting-edge features to give you an edge in today's competitive markets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Features 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-24 bg-blue-950/30 rounded-2xl p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "$10B+", label: "Assets Under Management" },
              { value: "40+", label: "Global Markets" },
              { value: "24/7", label: "Trading Availability" },
              { value: "99.99%", label: "Platform Uptime" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection; // Export FeaturesSection instead of Features