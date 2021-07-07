import React from 'react'
import styled from 'styled-components';
import SkillsItems from './SkillsItems';
import ContentStyles from '../styles/ContentStyles';
import skillsBG from '../images/skills/skills-bg.svg';

const BGStyles = styled.div`

	background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 2.5rem;
`;

const Skills = () => {


  return (
    <BGStyles  style={{backgroundImage: `url(${skillsBG})`}} id="skills">
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