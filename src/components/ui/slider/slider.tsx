import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components'
import * as RadixSlider from '@radix-ui/react-slider'
import clsx from 'clsx'

import s from './slider.module.scss'

export type SliderProps = { label: string } & ComponentPropsWithoutRef<typeof RadixSlider.Root>

export const Slider = forwardRef<ElementRef<typeof RadixSlider.Root>, SliderProps>(
  ({ className, label, ...restProps }, ref): JSX.Element => {
    const sliderClasses = clsx(s.root, className)

    return (
      <div>
        {label && (
          <Typography as={'label'} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={s.container}>
          <Typography as={'div'} className={s.valueWrapper} variant={'body1'}>
            {restProps?.value?.[0]}
          </Typography>
          <RadixSlider.Root className={sliderClasses} ref={ref} {...restProps}>
            <RadixSlider.Track className={s.track}>
              <RadixSlider.Range className={s.range} />
            </RadixSlider.Track>
            <RadixSlider.Thumb aria-label={'Value min'} className={s.thumb} />
            <RadixSlider.Thumb aria-label={'Value max'} className={s.thumb} />
          </RadixSlider.Root>
          <Typography as={'div'} className={s.valueWrapper} variant={'body1'}>
            {restProps?.value?.[1]}
          </Typography>
        </div>
      </div>
    )
  }
)
