import { render } from '@testing-library/react';

import DarkIcon from './dark-icon';

describe('DarkIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DarkIcon />);
    expect(baseElement).toBeTruthy();
  });
});
