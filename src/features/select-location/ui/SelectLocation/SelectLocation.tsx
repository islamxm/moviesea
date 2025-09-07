import { FC } from 'react'
import classes from './classes.module.scss'
import { Select } from '@headlessui/react'

type Props = {

}

export const SelectLocation:FC<any> = () => {
  
  return (
    <>
      <Select>
        <option value="a">first</option>
        <option value="b">second</option>
      </Select>
    </>
  )
}