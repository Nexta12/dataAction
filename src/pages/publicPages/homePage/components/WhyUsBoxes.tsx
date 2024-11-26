import Heading from "@components/heading/Heading"
import Paragraph from "@components/paragraph/Paragraph"
import { HtmlHTMLAttributes } from "react"

interface WhyUsBoxesProps extends HtmlHTMLAttributes<HTMLDivElement>{
    count?: string,
    text?: string
}

const WhyUsBoxes = ({ count, text }: WhyUsBoxesProps) => {
  return (
    <div className="bg-transparentWhite p-6  rounded-lg flex flex-col justify-center items-center text-center ">
        <Heading>{count}</Heading>
        <Paragraph>{text}</Paragraph>
    </div>
  )
}

export default WhyUsBoxes