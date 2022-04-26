
import { CommentText } from './styled';

export interface TextAreaProps extends React.ComponentPropsWithoutRef<"textarea"> {
    text: string;
    replyingTo?: string;
    setText: (text: string) => void;
}

export const TextArea = ({ text, replyingTo, setText, ...rest }: TextAreaProps) => {
    const handleChangeText = ( {target: { value }}: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (replyingTo && !value.match(`^@${replyingTo} `)) {
            return;
        }

        setText(value);
    };

    return (
        <CommentText value={ text } onChange={ handleChangeText } {...rest} />
    )
};