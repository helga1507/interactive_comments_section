import iconEdit from 'images/icon-edit.svg';
import { Button } from 'components/Button';

interface EditProps {
    setIsEditing: (isEditing: boolean) => void;
}

export const Edit = ({ setIsEditing }: EditProps) => {
    const handleClick = () => setIsEditing(true);

    return (
        <Button variant="secondary" iconSrc={iconEdit} onClick={handleClick}>
            Edit
        </Button>
    );
};
