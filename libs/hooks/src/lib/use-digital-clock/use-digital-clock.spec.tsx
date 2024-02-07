import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useDigitalClock from './use-digital-clock';

describe('useDigitalClock', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useDigitalClock());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
