import React from 'react';
import {shallow} from 'enzyme';
import {Header} from './header';
import InfoModal from './info-modal';

describe('<Header />', () => {
    it('Renders... something', () => {
        shallow(<Header />);
    });
    it('Hide check', () => {
        const wrapper = shallow(<Header showInfoModal={false} />);
        expect(wrapper.find(InfoModal).exists()).toEqual(false);
    });
    it('Reveal check', () => {
        const wrapper = shallow(<Header showInfoModal={true} />);
        expect(wrapper.find(InfoModal).exists()).toEqual(true);
    });
});