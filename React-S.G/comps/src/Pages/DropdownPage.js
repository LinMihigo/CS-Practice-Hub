import { useState } from 'react';
import Dropdown from "../Components/Dropdown";

function DropdownPage() {
    // State that handles the option that was selected
    const [selection, setSelection] = useState(null);

    // click event handler
    // Qn. how does option get passed up into the parent element?
    const handleSelect = (option) => {
        setSelection(option)
    }

    // The options to be selected
    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'green'},
        {label: 'Blue', value: 'blue'}
    ]
    return (
            <div className='flex'>
                <Dropdown options={options} value={selection} onChange={handleSelect} />
                <Dropdown options={options} value={selection} onChange={handleSelect} />
            </div>
        )
}

export default DropdownPage;