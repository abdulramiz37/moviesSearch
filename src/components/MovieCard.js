import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip  from '@mui/material/Chip';
import {Link} from 'react-router-dom';
;
  const  MovieCard = (props)=> {
    console.log(props.data);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link to={`/detail/${props.data?.imdbID}`}>
        <CardMedia
          component="img"
          height="450"
          image={props.data?.Poster}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {props.data?.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
        {props.data?.Year}
          </Typography>
          <Chip label={props.data?.Type} variant="outlined" />
        </CardContent>
          </Link>
      </CardActionArea>
    </Card>
  );
}
export default MovieCard;