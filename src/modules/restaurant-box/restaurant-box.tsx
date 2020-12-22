import React, { memo, useMemo } from 'react';
import classNames from "classnames/bind";
import { Text, Grid } from "../../elements";
import { Rating } from './rating/rating';
import { DeliveryTime } from './delivery-time/delivery-time';
import style from './restaurant-box.scss';

const cn = classNames.bind(style);

const { Row, Col, T_Align, Col_Width } = Grid;

export interface Props {
    name: string,
    coverImg: string,
    rating: number | string,
    delivery: number | string,
    category: string,
    deliveryTime: string,
    logoImg: string,
    nameEn: string
}

export const RestaurantBox = memo(({
    coverImg,
    name,
    rating,
    delivery,
    category,
    deliveryTime,
    logoImg
}: Props) => {
    const currentStyle = useMemo(() => ({
        background: `url(${coverImg}) 50%`,
        backgroundSize: '100%'
    }), [ coverImg ]);

    return (
        <div className={cn('restaurant-box')}>
            <div
                style={currentStyle}
                className={cn('restaurant-box__img')}
            >
                <span className={cn('restaurant-box__box-logo')}>
                    <img className={cn('restaurant-box__logo-img')} src={logoImg} alt={name}/>
                </span>
            </div>
            <div className={cn('restaurant-box__info')}>
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
});
