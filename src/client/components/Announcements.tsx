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
              <p>Taboo 2.4 • Forget Me Not • Investigator Minicards with Arkham Files alt art.</p>
            </div>
            <div className={'alert-item'}>
              <h3>Tip: </h3>
              <p>Did you know Inexorable Fate is open source? Want to get involved? Hit us up on the <a href='https://discord.com/channels/225349059689447425/1192620482168635523'>MythosBusters Discord</a> or in the <a href='https://github.com/Inexorable-Fate/mpc_projects/issues'>issue queue</a>.</p>
            </div>
            <div className={'alert-item'}>
              <h3>Project errata: </h3>
              <p>Click the changelog icons <ChangelogIcon/> to see if you need to reprint errata for The Colour Out of Oz or any other projects.</p>
            </div>
          </div>
        </Alert>
      </Container>
    )
  }
  return;
}
