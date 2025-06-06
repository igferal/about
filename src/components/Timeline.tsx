import React, { useState, useRef, useCallback, useEffect } from "react";
import { TechIcon } from "./logos/TechIcon";

interface TimelinePeriod {
  id: string;
  startYear: number;
  endYear: number;
  title: string;
  company: string;
  description: string;
  type: "work" | "education" | "project";
  technologies: string[];
}

export function Timeline() {
  const [selectedYear, setSelectedYear] = useState<number>(2020);
  const [selectedPeriod, setSelectedPeriod] = useState<TimelinePeriod | null>(
    null
  );

  const timelineData = {
    totalStartYear: 2017,
    totalEndYear: 2025,
    periods: [
      {
        id: "1",
        startYear: 2017,
        endYear: 2017,
        title: "Internship",
        company: "Treelogic",
        description: "",
        type: "work" as const,
        technologies: ["HTML", "CSS", "JavaScript", "JAVA", "MySQL"],
      },
      {
        id: "2",
        startYear: 2018,
        endYear: 2020,
        title: "Fullstack Developer",
        company: "GooApps",
        description: "",
        type: "education" as const,
        technologies: [
          "Symfony",
          "PHP",
          "React",
          "React Native",
          "CSS",
          "JavaScript",
          "Git",
          "Ionic",
        ],
      },
      {
        id: "3",
        startYear: 2020,
        endYear: 2025,
        title: "Fullstack Developer",
        company: "Okticket",
        description: "",
        type: "work" as const,
        technologies: [
          "TypeScript",
          "Cordova",
          "REST APIs",
          "Laravel",
          "Aws",
          "MongoDB",
        ],
      },
    ],
  };

  const findPeriodAtYear = (year: number) => {
    return (
      timelineData.periods.find(
        (period) => year >= period.startYear && year <= period.endYear
      ) || null
    );
  };

  const handleBarClick = (year: number) => {
    setSelectedYear(year);
    const period = findPeriodAtYear(year);
    setSelectedPeriod(period);
  };

  // Generate static bar heights (no random)
  const generateBars = () => {
    const bars = [];
    const totalYears = timelineData.totalEndYear - timelineData.totalStartYear + 1;
    const totalHalfYears = totalYears * 2; // Double the bars for half-year representation
    
    // Calculate selected position in half-year terms
    const selectedHalfYearPosition = (selectedYear - timelineData.totalStartYear) * 2;
    
    for (let i = 0; i < totalHalfYears; i++) {
      const year = timelineData.totalStartYear + Math.floor(i / 2);
      const isFirstHalf = i % 2 === 0;
      const halfYearLabel = isFirstHalf ? `${year} H1` : `${year} H2`;
      
      // Consistent base height for all bars
      const baseHeight = 70;
      
      const period = findPeriodAtYear(year);
      
      // Calculate wave effect based on distance from selected half-year position
      const distance = Math.abs(i - selectedHalfYearPosition);
      const waveIntensity = Math.max(
        0,
        30 * Math.exp(-0.5 * distance * distance)
      );
      
      const finalHeight = baseHeight + waveIntensity;
      const isInWave = waveIntensity > 5;
      
      bars.push({
        year,
        halfYear: isFirstHalf ? 1 : 2,
        halfYearLabel,
        height: finalHeight,
        isInWave,
        period,
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
    <div className="w-full max-w-4xl mx-auto h-[50vh] sm:h-[50vh] p-4 sm:p-6 lg:p-8">
      {/* Top Section - Bar Chart */}
      <div className="h-1/2 mb-4 sm:mb-6">
        <div className="w-full mx-auto">
          {/* Year labels */}
          <div className="flex justify-between mb-2 sm:mb-4 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
            <span>2017</span>
            <span>2025</span>
          </div>

          {/* Bar Chart */}
          <div className="relative h-24 sm:h-28 lg:h-32 flex items-center justify-center bg-transparent p-1 sm:p-2">
            {bars.map((bar, index) => (
              <div
                key={index}
                className="w-3 sm:w-4 lg:w-5 mx-0.5 sm:mx-1 cursor-pointer transition-all duration-300 ease-out bg-[#2A4494] dark:bg-blue-400 hover:bg-blue-600 dark:hover:bg-blue-300"
                style={{
                  height: `${Math.min(bar.height * 1.8, 180)}%`,
                  transform: bar.isInWave
                    ? "translateY(-2px) sm:translateY(-3px) lg:translateY(-4px)"
                    : "translateY(0)",
                }}
                onClick={() => handleBarClick(bar.year)}
                title={`${bar.halfYearLabel}${
                  bar.period ? ` - ${bar.period.title}` : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Technologies */}
      <div className="h-1/2">
        {selectedPeriod ? (
          <div className="h-full flex flex-col">
            {/* Header with enhanced visual hierarchy */}
            <div className="flex-shrink-0 mb-4">
              <div className="flex flex-wrap items-baseline gap-2 mb-3">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                  {selectedPeriod.title}
                </h4>
                <span className="text-base sm:text-lg lg:text-xl font-semibold text-[#2A4494] dark:text-blue-400">
                  at {selectedPeriod.company}
                </span>
                <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">
                  ({selectedPeriod.startYear} - {selectedPeriod.endYear})
                </span>
              </div>

              {selectedPeriod.description && (
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedPeriod.description}
                </p>
              )}
            </div>

            {/* Technologies section with improved layout */}
            <div className="flex-1 min-h-0">
              {/* Scrollable container for technologies */}
              <div className="overflow-y-auto h-full pb-2">
                <TechIcon technologies={selectedPeriod.technologies} />
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-3 opacity-50">📊</div>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-lg">
                Click on a bar to explore that time period
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
