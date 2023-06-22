import { render } from '@testing-library/react';

import PortfolioHeader from './portfolio-header';

describe('PortfolioHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PortfolioHeader />);
    expect(baseElement).toBeTruthy();
  });
});
