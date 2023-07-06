import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useFirebaseLogEvent from './use-firebase-log-event';

describe('useFirebaseLogEvent', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useFirebaseLogEvent());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
