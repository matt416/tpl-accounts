import { useRouter } from "next/router"

const splitRoute = (array) => array.split('/').filter(item=>item)

export const useMatchPartialRoute = (href, i1, i2) => {
  const router = useRouter()

  i2 = i2 ?? i1

  return splitRoute(router.asPath)[i1] === splitRoute(href)[i2]
}