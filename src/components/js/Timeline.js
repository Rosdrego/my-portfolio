import React, { useEffect } from 'react';
import '../css/Timeline.css';

const Timeline = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.timeline-event');
      const windowHeight = window.innerHeight;

      elements.forEach((element) => {
        const positionFromTop = element.getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline">
        {/* Event 1 */}
        <div className="timeline-event left">
          <div className="content">
            <h3>Desenvolvimento Web</h3>
            <p>Experiência em React.js e Node.js para aplicações completas.</p>
          </div>
        </div>

        {/* Event 2 */}
        <div className="timeline-event right">
          <div className="content">
            <h3>API</h3>
            <p>Desenvolvimento de APIs RESTful e GraphQL para projetos escaláveis.</p>
          </div>
        </div>

        {/* Event 3 */}
        <div className="timeline-event left">
          <div className="content">
            <h3>Soluções Empresariais</h3>
            <p>Projetos voltados para soluções corporativas e de alta performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
