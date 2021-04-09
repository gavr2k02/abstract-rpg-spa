import { ButtonExport, ButtonImport } from "./index";
const Buttons = () => {
    return (
        <div className='component bgblack'>
            <div className='container text'>
                <ButtonImport />
                <ButtonExport />
            </div>
        </div>
    );
};

export default Buttons;
