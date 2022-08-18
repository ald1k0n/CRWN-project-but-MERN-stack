import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/086 crown.svg';
import './navigation.styles.scss';
// import { UserContext } from '../../context/user.context';
// import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import { CartContext } from '../../context/cart.context';

const Navigation = () => {
    // const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/contact'>
                        CONTACT
                    </Link>
                    <Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                    {/* {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>
                                SIGN OUT
                            </span>
                        )
                            : (
                                <Link className='nav-link' to='/auth'>
                                    SIGN IN
                                </Link>
                            )
                    } */}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;