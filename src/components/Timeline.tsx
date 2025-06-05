import React, { useState, useRef, useCallback, useEffect } from 'react';

interface TimelinePeriod {
  id: string;
  startYear: number;
  endYear: number;
  title: string;
  company: string;
  description: string;
  type: 'work' | 'education' | 'project';
  technologies: string[];
}

export function Timeline() {
  const [selectedYear, setSelectedYear] = useState<number>(2020);
  const [selectedPeriod, setSelectedPeriod] = useState<TimelinePeriod | null>(null);

  const timelineData = {
    totalStartYear: 2017,
    totalEndYear: 2025,
    periods: [
      {
        id: '1',
        startYear: 2017,
        endYear: 2017,
        title: 'Internship',
        company: 'Treelogic',
        description: '',
        type: 'work' as const,
        technologies: ['HTML', 'CSS', 'JavaScript', 'JAVA', 'MySQL']
      },
      {
        id: '2',
        startYear: 2018,
        endYear: 2020,
        title: 'Fullstack Developer',
        company: 'GooApps',
        description: '',
        type: 'education' as const,
        technologies: ['Symfony', 'PHP', 'React', 'React Native', 'CSS', 'JavaScript', 'Git', 'Ionic']
      },
      {
        id: '3',
        startYear: 2020,
        endYear: 2025,
        title: 'Fullstack Developer',
        company: 'Okticket',
        description: '',
        type: 'work' as const,
        technologies: [ 'TypeScript', 'Cordova', 'REST APIs', 'Laravel', 'Aws', "MongoDB"]
      }
    ]
  };

  const findPeriodAtYear = (year: number) => {
    return timelineData.periods.find(period => 
      year >= period.startYear && year <= period.endYear
    ) || null;
  };

  const handleBarClick = (year: number) => {
    setSelectedYear(year);
    const period = findPeriodAtYear(year);
    setSelectedPeriod(period);
  };

  // Generate static bar heights (no random)
  const generateBars = () => {
    const bars = [];
    const years = timelineData.totalEndYear - timelineData.totalStartYear + 1;
    
    for (let year = timelineData.totalStartYear; year <= timelineData.totalEndYear; year++) {
      // Base height - static pattern
      let baseHeight = 50; // Default height
      
      const period = findPeriodAtYear(year);
      if (period?.type === 'work') {
        baseHeight = 60;
      } else if (period?.type === 'education') {
        baseHeight = 55;
      }
      
      // Calculate wave effect based on distance from selected year
      const distance = Math.abs(year - selectedYear);
      const waveIntensity = Math.max(0, 40 * Math.exp(-0.8 * distance * distance));
      
      const finalHeight = baseHeight + waveIntensity;
      const isInWave = waveIntensity > 5;
      
      bars.push({
        year,
        height: finalHeight,
        isInWave,
        period
      });
    }
    
    return bars;
  };

  const bars = generateBars();

  // Initialize
  useEffect(() => {
    const period = findPeriodAtYear(selectedYear);
    setSelectedPeriod(period);
  }, [selectedYear]);

  return (
    <div className="w-full max-w-8xl h-[40vh] sm:h-[40vh] p-4 sm:p-6 lg:p-8 ">
      {/* Top Section - Bar Chart */}
      <div className="h-1/2 mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2A4494] mb-3 sm:mb-4 lg:mb-6 text-center">My Journey Timeline</h3>
        
        <div className="w-full mx-auto">
          {/* Year labels */}
          <div className="flex justify-between mb-2 sm:mb-4 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
            <span>2017</span>
            <span>2025</span>
          </div>

          {/* Bar Chart */}
          <div className="relative h-16 sm:h-20 lg:h-24 flex items-center justify-center bg-transparent p-1 sm:p-2">
            {bars.map((bar) => (
              <div
                key={bar.year}
                className="w-6 sm:w-7 lg:w-8 mx-0.5 sm:mx-1 cursor-pointer transition-all duration-300 ease-out bg-[#2A4494] dark:bg-blue-400 hover:bg-blue-600 dark:hover:bg-blue-300"
                style={{ 
                  height: `${Math.min(bar.height * 1.5, 150)}%`,
                  transform: bar.isInWave ? 'translateY(-4px) sm:translateY(-6px) lg:translateY(-8px)' : 'translateY(0)',
                  marginBottom: bar.isInWave ? '-4px sm:-6px lg:-8px' : '0'
                }}
                onClick={() => handleBarClick(bar.year)}
                title={`${bar.year}${bar.period ? ` - ${bar.period.title}` : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Technologies */}
      <div className="h-1/2 border-t border-gray-200 dark:border-gray-700 pt-3 sm:pt-4 lg:pt-6">
        {selectedPeriod ? (
          <div className="h-full overflow-y-auto">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2 sm:mb-4">
              <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
                {selectedPeriod.title}
              </h4>
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                ({selectedPeriod.startYear} - {selectedPeriod.endYear})
              </span>
            </div>
            
            <p className="text-sm sm:text-base lg:text-lg font-medium text-[#2A4494] mb-1 sm:mb-2">
              {selectedPeriod.company}
            </p>
            
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 lg:mb-6">
              {selectedPeriod.description}
            </p>

            <div>
              <h5 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                Technologies Used:
              </h5>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {selectedPeriod.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-100 dark:bg-blue-900/30 text-[#2A4494] dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-lg text-center px-4">
              Click on a bar to explore that time period
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 