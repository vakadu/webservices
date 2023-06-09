import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useServer from './use-server';

describe('useServer', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useServer());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
