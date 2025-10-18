import { Dispatch, SetStateAction } from 'react'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/esm/Container'
import { ChangelogIcon } from './Icons'

interface AlertProps {
  displayAnnouncements: boolean,
  showAnnouncements: boolean,
  setShowAnnouncements: Dispatch<SetStateAction<boolean>>
}
export const Announcements = ({ displayAnnouncements, showAnnouncements, setShowAnnouncements }: AlertProps) => {

  if (showAnnouncements && displayAnnouncements) {
    return (
      <Container>
        <Alert className='announcements' onClose={() => setShowAnnouncements(false)} dismissible>
          <h2>What’s New</h2>
          <div className={'alert-content'}>
            <div className={'alert-item'}>
              <h3>Recently added: </h3>
              <p>Night of Vespers campaign • Arkham’s Finest series 2 • And Then There Were None • When the World Screamed, a new epic multiplayer and single group scenario from The Beard, world premiered at Arkham Con ’25.</p>
            </div>
            <div className={'alert-item'}>
              <h3>Newly updated: </h3>
              <p>The Inexorable Fate team has been re-exporting older campaigns with better fonts and formatting, and card numbers if they were not previously numbered. Up first: Ages Unwound • Alice in Wonderland • Arkham Incidents.</p>
            </div>
            <div className={'alert-item'}>
              <h3>Tip: </h3>
              <p>Did you know Inexorable Fate is open source? Want to get involved? Hit us up on the <a href='https://discord.com/channels/225349059689447425/1192620482168635523'>MythosBusters Discord</a> or in the <a href='https://github.com/Inexorable-Fate/mpc_projects/issues'>issue queue</a>.</p>
            </div>
            <div className={'alert-item'}>
              <h3>Project errata: </h3>
              <p>Click the changelog icons <ChangelogIcon/> to see if you need to reprint errata for Ages Unwound, Parallel Monterey Jack’s scenario, The Colour Out of Oz, or any other projects.</p>
            </div>
          </div>
        </Alert>
      </Container>
    )
  }
  return;
}
