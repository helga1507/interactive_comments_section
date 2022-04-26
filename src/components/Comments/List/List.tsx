import { Item } from '../Item';

import { Ul } from './styled';

interface ListProps {
    ids: number[];
    children?: any;
}

export const List = ({ ids, children }: ListProps) => {
    return (
        <Ul>
            { children }
            { ids.map((id => <Item id={ id } key={ id } />)) }
        </Ul>
    )
};