import "./src/styles/global.scss"

import React from "react"
import { AnimatePresence } from "framer-motion"

const transitionDelay = 400

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
)

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  }
  return false
}
