import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

export function UsersListItem({ user }) {
const [doRemoveUser, isLoading, error] = useThunk(removeUser);

const handleClick = () => {
    doRemoveUser(user);
}

// <> is an unopinionated element unlike div. So parent classnames still apply to its children without any issues.
const header = <> 
    <Button className='mr-3' loading={isLoading} onClick={handleClick}>
        <GoTrash />
    </Button>
    { error && <div>Error deleting user...</div>}
    { user.name }
</>

return (
    <ExpandablePanel header={header}>
        <AlbumsList user={user} />
    </ExpandablePanel>
    )
}