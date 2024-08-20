import styled from "styled-components";
import { getAuth, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";
import { useCallback, useEffect } from "react";
import logo from '../assets/logo.svg';
import homeIcon from '../assets/home-icon.svg';
import searchIcon from '../assets/search-icon.svg';
import watchlistIcon from '../assets/watchlist-icon.svg';
import originalIcon from '../assets/original-icon.svg';
import movieIcon from '../assets/movie-icon.svg';
import seriesIcon from '../assets/series-icon.svg';

const Header = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  const userphoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();

  const setUser = useCallback((user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  });

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [username, navigate, setUser]);

  const handleAuth = () => {
    if (!username) {
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
          navigate('/home')
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      auth.signOut().then(() => {
        dispatch(setSignOutState());
        navigate("/");
      })
      .catch((err) => alert(err.message));
    }
  };

 

  console.log('username', username)

  return (
    <Nav>
      <Logo>
        <img src={logo} alt="Disney" />
      </Logo>

      {!username ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="home" onClick={() => navigate('/home')}>
              <img src={homeIcon} alt="Home" />
              <span>HOME</span>
            </a>
            <a>
              <img src={searchIcon} alt="Search" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src={watchlistIcon} alt="Watchlist" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src={originalIcon} alt="Originals" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src={movieIcon} alt="Movies" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src={seriesIcon} alt="Series" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut> 
            <UserImg src={userphoto} alt={username} />
            <DropDown onClick={handleAuth}>Sign Out</DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    z-index: auto;
    cursor: pointer;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

   @media (max-width: 908px) {
     display: none;
   } 
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background-color: rgb(19,19,19);
  border: 1px solid rgba(151,151,151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
