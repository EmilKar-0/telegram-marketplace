import React from "react";

import styles from "./styles.module.scss";
import type { IGifts } from "@/shared/types";
import { sigmaImg } from "@/shared/assets";
import { Button } from "antd";
import { useAppDispatch } from "@/shared/hooks";
import { modalActions } from "@/entities/Modal";

interface IGiftCardProps extends IGifts {}
const GiftCard: React.FC<IGifts> = (props) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles["gift-item"]}>
      <img src={props.photo_url ? props.photo_url : sigmaImg} alt="" />
      <div className={styles.description}>
        <span>
          {props.name} #{props.gift_id}
        </span>
      </div>
      <Button
        onClick={() =>
          dispatch(modalActions.setOpen({ content: "sale", data: props }))
        }
        className={styles.sale}
      >
        Продать
      </Button>
    </div>
  );
};

export default GiftCard;
