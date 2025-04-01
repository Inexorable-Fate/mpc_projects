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
              <p>Snakes and Ladders • The Matter of Britain • Souls of Darkness</p>
            </div>
            <div className={'alert-item'}>
              <h3>Tip: </h3>
              <p>Want to always see the most recent additions at the top? Choose “Newest” from the Sort dropdown.</p>
            </div>
            <div className={'alert-item'}>
              <h3>Project changes: </h3>
              <p>Click the changelog icon <ChangelogIcon/> to see if you need to reprint any cards from the following: Bloodborne • The Beard’s standalones • Taboo</p>
            </div>
          </div>
        </Alert>
      </Container>
    )
  }
  return;
}
