import React from 'react';
import {shallow} from 'enzyme';
import {GuessCount} from './guess-count';

describe('<GuessCount />', () => {
    it('Renders... something', () => {
        shallow(<GuessCount />);
    });
    it('Displays guess count', () => {
        const value = 5;
        const wrapper = shallow(<GuessCount count={value} />);
        expect(wrapper.text()).toEqual(`Guess #${value}!`);
    });
});