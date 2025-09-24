import Script from 'next/script';

export default function PrivacyPolicy() {
  return(
    <section className="bg-gray-100 py-24">

      <Script
        id="usercentrics-ppg"
        src="https://policygenerator.usercentrics.eu/api/privacy-policy"
        privacy-policy-id="ab663eeb-03ad-4c41-88b0-30631d4b19fb"
        strategy="afterInteractive"
      />
      
      <div className="uc-privacy-policy text-left"></div>
    </section>
  );
}
