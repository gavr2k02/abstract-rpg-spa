import { connect } from "react-redux";

import {
    SkillRowPower,
    SkillRowIntelligence,
    SkillRowAgility,
    SkillRowCharisma,
} from "./index";

const Skills = ({ personage }) => {
    return (
        <div className='component bgblack'>
            <div className='container text'>
                <h2>Скиллы</h2>
            </div>
            {personage.powerSkills.map((skill) => (
                <SkillRowPower
                    key={skill.name}
                    skill={skill}
                    power={personage.baseParametrs.power}
                />
            ))}
            <hr className='line red' />
            {personage.agilitySkills.map((skill) => (
                <SkillRowAgility
                    key={skill.name}
                    skill={skill}
                    agility={personage.baseParametrs.agility}
                />
            ))}
            <hr className='line green' />
            {personage.intelligenceSkills.map((skill) => (
                <SkillRowIntelligence
                    key={skill.name}
                    skill={skill}
                    intelligence={personage.baseParametrs.intelligence}
                />
            ))}
            <hr className='line orange' />
            {personage.charismaSkills.map((skill) => (
                <SkillRowCharisma
                    key={skill.name}
                    skill={skill}
                    charisma={personage.baseParametrs.charisma}
                />
            ))}
            <hr className='line green' />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        personage: state.personage,
    };
};

export default connect(mapStateToProps)(Skills);
