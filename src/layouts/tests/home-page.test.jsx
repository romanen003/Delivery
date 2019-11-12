import React from "react";
import {Home} from '../home-page';
import { shallow } from 'enzyme'

describe('Home',() => {
    const HeaderView = () => (<div>HeaderView</div>);
    const ContentView = () => (<div>ContentView</div>);
    const Component = shallow(
        <Home
            headerView={<HeaderView />}
            contentView={<ContentView />}
        />
    );

    it('should render Home Component',  () => {
        expect(Component.length).toEqual(1)
    });
});