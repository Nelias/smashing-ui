import * as React from "react"
import styled, {css, keyframes} from "styled-components/macro"
import {useDefaults} from "@smashing/theme"
import {SpinnerProps, SpinnerCircleProps} from "./types"

const loadingKeyframes = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`

const loadingCircleKeyframes = keyframes`
  from {
    stroke-dashoffset: 600;
  }
  to {
    stroke-dashoffset: 0;
  }
`
const StyledSvg = styled.svg<SpinnerProps>`
  height: ${_ => _.size}px;
  width: ${_ => _.size}px;
  animation: ${loadingKeyframes} 2s linear infinite;
  fill: "transparent";
`
const StyledSpinner = styled.circle<SpinnerCircleProps>`
  stroke: ${_ => _.color};
  fill: "transparent";
  stroke-dashoffset: 600;
  stroke-dasharray: 300;
  stroke-width: 12;
  stroke-miterlimit: 10;
  stroke-linecap: "round";
  animation: ${loadingCircleKeyframes} 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85)
    infinite;
`

const SpinnerFC: React.FC<SpinnerProps> = ({children, ...props}) => {
  const defaults = useDefaults("spinner", props, {
    size: 54,
    delay: 0,
    color: "red"
  })

  return (
    <StyledSvg
      size={defaults.size}
      delay={defaults.delay}
      x="0px"
      y="0px"
      viewBox="0 0 150 150"
    >
      <StyledSpinner color={defaults.color} cx="75" cy="75" r="60" />
    </StyledSvg>
  )
}

const Spinner = styled(SpinnerFC)``

export {Spinner, SpinnerProps}

declare module "styled-components" {
  export interface SmashingSpinnerDefaults
    extends Partial<{
      spinner?: {
        size: number
      }
    }> {}
}
