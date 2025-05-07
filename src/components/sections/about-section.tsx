import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto py-12 md:py-24 scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">About Me</h2>
       <div className="multicolor-line mb-12 w-24 mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
           <Image
              src="https://picsum.photos/300/400" // Replace with another picture if desired
              alt="Vaibhav Singhal - About"
              width={300}
              height={400}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="professional working photo candidate"
            />
        </div>
        <div className="md:col-span-2 text-lg text-muted-foreground space-y-4">
          <p>
            Hello! I'm Vaibhav Singhal, an Associate Product Manager at JustBaat AI, driven by a passion for building impactful products at the intersection of technology and user needs. My Mechanical Engineering background from IIT Ropar provides a strong analytical foundation for tackling complex challenges.
          </p>
          <p>
            My experience encompasses AI video generation, programmatic ad mediation, and community monetization platforms. I excel at launching and scaling engagement products, driving significant revenue growth, and leading end-to-end development cycles—from ideation and strategy to GTM execution.
          </p>
          <p>
            I've successfully managed projects generating substantial revenue ($300K+), optimized ad inventory for numerous publishers, and increased user acquisition through innovative platforms like AI Content Generators. Proficient in product management fundamentals (monetization, stakeholder management, user research, prioritization, GTM) and tools like Google Analytics, Figma, SQL, and Jira, I'm always eager to connect and discuss new opportunities. Explore my journey and projects below!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
