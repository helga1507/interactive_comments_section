import iconDelete from 'images/icon-delete.svg';
import { Button } from 'components/Button';

export const Delete = (props: React.ComponentPropsWithoutRef<'button'>) => {
    return (
        <Button actionType="destructive" variant="secondary" iconSrc={iconDelete} {...props}>
            Delete
        </Button>
    );
};
