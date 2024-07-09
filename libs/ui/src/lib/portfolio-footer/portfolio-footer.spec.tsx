import { render } from '@testing-library/react';

import PortfolioFooter from './portfolio-footer';

describe('PortfolioFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PortfolioFooter />);
    expect(baseElement).toBeTruthy();
  });
});
