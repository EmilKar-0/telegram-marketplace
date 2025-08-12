import React from "react";
import { Modal } from "antd";

import { modalActions } from "@/entities/Modal";
import { useAppSelector, useAppDispatch } from "@/shared/hooks";
import { returnContent } from "@/shared/helpers";

const ModalContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen, content } = useAppSelector((state) => state.modal);
  const { titleData, componentContent } = returnContent(content);

  return (
    <Modal
      title={<p>{titleData}</p>}
      footer={""}
      open={isOpen}
      onCancel={() => dispatch(modalActions.setClose())}
    >
      {componentContent && componentContent}
    </Modal>
  );
};

export default ModalContainer;
