import iconDelete from 'images/icon-delete.svg';
import iconEdit from 'images/icon-edit.svg';
import iconReply from 'images/icon-reply.svg';
import { Button } from 'components/Button';

interface ControlsProps {
    isOwnerComment: boolean;
    onReply: () => void;
    onDelete: () => void;
    onEdit: () => void;
}

export const Controls = ({ isOwnerComment, onReply, onDelete, onEdit }: ControlsProps) => {
    if (!isOwnerComment) {
        return (
            <Button variant="secondary" iconSrc={iconReply} onClick={onReply}>
                Reply
            </Button>
        );
    }

    return (
        <div>
            <Button actionType="destructive" variant="secondary" iconSrc={iconDelete} onClick={onDelete}>
                Delete
            </Button>
            <Button variant="secondary" iconSrc={iconEdit} onClick={onEdit}>
                Edit
            </Button>
        </div>
    );
};
