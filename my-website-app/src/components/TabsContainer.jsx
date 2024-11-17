import { useState, useEffect, useRef } from 'react';
import './../styles/TabsContainer.css';
import { useSharedContext } from './../context/sharedStates';
import * as globalConstants from './../globalConstants.js';

const TabsContainer = () => {
    const [activeTab, setActiveTab] = useState('Berufserfahrung');
    const [isVisible, setIsVisible] = useState(false);
    const sliderRef = useRef(null);
    const { visibleCardInfo } = useSharedContext();

    useEffect(() => {
        if (visibleCardInfo.isVisible === false) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= globalConstants.OBSERVER_THRESHOLD_TABS) {
                        setIsVisible(true);  // Animation starten

                    } else {
                        setIsVisible(false); // Animation zurücksetzen
                    }
                },
                { threshold: globalConstants.OBSERVER_THRESHOLD_TABS } 
            );
            const sliderElement = sliderRef.current;

            if (sliderElement) {
                observer.observe(sliderElement);
            }

            return () => {
                if (sliderElement) {
                    observer.unobserve(sliderElement);
                }
            };
        }
        else {
            setIsVisible(false); // Animation zurücksetzen
            
        }
    }, [visibleCardInfo.isVisible]);

    return (
        <div
            ref={sliderRef}
            className={`tabs-container ${isVisible ? 'animated' : ''}`}
            style={visibleCardInfo.isVisible ? {zIndex: -10} : {zIndex: 0}}
        >
            <div className="tabs">
                {globalConstants.TAB_INFOS.map((tab) => (
                    <button
                        key={tab.label}
                        className={`tab ${activeTab === tab.label ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.label)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {globalConstants.TAB_INFOS.find((tab) => tab.label === activeTab)?.contentId}
            </div>
        </div>
    );
};

export default TabsContainer;