import { Dropdown as DropDownMenu, type MenuProps, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import React from "react";

interface IDropDownProps {
  children: React.ReactNode;
  onLogout: () => void;
}

const DropDown: React.FC<IDropDownProps> = ({ children, onLogout }) => {
  const items: MenuProps["items"] = [
    {
      label: <Link to="/profile">Профиль</Link>,
      key: "0",
    },
    {
      label: "Выйти",
      key: "1",
      onClick: () => onLogout(),
    },
  ];

  return (
    <DropDownMenu menu={{ items }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {children}
          <DownOutlined style={{ color: "#fff" }} />
        </Space>
      </a>
    </DropDownMenu>
  );
};

export default DropDown;
