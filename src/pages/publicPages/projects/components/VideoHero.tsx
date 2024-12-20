
const VideoHero = () => {
  return (
    <div className="w-full  xl:px-18 ">
    <div className="mx-auto">
      <video controls preload="" width="100%" className=" xl:h-[660px]">
        <source src="/example.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
  )
}

export default VideoHero