import { useState } from 'react';
import Modal from "../Components/Modal";
import Button from "../Components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }


    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I accept!</Button>
        </div>
    )

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an Important agreement for you to accept!
        </p>
    </Modal>

    return (
        <div>
            <Button primary onClick={handleClick}>
                Open Modal
            </Button>
            { showModal && modal }
        </div>
    )
}

export default ModalPage;
