import { render } from '@testing-library/react';

import DivideIcon from './divide-icon';

describe('DivideIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DivideIcon />);
    expect(baseElement).toBeTruthy();
  });
});
