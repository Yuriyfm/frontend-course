import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type FC, type ButtonHTMLAttributes } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props

  return (
    <button className={classNames(cls.Button, {}, [className || '', cls[theme || '']])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
