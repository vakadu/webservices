import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useCalculator from './use-calculator';

describe('useCalculator', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useCalculator());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
