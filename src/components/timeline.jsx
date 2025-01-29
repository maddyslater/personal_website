import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import ExperienceItems from "./experienceItems";
import "react-vertical-timeline-component/style.min.css"

const Timeline = () => {
    return (
        <div>
          <h1 className='component-header'>Experience</h1>
          <h2 className='component-subheader'>Work History</h2>
          <VerticalTimeline>
            {ExperienceItems.map((item) => {
              return (
                <VerticalTimelineElement
                className="timeline-element"
                contentStyle={{ background: 'rgb(128, 168, 201)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(128, 168, 201)' }}
                key={item.key}
                date={item.date}
                dateClassName="date"
                icon={<img className="timeline-icon" src={item.image} />}
                >
                <div className="timeline-content">
                  <h2 className="timeline-title">{item.title}</h2>
                  <h3 className="timeline-subtitle">{item.company}</h3>
                  <p className="timeline-desc">{item.description}</p>
                </div>

                </VerticalTimelineElement>

              )})
            }
          </VerticalTimeline>
        </div>
    );
};

export default Timeline;
