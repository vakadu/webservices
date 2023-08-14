import { render } from '@testing-library/react';

import DesktopIcon from './desktop-icon';

describe('DesktopIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DesktopIcon />);
    expect(baseElement).toBeTruthy();
  });
});
