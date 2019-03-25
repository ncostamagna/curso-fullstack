import HomeComponent from './components/Home.vue';
import ProductsComponent from './components/Products.vue';
import ProfileComponent from './components/Profile.vue';

export const rutas = [
  {path: '/', component: HomeComponent},
  {path: '/products', component: ProductsComponent},
  {path: '/profile', component: ProfileComponent}
]
