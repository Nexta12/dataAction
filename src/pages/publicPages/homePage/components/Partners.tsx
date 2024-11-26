import PublicPageContainer from "@components/container/PublicPageContainer"
import Heading from "@components/heading/Heading"


const Partners = () => {
  return (
    <PublicPageContainer gradientColors={['#EDE7F4', '#EDE7F4', '#EDE7F4']}>
        <div className="flex items-center flex-col md:flex-row  gap-4 justify-center mb-4">
        <div className="flex-1">
          <Heading className="font-bold">Technology & Partners</Heading>
        </div>
        <div className="flex-[2]">
            <img src="/assets/Logos.png" alt="parners" />
        </div>
      </div>
    </PublicPageContainer>
  )
}

export default Partners