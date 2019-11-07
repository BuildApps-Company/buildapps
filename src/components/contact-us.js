import React from "react";

export default ({isOutline}) => <button type="button" className={isOutline ? 'primary-outline' : 'primary'}>Contact Us</button>;