import classNames from 'classnames'
import { MouseEvent } from 'react'
export enum ButtonSize {
  Large = 'large',
  Small = 'small'
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

const Button:React.FC<BaseButtonProps> = (props) => {
  const {
    type,
    disabled,
    size,
    href,
    children
  } = props

  const classes = classNames('btn', {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    'disabled': (type === ButtonType.Link) &&  disabled // a标签 并没有原生的disable属性 所以需要额外加个类
  })

  const handleClick = (e:MouseEvent) => {
    if (disabled) {
      e.preventDefault()
      return
    }
  }

  if (type === ButtonType.Link) {
    return (
      <a
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
        className={classes}
        disabled={disabled}
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