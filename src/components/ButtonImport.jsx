import { useDispatch } from "react-redux";
import { updatePersonage } from "../redux/actions";

const ButtonImport = () => {
    const dispath = useDispatch();

    const handleInputFile = (event) => {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            let personage = JSON.parse(event.target.result);
            dispath(updatePersonage(personage));
        };
        reader.readAsText(file);
    };

    return (
        <div className='mb-3'>
            <input
                className='form-control'
                type='file'
                id='formFile'
                onChange={handleInputFile}
            />
        </div>
    );
};

export default ButtonImport;
