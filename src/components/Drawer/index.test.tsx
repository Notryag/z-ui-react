import { fireEvent, render, screen } from '@testing-library/react';
import Drawer from './index';

describe('Drawer', () => {
  it('only closes when the parent changes visible', () => {
    const handleClose = vi.fn();
    const { rerender } = render(
      <Drawer visible onClose={handleClose}>
        <div>panel body</div>
      </Drawer>,
    );

    fireEvent.click(screen.getByText('X'));

    expect(handleClose).toHaveBeenCalledTimes(1);
    expect(screen.getByText('panel body')).toBeInTheDocument();

    rerender(
      <Drawer visible={false} onClose={handleClose}>
        <div>panel body</div>
      </Drawer>,
    );

    const wrap = document.querySelector('.z-drawer-wrap');
    expect(wrap).toHaveStyle({ width: '0' });
  });

  it('drops children after closing when destroyOnClose is enabled', () => {
    const { rerender } = render(
      <Drawer visible destroyOnClose>
        <div>destroy me</div>
      </Drawer>,
    );

    expect(screen.getByText('destroy me')).toBeInTheDocument();

    rerender(
      <Drawer visible={false} destroyOnClose>
        <div>destroy me</div>
      </Drawer>,
    );

    expect(screen.queryByText('destroy me')).not.toBeInTheDocument();
  });
});
