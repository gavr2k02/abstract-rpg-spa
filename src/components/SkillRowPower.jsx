import imgButtonUpgrade from "../assests/img/button.png";
import { useDispatch } from "react-redux";
import { updatePowerSkills } from "../redux/actions";
import powerimg from "../assests/img/power.png";
import { getRang } from "./scripts";

import "./css/SkillRow.css";

const SkillRowPower = ({ skill, power }) => {
    const dispath = useDispatch();

    const handleUpgrade = () => {
        if (skill.lvl < 5 && skill.lvl < power)
            dispath(updatePowerSkills(skill));
        else alert("Скилл не может быть улучшен");
    };

    return (
        <div className='row align-items-center text text-skill'>
            <div className='col d-flex justify-content-center'>
                <div className='skill-name'>
                    <img src={powerimg} className='icon-skill' alt='power' />
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

export default SkillRowPower;
