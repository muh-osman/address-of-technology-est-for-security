import React from "react";

export default function Map() {
  return (
    <div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3711.7672413320265!2d39.1858421!3d21.5168351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cfb97bd976db%3A0x48337452511ac49!2z2LnZhtmI2KfZhiDYp9mE2KrZg9mE2YjZhtis2YrYpw!5e0!3m2!1sar!2s!4v1703021514003!5m2!1sar!2s"
        width={350}
        height={350}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

    </div>
  );
}
