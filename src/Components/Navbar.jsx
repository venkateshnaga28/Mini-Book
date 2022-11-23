
import { AppBar, styled, Toolbar, Typography, Box, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import { InputBase } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';



import NotificationsIcon from '@mui/icons-material/Notifications';
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"

}));
const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }

}));
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }


}));
const Navbar = () => {
const [open,setOpen]=useState(false)


  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}> Naga Dev</Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder='search......'></InputBase></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar onClick={() => setOpen(true)} sx={{ width: 30, height: 30 }}>NV</Avatar>
        </Icons>
        <UserBox>
          <Avatar onClick={() => setOpen(true)} sx={{ width: 30, height: 30 }}>NV</Avatar>
          <Typography variant="span">Naga</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClick={()=>setOpen(false)}
        open={open}
       
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

    </AppBar>
  )
}

export default Navbar
