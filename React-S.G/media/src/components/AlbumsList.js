import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from './Skeleton';
import Button from './Button';
import AlbumsListItem from "./AlbumsListItem";

export default function AlbumsList({ user }) {
    const { data, error, isFetching } = useFetchAlbumsQuery(user); // To see all the hook returns do: const results = useFetchAlbumsQuery(user) then console.log(results).
    const [addAlbum, results] = useAddAlbumMutation();

    const handleAddAlbum = () => {
        addAlbum(user);
    }

    let content;
    if (isFetching) { // We are using isFetching instead of isLoading bse isLoading is to true the first time you make the request, while isFetching is set to true every time you make a request
        content = <Skeleton className='h-10 w-full' times={3} />
    } else if (error) {
        content = <div>Error loading albums.</div>
    } else {
        content = data.map(album => {
            console.log(album);
            return <AlbumsListItem key={album.id} album={album} />
        })
    }

    return <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Albums for {user.name}</h3>
            <Button onClick={handleAddAlbum} loading={results.isFetching}>
                + Add Album
            </Button>
        </div>
        <div>{content}</div>
    </div>
}