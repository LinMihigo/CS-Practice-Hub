import { GoBell, GoCloud, GoDatabase } from 'react-icons/go';
import Button from '../Components/Button';

function ButtonPage() {
    const handleClick = () => {
        console.log("Click!!")
    }
    return (
        <div>
            <div>
                <Button success rounded outline onClick={handleClick}>
                    <GoBell />
                    Click me!!
                </Button>
            </div>
            <div>
                <Button danger outline onMouseEnter={handleClick}>
                    <GoCloud />
                    Buy Now!!
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />
                    See Deal!!
                </Button>
            </div>
            <div>
                <Button secondary outline>Hide Ads!!</Button>
            </div>
            <div>
                <Button primary rounded>Something!!</Button>
            </div>

        </div>
    )
}

export default ButtonPage;