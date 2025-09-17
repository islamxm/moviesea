import { SeriesList } from "@/entites/series/model";
import { SeriesPage as SeriesPageComponent } from "@/pages/seriesPage";
import { FC } from "react";
import { createStore } from "@/_app/providers/StoreProvider";
import { acceptLanguageParser } from "@/shared/lib/acceptLanguageParser";
import { headers } from "next/headers";
import { headerKeys } from "@/shared/consts/headers";

const SeriesPage: FC<{ searchParams?: { category?: SeriesList } }> = async ({ searchParams }) => {
  const store = createStore()
  const headersList = await headers()
  const params = await searchParams
  const seriesListType = params?.category
  const acceptLanguage = acceptLanguageParser(headersList.get(headerKeys.ACCEPT_LANGUAGE))

  return (
    <SeriesPageComponent
      initialSeriesListType={seriesListType}
      store={store}
      acceptLanguage={acceptLanguage}
    />
  )
}

export default SeriesPage