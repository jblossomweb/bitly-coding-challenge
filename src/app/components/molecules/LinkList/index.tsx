import React from 'react';
import { Callout } from 'react-foundation';
import { Link } from 'app/store/BitLinks/types';
import ExternalLink from 'app/components/atoms/ExternalLink';
import * as Style from './style';

export interface Props {
  links: Link[],
  fetching?: boolean,
};

const LinkList: React.FC<Props> = ({
  links,
  fetching,
}) => (
  <Style.Wrapper>
    {links.length ? (
      <Callout>
        {links.map(link => (
          <Style.Link key={link.shortUrl}>
            <Style.Title>
              {link.title || 'Untitled'}
            </Style.Title>
            <Style.LongUrl>
              {link.longUrl}
            </Style.LongUrl>
            <Style.FlexRow>
              <Style.ShortUrl>
                <ExternalLink href={link.shortUrl}>
                  {link.shortUrl}
                </ExternalLink>
              </Style.ShortUrl>
              <Style.Clicks>
                {link.clicks || 0}
                <Style.Icon />
              </Style.Clicks>
            </Style.FlexRow>
          </Style.Link>
        ))}
      </Callout>
    ) : null}
  </Style.Wrapper>
);

export default LinkList;
