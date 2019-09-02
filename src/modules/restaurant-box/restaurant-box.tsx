import React from 'react';
import classNames from "classnames";
import {Text, Grid} from "../../elements";
import {Rating} from './rating/rating';
import {DeliveryTime} from './delivery-time/delivery-time';
import './restaurant-box.scss';

const {Row, Col, T_Align, Col_Width} = Grid;

interface Props {
    name: string,
    src: string,
    rating: number | string,
    delivery: number | string,
    category: string,
    deliveryTime: string
}

export const RestaurantBox = ({
    src,
    name,
    rating,
    delivery,
    category,
    deliveryTime
}: Props) => {
    const currentStyle = {
        background: `url(${src}) 50%`,
        backgroundSize: '100%'
    };

    return (
        <div className={classNames('restaurant-box')}>
            <div
                style={currentStyle}
                className={classNames('restaurant-box__img')}
            />
            <div className={classNames('restaurant-box__info')}>
                <Grid>
                    <Row>
                        <Col col={Col_Width.HALF} textAlign={T_Align.LEFT}>
                            <Text title black>{name}</Text>
                        </Col>
                        <Col col={Col_Width.HALF} textAlign={T_Align.RIGHT}>
                            <DeliveryTime time={deliveryTime}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col col={Col_Width.QUARTER}>
                            <Rating rating={rating}/>
                        </Col>
                        <Col col={Col_Width.QUARTER} textAlign={T_Align.LEFT}>
                            <Text black sub>{delivery}</Text>
                        </Col>
                        <Col col={Col_Width.HALF} textAlign={T_Align.RIGHT}>
                            <Text black title>{category}</Text>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    );
};
