import React from "react"

import { GiProcessor } from "react-icons/gi"
import { AiOutlineCloud ,AiOutlineRadarChart} from "react-icons/ai"
import { FcStatistics } from "react-icons/fc"
import { GrDeploy } from "react-icons/gr"
//import { FaPython } from "react-icons/fa"
import { FaDungeon } from "react-icons/fa"


export default [
  {
    id: 1,
    icon: <GiProcessor className="service-icon" />,
    title: "Data Mining and Statistical Analysis",
    text: `Doing exploratory data analysis and predictive models to reveal patterns and trends in data and translate business problem to a data question, finding the best story to answer that question.`,
  },
  {
    id: 2,
    icon: <AiOutlineCloud className="service-icon" />,
    title: "Cloud and Distributed Computing",
    text: `Designing and implementing enterprise infrastructure and platforms required for cloud and distributed computing, analyze system requirements and ensure smooth integration or migration.`,
  },
  {
    id: 3,
    icon: <FaDungeon className="service-icon" />,
    title:  "ML / Cognitive Computing Development",
    text: `Getting inputs, building data pipelines, convenient data sources, A/B testing and bench marking infrastructure.`,
   },
  {
    id: 4,
    icon: <FcStatistics className="service-icon" />,
    title: "Business Intelligence and Strategy",
    text: `Improving back-end data sources for increased accuracy and simplicity, building tailored analytics solutions, managing dashboards, reporting to stakeholders, recognizing best practices in reporting and analysis: data integrity, test design, analysis, validation, and documentation.`,
  },
  {
    id: 5,
    icon: <GrDeploy className="service-icon" />,
    title: "Operations-Related Data Analytics",
    text: `Leveraging the tools and data provided by the other members of the data science team in order to find opportunities of improvement within the operations of the business.`,
  },
  {
    id: 6,
    icon: <AiOutlineRadarChart className="service-icon" />,
    title: "Data Visualization and Presentation",
    text: `Present data in a visually appealing way creating BI solutions for teams and customers based on specific business requirements and use cases`,
  },
]
