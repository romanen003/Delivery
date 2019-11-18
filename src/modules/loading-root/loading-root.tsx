import React, {Component, Fragment} from 'react';
import {Loading, Overlay} from "../../elements";
import {connect} from "react-redux";
import {StoreTypes} from "../../store/store-types";
import {getLoadingStatusSelector} from "../../store/loading/selectors";

interface Props {
    loading?: boolean
}

class LoadingRootContainer extends Component<Props> {
    render() {
        const {loading} = this.props;

        return (
            <Fragment>
                {
                    loading &&
                    <div>
                        <Overlay>
                            <Loading pan />
                        </Overlay>
                    </div>
                }
            </Fragment>
        );
    }
}

export const LoadingRoot = connect((store: StoreTypes) => ({
    loading: getLoadingStatusSelector(store)
}))(LoadingRootContainer);