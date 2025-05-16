import axios from "axios";
// létrehozunk egy új Axios példányt a create metódus segítségével.
export default axios.create({
    // alap backend api kiszolgáló elérési útjának beállítása
    baseURL: "http://localhost:8000",
    withCredentials: false,
});
