import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useScrollTo from './scroll-to';

describe('useScrollTo', () => {
	it('should render successfully', () => {
		const { result } = renderHook(() => useScrollTo());

		expect(result.current.count).toBe(0);

		act(() => {
			result.current.increment();
		});

		expect(result.current.count).toBe(1);
	});
});
