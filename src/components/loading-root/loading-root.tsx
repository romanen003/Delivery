import React, {Component, Fragment} from 'react';
import {Loading, Overlay} from "../../elements";
import {connect} from "react-redux";
import {StoreTypes} from "../../store/store-types";
import {getLoadingStatus} from "../../store/loading/selectors";

interface Props {
    loading?: boolean
}

@(connect((store: StoreTypes) => ({
    loading: getLoadingStatus(store)
})) as any)
export class LoadingRoot extends Component<Props> {
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
