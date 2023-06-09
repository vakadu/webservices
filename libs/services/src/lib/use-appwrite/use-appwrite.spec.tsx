import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useAppwrite from './use-appwrite';

describe('useAppwrite', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useAppwrite());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
