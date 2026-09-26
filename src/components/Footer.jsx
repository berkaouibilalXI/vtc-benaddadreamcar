import { Icon } from './IconSprite';
import TopoMotif from './TopoMotif';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, config, contacts } = useLanguage();

  return (
    <footer className="footer" id="contact">
      <TopoMotif />
      <div className="container footer-inner">
        <div className="footer-brand">
          BENADDA <span>DREAMCAR</span>
        </div>
        <p className="footer-tagline">{t('footer.tagline')}</p>
        <p className="footer-tagline2">{t('footer.tagline2')}</p>

        <div className="footer-contacts">
          <a className="footer-contact" href={contacts.waLink} target="_blank" rel="noopener">
            <Icon name="whatsapp" />
            <span>WhatsApp</span>
          </a>

          {contacts.telLink && (
            <a className="footer-contact" href={contacts.telLink}>
              <Icon name="phone" />
              <span>{config.PHONE_NUMBER}</span>
            </a>
          )}

          {contacts.igLink && (
            <a className="footer-contact" href={contacts.igLink} target="_blank" rel="noopener">
              <Icon name="insta" />
              <span>{config.INSTAGRAM_HANDLE}</span>
            </a>
          )}

          {contacts.mailLink && (
            <a className="footer-contact" href={contacts.mailLink}>
              <Icon name="mail" />
              <span>{config.EMAIL}</span>
            </a>
          )}

          <div className="footer-contact" style={{ alignItems: 'flex-start' }}>
            <Icon name="pin" style={{ marginTop: 3 }} />
            <div>
              <strong>{t('footer.hq')}</strong>
              <br />
              {t('footer.hqAddress')}
            </div>
          </div>

          <div className="footer-contact" style={{ alignItems: 'flex-start' }}>
            <Icon name="pin" style={{ marginTop: 3 }} />
            <div>
              <strong>{t('footer.shop')}</strong>
              <br />
              {t('footer.shopAddress')}
            </div>
          </div>
        </div>

        <div className="footer-bottom">{t('footer.copyright')}</div>
      </div>
    </footer>
  );
}
