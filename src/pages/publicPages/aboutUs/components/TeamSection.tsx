import PublicPageContainer from '@components/container/PublicPageContainer'
import Heading from '@components/heading/Heading'
import { ExpertsCards } from '@components/imageCard/ImageCard'
import Paragraph from '@components/paragraph/Paragraph'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const TeamSection = () => {
  return (
    <PublicPageContainer
    className="py-[60px]"
    gradientDirection="45deg"
    gradientColors={["#c7e8f2", "#EDE7F4", "#EDE7F4"]}
  >
    <Heading
      className="xmd:text-[39px] text-xlg xmd:text-left text-center"
      text="Team Introduction"
    />
    <Paragraph
      className=" text-[18px] xmd:text-left text-center xmd:mb-[35px] mb-[24px]"
      text="Meet the team behind DataActions — a group of dedicated professionals passionate about empowering individuals and organizations through technology."
    />
    <div className="w-full flex flex-wrap gap-4 items-center justify-between">
        <ExpertsCards
          image="/assets/p1.png"
          name="Arlyne Stefano"
          specialty="Power BI Specialist"
          icons={[
            { icon: FaTwitter, link: "#" },
            { icon: FaLinkedinIn, link: "#" },
            { icon: FaInstagram, link: "#" },
          ]}
          className='lg:w-[32%]'
        />
        <ExpertsCards
          image="/assets/p1.png"
          name="Arlyne Stefano"
          specialty="Founder & CEO"
          icons={[
            { icon: FaTwitter, link: "#" },
            { icon: FaLinkedinIn, link: "#" },
            { icon: FaInstagram, link: "#" },
          ]}
          className='lg:w-[32%]'
        />
        <ExpertsCards
          image="/assets/p3.png"
          name="Arlyne Stefano"
          specialty="Chief Technology Officer"
          icons={[
            { icon: FaTwitter, link: "#" },
            { icon: FaLinkedinIn, link: "#" },
            { icon: FaInstagram, link: "#" },
          ]}
        className='lg:w-[32%]'
        />
        <ExpertsCards
          image="/assets/p3.png"
          name="Arlyne Stefano"
          specialty="Chief Technology Officer"
          icons={[
            { icon: FaTwitter, link: "#" },
            { icon: FaLinkedinIn, link: "#" },
            { icon: FaInstagram, link: "#" },
          ]}
        className='lg:w-[32%]'
        />
      </div>
  </PublicPageContainer>
  )
}

export default TeamSection