import './loader.scss';
import L from '../../assets/ajax-loader.gif';

const Loader = () => {
    return (
        <div className='Loader-container'>
            <img src={L} alt="Loader" />
        </div>
    )
}

export default Loader;