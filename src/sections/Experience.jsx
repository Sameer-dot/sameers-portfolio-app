import { workExperiences } from '../constants/index.js';

const ExperienceItem = ({ item, subExperiences }) => (
  <div className="work-content_container group">
    <div className="flex flex-col h-full justify-start items-center py-2">
      <div className="work-content_logo">
        <img
          className="w-full h-full"
          src={item.icon}
          alt={`${item.name} logo`}
          style={item.name === 'Fiverr' ? { borderRadius: '50%' } : {}}
        />
      </div>
      <div className="work-content_bar" />
    </div>

    <div className="sm:p-5 px-2.5 py-5">
      <p className="font-bold text-white-800">{item.name}</p>
      <p className="text-sm mb-5">
        {item.pos} — <span>{item.duration}</span>
      </p>
      <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>

      {subExperiences && subExperiences.length > 0 && (
        <div className="sub-experiences-container sm:py-10 py-5 sm:px-5 px-2.5">
          {subExperiences.map((subItem, subIndex) => (
            <ExperienceItem key={subIndex} item={subItem} />
          ))}
        </div>
      )}
    </div>
  </div>
);

const WorkExperience = () => {
  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <ExperienceItem key={index} item={item} subExperiences={item.subExperiences} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
