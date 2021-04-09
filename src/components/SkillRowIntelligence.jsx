import imgButtonUpgrade from "../assests/img/button.png";
import { useDispatch } from "react-redux";
import { updateInteligenceSkills } from "../redux/actions";
import { getRang } from "./scripts";
import brainImg from "../assests/img/brain.png";

import "./css/SkillRow.css";

const SkillRowIntelligence = ({ skill, intelligence }) => {
    const dispath = useDispatch();

    const handleUpgrade = () => {
        if (skill.lvl < 5 && skill.lvl < intelligence)
            dispath(updateInteligenceSkills(skill));
        else alert("Скилл не может быть улучшен");
    };

    return (
        <div className='row align-items-center text text-skill'>
            <div className='col d-flex justify-content-center'>
                <div className='skill-name'>
                    <img src={brainImg} className='icon-skill' alt='brain' />
                    <p className='red-text'>{skill.name}</p>
                </div>
            </div>
            <div className='col d-flex justify-content-center'>
                <p>Ранг: {getRang(skill.lvl)}</p>
            </div>
            <div className='col d-flex justify-content-center'>
                <img
                    className='icon'
                    src={imgButtonUpgrade}
                    alt='upgrade'
                    onClick={handleUpgrade}
                />
            </div>
        </div>
    );
};

export default SkillRowIntelligence;
