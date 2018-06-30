import React, { Component } from 'react'
import {connect} from 'react-redux'
import img from '../image/chilli.png'
import imgFood from '../image/food.jpg'
import { toTitleCase } from '../utils/helper'
import ReactHtmlParser from 'react-html-parser';

class FoodDetail extends Component{

    render(){

        const {food,match} = this.props;
        const id = match.params.id;
        let filterFoodDetail;
        if(food !== null && food !== undefined){
            filterFoodDetail = food[id]
        }
        return(
            <div>
                {filterFoodDetail !== undefined &&(
                    <div className="card-detail">
                        <img 
                            className="image-detail"
                            src={filterFoodDetail['image'] !== undefined ? imgFood : ''}
                            alt={toTitleCase(filterFoodDetail['name'])}
                        />
                        <div className="container-card">
                            <div className="foodDetailName">
                                <h3>{toTitleCase(filterFoodDetail['name'])}</h3>
                            </div>
                            <div className="foodDetail">
                                {ReactHtmlParser(filterFoodDetail['description'])}
                            </div>
                            <hr/>
                            <div className="tasteCategory">
                                {filterFoodDetail['nonVeg'] === true
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
                                {filterFoodDetail['spicy'] === true
                                    ?
                                    <div style={{width:46, float:'left'}}>
                                        <img src={img} height={16} width={16} alt="chilly"/>
                                        <span className="foodTaste" style={{float:'right'}}>Spicy</span>
                                    </div>
                                    :
                                    <div></div>
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        food: state.food
    }
};

export default connect(mapStateToProps,null)(FoodDetail)
