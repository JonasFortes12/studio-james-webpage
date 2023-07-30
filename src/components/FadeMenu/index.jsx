import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

import { BiMenu } from "react-icons/bi";
import NavSection from "../NavSection";

import { TiHeartOutline } from "react-icons/ti";
import { LuStars } from "react-icons/lu";
import { BsWhatsapp, BsPerson  } from "react-icons/bs";

function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <BiMenu size={30} color="#CCCCCC" />
      </Button>

      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >

        <MenuItem onClick={handleClose}>
          <NavSection text="SOBRE" icon={<BsPerson/>} color="#312C2D"/>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <NavSection text="SERVIÇOS" icon={<TiHeartOutline />} color="#312C2D" />
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <NavSection text="RESULTADOS" icon={<LuStars />} color="#312C2D"/>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <NavSection text="CONTATOS" icon={<BsWhatsapp size={15}/>} color="#312C2D"/>
        </MenuItem>

      </Menu>
    </div>
  );
}

export default FadeMenu;
