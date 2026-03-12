import { fireEvent, render, screen } from '@testing-library/react';
import Tag from './index';

describe('Tag', () => {
  it('removes itself declaratively when closed', () => {
    const handleClose = vi.fn();

    render(
      <Tag closable onClose={handleClose}>
        label
      </Tag>,
    );

    fireEvent.click(screen.getByText('x'));

    expect(handleClose).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('label')).not.toBeInTheDocument();
  });
});
