import React from 'react';
import {
  HTMLIcon,
  CSSIcon,
  JavaScriptIcon,
  JavaIcon,
  MySQLIcon,
  SymfonyIcon,
  PHPIcon,
  ReactIcon,
  ReactNativeIcon,
  GitIcon,
  IonicIcon,
  TypeScriptIcon,
  CordovaIcon,
  RESTAPIsIcon,
  LaravelIcon,
  AWSIcon,
  MongoDBIcon,
  DefaultIcon
} from './index';

interface TechCarouselProps {
  technologies: string[];
}

export const TechIcon: React.FC<TechCarouselProps> = ({ technologies }) => {
  const getTechIcon = (tech: string) => {
    const iconClassName = "w-auto h-16 flex-shrink-0";

    switch (tech) {
      case "HTML":
        return <HTMLIcon className={iconClassName} />;
      case "CSS":
        return <CSSIcon className={iconClassName} />;
      case "JavaScript":
        return <JavaScriptIcon className={iconClassName} />;
      case "JAVA":
        return <JavaIcon className={iconClassName} />;
      case "MySQL":
        return <MySQLIcon className={iconClassName} />;
      case "Symfony":
        return <SymfonyIcon className={iconClassName} />;
      case "PHP":
        return <PHPIcon className={iconClassName} />;
      case "React":
        return <ReactIcon className={iconClassName} />;
      case "React Native":
        return <ReactNativeIcon className={iconClassName} />;
      case "Git":
        return <GitIcon className={iconClassName} />;
      case "Ionic":
        return <IonicIcon className={iconClassName} />;
      case "TypeScript":
        return <TypeScriptIcon className={iconClassName} />;
      case "Cordova":
        return <CordovaIcon className={iconClassName} />;
      case "REST APIs":
        return <RESTAPIsIcon className={iconClassName} />;
      case "Laravel":
        return <LaravelIcon className={iconClassName} />;
      case "Aws":
        return <AWSIcon className={iconClassName} />;
      case "MongoDB":
        return <MongoDBIcon className={iconClassName} />;
      default:
        return <DefaultIcon className={iconClassName} />;
    }
  };

  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-tech {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          
          .animate-scroll-tech {
            animation: scroll-tech 12s linear infinite;
          }
          
          .animate-scroll-tech:hover {
            animation-play-state: paused;
          }
        `
      }} />
      <div className="flex animate-scroll-tech">
        {duplicatedTechnologies.map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex-shrink-0 flex flex-col items-center justify-center mx-6 group"
            style={{ minWidth: '100px' }}
          >
            <div className="text-[#2A4494] dark:text-blue-400 mb-3 transition-all duration-300 group-hover:scale-110 group-hover:brightness-110">
              {getTechIcon(tech)}
            </div>
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight max-w-[100px] break-words px-1">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}; 