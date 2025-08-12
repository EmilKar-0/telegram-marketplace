import styles from "./styles.module.scss";
import React from "react";
import { Button, ConfigProvider } from "antd";

import { Gifts } from "@/pages";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { modalActions } from "@/entities/Modal";
import { Navigate } from "react-router-dom";
// type ModalType = "nameFilter" | "priceFilter" | null;

const modalsContent = [
  {
    id: 1,
    title: "Фильтр по имени",
    content: "",
  },
  {
    id: 2,
    title: "Фильтр по цене",
    content: "",
  },
];

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuthorized } = useAppSelector((state) => state.userSlice);
  const handleOpenModal = (id: number) => {
    if (id === 1)
      dispatch(modalActions.setOpen({ content: "names", data: {} }));
    else dispatch(modalActions.setOpen({ content: "prices", data: {} }));
  };

  return (
    <>
      {isAuthorized ? (
        <div className={styles.content}>
          <div className={styles.filters}>
            {modalsContent.map((el) => (
              <ConfigProvider
                button={{
                  className: styles.openModal,
                }}
              >
                <Button type="primary" onClick={() => handleOpenModal(el.id)}>
                  <span>{el.title}</span>
                </Button>
              </ConfigProvider>
            ))}
          </div>
          <Gifts />
        </div>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};

export default Profile;
