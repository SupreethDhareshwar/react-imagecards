//src/components/BodyArea.js

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';

import ShareIcon from '@material-ui/icons/Share';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

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
    paddingTop: '100%', // 1:1
  },
  actions: {
    display: 'flex',
  },
  fontStyle: {
    fontStyle: 'italic',
  }
});

class CardsArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageData: []
    };
  }

updateLikeCount = (indx) => {
let updatedData=this.state.imageData;
updatedData[indx].likes=updatedData[indx].likes + 1;
  this.setState({
  imageData:updatedData
})

}
removeCard = (indx) => {
  let updatedData=this.state.imageData;
  updatedData.splice(indx, 1);
    this.setState({
    imageData:updatedData
  })
  
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
                  <Card className={classes.card} key={indx}>
                
                  <CardMedia
                    className={classes.media}
                    image={n.Image}
                  />
                    <CardContent>
          <Typography className={classes.fontStyle} component="p">{ "Timestamp - " + n.timestamp}
          </Typography>
        </CardContent>
                  <CardActions className={classes.actions} disableActionSpacing>
                    {n.likes}
                    <IconButton aria-label="Like" onClick={()=>this.updateLikeCount(indx)}>
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                      <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="Delete"   onClick={()=>this.removeCard(indx)}>
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
