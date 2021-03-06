import React, { Component } from 'react';
import { Loading, Overlay } from "../../elements";
import { connect } from "react-redux";
import { StoreTypes } from "../../store/store-types";
import { getLoadingStatusSelector } from "../../store/loading/selectors";

interface Props {
    loading: boolean
}

class LoadingRootContainer extends Component<Props> {
    render() {
        return this.props.loading
            ? (
                <Overlay>
                    <Loading pan />
                </Overlay>
            )
            : null
    }
}

const mapStateToProps = (store: StoreTypes) => ({
    loading: getLoadingStatusSelector(store)
})

export const LoadingRoot = connect(mapStateToProps)(LoadingRootContainer);
