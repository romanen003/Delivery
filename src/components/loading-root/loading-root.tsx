import React, {Component, Fragment} from 'react';
import {Loading, Overlay} from "../../elements";
import {connect} from "react-redux";
import {StoreTypes} from "../../store/store-types";

interface Props {
    loading?: boolean
}

@(connect((state: StoreTypes) => ({
    loading: state.loading.loading
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
