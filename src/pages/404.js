import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
      <p>
        Sorry! We could not find what you were looking for!
        <Link to="/">Go home</Link>.
      </p>
  )
}

export default NotFoundPage
