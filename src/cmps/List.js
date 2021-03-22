import { Preview } from './Preview';

function List({ items }) {
    return (
        items.map(item => <Preview item={item} key={item.id} />)
    )
}

export { List }