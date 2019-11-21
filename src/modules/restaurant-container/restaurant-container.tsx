import React, {Component} from "react";
import classNames from "classnames";
import {connect} from "react-redux";
import {Grid, Text} from '../../elements';
import {getRestaurantData} from './actions';
import {StoreTypes} from "../../store/store-types";
import {RestaurantBoxWithRouting} from '../restaurant-box/restaurant-box-routing';
import {
    RestaurantDataSelector,
    RestaurantFiltersSelector,
    RestaurantPaginationSelector
} from "../../store/restaurant/selectors";
import './restaurant-container.scss';

const {Row, Col, Margin_Top, Col_Width} = Grid;

interface Data {[key: string]: any}

interface Props {
    getRestaurantData?: (params?: Data) => void,
    data?: Array<Data>,
    filters?: Data,
    pagination?: Data
}

class RestaurantContainerComponent extends Component<Props> {
    componentDidMount(): void {
        const {
            getRestaurantData = () => {},
            filters = {},
            pagination = {}
        } = this.props;

        getRestaurantData({...filters, ...pagination, 'fdsfdsf': 132131})
    }

    render(){
        const {data = []} = this.props;

        return (
            <div className={classNames('restaurant-container')}>
                <Grid>
                    <Row marginTop={Margin_Top.X16}>
                        <Col>
                            <Text black heading> Рестораны :</Text>
                        </Col>
                    </Row>
                    <Row marginTop={Margin_Top.X16}>
                        {data.map(({nameRu, rating, id, coverImg, category, logoImg, nameEn}) =>
                            <Col col={Col_Width.QUARTER}>
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
                                />
                            </Col>)}
                    </Row>
                </Grid>
            </div>
        )
    }
}


export const RestaurantContainer = connect((state: StoreTypes) => ({
    data: RestaurantDataSelector(state),
    filters: RestaurantFiltersSelector(state),
    pagination: RestaurantPaginationSelector(state)
}), {
    getRestaurantData
    // @ts-ignore
})(RestaurantContainerComponent);
