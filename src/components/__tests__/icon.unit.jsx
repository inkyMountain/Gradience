import Icon from '../Icon/Icon';
import * as renderer from 'react-test-renderer';
import React from 'react';
import {mount} from 'enzyme';

describe('components PageIcon', () => {
  it('PageIcon UI is correct', () => {
    const iconJson = renderer.create(<Icon name={'wechat'}/>).toJSON();
    expect(iconJson).toMatchSnapshot();
  });

  it('can be clicked', function () {
    const fn = jest.fn();
    const icon = mount(<Icon name={'wechat'} onClick={fn}/>);
    icon.simulate('click');
    expect(fn).toBeCalled();
  });
});
