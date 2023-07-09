import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useSliderProps from './use-slider-props';

describe('useSliderProps', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useSliderProps());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
