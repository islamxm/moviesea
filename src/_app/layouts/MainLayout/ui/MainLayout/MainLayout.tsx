// 'use client'
import { FC, PropsWithChildren } from 'react'
// import classes from './classes.module.scss'
import { AppHeader } from '@/widgets/app-header'
import { rtkApi } from '@/shared/api/rtkApi'
import { Button } from '@/shared/ui/Button/Button'
// import { InitDataLayout } from '@/_app/layouts/InitDataLayout'
import { headers, cookies } from 'next/headers'

export const MainLayout: FC<PropsWithChildren> = async (props) => {
  // const resetApi = () => rtkApi.util.resetApiState()

  const headersList = await headers();

  return (
    // <InitDataLayout
    //   acceptLanguage={headersList.get('accept-language')}
    //   >
    <div>
      <AppHeader />
      <div>
        {props.children}
      </div>

      {/* --------------------temp-------------------- */}
      {/* <Button onClick={resetApi} className={classes.temp} buttonSize={'extra_sm'}>reset api</Button> */}
    </div>
  )
}