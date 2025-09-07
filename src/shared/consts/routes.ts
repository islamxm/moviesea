export const routes = {
  homePage: '/',
  moviesPage: '/movies',
  tvShowsPage: '/tv-shows',
  aboutPage: '/about',
  loginPage: '/auth/login'
}

export const getRoute = {
  getHomePage: () => '/',

  getMoviesPage: () => '/movies',
  getMoviePage: (id: number) => `/movies/${id}`,

  getTvShowsPage: () => '/tv-shows',
  getTvShowPage: (id: number) => `tv-shows/${id}`,

  getAboutPage: () => '/about',
  getLoginPage: () => '/auth/login',
}


