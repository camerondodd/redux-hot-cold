import React from 'react';
import {shallow, mount} from 'enzyme';
import {GuessForm} from './guess-form';
import {makeGuess} from '../actions';

describe('<GuessForm />', () => {
    it('Renders... something', () => {
        shallow(<GuessForm />);
    });
    it('Dispatch check', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        const value = '10';
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
    });
});