/**
 * Created by rozer on 6/29/2018.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import img from '../image/chilli.png'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import Loader from 'react-loader'
import { toTitleCase } from '../utils/helper'
import imgFood from '../image/food.jpg'

const styles = {
    root: {
        flexGrow: 1,
    },
    card: {
        width: 325,
        margin:10
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    tasteCat:{
        width:173,
    },
};

class Food extends Component{
    render(){
        const { classes,food, loading } = this.props;

        return (
            <Grid className={classes.root}>
                <Grid item xs={12}>
                    {loading
                        ?
                        <Loader loaded={loading} lines={13} length={20} width={10} radius={30}
                                corners={1} rotate={0} direction={1} color="#000" speed={1}
                                trail={60} shadow={false} hwaccel={false} className="spinner"
                                zIndex={2e9} top="50%" left="50%" scale={1.00}
                                loadedClassName="loadedContent" />
                        :
                    <Grid
                        container
                        spacing={16}
                        direction='row'
                        justify='space-around'
                    >
                        { food !== null && food !== undefined &&(
                            food.map((data,index) => {
                                return(
                                    <Grid key={data['name']}>
                                        <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.media}
                                                image={data['image'] !== undefined ? imgFood : ''}
                                                title={data['name']}
                                            />
                                            <CardContent style={{paddingTop:0, paddingBottom:0}}>
                                                <div className="foodName">
                                                    {toTitleCase(data['name'])}
                                                </div>
                                            </CardContent>
                                            <CardActions>
                                                <div className={classes.tasteCat}>
                                                    {data['nonVeg'] === true
                                                        ?
                                                        <div>
                                                            <div className="nonvegCircle"></div>
                                                            <span className="foodCategory">Non-Veg</span>
                                                        </div>
                                                        :
                                                        <div style={{width:60}}>
                                                            <div className="vegCircle"></div>
                                                            <span className="foodCategory">Veg</span>
                                                        </div>
                                                    }
                                                    {data['spicy'] === true
                                                        ?
                                                        <div style={{width:46, float:'left'}}>
                                                            <img src={img} height={16} width={16} alt="chilly"/>
                                                            <span className="foodTaste" style={{float:'right'}}>Spicy</span>
                                                        </div>
                                                        :
                                                        <div></div>
                                                    }
                                                </div>
                                                <Link to={`/fooddetail/${index}`} style={{textDecoration:'none'}}>
                                                    <Button size="small" color="secondary">
                                                        View Details
                                                    </Button>
                                                </Link>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })
                        )}
                    </Grid>
                    }
                </Grid>
            </Grid>
        );
    }
}

Food.propTypes = {
    classes: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => {
    return{
        food: state.food,
    }
};

export default connect(mapStateToProps,null)(withStyles(styles)(Food));
