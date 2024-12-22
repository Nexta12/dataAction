import Heading from "@components/heading/Heading"
import Paragraph from "@components/paragraph/Paragraph"

const VideoHero = () => {
  return (
    <div className="w-full  xl:px-18 flex flex-col items-center mb-14 ">
        <Heading className="text-center text-4xl xl:text-6xl">Request a Data Project</Heading>
        <Paragraph className="text-center mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi quis, sit dolore ad omnis</Paragraph>
    <div className="mx-auto w-full">
      <video controls preload="" width="100%" className="h-[300px] xl:h-[660px] w-full">
        <source src="/example.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
  )
}

export default VideoHero