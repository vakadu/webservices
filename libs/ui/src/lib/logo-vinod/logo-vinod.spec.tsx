import { render } from '@testing-library/react';

import LogoVinod from './logo-vinod';

describe('LogoVinod', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogoVinod />);
    expect(baseElement).toBeTruthy();
  });
});
