import React from 'react'
import { shallow } from 'enzyme'
import Search from './Search'

function setup() {
  const props = {
    onChange: jest.fn()
  }

  const enzymeWrapper = shallow(<Search {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Search', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('form').hasClass('form')).toBe(true)

      const textfieldProps = enzymeWrapper.find('TextField').props()
      expect(textfieldProps.name).toEqual('input')
      expect(textfieldProps.hintText).toEqual('What movie are you looking for?')
    })

    // it('should call onChange if length of input is greater than 0', () => {
    //   const { enzymeWrapper, props } = setup()
    //   const button = enzymeWrapper.find('IconButton').props()
    //   button.onClick()
    //   expect(props.onChange.mock.calls.length).toBe(0)
    //   button.onClick()
    //   expect(props.onChange.mock.calls.length).toBe(1)
    // })
  })
})
