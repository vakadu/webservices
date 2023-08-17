import { render } from '@testing-library/react';

import MapIcon from './map-icon';

describe('MapIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MapIcon />);
    expect(baseElement).toBeTruthy();
  });
});
