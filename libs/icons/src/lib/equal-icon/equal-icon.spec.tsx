import { render } from '@testing-library/react';

import EqualIcon from './equal-icon';

describe('EqualIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EqualIcon />);
    expect(baseElement).toBeTruthy();
  });
});
