import React, { useState } from 'react';
import { 
  BarChart, 
  Briefcase, 
  TrendingUp, 
  Shield, 
  Clock, 
  Smartphone,
  Building,
  Server,
  DollarSign,
  FileText,
  LucideIcon
} from 'lucide-react';

type Solution = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Solutions = {
  individual: Solution[];
  institutional: Solution[];
};

const SolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'individual' | 'institutional'>('individual');
  
  const solutions: Solutions = {
    individual: [
      {
        icon: BarChart,
        title: "Automated Portfolio Construction",
        description: "Personalized asset allocation based on your risk tolerance, time horizon, and financial goals."
      },
      {
        icon: TrendingUp,
        title: "Smart Rebalancing",
        description: "Continuous portfolio optimization with tax-loss harvesting to maximize your returns."
      },
      {
        icon: Shield,
        title: "Fractional Shares",
        description: "Access high-value assets with any investment amount for true portfolio diversification."
      },
      {
        icon: Clock,
        title: "Retirement Planning",
        description: "Sophisticated projections and tools to help you plan and achieve your retirement goals."
      },
      {
        icon: Smartphone,
        title: "Mobile Management",
        description: "Monitor and manage your investments anytime, anywhere with our intuitive mobile app."
      }
    ],
    institutional: [
      {
        icon: Building,
        title: "White-Label Solutions",
        description: "Customizable platform that can be tailored to your brand and specific business requirements."
      },
      {
        icon: Shield,
        title: "Risk Management Frameworks",
        description: "Sophisticated tools for monitoring, measuring, and mitigating risk across portfolios."
      },
      {
        icon: DollarSign,
        title: "Multi-Currency Settlement",
        description: "Seamless handling of transactions across different currencies and markets."
      },
      {
        icon: Server,
        title: "API Integration",
        description: "Robust API access for seamless integration with your existing systems and workflows."
      },
      {
        icon: FileText,
        title: "Compliance Reporting",
        description: "Automated regulatory reporting and compliance monitoring across jurisdictions."
      }
    ]
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 to-blue-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tailored Solutions for Every Investor
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Whether you're an individual building wealth or an institution managing complex portfolios, we have the tools you need.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-slate-800/50 backdrop-blur-sm rounded-lg">
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeTab === 'individual' 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Individual Investors
            </button>
            <button
              onClick={() => setActiveTab('institutional')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeTab === 'institutional' 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Institutional Clients
            </button>
          </div>
        </div>
        
        {/* Solutions Content */}
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="relative">
            {/* Headline for current tab */}
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              {activeTab === 'individual' ? "Wealth Management Reimagined" : "Enterprise-Grade Investment Infrastructure"}
            </h3>
            
            {/* 3D Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
              {solutions[activeTab].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="group relative rounded-xl transition-all duration-300 hover:translate-z-10 transform-style-3d"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Glowing effect on hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-70 blur-md transition-opacity"></div>
                    
                    <div className="relative bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 h-full transition-transform group-hover:translate-y-[-5px]">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-300 group-hover:text-blue-200 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* CTA Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all shadow-lg hover:shadow-blue-500/50">
                {activeTab === 'individual' ? "Open an Account" : "Schedule a Demo"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
