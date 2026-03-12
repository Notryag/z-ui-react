import { fireEvent, render, screen } from '@testing-library/react';
import Input from './index';

describe('Input', () => {
  it('keeps defaultValue uncontrolled when value is not provided', () => {
    render(<Input defaultValue="hello" />);

    const input = screen.getByPlaceholderText('请输入内容') as HTMLInputElement;
    expect(input.value).toBe('hello');

    fireEvent.change(input, { target: { value: 'world' } });

    expect(input.value).toBe('world');
  });

  it('passes the current input value to onIconClick', () => {
    const handleIconClick = vi.fn();

    render(<Input icon={<span>go</span>} onIconClick={handleIconClick} />);

    const input = screen.getByPlaceholderText('请输入内容');
    fireEvent.change(input, { target: { value: 'typed text' } });
    fireEvent.click(screen.getByText('go'));

    expect(handleIconClick).toHaveBeenCalledWith('typed text');
  });
});
