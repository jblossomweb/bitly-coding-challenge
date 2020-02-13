import React from 'react';
import { Callout } from 'react-foundation';
import ReactTooltip from 'react-tooltip';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'app/store/BitLinks/types';
import ExternalLink from 'app/components/atoms/ExternalLink';
import * as Style from './style';

export interface Props {
  links: Link[],
};

const LinkList: React.FC<Props> = ({
  links,
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
                <CopyToClipboard
                  text={link.shortUrl}
                  data-tip="copy"
                  data-for="tooltipCopy"
                >
                  <Style.ClipboardIcon />
                </CopyToClipboard>
                <ReactTooltip
                  id="tooltipCopy"
                  aria-haspopup="true"
                  effect="solid"
                  place="right"
                />
              </Style.ShortUrl>
              <Style.Clicks>
                {link.clicks || 0}
                <Style.ClicksIcon />
              </Style.Clicks>
            </Style.FlexRow>
          </Style.Link>
        ))}
      </Callout>
    ) : null}
  </Style.Wrapper>
)

export default LinkList;
