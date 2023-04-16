import classNames from 'classnames'
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  href?: string;
  children?: React.ReactNode;
}

type NativeButtonProps = {onClick?: React.MouseEventHandler<HTMLButtonElement>} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>;
type AnchorButtonProps = {onClick?: React.MouseEventHandler<HTMLAnchorElement>} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>, 'type' | 'onClick'>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button:React.FC<ButtonProps> = (props) => {
  const {
    type,
    className,
    disabled,
    size,
    href,
    children,
    ...restProps
  } = props

  const classes = classNames('ribbon-btn', className, {
    [`ribbon-btn-${type}`]: type,
    [`ribbon-btn-${size}`]: size,
    'ribbon-btn-link-disabled': (type === ButtonType.Link) &&  disabled // a标签 并没有原生的disable属性 所以需要额外加个类
  })

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const { onClick } = props
    if (disabled) {
      e.preventDefault()
      return
    }

    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e)
  }

  if (type === ButtonType.Link) {
    return (
      <a
        {...restProps}
        className={classes}
        href={href}
        onClick={handleClick}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        {...restProps}
        className={classes}
        disabled={disabled}
        onClick={handleClick}
      >
        {children}
      </button>
    )
  }


}


Button.defaultProps = {
  disabled: false,
  type: ButtonType.Default
}

export default Button