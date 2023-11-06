import { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/esm/Row';
import { AppContainer } from './AppContainer';
import { HelpText } from './HelpText';
import { HelpFaq } from './HelpFaq';

function* nodeIterator(result: XPathResult) {
  let thisNode = result.iterateNext();
  while (thisNode) {
    yield thisNode
    thisNode = result.iterateNext();
  }
}

const SideNav = () => {
  const [nav, setNav] = useState<JSX.Element | null>(null)
  useEffect(() => {
    const items = []
    const iterator = document.evaluate("//*[@class='help tldr']//section", document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null)
    for (const node of nodeIterator(iterator)) {
      const subitems = []
      const iterator2 = document.evaluate(".//h3", node, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null)
      for (const node2 of nodeIterator(iterator2)) {
        subitems.push({
          id: document.evaluate("./@id", node2, null, XPathResult.STRING_TYPE).stringValue,
          name: document.evaluate("./text()", node2, null, XPathResult.STRING_TYPE).stringValue,
        })
      }
      items.push({
        name: document.evaluate(".//h2/text()", node, null, XPathResult.STRING_TYPE).stringValue,
        items: subitems,
      })
    }
    setNav((
      <Nav as='ul' className="flex-column">
        {items.map((e, index) => (
          <Nav.Item key={index} as='li'>
            {e.name}
            {e.items.map((e, index) => (
              <Nav key={index} as='ul' className="flex-column">
                <Nav.Item as='li'>
                  <Nav.Link href={`#${e.id}`}>{e.name}</Nav.Link>
                </Nav.Item>
              </Nav>
            ))}
          </Nav.Item>
        ))}
      </Nav>
    ))
  }, [])
  return nav
}

export const HelpPage = () => {
  const hash = window.location.hash
  useEffect(() => {
    if (!hash) return
    document.querySelector(hash)?.scrollIntoView()
  }, [hash])

  return (
    <AppContainer>
      <Row className='gx-5' style={{ maxWidth: '100%' }}>
        <aside className='col-md-3'>
          <SideNav />
        </aside>
        <div className='tldr col-md-9'>
          <HelpText />
          <HelpFaq />
        </div>
      </Row>
    </AppContainer>
  )
}
