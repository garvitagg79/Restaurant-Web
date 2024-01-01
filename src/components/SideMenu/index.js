import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

const SideMenu = () => {
  const navigate = useNavigate();
  const menuItem = [
    {
      key: "/",
      label: "Orders",
    },
    {
      key: "menu",
      label: "Menu",
    },
    {
      key: "order-history",
      label: "Order History",
    },
    {
      key: "settings",
      label: "Settings",
    },
    {
      key: "connect",
      label: "Connect",
    },
    {
      key: "signout",
      label: "Sign Out",
      style: { color: "red" },
      onClick: async () => {
        try {
          await Auth.signOut();
        } catch (e) {
          console.log(e.message);
        }
      },
    },
  ];

  return (
    <Menu items={menuItem} onClick={(menuItem) => navigate(menuItem.key)} />
  );
};

export default SideMenu;
