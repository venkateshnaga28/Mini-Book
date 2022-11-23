import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
const Post = () => {
  return (
      <Card sx={{ margin:5}}>
          <CardHeader
              avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                      R
                  </Avatar>
              }
              action={
                  <IconButton aria-label="settings">
                      <MoreVertIcon />
                  </IconButton>
              }
              title="Naga Venkatesh"
              subheader="September 14, 2012"
          />
          <CardMedia
              component="img"
              height="auto"
              image="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Paella dish"
          />
          <CardContent>
              <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
              </Typography>
          </CardContent>
          <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                  <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
              </IconButton>
              <IconButton aria-label="share">
                  <ShareIcon />
              </IconButton>

          </CardActions>

      </Card>
  )
}

export default Post
