import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
    updateName,
    updateBaseParametrs,
    updateCharacteristic,
} from "../redux/actions";
import power from "../assests/img/power.png";
import brain from "../assests/img/brain.png";
import agility from "../assests/img/agility.png";
import charisma from "../assests/img/charisma.png";

import "./css/Parametrs.css";

const POWER = "power";
const AGILITY = "agility";
const INTELLIGENCE = "intelligence";
const CHARISMA = "charisma";

const Parametrs = ({ personage }) => {
    const dispath = useDispatch();

    const changeInputBaseParametrs = (event) => {
        const baseParametrs = {
            power: personage.baseParametrs.power,
            agility: personage.baseParametrs.agility,
            intelligence: personage.baseParametrs.intelligence,
            charisma: personage.baseParametrs.charisma,
        };

        if (event.target.name === POWER) {
            baseParametrs.power = event.target.value;
        } else if (event.target.name === AGILITY) {
            baseParametrs.agility = event.target.value;
        } else if (event.target.name === INTELLIGENCE) {
            baseParametrs.intelligence = event.target.value;
        } else if (event.target.name === CHARISMA) {
            baseParametrs.charisma = event.target.value;
        }

        dispath(updateBaseParametrs(baseParametrs));
        dispath(updateCharacteristic(baseParametrs));
    };

    return (
        <div className='block text'>
            <input
                className='input-name'
                type='text'
                placeholder='Имя'
                onChange={(event) => dispath(updateName(event.target.value))}
                value={personage.name}
            />
            <h2>Базовые параметры:</h2>
            <div className='parametrs'>
                <img src={power} className='icon' alt='power' />
                <input
                    className='input-parametr'
                    type='number'
                    placeholder='Сила'
                    name={POWER}
                    value={personage.baseParametrs.power}
                    onChange={changeInputBaseParametrs}
                    min='0'
                />
            </div>
            <div className='parametrs'>
                <img src={agility} className='icon' alt='agility' />
                <input
                    className='input-parametr'
                    type='number'
                    placeholder='Ловкость'
                    name={AGILITY}
                    value={personage.baseParametrs.agility}
                    onChange={changeInputBaseParametrs}
                    min='0'
                />
            </div>
            <div className='parametrs'>
                <img src={brain} className='icon' alt='brain' />
                <input
                    className='input-parametr'
                    type='number'
                    placeholder='Интелект'
                    name={INTELLIGENCE}
                    value={personage.baseParametrs.intelligence}
                    onChange={changeInputBaseParametrs}
                    min='0'
                />
            </div>
            <div className='parametrs'>
                <img src={charisma} className='icon' alt='charisma' />
                <input
                    className='input-parametr'
                    type='number'
                    placeholder='Харизма'
                    name={CHARISMA}
                    value={personage.baseParametrs.charisma}
                    onChange={changeInputBaseParametrs}
                    min='0'
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        personage: state.personage,
    };
};

export default connect(mapStateToProps)(Parametrs);
