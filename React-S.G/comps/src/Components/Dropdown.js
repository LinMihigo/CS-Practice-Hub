import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
    // State for opening and closing the dropdown list!
    const [isOpen, setIsOpen] = useState(false);

    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }

            // Check if divEl.current doesn't contain the element that's been
            // clicked on. If it doesn't, we close the dropdown.
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }

        }
        document.addEventListener('click', handler);

        return () => {
            document.removeEventListener('click', handler, true);
        }
    }, []);

    // Opens the dropdown list when "Select..." is clicked
    // so that an option can be selected
    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    }
    
    // Closes the dropdown and shows the option clicked on!
    const handleOptionClick = (option) => {
        // Close dropdown
        setIsOpen(false);
        // Showing the option the user clicked on!
        console.log(option)
        // the option selected is passed to the parent component thru this onSelect function
        onChange(option);
    }

    // enables the options object to be rendered one by one.
    const renderedOptions = options.map((option) => {
        return (
            <div className='hover:bg-sky-100 rounded cursor-pointer p-1' 
            onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        )
    });

    return (
        <div ref={divEl} className='w-60 relative'>
            <Panel className='flex justify-between items-center cursor-pointer' onClick={handleClick}>
                {/* the ? in selection?. label checks if selection is null and
                    if it's not, the label will be shown. 
                    if selection?.label is null, it returns undefined */ }
                { value?.label || 'Select ...' }
                <GoChevronDown className='text-lg' />
            </Panel>

            { /* Options are hidden unless isOpen is true */ }
            { isOpen && (
                <Panel className='absolute top-full'>
                    { renderedOptions }
                </Panel>) 
            }
        </div>
    )
}

export default Dropdown;