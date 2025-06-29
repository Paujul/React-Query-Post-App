import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function cn(...classes: any[]) {
  return twMerge(clsx(...classes))
}
