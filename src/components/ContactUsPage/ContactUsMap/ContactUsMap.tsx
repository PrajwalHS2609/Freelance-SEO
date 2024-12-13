import "./ContactUsMap.css"
export default function ContactUsMap() {
  return (
    <div className="contactUsMap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1946.6704061882426!2d77.64028916098918!3d13.022146299513258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176bdd443f25%3A0xb406c88371b54109!2sTrySEOServices.Com!5e0!3m2!1sen!2sus!4v1731075029381!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        title="contacts-map"
      ></iframe>
    </div>
  );
}
