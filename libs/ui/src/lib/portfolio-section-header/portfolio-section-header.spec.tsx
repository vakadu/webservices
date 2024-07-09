import { render } from '@testing-library/react';

import PortfolioSectionHeader from './portfolio-section-header';

describe('PortfolioSectionHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PortfolioSectionHeader />);
    expect(baseElement).toBeTruthy();
  });
});
