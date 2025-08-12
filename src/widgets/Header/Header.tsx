import React from "react";
import { Link } from "react-router-dom";
import { Alert } from "antd";
import { AxiosError } from "axios";
import { LoginButton, type TelegramAuthData } from "@telegram-auth/react";

import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { DropDown } from "@/shared/ui";
import { authService, userActions, userAuthActions } from "@/entities/User";
import { sigmaImg } from "@/shared/assets";
import styles from "./styles.module.scss";

const Header: React.FC = () => {
  // const location = useLocation();
  // const [active, setActive] = React.useState(location.pathname);

  const [error, setError] = React.useState<AxiosError | null | string>(null);
  const dispatch = useAppDispatch();

  const {
    userAuth: authData,
    userSlice: { isAuthorized, profile },
  } = useAppSelector((state) => state);

  const handleTelegramAuth = async (user: TelegramAuthData) => {
    dispatch(userAuthActions.setRequestData(user));
    dispatch(userAuthActions.setIsDataSend(true));
  };

  React.useEffect(() => {
    setError(null);
    const authTelegram = async () => {
      try {
        if (authData.isDataSend) {
          const data = await authService.login(authData.data);
          dispatch(userActions.setToken(data.accessToken));
          dispatch(
            userActions.setUserData({
              isAuthorized: true,
              profile: data.profile,
            }),
          );
          dispatch(userAuthActions.clearRequestData());
          setError(null);
        }
      } catch (err) {
        if (err instanceof AxiosError) {
          setError(err.response?.data?.message || err.message);
        }
      }
    };
    authTelegram();
  }, [authData.isDataSend, authData, authService.login, dispatch]);

  const handleLogout = async () => {
    await authService.logout();
    dispatch(userActions.logout());
    dispatch(userAuthActions.setIsDataSend(false));
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <h1 className={styles.logo}>FragmenTITI</h1>
        <p>REMOTE CHANGE</p>
      </Link>
      {error !== null && <Alert message={error} type="error" closable />}
      <div>
        {!isAuthorized ? (
          <LoginButton
            botUsername="TeeleeegrammmBot"
            onAuthCallback={(data) => {
              handleTelegramAuth(data);
            }}
            buttonSize="large"
            cornerRadius={5}
            showAvatar={false}
            lang="en"
          />
        ) : (
          <div>
            <DropDown onLogout={handleLogout}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <img
                  style={{ width: 40, height: 40, borderRadius: "50%" }}
                  src={profile?.photoUrl ? profile?.photoUrl : sigmaImg}
                  alt="profile"
                />
                <span style={{ color: "#fff" }}>{profile?.firstName}</span>
              </div>
            </DropDown>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
