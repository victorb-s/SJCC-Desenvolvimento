import { HeaderRed } from "../../components/Header";
import Footer from "../../components/Footer";

import SectionInicio from "../../components/HomeComponents/SectionInicio";
import TrendingTopics from "../../components/HomeComponents/TrendingTopics";
import { HomeInfos } from "../../components/HomeComponents/HomeSecInfos";

import { SectionContainer } from "./styles";
import SectionHeading from "../../components/HomeComponents/SectionHeading";
import ProjectNavigation from "../../components/HomeComponents/ProjectNavigation";
import SectionProjetos from "../../components/HomeComponents/SectionProjetos";

const Home = () => {
  return (
    <>
      <HeaderRed />
      <SectionInicio id="inicio"/>
      <TrendingTopics id="trending"/>
      <HomeInfos id="infos"/>
      <SectionContainer>
        <SectionHeading text="Projetos Recentes" />
        <ProjectNavigation id="projetos"/>
        <SectionProjetos  />
      </SectionContainer>
      <Footer />
    </>
  );
};

export default Home;
