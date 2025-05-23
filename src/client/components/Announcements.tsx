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
              <p>Night of Vespers Investigator Expansion • Ordinary Citizens • Parallel Jenny Mix & Match with all original art (h/t Flint Maverick) or all Aconyte art.</p>
            </div>
            <div className={'alert-item'}>
              <h3>Tip: </h3>
              <p>Did you know Inexorable Fate is open source? Want to get involved? Hit us up on the <a href='https://discord.com/channels/225349059689447425/1192620482168635523'>MythosBusters Discord</a> or in the <a href='https://github.com/Inexorable-Fate/mpc_projects/issues'>issue queue</a>.</p>
            </div>
            <div className={'alert-item'}>
              <h3>Project errata: </h3>
              <p>Click the changelog icon <ChangelogIcon/> on the Taboo project to see if you need to reprint the Dark Prophecy Taboo or Campsite from Darkham Horror.</p>
            </div>
          </div>
        </Alert>
      </Container>
    )
  }
  return;
}
