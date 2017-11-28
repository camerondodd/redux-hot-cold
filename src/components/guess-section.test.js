import React from 'react';
import {shallow} from 'enzyme';
import {GuessSection} from './guess-section';

describe('<GuessSection />', () => {
    it('Renders... something', () => {
        shallow(<GuessSection />);
    });
    it('Feedback check', () => {
        const feedback = "The following tone is only a test";
        const wrapper = shallow(<GuessSection feedback={feedback} />);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
});