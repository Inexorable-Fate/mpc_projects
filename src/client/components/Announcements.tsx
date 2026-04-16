import { Dispatch, SetStateAction } from 'react'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/esm/Container'
import { ChangelogIcon, InfoIcon } from './Icons'

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
              <p>Chapter 1 Core Encounters • Ultimatiums, Boons & Refractions from FAQ 2.5 • Taboo 2.5</p>
            </div>
            <div className={'alert-item'}>
              <h3>Newly updated: </h3>
              <p>Now that we have printable chapter 1 core encounters, we’ve added the necessary sets to any campaigns that require them, so people without the original core can still play those scenarios! A few campaigns require non-core chapter 1 sets however, so make sure if there’s an info icon <InfoIcon /> to check it to see any other requirements.</p>
            </div>
            <div className={'alert-item'}>
              <h3>Tip: </h3>
              <p>Want to get involved? Proofreaders, folks willing to do QA, React coders, people with Strange Eons and/or Regex experience, and general nitpickers are all welcome! Hit us up on the <a href='https://discord.com/channels/225349059689447425/1192620482168635523'>MythosBusters Discord</a> or in the <a href='https://github.com/Inexorable-Fate/mpc_projects/issues'>issue queue</a>.</p>
            </div>
            <div className={'alert-item'}>
              <h3>Project errata: </h3>
              <p>Click the changelog icons <ChangelogIcon/> to see if you need to reprint errata for Taboo 2.5, Alice in Wonderland, Ages Unwound,Bloodborne, Parallel Lola, When the World Screamed, Night of Vespers, or any other projects.</p>
            </div>
          </div>
        </Alert>
      </Container>
    )
  }
  return;
}
