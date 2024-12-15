import Marquee from 'react-fast-marquee';
import '../skills.css';

export default function Skills2() {
  const skillsCarousel1 = [
    { src: '/assets/langs/tailwind.svg', name: 'Tailwind' },
    { src: '/assets/langs/next.svg', name: 'NextJS' },
    { src: '/assets/langs/icon-7.svg', name: 'VueJS' },
    { src: '/assets/langs/redux.png', name: 'Redux' },
    { src: '/assets/langs/react.svg', name: 'React' },
  ];

  const skillsCarousel2 = [
    { src: '/assets/langs/firebase.svg', name: 'Firebase' },
    { src: '/assets/langs/django.svg', name: 'Django' },
    { src: '/assets/langs/golang.png', name: 'Golang' },
    { src: '/assets/langs/node.svg', name: 'NodeJS' },
    { src: '/assets/langs/mongo.svg', name: 'MongoDB' },
    { src: '/assets/langs/aws.png', name: 'AWS' },
  ];

  const skillsList = [
    { category: 'Front-End', items: 'HTML, CSS, JavaScript, React, Next, Vue, Tailwind' },
    { category: 'Back-End', items: 'Node.js, Express, Python, Django, Golang, Gin, Firebase' },
    { category: 'Databases', items: 'MySQL, PostgreSQL, MongoDB' },
    { category: 'Tools & Platforms', items: 'Git, Docker, AWS, Jira, Vercel' },
    { category: 'Others', items: 'RESTful APIs, GraphQL, Redis, Agile Methodologies' },
  ];

  const Carousel = ({ skills, direction }) => (
    <div className="overflow-hidden">
      <Marquee direction={direction} className="carouselTicker relative z-10">
        <ul className="carouselTicker__list">
          {skills.map((skill, index) => (
            <li key={index} className="carouselTicker__item mt-6">
              <a href="#" className="brand-logo icon_80 icon-shape w-20 h-20 rounded-lg">
                <img src={skill.src} alt={skill.name} />
              </a>
              <span className="tool-tip mt-2 text-sm text-white-500">{skill.name}</span>
            </li>
          ))}
        </ul>
      </Marquee>
    </div>
  );

  return (
    <section className="c-space my-20" id="skills">
      <div className="w-full text-white-600">
        <p className="head-text">My Skills</p>

        <div className="work-container">
          <div className="work-content">
            <div className="sm:py-10 py-10 my-10 sm:px-5 px-2.5">
              {/* Skills Carousel */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <Carousel skills={skillsCarousel1} direction="right" />
                  <Carousel skills={skillsCarousel2} direction="left" />
                </div>

                {/* Skills List */}
                <div className="border-l border-black-500 pl-8">
                  <ul className="space-y-6">
                    {skillsList.map((skill, index) => (
                      <li key={index} className="flex gap-2">
                        <p className="font-bold text-white-800">{skill.category}:</p>
                        <span className="text-white-500">{skill.items}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
