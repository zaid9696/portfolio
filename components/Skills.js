import Image from 'next/image';
import styled from 'styled-components';
import SkillsItems from './SkillsItems';
import ContentStyles from '../styles/ContentStyles';
import skillsBG from '../assets/images/skills/skills-bg.svg';

const BGStyles = styled.div`

	background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 2.5rem;
`;

const Skills = ({}) => {


  return (
    <BGStyles  style={{backgroundImage: `url(${skillsBG.src})`}} id="skills">
    	<ContentStyles>
    		<div className="grid-center">
    			<h2 className="title">Skills</h2>
    			<SkillsItems />
    		</div>
    	</ContentStyles>
    </BGStyles>
  )
}

export default Skills;