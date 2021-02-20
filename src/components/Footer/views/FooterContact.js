import React from 'react'
import { TiChevronRight } from "react-icons/ti";
import { withNamespaces } from "react-i18next";

const FooterContact = ({contact,footerLink, t}) => {
    return (
        <div className='footer-col'>
                  <div className="contact-us">
        <div className="footer-title">{t('contactus')}</div>
        <div className="footer-content">
          {
            contact.map(contact => {
              return(
                <div key={contact.id} className='footer-contact' onClick={() =>footerLink(contact.method)}>
                   <span>{contact.icon}</span> {contact.phoneNo}
                </div>
              )
            })
          }
        </div>
      </div>
        </div>
    )
}

export default withNamespaces()(FooterContact)
