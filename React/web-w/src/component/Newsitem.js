import Post from "./Post";
import Sidepost from "./Sidepost";
import Searchbar from "./Searchbar";
import { useState } from "react";
export default function Newsitems() {
    let [searchkey, setSearchKey] = useState(null)
    function onChangehandler(value) {
        setSearchKey(value)
        console.log("onchangehandler is invoke", value)

    }
    return (
        <main className="container">
            <div className="row g-4">
                <Searchbar onSearch={onChangehandler}></Searchbar>
                <Post search={searchkey}></Post>
                <Sidepost></Sidepost>
            </div>

        </main>
    );
}


