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
              <h3>New Feature! </h3>
              <p>See which card sizes are included in a project with new card size icons. Need a few more minicards to meet the MPC project size? Use the Sizes filter to show only projects with minicards.</p>
            </div>
            <div className={'alert-item'}>
              <h3>Recently added: </h3>
              <p>Souls of Darkness • Arkham’s Finest • Jenny’s Choice • The Blood of Drakul • Code Red at Bleeding Heart •  Sands of Memphis</p>
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
