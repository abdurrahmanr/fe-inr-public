import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layout
import MainLayout from './layouts/MainLayout';
import BreadcrumbLayout from './layouts/BreadcrumbLayout';

// main pages
import Beranda from './pages/beranda';
import Anggota from './pages/anggota';
import Blog from './pages/blog';
import Kegiatan from './pages/kegiatan';
import Agenda from './pages/agenda';
import Karya from './pages/karya';

// profil page
import Sejarah from './pages/profil/Sejarah';
import VisiMisi from './pages/profil/VisiMisi';
import Tentang from './pages/profil/Tentang';
import Struktur from './pages/profil/Struktur';
import NotFound from './pages/404';
import BlogDetail from './pages/blog/BlogDetail';
import ProfileLayout from './layouts/ProfileLayout';
import KegiatanDetail from './pages/kegiatan/KegiatanDetail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Beranda />} />
      <Route element={<BreadcrumbLayout />}>
        <Route path="anggota" element={<Anggota />} />
        <Route path="blog">
          <Route index element={<Blog />} />
          <Route path=':id' element={<BlogDetail />} />
        </Route>
        <Route path="kegiatan">
          <Route index element={<Kegiatan />} />
          <Route path=':id' element={<KegiatanDetail />} />
        </Route>
        <Route path="karya" element={<Karya />} />
        <Route path="Agenda" element={<Agenda />} />
        <Route path="profile" element={<ProfileLayout />}>
          <Route path='sejarah' element={<Sejarah />}></Route>
          <Route path='visi-misi' element={<VisiMisi />}></Route>
          <Route path='tentang' element={<Tentang />}></Route>
          <Route path='struktur-organisasi' element={<Struktur />}></Route>
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App