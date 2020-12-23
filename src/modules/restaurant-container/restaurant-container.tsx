import React, { Component } from "react";
import classNames from "classnames/bind";
import { connect } from "react-redux";
import { History } from 'history';
import { Grid, Typography } from '@material-ui/core';
import { StoreTypes } from "../../store/store-types";
import { RestaurantBoxWithRouting } from '../restaurant-box/restaurant-box-routing';
import { RestaurantDataSelector } from "../../store/restaurant/selectors";
import { getRestaurantsActionSaga } from '../../store/restaurant/action';
import style from './restaurant-container.scss';

const cn = classNames.bind(style);

interface Data {[key: string]: any}

interface Props {
    getRestaurantData: () => void,
    data: Array<Data>,
    history: History
}

class RestaurantContainerComponent extends Component<Props> {
    componentDidMount(): void {
        this.props.getRestaurantData();
    }

    render(){
        return (
            <div className={cn('restaurant-container')}>
                <Typography variant="h3">Рестораны</Typography>
                <div className={cn('restaurant-container__wrapper')}>
                    <Grid container spacing={2} justify='space-between'>
                        {this.props.data.map(({
                            nameRu,
                            rating,
                            id,
                            coverImg,
                            category,
                            logoImg,
                            nameEn
                        }) =>
                            <Grid key={id} item>
                                <RestaurantBoxWithRouting
                                    name={nameRu}
                                    coverImg={coverImg}
                                    logoImg={logoImg}
                                    rating={rating}
                                    delivery={'от 300р'}
                                    category={category}
                                    deliveryTime={'30'}
                                    key={id}
                                    nameEn={nameEn}
                                    history={this.props.history}
                                />
                            </Grid>)}
                    </Grid>
                </div>
            </div>
        )
    }
}


export const RestaurantContainer = connect((state: StoreTypes) => ({
    data: RestaurantDataSelector(state)
}), {
    getRestaurantData: getRestaurantsActionSaga
})(RestaurantContainerComponent);
