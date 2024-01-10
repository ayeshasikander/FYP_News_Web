
export default function Searchbar(props) {
   let onChangehandler=props.onSearch
    return (
        <form role="search">
            <input onChange={(event)=>{onChangehandler(event.target.value)}} className="form-control mt-1" type="search" placeholder="Search" aria-label="Search" />
        </form>
    )
}