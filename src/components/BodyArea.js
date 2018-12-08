//src/components/BodyArea.js

import React from 'react';
import { withStyles } from '@material-ui/core/styles';


import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';

import ShareIcon from '@material-ui/icons/Share';




const styles = theme => ({
  root: {
    width: '92%',
    marginTop: theme.spacing.unit * 3,
    marginLeft:theme.spacing.unit*3,
    paddingLeft:theme.spacing.unit*3,
    paddingRight:theme.spacing.unit*3,
    display:'inline-block'
  },
  card: {
    minWidth: 400,
    display:'inline-block',
    margin:'15px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  }
});

class CardsArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageData: []
    };
  }

 

  render() {
    const { classes } = this.props;
    const { imageData } = this.state;

    return (
      <div>
      {/* <Paper className={classes.root}>
        <EnhancedTableToolbar  />
      </Paper> */}
      <div className={classes.root} >
      { imageData.map((n,indx) => {
                return (
                  <Card className={classes.card}>
                
                  <CardMedia
                    className={classes.media}
                    image={n.Image}
                  />
              
                  <CardActions className={classes.actions} disableActionSpacing>
                    {n.likes}
                    <IconButton aria-label="Like">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                      <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
                );
              })
            }
      </div>
      </div>
    );
  }
  componentDidMount(){
    fetch("http://starlord.hackerearth.com/insta",
    {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors"
    }
  ) // Call the fetch function passing the url of the API as a parameter
    .then((response)=> {
        response.json().then((responseData)=>{
           this.setState({
            imageData:responseData
           });
        });
     
        // Your code for handling the data you get from the API
    })
    .catch(function(error) {
        // This is where you run code if the server returns any errors
    });
  }
}




export default withStyles(styles)(CardsArea);
