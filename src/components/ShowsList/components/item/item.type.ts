import { Show } from '@store/shows/shows.type';
import { Props as ShowsListProps } from '../../showsList.type';

export type Props = Pick<Show, 'id' | 'cover'> & Pick<ShowsListProps, 'height' | 'width'>;

export type CoverProps = Pick<Props, 'cover' | 'width' | 'height'>;
