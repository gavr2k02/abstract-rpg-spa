import { connect } from "react-redux";
import { Parametrs } from "./index";
import hero from "../assests/img/Hero.gif";
import damageHero from "../assests/img/DamageHero.jpg";
import { useDispatch } from "react-redux";
import { receivedDamage } from "../redux/actions";
import "./css/Hero.css";

const Hero = ({ personage }) => {
    const dispath = useDispatch();
    const handleReceivedDamage = () => {
        if (personage.characteristic.lifeForce <= 0) return;

        const characteristic = {
            lifeForce: personage.characteristic.lifeForce - 1,
            evasion: personage.characteristic.evasion,
            energy: personage.characteristic.energy,
        };

        dispath(receivedDamage(characteristic));
    };

    return (
        <div className='component bgblack'>
            <div className='container'>
                <div className='block'>
                    {personage.characteristic.lifeForce > 0 ? (
                        <img
                            src={hero}
                            className='img-hero'
                            alt='hero'
                            onClick={handleReceivedDamage}></img>
                    ) : (
                        <img
                            src={damageHero}
                            className='img-hero'
                            alt='hero'
                            onClick={handleReceivedDamage}></img>
                    )}
                </div>
                <Parametrs />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        personage: state.personage,
    };
};

export default connect(mapStateToProps)(Hero);
