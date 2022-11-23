import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';

const StyledModal = styled(Modal)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
}));

const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Tooltip onClick={() => setOpen(true)} title="Delete" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 }, }}>
                <IconButton>
                    <Fab color="primary" aria-label="add">
                        <AddIcon onClick={() => setOpen(false)} />
                    </Fab>
                </IconButton>
            </Tooltip>
            <StyledModal
                open={open}
                onClick={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5} >
                    <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
                    <UserBox>
                        <Avatar src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" sx={{ width: 30, height: 30 }}>NV</Avatar>
                        <Typography fontWeight={500} variant="span">Naga</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant="contained"
                        aria-label="outlined primary button group"
                    >
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </div>
    )
}

export default Add
