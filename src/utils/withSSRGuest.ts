import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { destroyCookie, parseCookies } from 'nookies';

export function withSSRAuth(fn: GetServerSideProps)  {
  return async (ctx: GetServerSidePropsContext) => {
    const cookies = parseCookies(ctx)
    const token = cookies['token']
    if (!token) {
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false
        }
      }
    }

    try {
      return await fn(ctx)
    } catch (err) {
      destroyCookie(ctx, 'token')
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false
        }
      }
  }
    

  }
}