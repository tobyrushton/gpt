import { FC, ReactElement } from "react"

/**
 * @description Resolve an async component
 * @generic Component props
 * @param {function} Component
 * @param {*} props
 * @returns {Promise<()=>JSX.Element>}
*/
export const resolvedComponent = async <TProps = object>(Component: (props?: TProps) => Promise<ReactElement>, props?:TProps):Promise<FC> => {
    const ComponentResolved = await Component(props)
    return () => ComponentResolved
  }