import iconReply from 'images/icon-reply.svg';
import { Button } from 'components/Button';

export const Reply = (props: React.ComponentPropsWithoutRef<'button'>) => {
    return (
        <Button variant="secondary" iconSrc={iconReply} {...props}>
            Reply
        </Button>
    );
};
