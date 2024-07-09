import { render } from '@testing-library/react';

import CallIcon from './call-icon';

describe('CallIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CallIcon />);
    expect(baseElement).toBeTruthy();
  });
});
