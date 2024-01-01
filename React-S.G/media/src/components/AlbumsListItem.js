import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import PhotoList from "./PhotosList";

function AlbumsListItem({ album }) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
        console.log(album);
    }

    const header = (
        <>
            <Button className='mr-2' loading={results.isLoading} onClick={handleRemoveAlbum} ><GoTrash /></Button>
            {album.title}
        </>
    )

    return (
        <ExpandablePanel key={album.id} header={header}>
            <PhotoList album={album} />
        </ExpandablePanel>
    )
}

export default AlbumsListItem;
