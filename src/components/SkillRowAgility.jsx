import imgButtonUpgrade from "../assests/img/button.png";
import { useDispatch } from "react-redux";
import { updateAgilitySkills } from "../redux/actions";
import agilityImg from "../assests/img/agility.png";
import { getRang } from "./scripts";
import "./css/SkillRow.css";

const SkillRowAgility = ({ skill, agility }) => {
    const dispath = useDispatch();

    const handleUpgrade = () => {
        if (skill.lvl < 5 && skill.lvl < agility)
            dispath(updateAgilitySkills(skill));
        else alert("Скилл не может быть улучшен");
    };

    return (
        <div className='row align-items-center text text-skill'>
            <div className='col d-flex justify-content-center'>
                <div className='skill-name'>
                    <img
                        src={agilityImg}
                        className='icon-skill'
                        alt='agility'
                    />
                </div>
                <p className='red-text'>{skill.name}</p>
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

export default SkillRowAgility;
