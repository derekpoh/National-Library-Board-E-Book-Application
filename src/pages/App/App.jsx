import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage from "../LoginPage/LoginPage";
import { getUser } from '../../utilities/users-service';
import LoansPage from "../Loans/LoansPage";
import RecommendedPage from "../Recommended/RecommendedPage";
import FeaturedPage from "../Featured/FeaturedPage";
import GenresPage from "../Genres/GenresPage"
import FavouritesPage from "../Favourites/FavouritesPage"
import HistoryPage from "../History/HistoryPage"
import BookDetails from "../BookDetails/BookDetails";
import UserAccountPage from "../UserAccount/UserAccountPage";
import Preferences from "../Preferences/Preferences";
import Search from "../Search/Search";
import SetReminderPage from "../Loans/SetReminderPage";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import "dayjs/locale/en-gb"
import "./App.css"

export default function App() {
  const [user,setUser] = useState(getUser());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb" >
    <main className="App">
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<HomePage user={user} />}></Route>
        <Route path="/users/login" element={<LoginPage setUser={setUser}/>}></Route>
        <Route path="/users/register" element={<RegisterPage setUser={setUser}/>}></Route>
        <Route path="/users/account" element={<UserAccountPage user={user} />}/>
        <Route path="/users/account/preferences" element={<Preferences user={user} setUser={setUser}/>} />
        <Route path="/users/account/favourites" element={<FavouritesPage user={user}/>} />
        <Route path="/users/account/loans" element={<LoansPage user={user} />} />
        <Route path="/users/account/favourites" element={<FavouritesPage user={user}/>} />
        <Route path="/users/account/history" element={<HistoryPage user={user} />} />
        <Route path="/books/featured" element={<FeaturedPage user={user}/>} />
        <Route path="/books/genres/:genre" element={<GenresPage user={user}/>} />
        <Route path="/books/recommended"  element={<RecommendedPage user={user}  />} />
        <Route path="/books/:id/setreminder" element={<SetReminderPage user={user}/>} />
        <Route path="/books/:id" element={<BookDetails user={user}/>} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </main>
    </LocalizationProvider>
  )
}
