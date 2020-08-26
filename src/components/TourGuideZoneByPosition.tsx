import * as React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { Shape } from '../types'
import { TourGuideZone } from './TourGuideZone'

interface TourGuideZoneByPositionProps {
  zone: number
  isTourGuide?: boolean
  top?: number | string
  left?: number | string
  right?: number | string
  bottom?: number | string
  width?: number | string
  height?: number | string
  shape?: Shape
  containerStyle?: StyleProp<ViewStyle>
  keepTooltipPosition?: boolean
  tooltipBottomOffset?: number
}

export const TourGuideZoneByPosition = ({
  isTourGuide,
  zone,
  width,
  height,
  top,
  left,
  right,
  bottom,
  shape,
  containerStyle,
  keepTooltipPosition,
  tooltipBottomOffset,
}: TourGuideZoneByPositionProps) => {
  if (!isTourGuide) {
    return null
  }

  return (
    <View
      pointerEvents='none'
      style={[StyleSheet.absoluteFillObject, containerStyle]}
    >
      <TourGuideZone
        isTourGuide
        {...{ zone, shape, keepTooltipPosition, tooltipBottomOffset }}
        style={{
          height,
          width,
          top,
          right,
          bottom,
          left,
        }}
      />
    </View>
  )
}