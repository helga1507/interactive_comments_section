import { CommentText } from './styled';

export interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
    text: string;
    replyingTo?: string;
    setText: (text: string) => void;
}

export const TextArea = ({ text, replyingTo, setText, ...rest }: TextAreaProps) => {
    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let value = e.target.value;

        if (replyingTo) {
            if (!value) {
                value = `@${replyingTo} `;
            } else if (!value.match(`^@${replyingTo} `)) {
                return;
            }
        }

        setText(value);
    };

    return <CommentText value={text} onChange={handleChangeText} {...rest} />;
};
