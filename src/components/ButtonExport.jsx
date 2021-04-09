import { useDispatch } from "react-redux";

import { connect } from "react-redux";

import { updatePersonage } from "../redux/actions";

import "./css/Buttons.css";

const ButtonExport = ({ personage }) => {
    const dispath = useDispatch();

    const handleClickButton = () => {
        download("Personage-" + personage.name, JSON.stringify(personage));
    };

    const download = (filename, text) => {
        var blob = new Blob([text], { type: "text/plain" });
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
    };

    return (
        <button
            className='btn btn-outline-primary btn-lg'
            onClick={handleClickButton}>
            Экспорт
        </button>
    );
};

const mapStateToProps = (state) => {
    return {
        personage: state.personage,
    };
};

export default connect(mapStateToProps)(ButtonExport);
