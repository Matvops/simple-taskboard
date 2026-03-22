import type React from "react"
import { Link } from "react-router"

type RouterLinkType = {
  path: string,
  children: string
} & React.ComponentProps<'a'>

export const RouterLink = ({ path, children, ...props}: RouterLinkType) => {

  return <Link to={path} {...props}> {children} </Link>
}