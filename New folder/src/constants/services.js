import React from "react"

import { GiProcessor } from "react-icons/gi"
import { AiOutlineCloud ,AiOutlineRadarChart} from "react-icons/ai"
import { FcStatistics } from "react-icons/fc"
import { GrDeploy } from "react-icons/gr"
import { FaPython } from "react-icons/fa"

export default [
  {
    id: 1,
    icon: <GiProcessor className="service-icon" />,
    title: "Machine Learning",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 2,
    icon: <AiOutlineCloud className="service-icon" />,
    title: "Cloud Compute",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 3,
    icon: <FaPython className="service-icon" />,
    title: "Deep learning",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
   },
  {
    id: 4,
    icon: <FcStatistics className="service-icon" />,
    title: "Statistics",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 5,
    icon: <GrDeploy className="service-icon" />,
    title: "Model Deployment",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 6,
    icon: <AiOutlineRadarChart className="service-icon" />,
    title: " Data visualization",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
]
