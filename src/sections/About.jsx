import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import FunFact from '../components/FunFact.jsx';

const About = () => {
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Sameer Naveed</p>
              <p className="grid-subtext">
                With 3+ years of experience, I specialize in building scalable web applications for international
                clients that drive real business results. I&apos;ve helped scale platforms to $15K+ MRR and generate
                millions in business value. I don&apos;t just write code – I build solutions that transform businesses
                and create lasting value worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a comprehensive range of modern technologies that enable me to deliver robust, scalable
                solutions across the entire development spectrum. From responsive React frontends and powerful Python
                backends to cloud infrastructure and AI integration, I leverage the right tools for each project&apos;s
                unique requirements, ensuring optimal performance and future-ready architecture.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Lahore, Pakistan and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, experimenting with different
                frameworks, and constantly enhancing my skills. What drives me most is the satisfaction of turning
                complex problems into elegant solutions. Whether I&apos;m building responsive user interfaces or
                architecting backend systems, I find genuine excitement in creating digital experiences that make a real
                impact. I&apos;m particularly drawn to full-stack development because it allows me to see projects from
                conception to completion. Every challenge teaches me something new, and that continuous learning keeps
                my passion for coding alive.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Fun Facts About Me</p>
              <div className="flex flex-wrap flex-row justify-center my-auto pt-4">
                <FunFact icon={'/assets/coffee.svg'} title={'Coffee Addict'} text={'2+ cups daily keep me coding'} />
                <FunFact icon={'/assets/code.svg'} title={'Night Owl'} text={'Best code happens at 2 AM'} />
                <FunFact icon={'/assets/music.svg'} title={'Music Lover'} text={'Rock & Jazz fan'} />
                <FunFact icon={'/assets/travel.svg'} title={'Explorer'} text={'3 countries & counting'} />
                <FunFact icon={'/assets/game.svg'} title={'Gamer'} text={'Strategy games enthusiast'} />
                <FunFact icon={'/assets/book.svg'} title={'Bookworm'} text={'5+ tech books read'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
