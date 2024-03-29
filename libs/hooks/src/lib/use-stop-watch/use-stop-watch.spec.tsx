import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useStopWatch from './use-stop-watch';

describe('useStopWatch', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useStopWatch());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
