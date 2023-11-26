import classNames from 'classnames';
import useNavigation from '../Hooks/use-navigation';

function Link ({ to, children }) {

    const { navigate } = useNavigation();

    const classes = classNames('text-blue-500');

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        
        event.preventDefault();

        navigate(to);
    }

    return (
        <div>
            <a className={classes} onClick={handleClick} href={to}>{ children }</a>
        </div>
    )
}

export default Link;