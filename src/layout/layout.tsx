import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = forwardRef<
  ElementRef<'div'>,
  Omit<ComponentPropsWithoutRef<'div'>, 'children'>
>(({ ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
})
