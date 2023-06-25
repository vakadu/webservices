import { render } from '@testing-library/react';

import LightIcon from './light-icon';

describe('LightIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LightIcon />);
    expect(baseElement).toBeTruthy();
  });
});
